
/* javaScript to toggle menu */
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear