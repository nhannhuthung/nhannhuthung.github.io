//--// function to print out code for sidebar //--//
let currentLang = localStorage.getItem("language") || "en";

const fixed_trans = {
    en: {
        home: `Home`,
        collection: `Collection`,
        about: `About`,
        contact: `Contact`,
        search_placeholder: `Enter page name...`,
        back_to_top: `Top`,
        play_all: `Play all slideshows`,
        pause_all: `Pause all slideshows`,
        // the toggle names the language you switch TO first
        lang_toggle: `Vie | Eng`,
    },
    vi: {
        home: `Trang Chủ`,
        collection: `Bộ Sưu Tập`,
        about: `Giới Thiệu`,
        contact: `Liên Hệ`,
        search_placeholder: `Nhập tên trang...`,
        back_to_top: `Đầu`,
        play_all: `Phát tất cả`,
        pause_all: `Dừng tất cả`,
        lang_toggle: `Eng | Vie`,
    }
};

// The sidebar is built from REGIONS / COUNTRIES in scripts/regions.js,
// which this page loads first. The per-continent accent colour lives on
// each REGIONS record, so there is no separate map here any more.

function createCategory(categoryKey) {
    const region = REGIONS[categoryKey];
    const title = region[currentLang];
    const accentVar = region.accent || "--a5";

    let categoryHTML = `<div class="region-group" style="--region-accent: var(${accentVar})">`;
    categoryHTML += `<h2 onclick="toggleCategories('${categoryKey}')">${title}</h2>`;
    categoryHTML += `<ul id="${categoryKey}">`;
    // the sidebar lists a continent flat, so subregions are ignored here
    countriesIn(categoryKey, currentLang).forEach(slug => {
        categoryHTML += `<li onclick="navigateTo('${slug}.html')">${COUNTRIES[slug][currentLang]}</li>`;
    });
    categoryHTML += `</ul>`;
    categoryHTML += `</div>`;
    return categoryHTML;
}

function insertSidebarHTML(id) {
    let sidebarHTML = '<div class="sidebar">';
    Object.keys(REGIONS).forEach(categoryKey => {
        sidebarHTML += createCategory(categoryKey);
    });
    sidebarHTML += '</div>';
    document.getElementById(id).innerHTML = sidebarHTML;
}

function updatePageLanguage(currentLang) {
    const foundationToUpdate = [
        { selector: "home-nav", key: "home" },
        { selector: "collection-nav", key: "collection" },
        { selector: "about-nav", key: "about" },
        { selector: "contact-nav", key: "contact" },
        { selector: "home-nav-media", key: "home" },
        { selector: "collection-nav-media", key: "collection" },
        { selector: "about-nav-media", key: "about" },
        { selector: "contact-nav-media", key: "contact" },
        { selector: "searchInput", key: "search_placeholder", attr: "placeholder" },
        { selector: "back-to-top", key: "back_to_top"},
        { selector: "lang-toggle", key: "lang_toggle"},
    ];

    foundationToUpdate.forEach(({ selector, key, attr }) => {
        const element = document.getElementById(selector);
        if (element) {
            if (attr) {
                element.setAttribute(attr, fixed_trans[currentLang][key]);
            } else {
                element.textContent = fixed_trans[currentLang][key];
            }
        }
    });
}

function updatePageHeading(currentLang) {
    const headingElement = document.getElementById('page-heading');
    if (headingElement && typeof translations !== 'undefined' && translations.heading) {
        headingElement.textContent = translations.heading[currentLang] || translations.heading.en;
    }
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "vi" : "en"; 
    localStorage.setItem("language", currentLang); 

    updatePageLanguage(currentLang);
    updatePageHeading(currentLang);
    insertSidebarHTML('SideBar'); 
    insertSidebarHTML('SideBarCollection'); 
    createNavigationButtons();

    // Remove old slideshow info before regenerating
    const playPauseBtn = document.getElementById('global-play-pause-btn');
    if (playPauseBtn) {
        playPauseBtn.title = Slideshow.globalPaused ? 
            fixed_trans[currentLang].play_all : 
            fixed_trans[currentLang].pause_all;
    }

    document.querySelectorAll(".slideshow-info").forEach(el => el.remove());

    Object.keys(images).forEach(index => {
        // Re-translate the alt text of each slide image from the data
        const slideContainer = document.getElementById("slide" + index);
        if (slideContainer) {
            const imgs = slideContainer.querySelectorAll(".mySlides img");
            imgs.forEach((img, i) => {
                const altData = images[index][i] && images[index][i].alt;
                if (altData) {
                    img.alt = altData[currentLang] || altData.en;
                }
            });
        }

        generateSlideShowInfo("info" + index, slideshowInfo[index]);
    });
}
//--// function to print out code for sidebar //--//


