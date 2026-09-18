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
window.onload = function() {
  displayFavorites();
  const savedEmail = localStorage.getItem("userEmail");
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
  }
};

function clearFavorites() {
  favorites = []; // reset the array
  localStorage.removeItem("favorites"); // wipe storage
  displayFavorites(); // refresh the list
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const item = document.getElementById("item").value;
  const feedback = document.getElementById("feedback");

  if (!name) {
    feedback.textContent = "Name is required.";
    feedback.style.color = "red";
    return;
  }
  if (!email.includes("@")) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }
  if (!item) {
    feedback.textContent = "Item details are required.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";

  localStorage.setItem("userEmail", email);
});


