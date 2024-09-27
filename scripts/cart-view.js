// Sample product data
const cartItems = [
  {
    id: 1,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 5,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 6,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 7,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 8,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 9,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 10,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 11,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 12,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 13,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 14,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 15,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 16,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 17,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 18,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
  {
    id: 19,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
    upc: "4573102640154",
    finalPrice: 44.97,
    image:
      "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
    quantity: 1,
  },
  {
    id: 20,
    name: "Abteilung502 Soviet Armored Forces",
    sku: "AK-ABT610-ES",
    mfgCode: "AK-SF-5678",
    upc: "8435568312739",
    finalPrice: 36.75,
    image:
      "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
    quantity: 1,
  },
];

// Function to render cart items
function renderCartItems(items) {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear previous items

  document.getElementById("shopping-cart-count").innerHTML = items.length;

  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.finalPrice * item.quantity;

    const itemHtml = `
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-4">
        <div class="flex items-center w-full flex-grow-1">
          <img src="${item.image}" alt="${
      item.name
    }" class="w-20 h-full object-cover mr-4" />
          <div>
            <h3 class="text-sm font-semibold mb-1">${item.name}</h3>
            <p class="text-xs text-gray-500">SKU: <span class="font-semibold">${
              item.sku
            }</span></p>
            <p class="text-xs text-gray-500">MFG CODE: <span class="font-semibold">${
              item.mfgCode
            }</span></p>
            <p class="text-xs text-gray-500">UPC: <span class="font-semibold">${
              item.upc
            }</span></p>
            <div class="saved-item-actions flex justify-start gap-5 w-full items-center mt-2 justify-self-end self-end">
            <button style="font-size: 10pt" class="text-action-button font-semibold" onclick="moveToCart(${
              item.id
            })">Save for Later</button> | 
            <button style="font-size: 10pt" class="text-action-button font-semibold" onclick="removeSavedItem(${
              item.id
            })">Delete</button>
          </div>
          </div>
        </div>
        <div class="flex items-center justify-between sm:w-fit sm:justify-end self-end mt-3">
          <div style="width: 100px" class="flex items-center mr-3 justify-between w-24 border-2 border-gray-200 rounded-lg">
            <button style="width: 30px" class="text-gray-600 text-center bg-gray-200 hover:bg-gray-300 rounded-tl-md rounded-bl-md" onclick="updateQuantity(${
              item.id
            }, -1)">
              -
            </button>
            <input style="width: 40px; font-size: 10pt" type="number" class="custom-number-input text-center border-none" value="${
              item.quantity
            }" onchange="setQuantity(${item.id}, this.value)" />
            <button style="width: 30px" class="text-gray-600 bg-gray-200 hover:bg-gray-300  rounded-tr-md rounded-br-md" onclick="updateQuantity(${
              item.id
            }, 1)">
              +
            </button>
          </div>
          <p style="min-width: 90px; text-align: right" class="text-base pr-4 font-bold">$${(
            item.finalPrice * item.quantity
          ).toFixed(2)}</p>
        </div>
      </div>
    `;

    cartItemsContainer.innerHTML += itemHtml;
  });

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent = `$${(subtotal + 5).toFixed(
    2
  )}`; // Adding fixed $5 shipping
}

// Set quantity manually from input field
function setQuantity(id, value) {
  const item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity = Math.max(1, parseInt(value, 10)); // Ensure quantity is at least 1
    renderCartItems(cartItems);
  }
}

// Update quantity
function updateQuantity(id, change) {
  const item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1; // Prevent negative quantity
    renderCartItems(cartItems);
  }
}

// Save for later (mock functionality)
function saveForLater(id) {
  alert("Item saved for later!");
}

// Remove item from cart
function removeItem(id) {
  const index = cartItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    cartItems.splice(index, 1);
    renderCartItems(cartItems);
  }
}

// Handle update cart
document.getElementById("update-cart").addEventListener("click", () => {
  renderCartItems(cartItems);
});

// Clear cart
document.getElementById("clear-cart").addEventListener("click", function () {
  if (
    confirm(
      "Are you sure you want to clear the cart? This action cannot be undone."
    )
  ) {
    cartItems.length = 0; // Clear all items
    renderCartItems(cartItems); // Re-render empty cart
  }
});

// Sample address data
const addresses = {
  shipping: {
    address1: "123 Main St",
    address2: "Apt 4B",
    city: "Ontario",
    state: "ON",
    postalCode: "K6V3Z9",
  },
  billing: {
    address1: "123 Main St",
    address2: "Apt 4B",
    city: "Ontario",
    state: "ON",
    postalCode: "K6V3Z9",
  },
};

