//--// function to print out code for sidebar //--//
function createCategory(title, id, items) {
    let categoryHTML = `<h2 onclick="toggleCategories('${id}')">${title}</h2>`;
    categoryHTML += `<ul id="${id}">`;
    items.forEach(item => {
        categoryHTML += `<li onclick="navigateTo('${item.link}')">${item.name}</li>`;
    });
    categoryHTML += `</ul>`;
    return categoryHTML;
}

function insertSidebarHTML(id) {
    const sidebarHTML = `
        <div class="sidebar">
            ${createCategory("America", "america", [
                { name: "Canada", link: "canada.html" },
                { name: "Colombia", link: "colombia.html" },
                { name: "Costa Rica", link: "costa-rica.html" },
                { name: "Mexico", link: "mexico.html" },
                { name: "United States of America", link: "usa.html" },
                { name: "Venezuela", link: "venezuela.html" }
            ])}

            ${createCategory("Africa", "africa", [
                { name: "Democratic Republic of the Congo", link: "drc.html" },
                { name: "Egypt", link: "egypt.html" },
                { name: "Ethiopia", link: "ethiopia.html" },
                { name: "Ghana", link: "ghana.html" },
                { name: "Guinea", link: "guinea.html" },
                { name: "Kenya", link: "kenya.html" },
                { name: "Malawi", link: "malawi.html" },
                { name: "Mauritius", link: "mauritius.html" },
                { name: "Rwanda", link: "rwanda.html" },
                { name: "Somalia", link: "somalia.html" },
                { name: "West Africa", link: "west-africa.html" },
                { name: "Zambia", link: "zambia.html" }
            ])}

            ${createCategory("Europe", "europe", [
                { name: "Belarus", link: "belarus.html" },
                { name: "Croatia", link: "croatia.html" },
                { name: "England", link: "england.html" },
                { name: "European Union", link: "eu.html" },
                { name: "Ireland", link: "ireland.html" },
                { name: "Italy", link: "italy.html" },
                { name: "Moldova", link: "moldova.html" },
                { name: "Norway", link: "norway.html" },
                { name: "Russia", link: "russia.html" },
                { name: "Scotland", link: "scotland.html" },
                { name: "Transnistria", link: "transnistria.html" },
                { name: "Turkey", link: "turkey.html" },
                { name: "Ukraine", link: "ukraine.html" }
            ])}

            ${createCategory("Asia", "asia", [
                { name: "Bangladesh", link: "bangladesh.html" },
                { name: "Bhutan", link: "bhutan.html" },
                { name: "Cambodia", link: "cambodia.html" },
                { name: "China", link: "china.html" },
                { name: "Hong Kong", link: "hongkong.html" },
                { name: "India", link: "india.html" },
                { name: "Indonesia", link: "indonesia.html" },
                { name: "Iran", link: "iran.html" },
                { name: "Israel", link: "israel.html" },
                { name: "Japan", link: "japan.html" },
                { name: "Kyrgyzstan", link: "kyrgyzstan.html" },
                { name: "Laos", link: "laos.html" },
                { name: "Lebanon", link: "lebanon.html" },
                { name: "Malaysia", link: "malaysia.html" },
                { name: "Mongolia", link: "mogolia.html" },
                { name: "Myanmar", link: "myanmar.html" },
                { name: "Nepal", link: "nepal.html" },
                { name: "North Korea", link: "north-korea.html" },
                { name: "Oman", link: "oman.html" },
                { name: "Pakistan", link: "pakistan.html" },
                { name: "Saudi Arabia", link: "saudi-arabia.html" },
                { name: "Singapore", link: "singapore.html" },
                { name: "South Korea", link: "south-korea.html" },
                { name: "Taiwan", link: "taiwan.html" },
                { name: "Tajikistan", link: "tajikistan.html" },
                { name: "Thailand", link: "thailand.html" },
                { name: "Turkmenistan", link: "turkmenistan.html" },
                { name: "Uzbekistan", link: "uzbekistan.html" },
                { name: "Vietnam", link: "vietnam.html" }
            ])}

            ${createCategory("Oceania", "oceania", [
                { name: "Australia", link: "australia.html" }
            ])}

            ${createCategory("Arctic", "arctic", [
                { name: "Arctic Territories", link: "arctic-territories.html" }
            ])}

            ${createCategory("Antarctica", "antarctica", [
                { name: "Kerguelen Islands", link: "kerguelen-islands.html" }
            ])}
        </div>
    `;

    document.getElementById(id).innerHTML = sidebarHTML;
}

