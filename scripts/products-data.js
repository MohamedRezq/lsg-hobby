// Now run the script for dynamically loading the product table and cards
const products = [
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
    name: "Kotobukiya",
    sku: "KOTO-PV211",
    mfgCode: "PV211",
    upc: "4934054058655",
    category: "Statue",
    description: "Kotobukiya 1/8 Yu☆Yu☆Hakusho, ARTFX J Hiei Ver.2",
    scale: "1:8",
    netPrice: "$178.99",
    srp: "$178.99",
    stock: { toronto: 3, phoenix: 1 }, // Example dynamic stock data, change based on admin
    image:
      "https://images.lsghobby.com/KOTO-PV211/thumbnail/thumb_KOTO-PV211.jpg",
    eta: "2025-Jan",
    reserve: "PO #1234",
    discount: "-20%",
    finalPrice: "$143.19",
  },
  {
    name: "Sova-M",
    sku: "SVM-72071",
    mfgCode: "SVM-72071",
    upc: "3800237897131",
    category: "Aircraft Kits",
    description: "Sova-M 1/72 BB-19 'Boomin Beaver' (Security tug boat)",
    scale: "1:72",
    netPrice: "$50.99",
    srp: "$50.99",
    stock: { toronto: 5, phoenix: 2 },
    image:
      "https://images.lsghobby.com/SVM-72071/thumbnail/thumb_SVM-72071.jpg",
    eta: "2024-Nov",
    reserve: "PO #5678",
    discount: "-10%",
    finalPrice: "$45.89",
  },
  {
    name: "PROOF Kono",
    sku: "GSC-PR82118",
    mfgCode: "PR82118",
    upc: "4582666821183",
    category: "Figures",
    description:
      "PROOF Kono Subarashii Sekai Ni Syukufuku Wo! 3 Series Darkness Fairy Tale Ver. 1/7 Scale Figure",
    scale: "1:7",
    netPrice: "$289.18",
    srp: "$289.18",
    stock: { toronto: 2, phoenix: 0 },
    image:
      "https://images.lsghobby.com/GSC-PR82118/thumbnail/thumb_GSC-PR82118.jpg",
    eta: "2025-Mar",
    reserve: "PO #1235",
    discount: "-15%",
    finalPrice: "$245.80",
  },
  {
    name: "Max Factory",
    sku: "GSC-M04399",
    mfgCode: "M04399",
    upc: "4545784043998",
    category: "Figures",
    description:
      "Max Factory Hololive Production Series Sakamata Chloe 1/6 Scale Figure",
    scale: "1:6",
    netPrice: "$298.45",
    srp: "$298.45",
    stock: { toronto: 1, phoenix: 0 },
    image:
      "https://images.lsghobby.com/GSC-M04399/thumbnail/thumb_GSC-M04399.jpg",
    eta: "2025-Mar",
    reserve: "PO #5679",
    discount: "-10%",
    finalPrice: "$268.61",
  },
  {
    name: "Good Smile",
    sku: "GSC-G92925",
    mfgCode: "G92925",
    upc: "4580416929257",
    category: "Nendoroids",
    description:
      "Good Smile Company Frieren: Beyond Journey's End Series Frieren Nendoroid Doll",
    scale: "",
    netPrice: "$102.57",
    srp: "$102.57",
    stock: { toronto: 0, phoenix: 0 },
    image:
      "https://images.lsghobby.com/GSC-G92925/thumbnail/thumb_GSC-G92925.jpg",
    eta: "2025-Mar",
    reserve: "PO #1240",
    discount: "-5%",
    finalPrice: "$97.44",
  },
  {
    name: "X-Plus",
    sku: "XPLUS-411-200215TP",
    mfgCode: "411-200215TP",
    upc: "4532149022385",
    category: "Plastic Model Kit",
    description: "X-Plus 1/8 The Bride of Frankenstein Plastic Model Kit",
    scale: "1:8",
    netPrice: "$84.99",
    srp: "$84.99",
    stock: { toronto: 10, phoenix: 4 },
    image:
      "https://images.lsghobby.com/XPLUS-411-200215TP/thumbnail/thumb_XPLUS-411-200215TP.jpg",
    eta: "2024-Dec",
    reserve: "PO #1241",
    discount: "-15%",
    finalPrice: "$72.24",
  },
  {
    name: "Kotobukiya",
    sku: "KOTO-KP293X",
    mfgCode: "KP293X",
    upc: "4934054065141",
    category: "Plastic Model Kit",
    description:
      "Kotobukiya Armored Trooper VOTOMS: Red Shoulder Document: The Roots of Ambition, D-STYLE SCOPEDOG TURBO CUSTOM Chirico Ver.",
    scale: "1:72",
    netPrice: "$44.99",
    srp: "$44.99",
    stock: { toronto: 8, phoenix: 2 },
    image:
      "https://images.lsghobby.com/KOTO-KP293X/thumbnail/thumb_KOTO-KP293X.jpg",
    eta: "2025-Jan",
    reserve: "PO #5677",
    discount: "-10%",
    finalPrice: "$40.49",
  },
];

