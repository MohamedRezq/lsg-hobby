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

  if (!product.srp) {
    document
      .getElementById("product-details-srp-container")
      .classList.add("hidden");
  }
  if (!product.mfgCode) {
    document
      .getElementById("product-mfg-code-container")
      .classList.add("hidden");
  }
  if (!product.upc) {
    document.getElementById("product-upc-container").classList.add("hidden");
  }
  if (!product.scale) {
    document
      .getElementById("product-details-scale-container")
      .classList.add("hidden");
  }
  if (!product.category) {
    document
      .getElementById("product-category-container")
      .classList.add("hidden");
  }

  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-description").innerText =
    product.description;
  document.getElementById("product-sku").innerText = product.sku;
  document.getElementById("product-mfg-code").innerText = product.mfgCode;
  document.getElementById("product-upc").innerText = product.upc;
  document.getElementById("product-category").innerText = product.category;

  // Set pricing
  document.getElementById("product-details-srp").innerText = product.srp;
  document.getElementById("final-price").innerText =
    product.finalPrice ?? product.netPrice ?? "";
  if (product.discount) {
    document.getElementById("net-price").innerText = product.netPrice;
    document.getElementById("net-price").classList.add("line-through");
  } else {
    document.getElementById("net-price").innerText = "";
    document.getElementById("original-price-label").classList.add("hidden");
  }

  if (!product.tag) {
    document.getElementById("product-details-tag").classList.add("hidden");
  } else {
    document.getElementById("product-details-tag").innerText =
      product.tag || "";
  }
  document.getElementById("discount").innerText = product.discount || "";
  document.getElementById("product-details-moq").innerText = product.moq || "";
  document.getElementById("product-details-back-ordered").innerText =
    product.backOrdered || "";
  document.getElementById("product-details-last-purchased").innerText =
    product.lastPurchased || "";
  document.getElementById("product-details-scale").innerText =
    product.scale || "";

  function getTagStyling() {
    let classNames = "";

    if (product.tag == "New") {
      classNames = "bg-green-200 text-green-700";
    } else if (product.tag == "PreOrder") {
      classNames = "bg-blue-200 text-blue-700";
    } else if (product.tag == "Special Order") {
      classNames = "bg-purple-200 text-purple-700";
    } else {
      classNames = "bg-gray-200 text-gray-700";
    }

    const classListArray = classNames.split(" ");

    return classListArray;
  }

  document
    .getElementById("product-details-tag")
    .classList.add(...getTagStyling());

  if (!product.reserve) {
    document.getElementById("availability-status").classList.add("hidden");
  }

  document.getElementById("availability-status").innerText = `${
    product.reserve ?? ""
  }`;

  // Set product details
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

  // Generate thumbnails dynamically
  thumbnailContainer.innerHTML = ""; // Clear previous thumbnails
  images.forEach((image, index) => {
    let thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.style = "min-width: 64px; overflow: hidden";
    thumbnail.classList.add(
      "h-16", // Set fixed height
      "w-16", // Set fixed width
      "object-cover",
      "cursor-pointer",
      "border",
      "rounded-md",
      "thumbnail-item" // Add a custom class for easier selection later
    );
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

  // Fullscreen Carousel Logic
  const fullscreenCarousel = document.getElementById("fullscreen-carousel");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const closeFullscreenBtn = document.getElementById(
    "close-fullscreen-carousel"
  );
  const fullscreenPrev = document.getElementById("fullscreen-prev");
  const fullscreenNext = document.getElementById("fullscreen-next");

  // Open fullscreen carousel on image click
  mainImage.addEventListener("click", () => {
    fullscreenImage.src = images[activeThumbnailIndex];
    fullscreenCarousel.classList.remove("hidden");
    fullscreenCarousel.style.display = "flex"; // Show the modal
  });

  // Close fullscreen carousel
  closeFullscreenBtn.addEventListener("click", () => {
    fullscreenCarousel.classList.add("hidden");
    fullscreenCarousel.style.display = "none";
  });

  // Navigate to the previous image
  fullscreenPrev.addEventListener("click", () => {
    activeThumbnailIndex =
      activeThumbnailIndex > 0 ? activeThumbnailIndex - 1 : images.length - 1;
    fullscreenImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
  });

  // Navigate to the next image
  fullscreenNext.addEventListener("click", () => {
    activeThumbnailIndex = (activeThumbnailIndex + 1) % images.length;
    fullscreenImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
  });

  // Function to update thumbnail borders
  function updateThumbnailBorders(length, activeIndex) {
    const thumbnails = document.querySelectorAll(".thumbnail-item");
    for (let i = 0; i < length; i++) {
      thumbnails[i].style.border =
        i === activeIndex ? "4px solid yellow" : "2px solid transparent";
    }
  }

  // Handle thumbnail carousel navigation (left and right arrows)
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

  // Function to scroll to the active thumbnail
  function scrollToThumbnail(index) {
    const thumbnails = document.querySelectorAll(".thumbnail-item");
    const thumbnailWidth = thumbnails[0].offsetWidth; // Fixed width (w-16 = 64px)
    thumbnailContainer.scrollLeft = thumbnailWidth * index; // Scroll to the selected thumbnail
  }
}

// Function to update thumbnail borders
function updateThumbnailBorders(length, activeIndex) {
  const thumbnails = document.querySelectorAll(".thumbnail-item");
  for (let i = 0; i < length; i++) {
    thumbnails[i].style.border =
      i === activeIndex ? "4px solid yellow" : "2px solid transparent";
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
    productDetails.classList.remove("hidden");
    productSpecifications.classList.add("hidden");

    // Update tab styles
    detailsTab.classList.add("border-yellow-500", "font-semibold");
    specificationsTab.classList.remove("border-yellow-500", "font-semibold");
  });

  // Event listener for Specifications tab
  specificationsTab.addEventListener("click", () => {
    productDetails.classList.add("hidden");
    productSpecifications.classList.remove("hidden");

    // Update tab styles
    specificationsTab.classList.add("border-yellow-500", "font-semibold");
    detailsTab.classList.remove("border-yellow-500", "font-semibold");
  });
}

// Call this function in the initialization function
setupTabSwitching();

// Initialize the page with product details and related products
async function initializePage() {
  const products = await fetchProducts();
  const productId = getProductIdFromUrl();
  const product = findProductById(productId, products);
  renderProductDetails(product);
  // Load products table and render products
  const productsTableResponse = await fetch("/snippets/products-table.html");
  const productsTableData = await productsTableResponse.text();
  document.getElementById("related-products-table-placeholder").outerHTML =
    productsTableData;
  // Function to initialize product thumbnail carousel with full-screen feature
}

// Call the initialization function when the DOM is fully loaded
initializePage();
