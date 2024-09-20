// Helper function to get URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to log current selected state as an object
function logSelections() {
  const tab = getQueryParam("tab") || "featured";
  const sort = document.getElementById("sort-select").value;
  const pageCount = document.getElementById("page-count-select").value;

  // Log the current state
  const selectedOptions = {
    tab,
    sort,
    page_count: pageCount,
  };
  console.log(selectedOptions);
}

// Function to update query parameters in the URL
function updateQueryString(key, value) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(key, value);
  return `${window.location.pathname}?${urlParams.toString()}`;
}

// Function to highlight the active tab based on the current query
function highlightActiveTab() {
  const currentTab = getQueryParam("tab") || "featured";

  document.querySelectorAll(".tab-link").forEach((tabLink) => {
    const tabValue = tabLink.getAttribute("data-tab");

    if (tabValue === currentTab) {
      tabLink.classList.add(
        "border-yellow-300",
        "text-[#333333]",
        "font-semibold"
      );
      tabLink.classList.remove("border-gray-50", "text-gray-500");
    } else {
      tabLink.classList.add("border-gray-50", "text-gray-500");
      tabLink.classList.remove(
        "border-yellow-300",
        "text-[#333333]",
        "font-semibold"
      );
    }
  });
}

// Update the URL when sort or page count is changed
const sortSelect = document.getElementById("sort-select");
const pageCountSelect = document.getElementById("page-count-select");

// Set the value of the sort and page count select elements from URL params
const sort = getQueryParam("sort") || "recent";
const pageCount = getQueryParam("page_count") || "25";
sortSelect.value = sort;
pageCountSelect.value = pageCount;

// Attach event listeners to update URL on changes
sortSelect.addEventListener("change", function () {
  console.log("changed sorting");
  const newSort = this.value;
  const newUrl = updateQueryString("sort", newSort);
  window.history.pushState(null, "", newUrl);
  logSelections(); // Log the selections after changing
});

pageCountSelect.addEventListener("change", function () {
  const newPageCount = this.value;
  const newUrl = updateQueryString("page_count", newPageCount);
  window.history.pushState(null, "", newUrl);
  logSelections(); // Log the selections after changing
});

// Add click event listeners to tabs to update URL
document.querySelectorAll(".tab-link").forEach((tabLink) => {
  tabLink.addEventListener("click", function (event) {
    event.preventDefault();
    const newTab = tabLink.getAttribute("data-tab");
    const newUrl = updateQueryString("tab", newTab);
    window.history.pushState(null, "", newUrl);
    highlightActiveTab(); // Update tab styling
    logSelections(); // Log the selections after clicking the tab
  });
});

// Highlight the active tab based on the URL when page loads
highlightActiveTab();

// Log the initial state when the page is loaded
logSelections();
