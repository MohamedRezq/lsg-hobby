// Product data object
const product = {
  name: "Bandai Zeta Gundam",
  sku: "BNDAI-2615240",
  mfgCode: "2615240",
  upc: "4573102640154",
  category: "Gundam",
  description: "Aircraft of the Spanish Civil War 1936-1939",
  scale: "1:100",
  netPrice: "$56.21",
  srp: "$74.99",
  stock: { toronto: 6, phoenix: 0 },
  image:
    "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
  eta: "2024-Dec",
  reserve: "PO #1234",
  discount: "-20%",
  finalPrice: "$44.97",
  images: [
    "https://images.lsghobby.com/KOTO-PV211/011.jpg",
    "https://images.lsghobby.com/KOTO-PV211/010.jpg",
    "https://images.lsghobby.com/KOTO-PV211/011.jpg",
    "https://images.lsghobby.com/KOTO-PV211/013.jpg",
    "https://images.lsghobby.com/KOTO-PV211/014.jpg",
  ],
  specifications: {
    Height: "8.00 in",
    Length: "8.00 in",
    Width: "11.00 in",
    Weight: "1.5 lbs",
    Material: "PVC",
  },
  details:
    "Accompanied by his Black Dragon, Hiei has been updated!\n\nFrom the classic anime Yu☆Yu☆Hakusho comes a fully redone, new version of the Jagan eye user, Hiei! Modeled after his look in the popular Dark Tournament Saga, the posing and detailing on this figure have been greatly updated from the previous version. All four of the Team Urameshi members have also received a dynamic new effect base that reflects their respective fighting styles. His handsome looks, iconic hairstyle, and slender but muscular physique are all also on full display in this figure. To cap things off, rising from the base is Hiei's ultimate technique, Dragon of the Darkness Flame. The design creates a simultaneously beautiful and ominous look that changes with the angle and lighting.",
};

// Track the active image
let activeSlide = 0;

// Function to render product details
function renderProductDetails() {
  // Set product name and other basic info
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-description").innerText =
    product.description;
  document.getElementById("product-sku").innerText = `${product.sku}`;
  document.getElementById("product-mfg-code").innerText = `${product.mfgCode}`;
  document.getElementById("product-upc").innerText = `${product.upc}`;
  document.getElementById("product-category").innerText = `${product.category}`;

  // Set pricing
  document.getElementById("srp").innerText = `SRP: ${product.srp}`;
  document.getElementById(
    "net-price"
  ).innerText = `Net Price: ${product.netPrice}`;
  document.getElementById(
    "final-price"
  ).innerText = `Final Price: ${product.finalPrice}`;
  document.getElementById(
    "availability-status"
  ).innerText = `Pre-Order Available. ETA: ${product.eta}`;

  // Set product details
  document.getElementById("details").innerText = product.details;

  // Set specifications
  const specList = document.getElementById("spec-list");
  for (let key in product.specifications) {
    let li = document.createElement("li");
    li.innerText = `${key}: ${product.specifications[key]}`;
    specList.appendChild(li);
  }

  // Initialize the product images carousel
  initializeCarousel();
}

// Function to initialize product image carousel
function initializeCarousel() {
  const mainImage = document.getElementById("current-main-image");
  const thumbnailContainer = document.getElementById("thumbnail-carousel");

  // Set initial main image
  mainImage.src = product.images[activeSlide];

  // Generate thumbnails dynamically
  product.images.forEach((image, index) => {
    let thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.classList.add(
      "h-16",
      "w-16",
      "object-cover",
      "cursor-pointer",
      "border",
      "rounded-md"
    );
    thumbnail.addEventListener("click", () => {
      activeSlide = index;
      mainImage.src = product.images[activeSlide];
    });
    thumbnailContainer.appendChild(thumbnail);
  });

  // Add event listeners to arrows
  document.getElementById("prev-slide").addEventListener("click", () => {
    activeSlide = activeSlide > 0 ? activeSlide - 1 : product.images.length - 1;
    mainImage.src = product.images[activeSlide];
  });

  document.getElementById("next-slide").addEventListener("click", () => {
    activeSlide = (activeSlide + 1) % product.images.length;
    mainImage.src = product.images[activeSlide];
  });
}

// Function to toggle between tabs
function setupTabs() {
  const detailsTab = document.getElementById("details-tab");
  const specsTab = document.getElementById("specifications-tab");
  const detailsContent = document.getElementById("product-details");
  const specsContent = document.getElementById("product-specifications");

  detailsTab.addEventListener("click", () => {
    detailsTab.classList.add("border-yellow-500");
    specsTab.classList.remove("border-yellow-500");

    detailsContent.classList.remove("hidden");
    specsContent.classList.add("hidden");
  });

  specsTab.addEventListener("click", () => {
    specsTab.classList.add("border-yellow-500");
    detailsTab.classList.remove("border-yellow-500");

    specsContent.classList.remove("hidden");
    detailsContent.classList.add("hidden");
  });
}

// Call the function to render product details once the page loads
renderProductDetails();
setupTabs();

