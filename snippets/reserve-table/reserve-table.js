// New data for POs
const reserveData = [
  {
    po: "002597",
    brand: "Bandai Collectible",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "6",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002598",
    brand: "Bandai Figurine",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "2",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002597",
    brand: "Bandai Collectible",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "6",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002598",
    brand: "Bandai Figurine",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "2",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002597",
    brand: "Bandai Collectible",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "6",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002598",
    brand: "Bandai Figurine",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "2",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002597",
    brand: "Bandai Collectible",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "6",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002598",
    brand: "Bandai Figurine",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "2",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002597",
    brand: "Bandai Collectible",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "6",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002598",
    brand: "Bandai Figurine",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "2",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002597",
    brand: "Bandai Collectible",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "6",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002598",
    brand: "Bandai Figurine",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "2",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002597",
    brand: "Bandai Collectible",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "6",
    items_ordered: "0",
    order_status: "",
  },
  {
    po: "002598",
    brand: "Bandai Figurine",
    listed_date: "2024-10-10",
    days_left: "0",
    eta: "2025-Jul late",
    no_of_items: "2",
    items_ordered: "0",
    order_status: "",
  },
  // Add more PO data here
];

// Function to render PO table rows for desktop view
function renderReserveTable(reserveData) {
  const tableBody = document.getElementById("reserve-rows");
  tableBody.innerHTML = ""; // Clear previous rows
  reserveData.forEach((po) => {
    const row = `
      <tr>
        <td style="font-weight: 600"><a style="color: #E0A900;" href="/reserve-po.html">${
          po.po
        }</a></td>
        <td style="font-weight: 600">${po.brand}</td>
        <td>${po.listed_date}</td>
        <td style="text-align: center"><span style="width: fit-content; padding: 2px 6px; background-color: #f2dede; color: #B56451; font-weight: 600; font-size: 11pt; border-radius: 3px;">${
          po.days_left
        }</span></td>
        <td>${po.eta}</td>
        <td style="text-align: center; font-weight: 600">${po.no_of_items}</td>
        <td style="text-align: center; font-weight: 600">${
          po.items_ordered
        }</td>
        <td>${po.order_status || ""}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Function to render PO cards for mobile view
function renderReserveCards(reserveData) {
  const cardContainer = document.getElementById("mobile-reserve-cards");
  cardContainer.innerHTML = ""; // Clear previous cards
  reserveData.forEach((po) => {
    const card = `
      <div class="reserve-table-product-card">
        <a href="/reserve-po.html">PO # <span style="font-weight: 600; color: #333333">${
          po.po
        }</span></a>
        <p>Brand: <span style="font-weight: 600; color: #333333">${
          po.brand
        }</span></p>
        <p>Listed Date: <span style="font-weight: 600; color: #333333">${
          po.listed_date
        }</span></p>
        <p>Days Left: <span style="width: fit-content; padding: 2px 6px; background-color: #f2dede; color: #B56451; font-weight: 600; font-size: 11pt; border-radius: 3px;">${
          po.days_left
        }</span></p>
        <p>ETA: <span style="font-weight: 600; color: #333333">${
          po.eta
        }</span></p>
        <p># of Items: <span style="font-weight: 600; color: #333333">${
          po.no_of_items
        }</span></p>
        <p>Items Ordered: <span style="font-weight: 600; color: #333333">${
          po.items_ordered
        }</span></p>
        <p>Order Status: <span style="font-weight: 600; color: #333333">${
          po.order_status || ""
        }</span></p>
      </div>
    `;
    cardContainer.innerHTML += card;
  });
}

// Initialize the page by rendering the table and cards
function initializeReservePage() {
  renderReserveTable(reserveData); // Render the desktop table
  renderReserveCards(reserveData); // Render the mobile cards
}

// Call the initialization function when the DOM is fully loaded
initializeReservePage();
