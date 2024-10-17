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
  <div class="cart-page-item">
    <div class="cart-page-item-content">
      <a class="cart-page-item-image" href="/product-details.html?id=${
        item.id
      }"><img src="${item.image}" alt="${item.name}"></a>
      <div class="cart-page-item-data">
        <div class="cart-page-item-meta">
          <div class="cart-page-item-meta-props">
            <a href="/product/${
              item.id
            }" target="_blank" class="cart-page-item-title">${item.name}</a>
            <div>SKU: <span class="cart-page-item-value">${
              item.sku
            }</span></div>
            <div>MFG CODE: <span class="cart-page-item-value">${
              item.mfgCode
            }</span></div>
            <div>UPC: <span class="cart-page-item-value">${
              item.upc
            }</span></div>
          </div>
          <div class="cart-page-action-buttons">
            <button onclick="saveForLater(${
              item.id
            })" class="cart-page-action-button">Save for Later</button>
            <div>| </div>
            <button onclick="removeItem(${
              item.id
            })" class="cart-page-action-button delete">Delete</button>
          </div>
        </div>
        <div class="cart-page-item-quantity-container">
          <p class="cart-page-item-price">
            <span style="font-weight: 500; font-size: 1.2rem; margin-right: 5px;">Sub Total: </span>$${(
              item.finalPrice * item.quantity
            ).toFixed(2)}
          </p>
          <p class="cart-page-item-srp">
            <span style="font-weight: 500; font-size: 1.2rem; margin-right: 5px;">SRP: </span>$${(
              item.finalPrice * 1.5
            ).toFixed(2)}
          </p>
          <div class="cart-page-item-quantity">
            <button onclick="updateQuantity(${
              item.id
            }, -1)" class="cart-page-quantity-button">-</button>
            <input type="number" value="${
              item.quantity
            }" onfocus="this.select()" onchange="setQuantity(${
      item.id
    }, this.value)" class="cart-page-quantity-input">
            <button onclick="updateQuantity(${
              item.id
            }, 1)" class="cart-page-quantity-button">+</button>
          </div>
        </div>
      </div>
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
  document.getElementById("confirmation-modal").style.display = "flex";
});

// Modal handling
const confirmButton = document.getElementById("confirm-clear");
const cancelButton = document.getElementById("cancel-clear");
const modal = document.getElementById("confirmation-modal");

confirmButton.addEventListener("click", () => {
  cartItems.length = 0;
  renderCartItems(cartItems);
  modal.style.display = "none";
});

cancelButton.addEventListener("click", () => {
  modal.style.display = "none";
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
      <div>${addresses.shipping.address1}${
    addresses.shipping.address2 ? ", " + addresses.shipping.address2 : ""
  }</div>
      <div>${addresses.shipping.city}, ${addresses.shipping.postalCode}</div>
    `;

  // Render Billing Address
  billingAddressContainer.innerHTML = `
      <div>${addresses.billing.address1}${
    addresses.billing.address2 ? ", " + addresses.billing.address2 : ""
  }</div>
      <div>${addresses.billing.city}, ${addresses.billing.postalCode}</div>
    `;
}

// Initialize the page with product details and related products
async function initializeCartViewPage() {
  // Initial load
  renderCartItems(cartItems);
  renderAddresses();

  // Load related products table and render
  const productsTableResponse = await fetch(
    "/snippets/products-table/products-table.html"
  );
  const productsTableData = await productsTableResponse.text();
  document.getElementById("saved-later-table-placeholder").outerHTML =
    productsTableData;
}

initializeCartViewPage();
