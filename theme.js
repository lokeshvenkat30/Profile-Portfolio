const toggle = document.getElementById('theme-toggle');
const label = document.getElementById('theme-label');

function setTheme(isLight) {
  document.body.classList.toggle('light', isLight);
  label.textContent = isLight ? 'Light' : 'Dark';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') === 'light';
toggle.checked = savedTheme;
setTheme(savedTheme);

// When user toggles
toggle.addEventListener('change', () => {
  setTheme(toggle.checked);
});