window.onload = function () {
    insertSidebarHTML('SideBar');
    insertSidebarHTML('SideBarCollection');
};
//--// function to print out code for sidebar //--//


//--// function to display banknote //--//
class Slideshow {
    constructor(containerId, interval = 5000) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container with id "${containerId}" not found.`);
            return;
        }
        this.slides = this.container.getElementsByClassName("mySlides");
        this.slideIndex = 0;
        this.interval = interval;
        this.autoSlideTimeout = null;

        // Start the slideshow
        this.showSlides();

        // Add event listener for manual swapping
        this.container.addEventListener("click", () => this.swap());
    }

    showSlides() {
        // Hide all slides
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }

        // Show the current slide
        //this.slideIndex = (this.slideIndex + 1) % this.slides.length;
        this.slides[this.slideIndex].style.display = "block";

        // Automatically transition to the next slide
        this.autoSlideTimeout = setTimeout(() => this.swap(), this.interval);
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

        // Restart auto-sliding
        this.autoSlideTimeout = setTimeout(() => this.swap(), this.interval);
    }
}

function createSlideshow(containerId, images) {
    // Find the container where the slideshow will be added
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found.`);
        return;
    }

    // Create the main slideshow container
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");

    // Loop through the images array to create slides
    images.forEach((image, index) => {
        // Create the slide
        const slide = document.createElement("div");
        slide.classList.add("mySlides", "fade");

        // Add the number text
        const numberText = document.createElement("div");
        numberText.classList.add("numbertext");
        numberText.textContent = `${index + 1} / ${images.length}`;
        slide.appendChild(numberText);

        // Add the image
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt || "";
        slide.appendChild(img);

        // Add the description
        if (image.description) {
            const description = document.createElement("div");
            description.classList.add("description");
            description.textContent = image.description;
            slide.appendChild(description);
        }

        // Append the slide to the slideshow container
        slideshowContainer.appendChild(slide);
    });

    // Add click functionality for swapping slides
    slideshowContainer.setAttribute("onclick", "swap()");

    // Append the slideshow container to the main container
    container.appendChild(slideshowContainer);
}
//--// function to display banknote //--//

//--// function to display information of banknote //--//
function generateSlideShowInfo(containerId, title, year, type, size, figure, note) {
    // Create the container div
    const infoDiv = document.createElement("div");
    infoDiv.className = "slideshow-info";

    // Helper function to create and append an element if the value is not empty
    function addInfoElement(label, value) {
        if (value) {
            const element = document.createElement("p");
            element.innerHTML = `<strong>${label}:</strong> ${value}`;
            infoDiv.appendChild(element);
        }
    }

    // Create and append elements only if they have values
    if (title) {
        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        infoDiv.appendChild(titleElement);
    }

    addInfoElement("Year", year);
    addInfoElement("Type", type);
    addInfoElement("Size", size);
    addInfoElement("Figure", figure);

    // Add note at the end in italic
    if (note) {
        const noteElement = document.createElement("p");
        noteElement.innerHTML = `<em>${note}</em>`;
        noteElement.style.fontSize = "16px";
        infoDiv.appendChild(noteElement);
    }

    // Append the created infoDiv to the specified container
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(infoDiv);
    } else {
        console.error(`Container with id "${containerId}" not found.`);
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