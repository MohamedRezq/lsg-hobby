// Helper function to get URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to log current selected state as an object
function logSelections() {
  const sort = document.getElementById("sort-select").value;
  const pageCount = document.getElementById("page-count-select").value;

  // Log the current state
  const selectedOptions = {
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

// Log the initial state when the page is loaded
logSelections();
