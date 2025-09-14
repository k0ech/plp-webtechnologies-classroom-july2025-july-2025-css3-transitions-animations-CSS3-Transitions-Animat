// Function with parameters + return value
function addNumbers(a, b) {
  return a + b;
}

// Function with local scope
function greetUser(name) {
  let message = "Welcome, " + name + "!";
  return message;
}

// Global variable example
let clickCount = 0;
function countClick() {
  clickCount++;
  return "Button clicked " + clickCount + " times!";
}

// DOM elements + ANIMATIONS
const darkModeBtn = document.getElementById("darkModeBtn");
const animateBtn = document.getElementById("animateBtn");
const cards = document.querySelectorAll(".card");
const output = document.getElementById("output");

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  output.textContent = " Dark mode " + 
    (document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

// Animate cards
function animateCards() {
  cards.forEach((card, index) => {
    // Remove class if already present to restart animation
    card.classList.remove("animate");
    void card.offsetWidth; // trick to reflow
    card.classList.add("animate");

    // Use addNumbers to show result dynamically
    output.textContent = greetUser("Ryan") + 
      " | " + countClick() + 
      " | Sum Example: 5 + " + index + " = " + addNumbers(5, index);
  });
}

// Event listeners
darkModeBtn.addEventListener("click", toggleDarkMode);
animateBtn.addEventListener("click", animateCards);
