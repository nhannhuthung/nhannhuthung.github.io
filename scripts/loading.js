// Loading page - Disable all interactions
document.body.classList.add('loading');

var loader = document.querySelector(".preloader");

// Disable scrolling and interactions
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
});

window.addEventListener("load", function(){
    if (loader) {
        loader.style.display = "none";
        
        // Re-enable scrolling and interactions
        document.body.classList.remove('loading');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }
});

// Prevent scrolling during load
window.addEventListener('scroll', function(e) {
    if (document.body.classList.contains('loading')) {
        window.scrollTo(0, 0);
    }
});

// Prevent touch move on mobile during loading
document.addEventListener('touchmove', function(e) {
    if (document.body.classList.contains('loading')) {
        e.preventDefault();
    }
}, { passive: false });