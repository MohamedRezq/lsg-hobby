// Sample data to simulate cart items
const cartItems = [
  {
    name: "High Quality Dense Acrylic, Cyan",
    sku: "AK-ABT1105",
    price: 4.38,
    quantity: 1,
    img: "https://images.lsghobby.com/BNDAI-2615240/thumbnail/thumb_BNDAI-2615240.jpg",
  },
  {
    name: "Model Paint Set",
    sku: "MP-SET500",
    price: 15.0,
    quantity: 2,
    img: "https://images.lsghobby.com/AK-ABT610-ES/thumbnail/thumb_AK-ABT610-ES.jpg",
  },
];

// Function to render cart items
function renderCartItems(items) {
  const cartItemsContainer = document.getElementById("cart-items");
  let subtotal = 0;

  items.forEach((item) => {
    // Calculate the subtotal
    subtotal += item.price * item.quantity;

    // Create cart item HTML
    const itemHtml = `
        <div class="flex items-center justify-between bg-gray-50 p-4 rounded shadow">
          <img src="${item.img}" alt="${
      item.name
    }" class="w-24 h-24 rounded object-cover">
          <div class="flex-1 ml-4">
            <h3 class="text-xl font-semibold">${item.name}</h3>
            <p class="text-sm text-gray-600">SKU: ${item.sku}</p>
            <p class="text-sm text-gray-600">Price: $${item.price.toFixed(
              2
            )}</p>
            <p class="text-sm text-gray-600">Quantity: ${item.quantity}</p>
          </div>
          <div class="text-right">
            <p class="text-lg font-semibold">$${(
              item.price * item.quantity
            ).toFixed(2)}</p>
            <button class="text-red-500 hover:text-red-700 mt-2">Remove</button>
          </div>
        </div>
      `;

    // Insert cart item into the container
    cartItemsContainer.innerHTML += itemHtml;
  });

  // Update the subtotal and total
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent = `$${(subtotal + 5).toFixed(
    2
  )}`; // Adding fixed $5 shipping
}

// On page load, render the cart items
cartItems();
