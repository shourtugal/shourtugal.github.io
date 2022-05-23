//showing the menu when the hamburger is clicked
function showMenu() {
  let navLinks = document.getElementById("nav-links");
  navLinks.style.right = "0";
}
//hiding the menu when the cross is clicked
function hideMenu() {
  let navLinks = document.getElementById("nav-links");
  navLinks.style.right = "-200px";
}
