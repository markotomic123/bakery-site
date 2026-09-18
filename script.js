// Load any saved favorites from localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Function to add a favorite item
function addFavorite(item) {
  // Check if item already exists
  const exists = favorites.some(fav => fav.name === item.name);
  if (!exists) {
    favorites.push(item);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  displayFavorites();
}


// Function to show favorites on the page
function displayFavorites() {
  const list = document.getElementById("favoritesList");
  list.innerHTML = "Your favorites:<br>" + favorites.map(fav =>
    `${fav.name} - ${fav.price}`
  ).join("<br>");
}

// Show favorites when the page loads
window.onload = displayFavorites;

function clearFavorites() {
  favorites = []; // reset the array
  localStorage.removeItem("favorites"); // wipe storage
  displayFavorites(); // refresh the list
}