//--// function to display banknote //--//
class Slideshow {
    static allSlideshows = []; // Track all slideshow instances
    // Global pause state, remembered across pages like the language and theme
    // choices, so it survives navigating to another region (default: playing).
    static globalPaused = localStorage.getItem("slideshowPaused") === "true";
    static globalButtonCreated = false; // Track if global button exists

    constructor(containerId, interval = 5000, infoConfig = null) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container with id "${containerId}" not found.`);
            return;
        }
        this.slides = this.container.getElementsByClassName("mySlides");
        this.slideIndex = 0;
        this.interval = interval;
        this.autoSlideTimeout = null;
        this.isPausedByHover = false;
        this.isZoomed = false;
        this.infoConfig = infoConfig;
        this.isAutoPlaying = false; // NEW: Track if this slideshow is auto-playing

        // Add this instance to the global array
        Slideshow.allSlideshows.push(this);

        // Start the slideshow
        this.showSlides();

        // Auto-play by default (resume() starts the timer unless globally paused)
        this.resume();

        // Add navigation arrows
        this.addNavigationArrows();
        
        // Create global play/pause button only once
        if (!Slideshow.globalButtonCreated) {
            Slideshow.createGlobalPlayPauseButton();
            Slideshow.globalButtonCreated = true;
        }
    }

    static createGlobalPlayPauseButton() {
        const playPauseBtn = document.createElement("button");
        playPauseBtn.id = "global-play-pause-btn";
        playPauseBtn.className = "global-play-pause-btn";
        // Reflect the current play state (default is playing)
        playPauseBtn.innerHTML = Slideshow.globalPaused ? "&#9654;" : "&#10074;&#10074;";
        playPauseBtn.title = Slideshow.globalPaused ? fixed_trans[currentLang].play_all : fixed_trans[currentLang].pause_all;
        
        playPauseBtn.onclick = () => {
            Slideshow.toggleGlobalPlayPause(playPauseBtn);
        };

        document.body.appendChild(playPauseBtn);
    }

    static toggleGlobalPlayPause(button) {
        Slideshow.globalPaused = !Slideshow.globalPaused;
        localStorage.setItem("slideshowPaused", Slideshow.globalPaused);


        if (Slideshow.globalPaused) {
            // Pause all slideshows
            button.innerHTML = "&#9654;"; // Play icon
            button.title = fixed_trans[currentLang].play_all;
            Slideshow.allSlideshows.forEach(slideshow => {
                slideshow.pause();
            });
        } else {
            // Resume all slideshows
            button.innerHTML = "&#10074;&#10074;"; // Pause icon
            button.title = fixed_trans[currentLang].pause_all;
            Slideshow.allSlideshows.forEach(slideshow => {
                slideshow.resume();
            });
        }
    }

    addNavigationArrows() {
        // Find the slideshow-container div (the actual container with slides)
        const slideshowContainer = this.container.querySelector('.slideshow-container');
        if (!slideshowContainer) return;

        // Create previous arrow
        const prevArrow = document.createElement("a");
        prevArrow.className = "slide-arrow prev";
        prevArrow.innerHTML = "&#10094;";
        prevArrow.onclick = (e) => {
            e.stopPropagation();
            this.changeSlide(-1);
        };

        // Create next arrow
        const nextArrow = document.createElement("a");
        nextArrow.className = "slide-arrow next";
        nextArrow.innerHTML = "&#10095;";
        nextArrow.onclick = (e) => {
            e.stopPropagation();
            this.changeSlide(1);
        };

        slideshowContainer.appendChild(prevArrow);
        slideshowContainer.appendChild(nextArrow);
    }

    changeSlide(direction) {
        clearTimeout(this.autoSlideTimeout);

        // Hide all slides
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }

        // Calculate new slide index
        this.slideIndex = (this.slideIndex + direction + this.slides.length) % this.slides.length;
        this.slides[this.slideIndex].style.display = "block";

        // Re-attach listeners to the new image
        this.addImageListeners();
        this.updateInfo();

        // Restart auto-sliding only if global play is active
        if (!this.isPausedByHover && !this.isZoomed && !Slideshow.globalPaused) {
            this.autoSlideTimeout = setTimeout(() => this.swap(), this.interval);
        }
    }

    updateInfo() {
        if (this.infoConfig && this.infoConfig.containerId && this.infoConfig.data) {
            generateSlideShowInfo(
                this.infoConfig.containerId,
                this.infoConfig.data,
                localStorage.getItem("language") || "en",
                this.slideIndex
            );
        }
    }

    addImageListeners() {
        const currentSlide = this.slides[this.slideIndex];
        const img = currentSlide.querySelector("img");
        if (!img) return;

        // Click to zoom/unzoom
        img.onclick = (e) => {
            e.stopPropagation();
            this.toggleZoom();
        };

        // Hover effects only when not zoomed
        img.onmouseenter = () => {
            if (!this.isZoomed) {
                this.isPausedByHover = true;
                this.pause();
            }
        };

        img.onmouseleave = () => {
            if (!this.isZoomed) {
                this.isPausedByHover = false;
                this.resume();
            }
        };

        // Mouse move for zoom origin - works both when zoomed and not zoomed
        img.onmousemove = (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            img.style.transformOrigin = `${x}% ${y}%`;
        };
    }

    toggleZoom() {
        const currentSlide = this.slides[this.slideIndex];
        const slideshowContainer = this.container.querySelector('.slideshow-container');
        const arrows = slideshowContainer ? slideshowContainer.querySelectorAll('.slide-arrow') : [];

        if (this.isZoomed) {
            // Exit zoom mode
            currentSlide.classList.remove("zooming");
            slideshowContainer.classList.remove("zoomed");
            this.isZoomed = false;
            this.resume();
        } else {
            // Enter zoom mode
            currentSlide.classList.add("zooming");
            slideshowContainer.classList.add("zoomed");
            this.isZoomed = true;
            this.pause();
        }
    }

    pause() {
        clearTimeout(this.autoSlideTimeout);
        this.isAutoPlaying = false;
    }

    resume() {
        if (!this.isZoomed && !this.isPausedByHover && !Slideshow.globalPaused) {
            this.isAutoPlaying = true;
            this.autoSlideTimeout = setTimeout(() => this.swap(), this.interval);
        }
    }

    showSlides() {
        // Hide all slides
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }

        // Show the current slide
        this.slides[this.slideIndex].style.display = "block";

        // Attach listeners to the current image
        this.addImageListeners();
        this.updateInfo();
    }

    swap() {
        // Clear the timeout for auto-sliding
        clearTimeout(this.autoSlideTimeout);

        // Hide all slides
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }

        // Show the next slide
        this.slideIndex = (this.slideIndex + 1) % this.slides.length;
        this.slides[this.slideIndex].style.display = "block";

        // Re-attach listeners to the new image
        this.addImageListeners();
        this.updateInfo();

        // Restart auto-sliding only if still in auto-play mode
        if (!this.isPausedByHover && !this.isZoomed && !Slideshow.globalPaused) {
            this.autoSlideTimeout = setTimeout(() => this.swap(), this.interval);
        }
    }
}

function createSlideshow(containerId, images) {
    currentLang = localStorage.getItem("language") || "en"; 
    const container = document.getElementById(containerId);
    if (!container) return;

    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");

    const banknoteIndex = containerId.replace("slide", "");
    slideshowContainer.setAttribute("data-banknote-index", banknoteIndex);

    images.forEach((image, index) => {
        const slide = document.createElement("div");
        slide.classList.add("mySlides", "fade");

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt[currentLang] || image.alt["en"];
        img.style.cursor = "pointer";
        
        slide.appendChild(img);

        // Store data attributes for later use
        slide.setAttribute("data-index", index);
        slide.setAttribute("data-total", images.length);
        if (image.description) {
            slide.setAttribute("data-description-en", image.description.en || "");
            slide.setAttribute("data-description-vi", image.description.vi || "");
        }

        slideshowContainer.appendChild(slide);
    });

    container.appendChild(slideshowContainer);
}

function generateSlideShowInfo(containerId, info, currentLang, slideIndex = 0) {
    currentLang = localStorage.getItem("language") || "en";
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // Clear old info

    const isFantasyBanknote = info.type && 
        ((typeof info.type === "object" && info.type.en === "Fantasy Banknote") || 
         info.type === "Fantasy Banknote");

    const labels = {
        en: { 
            issuer: isFantasyBanknote ? "Issuing Entity" : "Issuing Bank",
            year: "Year", 
            type: "Type", 
            figure: "Figure",
            size: "Dimension",
        },
        vi: { 
            issuer: isFantasyBanknote ? "Tổ Chức Phát Hành" : "Ngân Hàng Phát Hành",
            year: "Năm", 
            type: "Loại", 
            figure: "Vĩ Nhân",
            size: "Kích Thước", 
        }
    };

    const infoDiv = document.createElement("div");
    infoDiv.className = "slideshow-info";
    infoDiv.style.position = "relative";
    infoDiv.style.overflow = "hidden";

    // Add NEW label if the item is marked as new
    if (info.new) {
        const newLabel = document.createElement("div");
        newLabel.className = "new-label";
        newLabel.textContent = currentLang === "en" ? "NEW" : "MỚI";        
        infoDiv.appendChild(newLabel);
    }

    function addInfoElement(labelKey, value) {
        if (value !== null && value !== undefined) {
            const localized = typeof value === "object" && !Array.isArray(value)
                ? (value[currentLang] || value["en"])
                : value;
            const p = document.createElement("p");
            p.innerHTML = `<strong>${labels[currentLang][labelKey]}:</strong> ${localized}`;
            infoDiv.appendChild(p);
        }
    }

    if (info.title) {
        const titleElement = document.createElement("h3");
        titleElement.textContent = info.title[currentLang] || info.title["en"];
        infoDiv.appendChild(titleElement);
    }

    addInfoElement("issuer", info.issuer);
    addInfoElement("year", info.year);
    addInfoElement("type", info.type);
    
    if (info.figure) {
        let figureData;
        if (Array.isArray(info.figure)) {
            figureData = info.figure[slideIndex] || info.figure[0] || null;
        } else {
            figureData = info.figure;
        }
        addInfoElement("figure", figureData);
    }
    
    addInfoElement("size", info.size);

    // Add regular note
    if (info.note) {
        const noteElement = document.createElement("p");
        const noteContent = document.createElement("em");
        noteContent.style.fontSize = "17px";
        noteContent.innerHTML = typeof info.note === "object" ? info.note[currentLang] : info.note;
        noteElement.appendChild(noteContent);
        infoDiv.appendChild(noteElement);
    }

    // Add special note with rainbow effect
    if (info.special) {
        const specialElement = document.createElement("p");
        const specialContent = document.createElement("em");
        specialContent.className = "rainbow-text";
        specialContent.style.fontSize = "17px";
        specialContent.innerHTML = typeof info.special === "object" ? info.special[currentLang] : info.special;
        specialElement.appendChild(specialContent);
        infoDiv.appendChild(specialElement);
    }

    const parentContainer = container.parentElement;
    const slideshowContainerForInfo = parentContainer ? parentContainer.querySelector('.slideshow-container') : null;

    if (slideshowContainerForInfo) {
        // Clear old overlay elements (avoid stacking)
        const oldDesc = slideshowContainerForInfo.querySelector('.description');
        const oldNumber = slideshowContainerForInfo.querySelector('.numbertext');
        const oldBanknote = slideshowContainerForInfo.querySelector('.banknote-counter');
        if (oldDesc) oldDesc.remove();
        if (oldNumber) oldNumber.remove();
        if (oldBanknote) oldBanknote.remove();

        const currentSlide = slideshowContainerForInfo.querySelector('.mySlides[style*="display: block"]');
        const slides = slideshowContainerForInfo.querySelectorAll('.mySlides');

        // Description (bottom-left overlay)
        if (currentSlide) {
            const descriptionText = currentSlide.getAttribute(`data-description-${currentLang}`) || 
                                   currentSlide.getAttribute('data-description-en');
            if (descriptionText) {
                const descriptionDiv = document.createElement("div");
                descriptionDiv.className = "description";
                descriptionDiv.textContent = descriptionText;
                slideshowContainerForInfo.appendChild(descriptionDiv);
            }
        }

        // Number text (bottom-right overlay)
        if (slides.length > 0) {
            const numberTextDiv = document.createElement("div");
            numberTextDiv.className = "numbertext";
            numberTextDiv.textContent = `${slideIndex + 1} / ${slides.length}`;
            slideshowContainerForInfo.appendChild(numberTextDiv);
        }

        // Banknote counter (top-right overlay)
        const banknoteIndex = slideshowContainerForInfo.getAttribute("data-banknote-index");
        if (banknoteIndex) {
            const banknoteDiv = document.createElement("div");
            banknoteDiv.className = "banknote-counter";
            banknoteDiv.textContent = `#${banknoteIndex}`;
            slideshowContainerForInfo.appendChild(banknoteDiv);
        }
    }

    container.appendChild(infoDiv);

    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}
