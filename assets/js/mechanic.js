// Select search input
const searchInput = document.querySelector('#search-input');

// Select all product items
const productItems = document.querySelectorAll('.product-item');

// Add event listener to search input
searchInput.addEventListener('keyup', function() {
  // Get search input value
  const searchValue = this.value.toLowerCase().trim();

  // Loop through product items
  productItems.forEach(function(item) {
    // Get product name
    const productName = item.querySelector('.h5').textContent.toLowerCase();

    // Check if product name contains search value
    if (productName.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});