// Function to render addresses
function renderAddresses() {
  const shippingAddressContainer = document.getElementById("shipping-address");
  const billingAddressContainer = document.getElementById("billing-address");

  // Render Shipping Address
  shippingAddressContainer.innerHTML = `
    <p class="text-sm font-semibold">${addresses.shipping.address1}${
    addresses.shipping.address2 ? ", " + addresses.shipping.address2 : ""
  }</p>
    <p class="text-sm font-semibold">${addresses.shipping.city}, ${
    addresses.shipping.postalCode
  }</p>
  `;

  // Render Billing Address
  billingAddressContainer.innerHTML = `
    <p class="text-sm font-semibold">${addresses.billing.address1}${
    addresses.billing.address2 ? ", " + addresses.billing.address2 : ""
  }</p>
    <p class="text-sm font-semibold">${addresses.billing.city}, ${
    addresses.billing.postalCode
  }</p>
  `;
}

// Initial load
renderCartItems(cartItems);
renderAddresses();

// Import the JSON data from another file (assuming it's named 'products.json')
fetch("../assets/products.json") // Replace with the correct path to the file
  .then((response) => response.json())
  .then((data) => {
    renderSaveForLaterItems(data); // Pass the loaded data to render function
  })
  .catch((error) => console.error("Error loading JSON:", error));

// Function to render 'Save for Later' items
function renderSaveForLaterItems(items) {
  const saveForLaterContainer = document.getElementById("save-for-later-items");
  saveForLaterContainer.innerHTML = ""; // Clear previous items

  document.getElementById("saved-for-items-count").innerHTML = items.length;

  items.forEach((item) => {
    const itemHtml = `
      <div class="saved-item-card col-span-12 lg:col-span-6 flex flex-col lg:flex-row items-start justify-between border-b p-4 shadow-md rounded-lg ">
        <div class="lg:w-1/3 w-full h-full">
          <div class="relative w-full h-full">
            <img src="${item.image}" alt="${
      item.name
    }" class="w-full h-full object-cover rounded-lg shadow-sm" />
          </div>
        </div>
        <div class="lg:w-2/3 w-full text-sm flex flex-col items-start h-full px-4 py-2 justify-between">
          <div class="flex flex-col">
              <div class="text-gray-700 mt-2 w-full flex justify-between items-end">
              <h1 style="font-size: 10.5pt" class="font-bold text-[#333333]">${
                item.name
              }</h1>
            </div>
            <p style="font-size: 10pt" class="text-gray-500 font-semibold mt-1">
              ${item.description}
            </p>
            <div style="font-size: 9pt" class="mt-2 text-gray-500">
              <p>SKU: <span class="font-bold">${item.sku ?? ""}</span></p>
              <p>MFG CODE: <span class="font-bold">${
                item.mfgCode ?? ""
              }</span></p>
              <p>UPC: <span class="font-bold">${item.upc ?? ""}</span></p>
            </div>
          </div>
          <div class="w-full flex items-cenrer justify-between mt-3">
            <div class="w-full text-gray-500 text-xs">SRP: <span class="font-semibold text-sm">${
              item.srp || ""
            }</span></div>
            <div class="text-sm w-full flex flex-col items-end">
              <p class="flex items-center justify-end">
                <span class="mr-3 text-red-500 text-xs font-bold">${
                  item.discount ?? ""
                }</span>
                <span class="font-bold text-lg">${
                  item.finalPrice ?? item.netPrice
                }</span>
              </p>
              <p class="flex items-center justify-end">
                <span class="text-sm line-through text-gray-500">${
                  item.discount ? item.netPrice : ""
                }</span>
              </p>
            </div>
          </div>
          <div style="font-size: 10pt" class="saved-item-actions flex justify-start gap-5 w-full items-center mt-2 justify-self-end self-end">
            <button class="text-action-button font-semibold" onclick="moveToCart(${
              item.id
            })">Move to Cart</button> | 
            <button class="text-action-button font-semibold" onclick="removeSavedItem(${
              item.id
            })">Delete</button>
          </div>
        </div>
      </div>
    `;
    saveForLaterContainer.innerHTML += itemHtml;
  });
}

// Move to Cart (mock functionality)
function moveToCart(id) {
  alert("Item moved to cart!");
}

// Remove Saved Item (mock functionality)
function removeSavedItem(id) {
  alert("Item removed from save for later!");
}

// Get elements
const clearCartButton = document.getElementById("clear-cart");
const modal = document.getElementById("confirmation-modal");
const confirmButton = document.getElementById("confirm-clear");
const cancelButton = document.getElementById("cancel-clear");

// Show modal when 'Clear Cart' button is clicked
clearCartButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex"); // Flex to center modal
});

// Hide modal when 'Cancel' button is clicked
cancelButton.addEventListener("click", () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});

// Confirm clear cart action
confirmButton.addEventListener("click", () => {
  // Your logic to clear the cart goes here
  alert("Cart has been cleared!");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});
