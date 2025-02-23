// Get elements
const menuSelect = document.getElementById('menu-select');
const sizeSelect = document.getElementById('size-select');
// const priceSelect = document.getElementById('price-select');
const menuItems = document.querySelectorAll('.menu-item');

// Function to filter menu based on selection
function filterMenu() {
    const selectedCategory = menuSelect.value;
    const selectedSize = sizeSelect.value;
    // const selectedPrice = priceSelect.value;

    menuItems.forEach(item => {
        const itemType = item.getAttribute('data-type');
        const itemSize = item.getAttribute('data-size');
        // const itemPrice = item.getAttribute('data-price');

        let showItem = true;

        // Filter by category
        if (selectedCategory !== 'all' && selectedCategory !== itemType) {
            showItem = false;
        }

        // Filter by size
        if (selectedSize !== 'all' && selectedSize !== itemSize) {
            showItem = false;
        }

        // Filter by price range
        // if (selectedPrice !== 'all' && selectedPrice !== itemPrice) {
        //     showItem = false;
        // }

        // Show or hide item
        item.style.display = showItem ? 'flex' : 'none';
    });
}

// Add event listeners to dropdowns
menuSelect.addEventListener('change', filterMenu);
sizeSelect.addEventListener('change', filterMenu);
priceSelect.addEventListener('change', filterMenu);

// Initial filter on page load
filterMenu();

// Function to toggle visibility of the filter dropdowns
function toggleFilters() {
    const filterContainer = document.getElementById('filters-container');
    filterContainer.classList.toggle('show');
}
