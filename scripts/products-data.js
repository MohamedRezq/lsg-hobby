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

// Function to render the product table for desktop view
function renderProductTable(products) {
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
<td class="px-2 pt-2 pb-1 align-top text-xs font-semibold text-gray-700">
<div style="font-size: 9pt" class="text-xs font-semibold mb-1 text-gray-500">${
      product.name
    }</div>
<a href="/pages/product.html?id=${
      product.id
    }" class="hover:underline font-bold">
    ${product.description ?? ""}
  </a>
  <div class="mt-1 text-xs font-semibold text-green-600">
  ${product.reserve ?? ""}
                    </div>
                    <div class="text-xs font-semibold text-yellow-600">
                    ${product.eta ?? ""}
                    </div>
</td>
<td style="font-size: 9pt" class="px-2 pt-2 pb-1 align-top font-semibold">${
      product.scale ?? ""
    }</td>
<td class="px-2 pt-2 pb-1 text-right align-top text-xs">
  <div class="flex flex-col items-end">
    <div class="flex items-end gap-2">
      <span class="text-xs font-semibold text-red-600">${
        product.discount ?? ""
      }</span>
      <span style="font-size: 10pt" class="font-semibold text-[#333333]">${
        product.finalPrice ?? ""
      }</span>
    </div>
    <span style="font-size: 8.5pt" class="text-gray-500">${
      product.discount ? "price: " : ""
    }<span style="font-size: 10pt" class="text-xs ml-1 ${
      product.discount ? "line-through" : "text-black font-semibold"
    }">${product.netPrice ?? ""}</span></span>
    ${
      product.tag == "New"
        ? "<div class='bg-green-200 text-green-700 text-xs mt-1 px-2 rounded-md py-1'>New</div>"
        : ""
    }
    ${
      product.tag == "Special Order"
        ? "<div class='bg-purple-200 text-purple-700 text-xs mt-1 px-2 rounded-md py-1'>Special Order</div>"
        : ""
    }
    ${
      product.tag == "PreOrder"
        ? "<div class='bg-blue-200 text-blue-700 text-xs mt-1 px-2 rounded-md py-1'>PreOrder</div>"
        : ""
    }
    ${
      product.tag == "Discontinued"
        ? "<div class='bg-gray-200 text-gray-700 text-xs mt-1 px-2 rounded-md py-1'>Discontinued</div>"
        : ""
    }
  </div>
</td>
<td style="font-size: 10pt" class="px-2 pt-2 pb-1 text-right align-top text-xs font-semibold text-[#333333]">${
      product.srp
    }</td>
<td class="px-2 pt-2 pb-1 text-center align-top">
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
<td class="pt-2 pb-1 text-left align-top">
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
  <div class="mt-1 flex flex-col justify-start gap-0 pl-1 text-xs">
                      <div
                      style="font-size: 8.5pt"
                        class="font-semibold text-[#333333]"
                      >
                      ${product.moq ?? ""}
                      </div>
                      <div
                      style="font-size: 8.5pt"
                        class="font-semibold text-yellow-700"
                      >
                      ${product.backOrdered ?? ""}
                      </div>
                      <div
                      style="font-size: 8.5pt"
                        class="text-gray-500"
                      >
                      ${product.lastPurchased ?? ""}
                      </div>
                    </div>
</td>
</tr>
`;
    tableBody.innerHTML += row;
  });
}

// Function to render the product cards for mobile view
function renderProductCards(products) {
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
    </div>
    <p class="text-gray-700">
      SKU: <span class="font-semibold">${product.sku ?? ""}</span>
    </p>
    <p class="text-gray-700">
      MFG Code: <span class="font-semibold">${product.mfgCode ?? ""}</span>
    </p>
    <p class="text-gray-700">
      UPC: <span class="font-semibold">${product.upc ?? ""}</span>
    </p>
    <p class="text-gray-700">
      Category: <span class="font-bold">${product.category ?? ""}</span>
    </p>
  </div>
</div>
<div class="w-full flex justify-between items-start">
  <div class="flex flex-col items-start justify-end h-full">
    <div style="font-size: 8pt" class="font-semibold text-green-600">
      Reserve on ${product.reserve ?? ""}
    </div>
    <div style="font-size: 8pt" class="font-semibold text-yellow-600">
      ETA: ${product.eta ?? ""}
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
`;
    cardContainer.innerHTML += card;
  });
}

// Fetch products and render both table and mobile cards
async function initializePage() {
  const products = await fetchProducts(); // Fetch the products dynamically
  renderProductTable(products); // Render the table for desktop
  renderProductCards(products); // Render the cards for mobile
}

// Call the initialization function when the DOM is fully loaded
initializePage();
