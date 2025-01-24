const navbar = document.querySelector('.navbar');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.wrapp_nav_menu');
const overlay = document.querySelector('.overlay');
let isMenuOpen = false;

// Toggle mobile menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileNavToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}

mobileNavToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
document.querySelectorAll('.nav_menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) toggleMenu();
});

// Prevent scroll when menu is open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
    }
});

$(document).ready(function () {
    $(window).bind("mousewheel", function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(".navbar").removeClass("scrolled");
            $(".warrp_go_to_top").removeClass("show");
            $("html").removeClass("behavior");
        } else {
            $(".navbar").addClass("scrolled");
            $(".warrp_go_to_top").addClass("show");
        }
    });
    $(".go_to_top").on("click", function (event) {
        event.preventDefault();
        $(".header_scroll").removeClass("isactive_scroll");
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("html").toggleClass("behavior");
    });
});

// =========== dark mode ===========
const toggleButton = document.getElementById('lightModeToggle');
// Function to apply the theme based on the current mode
function applyTheme(mode) {
  if (mode === 'light') {
    document.body.classList.add('light-mode');
    toggleButton.checked = true;
  } else {
    document.body.classList.remove('light-mode');
    toggleButton.checked = false;
  }
}
const savedTheme = localStorage.getItem('light');
applyTheme(savedTheme === 'enabled' ? 'light' : 'dark');
// Add change event listener to the toggle button
toggleButton.addEventListener('change', () => {
  if (toggleButton.checked) {
    document.body.classList.add('light-mode');
    localStorage.setItem('light', 'enabled');
  } else {
    document.body.classList.remove('light-mode');
    localStorage.setItem('light', 'disabled');
  }
});



