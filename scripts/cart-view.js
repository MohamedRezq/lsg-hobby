// Sample product data
const cartItems = [
  {
    id: 1,
    name: "Bandai Zeta Gundam",
    sku: "BNDAI-2615240",
    mfgCode: "BNDAI-ZG-1234",
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
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.finalPrice * item.quantity;

    const itemHtml = `
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-4">
        <div class="flex items-center w-full flex-grow-1">
          <img src="${item.image}" alt="${
      item.name
    }" class="w-20 h-20 object-cover mr-4" />
          <div>
            <h3 class="text-base font-semibold">${item.name}</h3>
            <p class="text-xs text-gray-500">SKU: <span class="font-semibold">${
              item.sku
            }</span></p>
    <p class="text-xs text-gray-500">MFG CODE: <span class="font-semibold">${
      item.mfgCode
    }</span></p>
            <button class="text-sm text-blue-500 hover:underline mt-2 mr-5" onclick="saveForLater(${
              item.id
            })">
              Save for Later
            </button>
            <button class="text-sm text-red-500 hover:underline mt-2" onclick="removeItem(${
              item.id
            })">
              Delete
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between sm:w-fit sm:justify-end self-end mt-3">
          <div style="width: 100px" class="flex items-center mr-4 justify-between w-24 border-2 border-gray-200 rounded-lg">
            <button style="width: 30px" class="text-gray-600 text-center py-0.5 bg-gray-200 hover:bg-gray-300 rounded-md" onclick="updateQuantity(${
              item.id
            }, -1)">
              -
            </button>
            <div style="width: 40px" type="number" class="text-center py-0.5 border-none">${
              item.quantity
            }</div>
            <button style="width: 30px" class="text-gray-600 bg-gray-200 hover:bg-gray-300  py-0.5 rounded-md" onclick="updateQuantity(${
              item.id
            }, 1)">
              +
            </button>
          </div>
          <p class="text-lg pr-4 font-bold">$${(
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

// Sample address data
const addresses = {
  shipping: {
    city: "Ontario",
    state: "ON",
    postalCode: "K6V3Z9",
    country: "Canada",
  },
  billing: {
    city: "Ontario",
    state: "ON",
    postalCode: "K6V3Z9",
    country: "Canada",
  },
};

// Function to render addresses
function renderAddresses() {
  const shippingAddressContainer = document.getElementById("shipping-address");
  const billingAddressContainer = document.getElementById("billing-address");

  // Render Shipping Address
  shippingAddressContainer.innerHTML = `
    <p class="text-sm font-semibold">City: <span class="text-sm ml-1 text-gray-500">${addresses.shipping.city}</p>
    <p class="text-sm font-semibold mt-2">State: <span class="text-sm ml-1 text-gray-500">${addresses.shipping.state}</p>
    <p class="text-sm font-semibold mt-2">Postal Code: <span class="text-sm ml-1 text-gray-500">${addresses.shipping.postalCode}</p>
    <p class="text-sm font-semibold mt-2">Country: <span class="text-sm ml-1 text-gray-500">${addresses.shipping.country}</p>
  `;

  // Render Billing Address
  billingAddressContainer.innerHTML = `
    <p class="text-sm font-semibold">City: <span class="text-sm ml-1 text-gray-500">${addresses.billing.city}</span></p>
    <p class="text-sm font-semibold mt-2">State: <span class="text-sm ml-1 text-gray-500">${addresses.billing.state}</span></p>
    <p class="text-sm font-semibold mt-2">Postal Code: <span class="text-sm ml-1 text-gray-500">${addresses.billing.postalCode}</span></p>
    <p class="text-sm font-semibold mt-2">Country: <span class="text-sm ml-1 text-gray-500">${addresses.billing.country}</span></p>
  `;
}

// Initial load
renderCartItems(cartItems);
renderAddresses();
