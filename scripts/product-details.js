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

  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-description").innerText =
    product.description;
  document.getElementById("product-sku").innerText = product.sku;
  document.getElementById("product-mfg-code").innerText = product.mfgCode;
  document.getElementById("product-upc").innerText = product.upc;
  document.getElementById("product-category").innerText = product.category;

  // Set pricing
  document.getElementById("srp").innerText = product.srp;
  document.getElementById("net-price").innerText = product.netPrice;
  if (product.discount) {
    document
      .getElementById("net-price")
      .classList.add(
        "line-through",
        "text-base",
        "font-normal",
        "text-gray-500"
      );
  } else {
    document.getElementById("net-price").classList.add("text-xl", "font-bold");
    document.getElementById("original-price-label").classList.add("hidden");
  }
  document.getElementById("discount").innerText = product.discount || "";
  document.getElementById("product-details-moq").innerText = product.moq || "";
  document.getElementById("product-details-back-ordered").innerText =
    product.backOrdered || "";
  document.getElementById("product-details-last-purchased").innerText =
    product.lastPurchased || "";
  document.getElementById("final-price").innerText = product.finalPrice || "";
  document.getElementById("product-details-tag").innerText = product.tag || "";
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

// Function to render related products with carousel functionality
function renderRelatedProducts(products) {
  const relatedProductsContainer = document.getElementById(
    "related-products-list"
  );
  relatedProductsContainer.innerHTML = ""; // Clear previous related products

  let relatedIndex = 0;
  let maxVisibleProducts = getMaxVisibleProducts(); // Dynamically get the number of visible products

  // Function to render visible related products based on the index
  function renderVisibleRelatedProducts() {
    relatedProductsContainer.innerHTML = "";
    const visibleProducts = products.slice(
      relatedIndex,
      relatedIndex + maxVisibleProducts
    );
    visibleProducts.forEach((product) => {
      const productCard = `
      <div class="product-card max-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-3 flex flex-col items-start space-x-1">
        <div class="flex flex-col gap-1"></div>
        <div class="flex gap-2 justify-between items-start w-full">
          <div class="flex w-5/12 flex-col gap-2">
            <img
              class="w-full h-24 object-contain rounded-md"
              src="${product.image}"
              alt="${product.name}"
            />
            <div style="font-size: 8pt" class="text-gray-500">
              Scale: <span class="font-bold text-center">${product.scale}</span>
            </div>
          </div>
          <div class="flex flex-col gap-0.25 text-[#333333]">
            <h2 style="font-size: 8pt" class="font-bold leading-tight text-gray-500">${
              product.name
            }</h2>
            <p style="font-size: 8.5pt" class="font-semibold">${
              product.description
            }</p>
            <div style="font-size: 8pt" class="flex items-center my-1 gap-2 text-green-500 font-bold">
              <i style="font-size: 8.5pt" class="fas fa-check-circle"></i>
              <div>In Stock</div>
            </div>
            <p class="text-gray-700">SKU: <span class="font-semibold">${
              product.sku ?? ""
            }</span></p>
            <p class="text-gray-700">MFG Code: <span class="font-semibold">${
              product.mfgCode ?? ""
            }</span></p>
            <p class="text-gray-700">UPC: <span class="font-semibold">${
              product.upc ?? ""
            }</span></p>
            <p class="text-gray-700">Category: <span class="font-bold">${
              product.category ?? ""
            }</span></p>
          </div>
        </div>
        <div class="w-full flex justify-between items-start">
          <div class="flex flex-col items-start justify-end h-full">
            <div style="font-size: 8pt" class="font-semibold text-green-600">
              Reserve on ${product.reserve ?? ""}
            </div>
            <div style="font-size: 8pt" class="font-semibold text-yellow-600">ETA: ${
              product.eta ?? ""
            }</div>
          </div>
          <div class="flex items-center gap-2 mt-2">
            <input
              type="number"
              class="w-12 p-1 text-xs border border-gray-300 rounded-md"
              placeholder="2"
            />
            <button class="bg-yellow-500 text-white text-xs font-semibold py-1 px-3 rounded-md hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>`;
      relatedProductsContainer.innerHTML += productCard;
    });
  }

  // Function to get max visible products based on screen width
  function getMaxVisibleProducts() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 1; // Small screens (mobile)
    if (screenWidth < 1024) return 2; // Medium screens (tablets)
    return 3; // Large screens (desktops)
  }

  // Render initial related products
  renderVisibleRelatedProducts();

  // Event listener for window resize to adjust the number of visible products
  window.addEventListener("resize", () => {
    maxVisibleProducts = getMaxVisibleProducts();
    renderVisibleRelatedProducts();
  });

  // Add event listeners for related products carousel
  document.getElementById("related-prev").addEventListener("click", () => {
    relatedIndex =
      relatedIndex > 0
        ? relatedIndex - 1
        : products.length - maxVisibleProducts;
    renderVisibleRelatedProducts();
  });

  document.getElementById("related-next").addEventListener("click", () => {
    relatedIndex =
      (relatedIndex + 1) % (products.length - maxVisibleProducts + 1);
    renderVisibleRelatedProducts();
  });
}

// Initialize the page with product details and related products
async function initializePage() {
  const products = await fetchProducts();
  const productId = getProductIdFromUrl();
  const product = findProductById(productId, products);
  renderProductDetails(product);
  renderRelatedProducts(products);
}

// Call the initialization function when the DOM is fully loaded
initializePage();