// Define the related products array (from the same list you have)
const relatedProducts = [
  {
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "2615240",
    upc: "4573102640154",
    category: "Gundam",
    description: "Aircraft of the Spanish Civil War 1936-1939",
    scale: "1:100",
    netPrice: "$74.99",
    srp: "$56.21",
    stock: { toronto: 6, phoenix: 0 },
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    eta: "2024-Dec",
    reserve: "PO #1234",
    discount: "-20%",
    finalPrice: "$44.97",
  },
  {
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "ABT610",
    upc: "8435568312739",
    category: "Books",
    description: "The Soviet Armoured Forces (1939-1945) (Spanish)",
    scale: "",
    netPrice: "$61.99",
    srp: "$36.75",
    stock: { toronto: 0, phoenix: 0 },
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    eta: "2025-Jan",
    reserve: "PO #5678",
    discount: "-20%",
    finalPrice: "$29.40",
  },
  {
    name: "HiQ Parts Sponsor Logo Decal",
    sku: "HIQ-SLD01S-BK",
    mfgCode: "SLD01S-BK",
    upc: "4582370708763",
    category: "Decals",
    description: "Sponsor Logo Decal 01S Black (1pc)",
    scale: "",
    netPrice: "$6.63",
    srp: "$3.18",
    stock: { toronto: 0, phoenix: 0 },
    image:
      "https://images.lsghobby.com/HIQ-SLD01S-BK/thumbnail/thumb_HIQ-SLD01S-BK.jpg",
    eta: "2025-Jan",
    reserve: "PO #5678",
    discount: "-20%",
    finalPrice: "$3.18",
  },
  {
    name: "Kotobukiya 1/8 Yu☆Yu☆Hakusho, ARTFX J Hiei Ver.2",
    sku: "KOTO-PV211",
    mfgCode: "PV211",
    upc: "4934054058655",
    category: "Statue",
    scale: "1:8",
    netPrice: "$178.99",
    srp: "$178.99",
    stock: { toronto: 3, phoenix: 1 },
    image:
      "https://images.lsghobby.com/KOTO-PV211/thumbnail/thumb_KOTO-PV211.jpg",
    eta: "2025-Jan",
    reserve: "PO #1234",
    discount: "-20%",
    finalPrice: "$143.19",
  },
];

// Function to render related products
function renderRelatedProducts() {
  const relatedProductsContainer = document.getElementById(
    "related-products-list"
  );

  relatedProducts.forEach((product) => {
    const productCard = `
<div class="product-card max-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-3 flex flex-col items-start space-x-1">
<div class="flex flex-col gap-1"></div>
<div class="flex gap-2 justify-between items-start w-full">
  <div class="flex w-5/12 flex-col gap-2">
    <!-- Image (smaller, and aligned) -->
    <img
      class="w-full h-24 object-contain rounded-md"
      src="${product.image}"
      alt="${product.name}"
    />
    <div style="font-size: 8pt" class="text-gray-500">
      Scale: <span class="font-bold text-center">${product.scale}</span>
    </div>
  </div>
  <div style="font-size: 8pt" class="flex flex-col gap-0.25 text-[#333333]">
    <h2 style="font-size: 8pt" class="font-bold leading-tight">
      ${product.name}
    </h2>
    <p style="font-size: 8.5pt" class="font-semibold">
      ${product.description}
    </p>
    <div style="font-size: 8pt" class="flex items-center my-1 gap-2 text-green-500 font-bold">
      <i style="font-size: 8.5pt" class="fas fa-check-circle"></i>
      <div>In Stock</div>
      <!-- If admin, show stock levels per location -->
    </div>
    <p class="text-gray-700">
      SKU: <span class="font-semibold">${product.sku}</span>
    </p>
    <p class="text-gray-700">
      MFG Code: <span class="font-semibold">${product.mfgCode}</span>
    </p>
    <p class="text-gray-700">
      UPC: <span class="font-semibold">${product.upc}</span>
    </p>
    <p class="text-gray-700">
      Category: <span class="font-bold">${product.category}</span>
    </p>
  </div>
</div>
<div class="w-full flex justify-between items-start">
  <div class="flex flex-col items-start justify-end h-full">
    <div style="font-size: 8pt" class="font-semibold text-green-600">
      Reserve on ${product.reserve}
    </div>
    <div style="font-size: 8pt" class="font-semibold text-yellow-600">
      ETA: ${product.eta}
    </div>
    <div style="font-size: 8pt" class="mt-1 flex flex-col justify-start">
      <div class="text-[8pt] font-semibold text-[#333333]" title="Back Ordered">
        MOQ: 2
      </div>
      <div class="text-[8pt] font-semibold text-yellow-700" title="Back Ordered">
        Back Ordered: 1
      </div>
      <div class="text-[8pt] text-gray-500" title="Last Purchased">
        Last Purchased: Jul 31, 2024
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-0.5">
    <div class="flex flex-col items-end">
      <div class="flex items-end gap-2">
        <span style="font-size: 8pt" class="text-xs font-semibold text-red-600">
          ${product.discount}
        </span>
        <span class="text-xs font-semibold text-[#333333]">${product.finalPrice}</span>
      </div>
      <span style="font-size: 8pt" class="=text-gray-500">
        Original price:
        <span style="font-size: 8.5pt" class="text-xs line-through">${product.srp}</span>
      </span>
      <span style="font-size: 8pt" class="text-xs">
        SRP:
        <span class="text-xs font-semibold text-[#333333]">${product.srp}</span>
      </span>
      <div class="mt-1 flex items-center gap-1">
        <span class="rounded-md bg-blue-200 px-2 py-0.5 text-xs text-blue-800">PreOrder</span>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-2">
      <!-- Quantity Selector -->
      <input
        type="number"
        class="w-12 p-1 text-xs border border-gray-300 rounded-md"
        placeholder="2"
      />
      <!-- Add to Cart Button -->
      <button class="bg-yellow-500 text-white text-xs font-semibold py-1 px-3 rounded-md hover:bg-yellow-600">
        Add to Cart
      </button>
    </div>
  </div>
</div>
</div>
`;
    relatedProductsContainer.innerHTML += productCard;
  });
}

// Call the function when DOM is ready
renderRelatedProducts();
