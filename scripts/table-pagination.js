// Helper function to get query parameters from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Helper function to update the URL without refreshing the page
function updateQueryString(key, value) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(key, value);
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${urlParams.toString()}`
  );
  return urlParams.get(key); // Return the updated value
}

// Function to generate pagination with range logic
function generatePagination(totalPages = 10, pageWindow = 5) {
  const currentPage = parseInt(getQueryParam("page")) || 1; // Default to page 1 if 'page' query not found
  const paginationContainer = document.getElementById("pagination-numbers");

  // Define the last_page
  const lastPage = totalPages; // This should be dynamically set, here it's set as a placeholder
  const halfWindow = Math.floor(pageWindow / 2);

  // Calculate start and end pages for the window
  let startPage = Math.max(1, currentPage - halfWindow);
  let endPage = Math.min(lastPage, currentPage + halfWindow);

  // Adjust if at the beginning or end of the pagination range
  if (currentPage <= halfWindow) {
    endPage = Math.min(lastPage, pageWindow);
  }
  if (currentPage + halfWindow >= lastPage) {
    startPage = Math.max(1, lastPage - pageWindow + 1);
  }

  // Clear existing pagination numbers
  paginationContainer.innerHTML = "";

  // Create Previous button
  document.getElementById("previous-page").href =
    currentPage > 1 ? `?page=${currentPage - 1}` : "#";

  // Create Next button
  document.getElementById("next-page").href =
    currentPage < lastPage ? `?page=${currentPage + 1}` : "#";

  // Create Last Page button
  document.getElementById("last-page").href = `?page=${lastPage}`;

  // Generate the pagination numbers dynamically
  for (let i = startPage; i <= endPage; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = `?page=${i}`;
    pageLink.classList.add(
      "px-4",
      "py-2",
      "rounded-md",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-yellow-400"
    );

    if (i === currentPage) {
      // Style the active page
      pageLink.classList.add("bg-yellow-300", "text-white");
      pageLink.setAttribute("aria-current", "page");
    } else {
      // Style the other pages
      pageLink.classList.add(
        "bg-gray-200",
        "text-gray-600",
        "hover:bg-gray-300"
      );
    }

    pageLink.textContent = i;
    paginationContainer.appendChild(pageLink);
  }
}

// Initialize the pagination when DOM is loaded
const totalPages = 15; // Example, set the total pages dynamically
generatePagination(totalPages, 5); // Example with totalPages and pageWindow set to 5
