// Loading page - Disable all interactions
document.body.classList.add('loading');

var loader = document.querySelector(".preloader");

// Generate loading content inside preloader with individual letters
if (loader) {
    var loadingText = "LOADING...";
    var letters = loadingText.split('').map((letter, index) => {
        return `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`;
    }).join('');
    
    loader.innerHTML = `
        <div class="loading-content">
            <div class="loading-text">${letters}</div>
        </div>
    `;
}

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