//--// function to display information of banknote //--//

// expand the box of each category in the side bar of the collection (different box has different height)
function toggleCategories(id) {
    // Select all elements with the matching ID across both sidebars
    const categoryLists = document.querySelectorAll(`[id="${id}"]`);
    categoryLists.forEach(categoryList => {
        if (categoryList.style.maxHeight) {
            categoryList.style.maxHeight = null;
        } else {
            categoryList.style.maxHeight = (categoryList.scrollHeight + 10) + "px";
        }
    });
}

function toggleCollection(event) {
    event.preventDefault(); // Prevent navigation
    const collectionDropdown = document.getElementById("collection-dropdown");

    // Toggle visibility
    if (collectionDropdown.style.maxHeight && collectionDropdown.style.maxHeight !== "0px") {
        collectionDropdown.style.maxHeight = "0px";
    } else {
        collectionDropdown.style.maxHeight = collectionDropdown.scrollHeight + "px";
    }
}

function toggleMenuCollection() {
    const nav = document.getElementById('header-nav-media');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Show or hide the Back to Top button based on scroll position within .main-content for the money pages
const mainContent = document.getElementById('main-to-top');
const backToTopButton = document.getElementById('back-to-top');

// top button for the money pages
function scrollToTop() {
    const mainContent = document.getElementById('main-to-top');
    if (mainContent) {
        mainContent.scrollTo({
            top: 0,
        });
    }
}

function getPageNavigation() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();

    // COUNTRIES is already in reading order: continent by continent
    const allSlugs = Object.keys(COUNTRIES);
    const currentIndex = allSlugs.indexOf(currentPage.replace(/\.html$/, ''));

    if (currentIndex === -1) {
        return { prev: null, next: null };
    }

    const at = i => (i >= 0 && i < allSlugs.length)
        ? Object.assign({ slug: allSlugs[i], link: `${allSlugs[i]}.html` }, COUNTRIES[allSlugs[i]])
        : null;

    return { prev: at(currentIndex - 1), next: at(currentIndex + 1) };
}

