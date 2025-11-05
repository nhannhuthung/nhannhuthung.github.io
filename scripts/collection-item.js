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
    },
    vi: {
        home: `Trang Chủ`,
        collection: `Bộ Sưu Tập`,
        about: `Giới Thiệu`,
        contact: `Liên Hệ`,
        search_placeholder: `Nhập tên trang...`,
        back_to_top: `Đầu`,
    }
};

const countryData = {
    "america": {
        "name": { "en": "America", "vi": "Châu Mỹ" },
        "countries": [
            { "en": "Brazil", "vi": "Brasil", "link": "brazil.html" },
            { "en": "Canada", "vi": "Canada", "link": "canada.html" },
            { "en": "Colombia", "vi": "Colombia", "link": "colombia.html" },
            { "en": "Costa Rica", "vi": "Costa Rica", "link": "costa-rica.html" },
            { "en": "Mexico", "vi": "Mexico", "link": "mexico.html" },
            { "en": "United States", "vi": "Hoa Kỳ", "link": "usa.html" },
            { "en": "Venezuela", "vi": "Venezuela", "link": "venezuela.html" },
        ]       
    },
    "africa": {
        "name": { "en": "Africa", "vi": "Châu Phi" },
        "countries": [
            { "en": "Democratic Republic of the Congo", "vi": "Cộng Hòa Dân Chủ Congo", "short_en": "DR Congo", "short_vi": "CH Congo", "link": "drc.html" },
            { "en": "Egypt", "vi": "Ai Cập", "link": "egypt.html" },
            { "en": "Ethiopia", "vi": "Ethiopia", "link": "ethiopia.html" },
            { "en": "Ghana", "vi": "Ghana", "link": "ghana.html" },
            { "en": "Guinea", "vi": "Guinea", "link": "guinea.html" },
            { "en": "Kenya", "vi": "Kenya", "link": "kenya.html" },
            { "en": "Malawi", "vi": "Malawi", "link": "malawi.html" },
            { "en": "Mauritius", "vi": "Mauritius", "link": "mauritius.html" },
            { "en": "Rwanda", "vi": "Rwanda", "link": "rwanda.html" },
            { "en": "Somalia", "vi": "Somalia", "link": "somalia.html" },
            { "en": "West African Economic And Monetary Union", "vi": "Liên Minh Kinh Tế Và Tiền Tệ Tây Phi","short_en": "WAEMU", "short_vi": "UEMOA", "link": "uemoa.html" },
            { "en": "Zambia", "vi": "Zambia", "link": "zambia.html" },
        ]
    },
    "europe": {
        "name": { "en": "Europe", "vi": "Châu Âu" },
        "countries": [
            { "en": "Belarus", "vi": "Belarus", "link": "belarus.html" },
            { "en": "Croatia", "vi": "Croatia", "link": "croatia.html" },
            { "en": "England", "vi": "Anh", "link": "england.html" },
            { "en": "European Union", "vi": "Liên Minh Châu Âu", "short_en": "EU", "short_vi": "EU", "link": "eu.html" },
            { "en": "France", "vi": "Pháp", "link": "france.html" },
            { "en": "Ireland", "vi": "Ireland", "link": "ireland.html" },
            { "en": "Italy", "vi": "Ý", "link": "italy.html" },
            { "en": "Moldova", "vi": "Moldova", "link": "moldova.html" },
            { "en": "Norway", "vi": "Na Uy", "link": "norway.html" },
            { "en": "Russia", "vi": "Nga", "link": "russia.html" },
            { "en": "Scotland", "vi": "Scotland", "link": "scotland.html" },
            { "en": "Switzerland", "vi": "Thụy Sĩ", "link": "switzerland.html" },
            { "en": "Transnistria", "vi": "Transnistria", "link": "transnistria.html" },
            { "en": "Ukraine", "vi": "Ukraine", "link": "ukraine.html" },
        ]
    },
    "asia": {
        "name": { "en": "Asia", "vi": "Châu Á"},
        "countries": [
            { "en": "Bangladesh", "vi": "Bangladesh", "link": "bangladesh.html" },
            { "en": "Bhutan", "vi": "Bhutan", "link": "bhutan.html" },
            { "en": "Cambodia", "vi": "Campuchia", "link": "cambodia.html" },
            { "en": "China", "vi": "Trung Quốc", "link": "china.html" },
            { "en": "Hong Kong", "vi": "Hồng Kông", "link": "hong-kong.html" },
            { "en": "India", "vi": "Ấn Độ", "link": "india.html" },
            { "en": "Indonesia", "vi": "Indonesia", "link": "indonesia.html" },
            { "en": "Iran", "vi": "Iran", "link": "iran.html" },
            { "en": "Israel", "vi": "Israel", "link": "israel.html" },
            { "en": "Japan", "vi": "Nhật Bản", "link": "japan.html" },
            { "en": "Kyrgyzstan", "vi": "Kyrgyzstan", "link": "kyrgyzstan.html" },
            { "en": "Laos", "vi": "Lào", "link": "laos.html" },
            { "en": "Lebanon", "vi": "Liban", "link": "lebanon.html" },
            { "en": "Macau", "vi": "Ma Cao", "link": "macau.html" },
            { "en": "Malaysia", "vi": "Malaysia", "link": "malaysia.html" },
            { "en": "Mongolia", "vi": "Mông Cổ", "link": "mongolia.html" },
            { "en": "Myanmar", "vi": "Myanmar", "link": "myanmar.html" },
            { "en": "Nepal", "vi": "Nepal", "link": "nepal.html" },
            { "en": "North Korea", "vi": "Triều Tiên", "link": "north-korea.html" },
            { "en": "Oman", "vi": "Oman", "link": "oman.html" },
            { "en": "Pakistan", "vi": "Pakistan", "link": "pakistan.html" },
            { "en": "Saudi Arabia", "vi": "Ả Rập Xê Út", "link": "saudi-arabia.html" },
            { "en": "Singapore", "vi": "Singapore", "link": "singapore.html" },
            { "en": "South Korea", "vi": "Hàn Quốc", "link": "south-korea.html" },
            { "en": "Syria", "vi": "Syria", "link": "syria.html" },
            { "en": "Taiwan", "vi": "Đài Loan", "link": "taiwan.html" },
            { "en": "Tajikistan", "vi": "Tajikistan", "link": "tajikistan.html" },
            { "en": "Thailand", "vi": "Thái Lan", "link": "thailand.html" },
            { "en": "Turkey", "vi": "Thổ Nhĩ Kỳ", "link": "turkey.html" },
            { "en": "Turkmenistan", "vi": "Turkmenistan", "link": "turkmenistan.html" },
            { "en": "Uzbekistan", "vi": "Uzbekistan", "link": "uzbekistan.html" },
            { "en": "Vietnam", "vi": "Việt Nam", "link": "vietnam.html" },
        ]
    },
    "oceania": {
        "name": { "en": "Oceania", "vi": "Châu Úc" },
        "countries": [
            { "en": "Australia", "vi": "Úc", "link": "australia.html" },
        ]
    },
    "arctic": {
        "name": { "en": "Arctic", "vi": "Bắc Cực" },
        "countries": [
            { "en": "Arctic Territories", "vi": "Các Lãnh Thổ Bắc Cực", "link": "arctic-territories.html" },
        ]
    },
    "antartica": {
        "name": { "en": "Antarctica", "vi": "Nam Cực" },
        "countries": [
            { "en": "Kerguelen Islands", "vi": "Quần Đảo Kerguelen", "link": "kerguelen-islands.html"},
        ]
    },
};

