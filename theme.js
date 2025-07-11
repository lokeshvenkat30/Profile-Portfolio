// theme.js
const toggle = document.getElementById("theme-toggle");
const body = document.body;
const label = document.getElementById("theme-label");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
  label.textContent = "Light";
}

// Toggle function
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    label.textContent = "Light";
  } else {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    label.textContent = "Dark";
  }
});
