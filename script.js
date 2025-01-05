function navigateTo(page) {
    window.location.href = page;
}

// top button for the main page
let top_button = document.getElementById("top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
}

function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  (function (window, document, undefined) {
  
    window.onload = init;
  
    function init() {
      top_button = document.getElementById("top_btn");
  
    }
  
  })(window, document, undefined);

// Display the nav box for media
function toggleMenu() {
    let menu = document.getElementById("header-nav");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show"); // Hide menu
    } else {
        menu.classList.add("show"); // Show menu
    }
}