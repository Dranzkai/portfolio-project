// Show a welcome message
function showMessage() {
  alert("Welcome to my portfolio!");
}

// Display today's date
const dateElement = document.getElementById("date");
const today = new Date().toDateString();
dateElement.textContent = "Today's date: " + today;
