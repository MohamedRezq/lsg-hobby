// Function to fetch product data from the JSON file
async function fetchProducts() {
  try {
    const response = await fetch("/assets/products.json");
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

  // Hide elements if values are missing
  if (!product.srp)
    document.getElementById("product-details-srp-container").style.display =
      "none";
  if (!product.mfgCode)
    document.getElementById("product-mfg-code-container").style.display =
      "none";
  if (!product.upc)
    document.getElementById("product-upc-container").style.display = "none";
  if (!product.scale)
    document.getElementById("product-details-scale-container").style.display =
      "none";
  if (!product.category)
    document.getElementById("product-category-container").style.display =
      "none";

  // Set product details
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-description").innerText =
    product.description;
  document.getElementById("product-sku").innerText = product.sku;
  document.getElementById("product-mfg-code").innerText = product.mfgCode;
  document.getElementById("product-upc").innerText = product.upc;
  document.getElementById("product-category").innerText = product.category;
  document.getElementById("product-details-srp").innerText = product.srp;
  document.getElementById("final-price").innerText =
    product.finalPrice ?? product.netPrice ?? "";

  // Handle discount and original price
  if (product.discount) {
    document.getElementById("net-price").innerText = product.netPrice;
    document.getElementById("net-price").style.textDecoration = "line-through";
  } else {
    document.getElementById("net-price").innerText = "";
    document.getElementById("original-price-label").style.display = "none";
  }

  // Handle tag styling
  const tagElement = document.getElementById("product-details-tag");
  if (product.tag) {
    tagElement.innerText = product.tag;
    tagElement.className = getTagStyling(product.tag);
  } else {
    tagElement.style.display = "none";
  }

  // Handle other product information
  document.getElementById("discount").innerText = product.discount || "";
  document.getElementById("product-details-moq").innerText = product.moq || "";
  document.getElementById("product-details-back-ordered").innerText =
    product.backOrdered || "";
  document.getElementById("product-details-last-purchased").innerText =
    product.lastPurchased || "";
  document.getElementById("product-details-scale").innerText =
    product.scale || "";
  document.getElementById("availability-status").innerText =
    product.reserve ?? "";

  // Handle product specifications
  const specList = document.getElementById("spec-list");
  specList.innerHTML = ""; // Clear previous specs
  for (let key in product.specifications) {
    let li = document.createElement("li");
    li.innerText = `${key}: ${product.specifications[key]}`;
    specList.appendChild(li);
  }

  // Initialize the product images carousel
  initializeThumbnailCarousel(product.images);
}

// Function to initialize product thumbnail carousel
function initializeThumbnailCarousel(images) {
  const mainImage = document.getElementById("current-main-image");
  const thumbnailContainer = document.getElementById("thumbnail-carousel");
  let activeThumbnailIndex = 0;

  mainImage.src = images[0]; // Set initial main image

  // Generate thumbnails
  thumbnailContainer.innerHTML = ""; // Clear previous thumbnails
  images.forEach((image, index) => {
    let thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.className = "thumbnail-item"; // Use custom CSS class
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

  mainImage.addEventListener("click", () => {
    fullscreenImage.src = images[activeThumbnailIndex];
    fullscreenCarousel.style.display = "flex"; // Show modal
  });

  closeFullscreenBtn.addEventListener("click", () => {
    fullscreenCarousel.style.display = "none"; // Hide modal
  });

  // Navigation buttons
  document.getElementById("prev-slide").addEventListener("click", () => {
    activeThumbnailIndex =
      activeThumbnailIndex > 0 ? activeThumbnailIndex - 1 : images.length - 1;
    mainImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
  });

  document.getElementById("next-slide").addEventListener("click", () => {
    activeThumbnailIndex = (activeThumbnailIndex + 1) % images.length;
    mainImage.src = images[activeThumbnailIndex];
    updateThumbnailBorders(images.length, activeThumbnailIndex);
  });
}

// Function to update thumbnail borders
function updateThumbnailBorders(length, activeIndex) {
  const thumbnails = document.querySelectorAll(".thumbnail-item");
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.style.border =
      index === activeIndex ? "4px solid yellow" : "2px solid transparent";
  });
}

// Function to handle tag styling
function getTagStyling(tag) {
  let className = "";
  if (tag === "New") {
    className = "tag-new";
  } else if (tag === "PreOrder") {
    className = "tag-preorder";
  } else if (tag === "Special Order") {
    className = "tag-special-order";
  } else {
    className = "tag-default";
  }
  return className;
}

// Tab switching function
function setupTabSwitching() {
  const detailsTab = document.getElementById("details-tab");
  const specificationsTab = document.getElementById("specifications-tab");
  const productDetails = document.getElementById("product-details");
  const productSpecifications = document.getElementById(
    "product-specifications"
  );

  detailsTab.addEventListener("click", () => {
    productDetails.style.display = "block";
    productSpecifications.style.display = "none";
    detailsTab.classList.add("tab-active");
    specificationsTab.classList.remove("tab-active");
  });

  specificationsTab.addEventListener("click", () => {
    productDetails.style.display = "none";
    productSpecifications.style.display = "block";
    specificationsTab.classList.add("tab-active");
    detailsTab.classList.remove("tab-active");
  });
}

// Initialize page
async function initializePage() {
  const products = await fetchProducts();
  const productId = getProductIdFromUrl();
  const product = findProductById(productId, products);
  renderProductDetails(product);
  setupTabSwitching(); // Setup tab switching
}

// Initialize when DOM is ready
initializePage();