function createCategory(categoryKey) {
    const category = countryData[categoryKey];
    const title = category.name[currentLang];
    const sortedCountries = category.countries.sort((a, b) => a[currentLang].localeCompare(b[currentLang]));
    
    let categoryHTML = `<h2 onclick="toggleCategories('${categoryKey}')">${title}</h2>`;
    categoryHTML += `<ul id="${categoryKey}">`;
    sortedCountries.forEach(item => {
        categoryHTML += `<li onclick="navigateTo('${item.link}')">${item[currentLang]}</li>`;
    });
    categoryHTML += `</ul>`;
    return categoryHTML;
}

function insertSidebarHTML(id) {
    let sidebarHTML = '<div class="sidebar">';
    Object.keys(countryData).forEach(categoryKey => {
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
    document.querySelectorAll(".slideshow-info").forEach(el => el.remove());

    Object.keys(images).forEach(index => {
        generateSlideShowInfo("info" + index, slideshowInfo[index]);
    });
}
//--// function to print out code for sidebar //--//


//--// function to display banknote //--//
class Slideshow {
    static allSlideshows = []; // Track all slideshow instances
    static globalPaused = false; // Global pause state
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

        // Add this instance to the global array
        Slideshow.allSlideshows.push(this);

        // Start the slideshow
        this.showSlides();

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
        playPauseBtn.innerHTML = "&#10074;&#10074;"; // Pause icon
        playPauseBtn.title = "Pause all slideshows";
        
        playPauseBtn.onclick = () => {
            Slideshow.toggleGlobalPlayPause(playPauseBtn);
        };

        document.body.appendChild(playPauseBtn);
    }

    static toggleGlobalPlayPause(button) {
        Slideshow.globalPaused = !Slideshow.globalPaused;
        
        if (Slideshow.globalPaused) {
            // Pause all slideshows
            button.innerHTML = "&#9654;"; // Play icon
            button.title = "Play all slideshows";
            Slideshow.allSlideshows.forEach(slideshow => {
                slideshow.pause();
            });
        } else {
            // Resume all slideshows
            button.innerHTML = "&#10074;&#10074;"; // Pause icon
            button.title = "Pause all slideshows";
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

        // Restart auto-sliding
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
    }

    resume() {
        if (!this.isZoomed && !this.isPausedByHover && !Slideshow.globalPaused) {
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

        // Automatically transition to the next slide
        if (!this.isPausedByHover && !this.isZoomed && !Slideshow.globalPaused) {
            this.autoSlideTimeout = setTimeout(() => this.swap(), this.interval);
        }
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

        // Restart auto-sliding
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
            size: "Size", 
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

    if (info.note) {
        const noteElement = document.createElement("p");
        const noteContent = document.createElement("em");
        noteContent.style.fontSize = "17px";
        noteContent.innerHTML = typeof info.note === "object" ? info.note[currentLang] : info.note;
        noteElement.appendChild(noteContent);
        infoDiv.appendChild(noteElement);
    }

    const parentContainer = container.parentElement;
    const slideshowContainerForInfo = parentContainer ? parentContainer.querySelector('.slideshow-container') : null;

    if (slideshowContainerForInfo) {
        // Clear old overlay elements (avoid stacking)
        const oldDesc = slideshowContainerForInfo.querySelector('.description');
        const oldNumber = slideshowContainerForInfo.querySelector('.numbertext');
        if (oldDesc) oldDesc.remove();
        if (oldNumber) oldNumber.remove();

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
    
    // Flatten all countries into a single array
    const allPages = [];
    Object.keys(countryData).forEach(categoryKey => {
        countryData[categoryKey].countries.forEach(country => {
            allPages.push(country);
        });
    });
    
    // Find current page index
    const currentIndex = allPages.findIndex(page => page.link === currentPage);
    
    if (currentIndex === -1) {
        return { prev: null, next: null };
    }
    
    return {
        prev: currentIndex > 0 ? allPages[currentIndex - 1] : null,
        next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null
    };
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