// Function to dynamically render stock locations
function renderStockLocations(stock) {
  if (!isAdmin) return ""; // No need to render if not admin

  return Object.keys(stock)
    .map(
      (location) =>
        `<div class="text-xs font-semibold text-gray-500">${location
          .slice(0, 3)
          .toUpperCase()}: ${stock[location]}</div>`
    )
    .join("");
}

// Function to render the product table for desktop
function renderProductTable() {
  console.log("product-rows: ", document.getElementById("product-rows"));
  const tableBody = document.getElementById("product-rows");
  products.forEach((product) => {
    const isOutOfStock = Object.values(product.stock).every(
      (stock) => stock === 0
    );

    const row = `
<tr class="bg-white transition duration-200 ease-in-out hover:bg-gray-50">
<td class="flex gap-2 space-y-1 px-2 py-1 align-top">
  <img src="${product.image}" alt="${
      product.name
    }" class="h-20 w-20 rounded-lg object-contain shadow-sm">
  <div>
    <div class="text-xs font-bold text-gray-700">${product.name}</div>
    <div class="text-xs text-gray-500">SKU: <span class="font-semibold">${
      product.sku
    }</span></div>
    <div class="text-xs text-gray-500">MFG CODE: <span class="font-semibold">${
      product.mfgCode
    }</span></div>
    <div class="text-xs text-gray-500">UPC: <span class="font-semibold">${
      product.upc
    }</span></div>
    <div class="text-xs font-normal text-gray-500">Category: <span class="font-bold text-gray-700">${
      product.category
    }</span></div>
  </div>
</td>
<td class="px-2 py-2 align-top text-xs font-semibold text-gray-700">${
      product.description
    }</td>
<td class="px-2 py-2 align-top text-xs font-semibold">${product.scale}</td>
<td class="px-2 py-2 text-right align-top text-xs font-semibold text-[#333333]">${
      product.netPrice
    }</td>
<td class="px-2 py-2 text-right align-top text-xs">
  <div class="flex flex-col items-end">
    <div class="flex items-end gap-2">
      <span class="text-xs font-semibold text-red-600">${
        product.discount
      }</span>
      <span class="text-xs font-semibold text-[#333333]">${
        product.finalPrice
      }</span>
    </div>
    <span class="text-xs text-gray-500">Original price: <span class="text-xs line-through">${
      product.srp
    }</span></span>
  </div>
</td>
<td class="px-2 py-2 text-center align-top">
  <i class="${
    product.stock.toronto > 0 || product.stock.phoenix > 0
      ? "fas fa-check-circle text-green-500"
      : "fas fa-times-circle text-red-500"
  }"></i>
  <div class="mt-1 flex flex-col justify-center">
    <div class="text-xs font-semibold text-gray-500">TOR: ${
      product.stock.toronto
    }</div>
    <div class="text-xs font-semibold text-gray-500">PHX: ${
      product.stock.phoenix
    }</div>
  </div>
</td>
<td class="py-2 text-left align-top">
  <div class="mb-1 flex items-center justify-start space-x-2">
    <input type="number" style="max-width: 55px" step="2" class="block rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs text-[#333333]" placeholder="2" required ${
      isOutOfStock ? "disabled" : ""
    }>
    <button class="text-xs w-20 rounded-md ${
      isOutOfStock
        ? "bg-gray-500 cursor-default"
        : "bg-yellow-500 hover:bg-yellow-600"
    }  px-2 py-1 text-white shadow-md" ${isOutOfStock ? "disabled" : ""}>
      Add to Cart
    </button>
  </div>
</td>
</tr>
`;
    tableBody.innerHTML += row;
  });
}

// Function to render the product cards for mobile view
// Function to render the product cards for mobile view
function renderProductCards() {
  const cardContainer = document.getElementById("mobile-product-cards");
  products.forEach((product) => {
    const card = `
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
      ${
        isAdmin
          ? `<div class="flex items-center gap-1">
              ${renderStockLocations(product.stock)}
            </div>`
          : ""
      }
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
        <span class="text-xs font-semibold text-[#333333]">${
          product.finalPrice
        }</span>
      </div>
      <span style="font-size: 8pt" class="=text-gray-500">
        Original price:
        <span style="font-size: 8.5pt" class="text-xs line-through">${
          product.srp
        }</span>
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
    cardContainer.innerHTML += card;
  });
}

// Render both the table and mobile cards
renderProductTable();
renderProductCards();
