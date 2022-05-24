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
//redirecting to various social media sites
function redirect(element) {
  switch (element.className) {
    case "fa-brands fa-facebook":
      window.location.href = "https://www.facebook.com/";
      break;
    case "fa-brands fa-twitter":
      window.location.href = "https://twitter.com/";
      break;
    case "fa-brands fa-instagram":
      window.location.href = "https://www.instagram.com/";
      break;
    case "fa-brands fa-linkedin":
      window.location.href = "https://www.linkedin.com/";
      break;
    case "fa-brands fa-github":
      window.location.href = "https://www.github.com/shourtugal";
      break;
  }
}
