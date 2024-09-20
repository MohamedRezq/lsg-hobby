const categories = [
  {
    name: "Anime & Sci Fi",
    open: true,
    subcategories: [
      { id: "aoshima", label: "Aoshima" },
      { id: "bandai", label: "Bandai" },
      { id: "bandai-figurine", label: "Bandai Figurine" },
      { id: "brick-works", label: "Brick Works" },
    ],
  },
  {
    name: "Airbrushing",
    open: false,
    subcategories: [
      { id: "ak-interactive", label: "AK Interactive" },
      { id: "iwata", label: "Iwata" },
    ],
  },
  {
    name: "Art Supplies",
    open: false,
    subcategories: [
      { id: "copic-accessories", label: "Copic: Accessories" },
      { id: "copic-brushes", label: "Copic: Brushes" },
    ],
  },
  {
    name: "Model Kits & Figures",
    open: false,
    subcategories: [
      { id: "3r-model", label: "3R Model" },
      { id: "aoshima-model", label: "Aoshima" },
    ],
  },
  {
    name: "Figurines, Statues, Collectibles",
    open: false,
    subcategories: [
      { id: "ak-interactive-figures", label: "AK Interactive" },
      { id: "bandai-figurine-collectibles", label: "Bandai Figurine" },
    ],
  },
  {
    name: "Tools & Supplies",
    open: false,
    subcategories: [
      { id: "godhand-tools", label: "GodHand" },
      { id: "hasegawa-tools", label: "Hasegawa" },
    ],
  },
];

// Function to render categories
function renderCategories() {
  const sidebar = document.querySelector(".sidebar-categories");

  categories.forEach((category) => {
    const section = document.createElement("li");

    // Section content with Alpine.js open/close control
    section.innerHTML = `
        <section x-data="{ open: ${category.open} }">
          <h3
            class="font-medium flex justify-between items-center cursor-pointer text-gray-700 font-semibold px-4"
            @click="open = !open"
          >
            ${category.name}
            <i
              :class="open ? 'fas fa-minus' : 'fas fa-plus'"
              class="text-gray-600"
            ></i>
          </h3>
          <ul class="mt-2 pl-2 space-y-1 text-gray-600" x-show="open" x-cloak>
            ${category.subcategories
              .map(
                (subcategory) =>
                  `<li class="flex items-center px-4">
                    <input type="checkbox" id="${subcategory.id}" class="mr-2" />
                    <label for="${subcategory.id}">${subcategory.label}</label>
                  </li>`
              )
              .join("")}
          </ul>
        </section>
      `;

    sidebar.appendChild(section);
  });
}

// Call renderCategories when the page is loaded
renderCategories();
