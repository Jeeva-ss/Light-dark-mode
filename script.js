const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// themes
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function styleToggle(bg1, bg2, mode, icon1, icon2, color) {
    nav.style.backgroundColor = bg1;
    textBox.style.backgroundColor = bg2;
    toggleIcon.children[0].textContent = mode;
    toggleIcon.children[1].classList.replace(icon1, icon2);
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
    styleToggle("#000", "rgb(255 255 255 / 50%)", "Dark Mode", "fa-sun", "fa-moon", 'dark');
}

function lightMode() {
    styleToggle("#FFF", "rgb(0 0 0 / 50%)", "Light Mode", "fa-moon", "fa-sun", 'light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", DARK_THEME);
        localStorage.setItem("theme", DARK_THEME);
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", LIGHT_THEME);
        localStorage.setItem("theme", LIGHT_THEME);
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        darkMode();
    }
}
