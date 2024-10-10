// Function to fetch product data from the JSON file
async function fetchProducts() {
  try {
    const response = await fetch("/assets/products.json"); // Ensure this path is correct
    if (!response.ok) {
      throw new Error("Failed to load products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
}

// Function to get product ID from the URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
}

// Function to find product by ID
function findProductById(id, products) {
  return products.find((product) => product.id === id);
}

// Function to render product details
function renderProductDetails(product) {
  if (!product) {
    console.error("Product not found");
    return;
  }

  // Hide elements that don't exist for the product
  if (!product.srp) {
    document.getElementById("product-details-srp-container").style.display =
      "none";
  }
  if (!product.mfgCode) {
    document.getElementById("product-mfg-code-container").style.display =
      "none";
  }
  if (!product.upc) {
    document.getElementById("product-upc-container").style.display = "none";
  }
  if (!product.scale) {
    document.getElementById("product-details-scale-container").style.display =
      "none";
  }
  if (!product.category) {
    document.getElementById("product-category-container").style.display =
      "none";
  }

  // Set product details in the HTML
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-description").innerText =
    product.description;
  document.getElementById("product-sku").innerText = product.sku;
  document.getElementById("product-mfg-code").innerText = product.mfgCode;
  document.getElementById("product-upc").innerText = product.upc;
  document.getElementById("product-category").innerText = product.category;

  // Set pricing details
  document.getElementById("product-details-srp").innerText = product.srp;
  document.getElementById("final-price").innerText =
    product.finalPrice ?? product.netPrice ?? "";

  // Display discount if applicable
  if (product.discount) {
    document.getElementById("net-price").innerText = product.netPrice;
    document
      .getElementById("net-price")
      .classList.add("product-details-line-through");
  } else {
    document.getElementById("net-price").innerText = "";
    document.getElementById("original-price-label").style.display = "none";
  }

  // Quantity
  // Assuming you have logic to check if the product is out of stock
  const isOutOfStock = product.stock === 0; // Example condition based on product stock

  // Dynamically update the input and button based on stock status
  const quantityInput = document.getElementById("quantity-input");
  const addToCartButton = document.getElementById("add-to-cart");

  if (isOutOfStock) {
    quantityInput.disabled = true;
    addToCartButton.disabled = true;
    addToCartButton.style.backgroundColor = "#9CA3AF"; // Grey color for disabled
  } else {
    quantityInput.disabled = false;
    addToCartButton.disabled = false;
    addToCartButton.style.backgroundColor = "#F59E0B"; // Orange color for active
  }

  // Display the product tag if available
  if (!product.tag) {
    document.getElementById("product-details-tag").style.display = "none";
  } else {
    document.getElementById("product-details-tag").innerText = product.tag;
    document
      .getElementById("product-details-tag")
      .classList.add(...getTagStyling(product.tag));
  }

  document.getElementById("discount").innerText = product.discount || "";
  document.getElementById("product-details-moq").innerText = product.moq || "";
  document.getElementById("product-details-back-ordered").innerText =
    product.backOrdered || "";
  document.getElementById("product-details-last-purchased").innerText =
    product.lastPurchased || "";
  document.getElementById("product-details-scale").innerText =
    product.scale || "";

  // Set availability status
  if (!product.reserve) {
    document.getElementById("availability-status").style.display = "none";
  } else {
    document.getElementById("availability-status").innerText = product.reserve;
  }

  // Set additional product details
  document.getElementById("details").innerText = product.details;

  // Set specifications
  const specList = document.getElementById("spec-list");
  specList.innerHTML = ""; // Clear previous specifications
  for (let key in product.specifications) {
    let li = document.createElement("li");
    li.innerText = `${key}: ${product.specifications[key]}`;
    specList.appendChild(li);
  }

  // Initialize the product images carousel
  initializeThumbnailCarousel(product.images);
}

// Function to initialize product thumbnail carousel with navigation buttons
function initializeThumbnailCarousel(images) {
  const mainImage = document.getElementById("current-main-image");
  const thumbnailContainer = document.getElementById("thumbnail-carousel");
  let activeThumbnailIndex = 0;

  // Set initial main image
  mainImage.src = images[0];
  thumbnailContainer.innerHTML = ""; // Clear previous thumbnails

  // Generate thumbnails dynamically
  images.forEach((image, index) => {
    let thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.classList.add("product-details-thumbnail-item");
    thumbnail.style.border =
      index === activeThumbnailIndex
        ? "4px solid yellow"
        : "2px solid transparent";
    thumbnail.addEventListener("click", () => {
      activeThumbnailIndex = index;
      mainImage.src = image;
      updateThumbnailBorders(images.length, activeThumbnailIndex);
    });
    thumbnailContainer.appendChild(thumbnail);
  });

  // Fullscreen carousel logic
  const fullscreenCarousel = document.getElementById("fullscreen-carousel");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const closeFullscreenBtn = document.getElementById(
    "close-fullscreen-carousel"
  );
  const fullscreenPrev = document.getElementById("fullscreen-prev");
  const fullscreenNext = document.getElementById("fullscreen-next");

  // Add event listeners for previous and next slide buttons
  document.getElementById("prev-slide").addEventListener("click", () => {
    activeThumbnailIndex =
      activeThumbnailIndex > 0 ? activeThumbnailIndex - 1 : images.length - 1;
    mainImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
    scrollToThumbnail(activeThumbnailIndex);
  });

  document.getElementById("next-slide").addEventListener("click", () => {
    activeThumbnailIndex = (activeThumbnailIndex + 1) % images.length;
    mainImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
    scrollToThumbnail(activeThumbnailIndex);
  });

  // Function to scroll to the active thumbnail (make sure this is defined)
  function scrollToThumbnail(index) {
    const thumbnails = document.querySelectorAll(
      ".product-details-thumbnail-item"
    );
    const thumbnailWidth = thumbnails[0].offsetWidth; // Assume all thumbnails have the same width
    const thumbnailContainer = document.getElementById("thumbnail-carousel");
    thumbnailContainer.scrollLeft = thumbnailWidth * index; // Scroll to the active thumbnail
  }

  // Open fullscreen carousel on main image click
  mainImage.addEventListener("click", () => {
    fullscreenImage.src = images[activeThumbnailIndex];
    fullscreenCarousel.style.display = "flex"; // Show the modal
  });

  // Close fullscreen carousel
  closeFullscreenBtn.addEventListener("click", () => {
    fullscreenCarousel.style.display = "none";
  });

  // Navigate to the previous image in fullscreen carousel
  fullscreenPrev.addEventListener("click", () => {
    activeThumbnailIndex =
      activeThumbnailIndex > 0 ? activeThumbnailIndex - 1 : images.length - 1;
    fullscreenImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
  });

  // Navigate to the next image in fullscreen carousel
  fullscreenNext.addEventListener("click", () => {
    activeThumbnailIndex = (activeThumbnailIndex + 1) % images.length;
    fullscreenImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
  });

  // Function to update thumbnail borders
  function updateThumbnailBorders(length, activeIndex) {
    const thumbnails = document.querySelectorAll(
      ".product-details-thumbnail-item"
    );
    thumbnails.forEach((thumbnail, i) => {
      thumbnail.style.border =
        i === activeIndex ? "4px solid yellow" : "2px solid transparent";
    });
  }
}

// Function to handle tab switching
function setupTabSwitching() {
  const detailsTab = document.getElementById("details-tab");
  const specificationsTab = document.getElementById("specifications-tab");
  const productDetails = document.getElementById("product-details");
  const productSpecifications = document.getElementById(
    "product-specifications"
  );

  // Event listener for Product Details tab
  detailsTab.addEventListener("click", () => {
    productDetails.style.display = "block";
    productSpecifications.style.display = "none";
    detailsTab.classList.add("product-details-tab-active");
    specificationsTab.classList.remove("product-details-tab-active");
  });

  // Event listener for Specifications tab
  specificationsTab.addEventListener("click", () => {
    productDetails.style.display = "none";
    productSpecifications.style.display = "block";
    specificationsTab.classList.add("product-details-tab-active");
    detailsTab.classList.remove("product-details-tab-active");
    detailsTab.classList.add("product-details-tab");
  });
}

// Call this function in the initialization function
setupTabSwitching();

// Initialize the page with product details and related products
async function initializeProductDetailsPage() {
  const products = await fetchProducts();
  const productId = getProductIdFromUrl();
  const product = findProductById(productId, products);
  renderProductDetails(product);

  // Load related products table and render
  const productsTableResponse = await fetch(
    "/snippets/products-table/products-table.html"
  );
  const productsTableData = await productsTableResponse.text();
  document.getElementById("related-products-table-placeholder").outerHTML =
    productsTableData;
}

// Call the initialization function when the DOM is fully loaded
initializeProductDetailsPage();

// Function to determine the product tag's styling class
function getTagStyling(tag) {
  switch (tag) {
    case "New":
      return ["product-details-bg-green", "product-details-text-green"];
    case "PreOrder":
      return ["product-details-bg-blue", "product-details-text-blue"];
    case "Special Order":
      return ["product-details-bg-purple", "product-details-text-purple"];
    default:
      return ["product-details-bg-gray", "product-details-text-gray"];
  }
}
