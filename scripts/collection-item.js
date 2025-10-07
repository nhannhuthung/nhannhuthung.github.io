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
        updateSlideshowDescriptions(index, currentLang);
    });
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

    Object.keys(images).forEach(index => {
        // Build the slide images
        createSlideshow("slide" + index, images[index]);

        // Start the slideshow, and pass info config
        new Slideshow("slide" + index, 5000, {
            containerId: "info" + index,
            data: slideshowInfo[index]
        });
    });
});
//--// function to print out code for sidebar //--//


//--// function to display banknote //--//
class Slideshow {
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
        this.infoConfig = infoConfig;

        // Start the slideshow
        this.showSlides();

        // Add event listener for manual swapping
        this.container.addEventListener("click", () => this.swap());
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

    addHoverListeners() {
        const currentSlide = this.slides[this.slideIndex];
        const img = currentSlide.querySelector("img");
        if (!img) return;

        img.onmouseenter = () => {
            this.isPausedByHover = true;
            this.pause();
        };

        img.onmouseleave = () => {
            this.isPausedByHover = false;
            this.resume();
        };
    }

    pause() {
        clearTimeout(this.autoSlideTimeout);
    }

    resume() {
        this.autoSlideTimeout = setTimeout(() => this.swap(), this.interval);
    }

    showSlides() {
        // Hide all slides
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }

        // Show the current slide
        //this.slideIndex = (this.slideIndex + 1) % this.slides.length;     // display the second image first
        this.slides[this.slideIndex].style.display = "block";

        // Attach hover listeners to the current image
        this.addHoverListeners();
        this.updateInfo();

        // Automatically transition to the next slide
        if (!this.isPausedByHover) {
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

        // Re-attach hover listeners to the new image
        this.addHoverListeners();
        this.updateInfo();

        // Restart auto-sliding
        if (!this.isPausedByHover) {
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

        const numberText = document.createElement("div");
        numberText.classList.add("numbertext");
        numberText.textContent = `${index + 1} / ${images.length}`;
        slide.appendChild(numberText);

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt[currentLang] || image.alt["en"];

        img.addEventListener("mouseenter", () => {
            slide.classList.add("zooming");
        });

        img.addEventListener("mousemove", (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            img.style.transformOrigin = `${x}% ${y}%`;
        });
        
        img.addEventListener("mouseleave", () => {
            img.style.transformOrigin = "center center";
            slide.classList.remove("zooming");
        });
        
        slide.appendChild(img);

        if (image.description) {
            const description = document.createElement("div");
            description.classList.add("description");
            description.textContent = image.description[currentLang] || image.description.en;
            slide.appendChild(description);
        }

        slideshowContainer.appendChild(slide);
    });

    slideshowContainer.setAttribute("onclick", "swap()");
    container.appendChild(slideshowContainer);
}
//--// function to display banknote //--//

//--// function to display information of banknote //--//
function generateSlideShowInfo(containerId, info, currentLang, slideIndex = 0) {
    currentLang = localStorage.getItem("language") || "en";  // Retrieve stored language
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
    infoDiv.style.position = "relative"; // Add this line for positioning context
    infoDiv.style.overflow = "hidden"; // Prevent the label from overflowing

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
            // Use slideIndex if available, fallback to first entry
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

    container.appendChild(infoDiv);

    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}


function updateSlideshowDescriptions(slideIndex, currentLang) {
    currentLang = localStorage.getItem("language") || "en";  // Use stored language
    const slides = images[slideIndex];
    const slideDivs = document.querySelectorAll(`#slide${slideIndex} .mySlides`);
    
    slides.forEach((slide, index) => {
        const descriptionDiv = slideDivs[index].querySelector(".description");
        if (descriptionDiv) {
            descriptionDiv.textContent = slide.description[currentLang] || slide.description["en"];
        }
    });
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

mainContent.addEventListener('scroll', () => {
    if (mainContent.scrollTop > 200) { // Button appears after 200px of scrolling
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// top button for the money pages
function scrollToTop() {
    mainContent.scrollTo({
        top: 0,
    });
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