function createNavigationButtons() {
    const nav = getPageNavigation();
    const navContainer = document.getElementById('page-navigation');
    
    if (!navContainer) return;
    
    navContainer.innerHTML = '';   
    if (nav.prev) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'nav-button prev-button';
        const prevName = nav.prev['short_' + currentLang] || nav.prev[currentLang];
        prevBtn.innerHTML = `\u2190 <span class="country-name">${prevName}</span>`;
        prevBtn.onclick = () => window.location.href = nav.prev.link;
        navContainer.appendChild(prevBtn);
    }
    
    if (nav.next) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'nav-button next-button';
        const nextName = nav.next['short_' + currentLang] || nav.next[currentLang];
        nextBtn.innerHTML = `<span class="country-name">${nextName}</span> \u2192`;
        nextBtn.onclick = () => window.location.href = nav.next.link;
        navContainer.appendChild(nextBtn);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    currentLang = localStorage.getItem('language') || 'en';

    updatePageLanguage(currentLang);
    updatePageHeading(currentLang);
    insertSidebarHTML('SideBar'); 
    insertSidebarHTML('SideBarCollection'); 
    createNavigationButtons();

    const mainContent = document.getElementById('main-to-top');
    const backToTopButton = document.getElementById('back-to-top');

    if (mainContent && backToTopButton) {
        mainContent.addEventListener('scroll', () => {
            if (mainContent.scrollTop > 200) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }

    if (typeof images !== 'undefined') {
        Object.keys(images).forEach(index => {
            // Build the slide images
            createSlideshow("slide" + index, images[index]);

            // Start the slideshow, and pass info config
            new Slideshow("slide" + index, 5000, {
                containerId: "info" + index,
                data: slideshowInfo[index]
            });
        });
    }
});
