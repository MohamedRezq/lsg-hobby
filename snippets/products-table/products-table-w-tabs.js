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
        `<div style="font-size: 12px; font-weight: 600; color: #6B7280;">${location
          .slice(0, 3)
          .toUpperCase()}: ${stock[location]}</div>`
    )
    .join("");
}

// Function to render the product table for desktop view
function renderProductTable(products) {
  const tableBody = document.getElementById("product-rows");
  products.forEach((product) => {
    const isOutOfStock = !product?.stock;

    const row = `
<tr style="background-color: white; transition: background-color 200ms ease-in-out;" onmouseover="this.style.backgroundColor='#F9FAFB'" onmouseout="this.style.backgroundColor='white'">
<td style="padding-left: 10px"><img src="${product?.image}" alt="${
      product?.name ?? ""
    }" style="height: 80px; width: 80px; border-radius: 8px; object-fit: contain; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);"></td>
<td style="padding: 0.5rem 0.5rem; font-size: 8.5pt; gap: 0.5rem; align-items: top;">
    <div style="color: #6B7280;">SKU: <span style="font-weight: 600;">${
      product?.sku ?? ""
    }</span></div>
    <div style="color: #6B7280;">MFG CODE: <span style="font-weight: 600;">${
      product?.mfgCode ?? ""
    }</span></div>
    <div style="color: #6B7280;">UPC: <span style="font-weight: 600;">${
      product?.upc ?? ""
    }</span></div>
    <div style="font-weight: normal; color: #6B7280;">Category: <span style="font-weight: bold; color: #374151;">${
      product?.category ?? ""
    }</span></div>
</td>
<td style="padding: 0.5rem 0.5rem; font-size: 8.5pt; text-align: left;">
  <a href="/product?.html?id=${
    product?.id
  }" style="font-size: 9pt; font-weight: bold; text-decoration: underline;">${
      product?.name ?? ""
    }</a>
  <div style="font-size: 9pt; font-weight: 600; color: #6B7280;">${
    product?.description ?? ""
  }</div>
  <div style="font-size: 8.5pt; color: #16A34A;">${product?.reserve ?? ""}</div>
  <div style="font-size: 8.5pt; color: #CA8A04;">${product?.eta ?? ""}</div>
</td>
<td style="padding: 0.5rem 0.5rem; font-size: 10pt; color: #4B5563; font-weight: 600;">${
      product?.scale ?? ""
    }</td>
<td style="text-align: right; padding: 0.25rem; padding-right: 20px; font-size: 8.5pt;">
  <div style="display: flex; flex-direction: column; align-items: end; justify-content: flex-start; height: 100%;">
    <div style="display: flex; align-items: end; gap: 0.5rem;">
      <span style="font-size: 8.5pt; font-weight: 600; color: #DC2626;">${
        product?.discount ?? ""
      }</span>
      <span style="font-size: 11pt; font-weight: bold; color: #333333;">${
        product?.finalPrice ?? ""
      }</span>
    </div>
    <span style="font-size: ${product?.discount ? "9pt" : "11pt"}; ${
      product?.discount
        ? "text-decoration: line-through;"
        : "font-weight: bold;"
    }">${product?.netPrice ?? ""}</span>
    ${
      product?.tag == "New"
        ? "<div style='font-size: 8pt; background-color: #D1FAE5; color: #059669; margin-top: 0.5rem; padding: 0.25rem 0.5rem; border-radius: 4px;'>New</div>"
        : ""
    }
    ${
      product?.tag == "Special Order"
        ? "<div style='font-size: 8pt; background-color: #EDE9FE; color: #7C3AED; margin-top: 0.5rem; padding: 0.25rem 0.5rem; border-radius: 4px;'>Special Order</div>"
        : ""
    }
    ${
      product?.tag == "PreOrder"
        ? "<div style='font-size: 8pt; background-color: #DBEAFE; color: #1D4ED8; margin-top: 0.5rem; padding: 0.25rem 0.5rem; border-radius: 4px;'>PreOrder</div>"
        : ""
    }
    ${
      product?.tag == "Discontinued"
        ? "<div style='font-size: 8pt; background-color: #F3F4F6; color: #6B7280; margin-top: 0.5rem; padding: 0.25rem 0.5rem; border-radius: 4px;'>Discontinued</div>"
        : ""
    }
  </div>
</td>
<td style="font-size: 10pt; text-align: right; padding: 0.25rem; color: #4B5563; font-weight: 500; padding-right: 20px;">${
      product?.srp ?? ""
    }</td>
<td style="text-align: center; padding: 0.25rem;">
  <i class="${
    product?.stock ? "fas fa-check-circle" : "fas fa-times-circle"
  }" style="color: ${product?.stock ? "#16A34A" : "#DC2626"};"></i>
  <div style="margin-top: 0.5rem; display: flex; flex-direction: column;">
    <div style="font-size: 8.5pt; font-weight: 600; color: #6B7280;">TOR: ${
      product?.stock?.toronto ?? ""
    }</div>
    <div style="font-size: 8.5pt; font-weight: 600; color: #6B7280;">PHX: ${
      product?.stock?.phoenix ?? ""
    }</div>
  </div>
</td>
<td style="padding: 0.5rem;">
  <div style="margin-bottom: 0.25rem; display: flex; gap: 0.5rem; align-items: center;">
    <input type="number" style="max-width: 50px; border-radius: 8px; border: 1px solid #D1D5DB; background-color: white; padding: 0.25rem 5px; font-size: 12px;" placeholder="2" ${
      isOutOfStock ? "disabled" : ""
    }>
    <button style="font-size: 12px; width: 80px; border-radius: 4px; padding: 0.25rem 0.5rem; border: none; background-color: ${
      isOutOfStock ? "#9CA3AF" : "#F59E0B"
    }; color: white;" ${isOutOfStock ? "disabled" : ""}>
      Add to Cart
    </button>
  </div>
  <div style="margin-top: 0.5rem; padding-left: 0.25rem; font-size: 8.5pt; display: flex; flex-direction: column; gap: 0.25rem;">
    <div style="font-weight: 600; color: #333333;">${product?.moq ?? ""}</div>
    <div style="font-weight: 600; color: #CA8A04;">${
      product?.backOrdered ?? ""
    }</div>
    <div style="color: #6B7280;">${product?.lastPurchased ?? ""}</div>
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
<div style="max-width: 100%; height: 100%; background-color: white; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden; border: 1px solid #E5E7EB; padding: 12px 5px; display: flex; flex-direction: column; justify-content: start; align-items: start;">
  <div style="display: flex; gap: 15px; justify-content: start; width: 100%;">
    <div style="flex: 0 0 30%; display: flex; fjustify-content: flex-start;">
      <!-- Image (smaller, and aligned) -->
      <img
        style="width: 100%; object-fit: cover; border-radius: 4px;"
        src="${product?.image}"
        alt="${product?.name}"
      />
    </div>
    <div style="font-size: 9pt; flex: 1; color: #333333; display: flex; flex-direction: column; gap: 4px;">
      <div style="font-size: 9pt; font-weight: bold; line-height: 1.2;">${
        product?.name
      }</div>
      <div style="font-size: 8.5pt; font-weight: 600;">${
        product?.description
      }</div>
      <div style="display: flex; gap: 10px; text-align: center; align-items: center;">
        <i class="${
          product?.stock ? "fas fa-check-circle" : "fas fa-times-circle"
        }" style="color: ${
      product?.stock ? "#16A34A" : "#DC2626"
    }; margin-top: 5px;"></i>
        <div style="margin-top: 0.5rem; display: flex; flex-direction: column;">
          ${
            product?.stock?.toronto
              ? `<div style="font-size: 8.5pt; font-weight: 600; color: #6B7280;">
                TOR: ${product?.stock?.toronto ?? ""}
              </div>`
              : ""
          }
          ${
            product?.stock?.phoenix
              ? `<div style="font-size: 8.5pt; font-weight: 600; color: #6B7280;">
                PHX: ${product?.stock?.phoenix ?? ""}
              </div>`
              : ""
          }
          ${!product?.stock ? "Out of Stock" : ""}
        </div>
      </div>
      <div style="color: #374151;">Scale: <span style="font-weight: 600;">${
        product?.scale ?? ""
      }</span></div>
      <div style="color: #374151;">SKU: <span style="font-weight: 600;">${
        product?.sku ?? ""
      }</span></div>
      <div style="color: #374151;">MFG Code: <span style="font-weight: 600;">${
        product?.mfgCode ?? ""
      }</span></div>
      <div style="color: #374151;">UPC: <span style="font-weight: 600;">${
        product?.upc ?? ""
      }</span></div>
      <div style="color: #374151;">Category: <span style="font-weight: bold;">${
        product?.category ?? ""
      }</span></div>
      <div style="display: flex; justify-content: space-between; width: 100%;">
    <div style="display: flex; flex-direction: column; align-items: start;">
      ${
        product?.reserve
          ? `<div style="font-size: 9pt; color: #16A34A; font-weight: 600;">Reserve on ${
              product?.reserve ?? ""
            }</div>`
          : ""
      }
      ${
        product?.eta
          ? `<div style="font-size: 9pt; color: #CA8A04; font-weight: 600;">ETA: ${
              product?.eta ?? ""
            }</div>`
          : ""
      }
      <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
      <input type="number" style="max-width: 50px; border-radius: 8px; border: 1px solid #D1D5DB; background-color: white; padding: 0.25rem 5px; font-size: 12px;" placeholder="2" ${
        !product?.stock ? "disabled" : ""
      }>
    <button style="font-size: 12px; width: 80px; border-radius: 4px; padding: 0.25rem 0.5rem; border: none; background-color: ${
      !product?.stock ? "#9CA3AF" : "#F59E0B"
    }; color: white;" ${!product?.stock ? "disabled" : ""}>
      Add to Cart
    </button>
    </div>
    </div>
  </div>
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
