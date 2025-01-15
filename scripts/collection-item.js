//--// function to print out code for sidebar //--//
function insertSidebarHTML(id) {
    const sidebarHTML = `
        <div class="sidebar">
            <h2 onclick="toggleCategories('north-america')">North America</h2>
            <ul id="north-america">
                <li onclick="navigateTo('canada.html')">Canada</li>
                <li onclick="navigateTo('mexico.html')">Mexico</li>
                <li onclick="navigateTo('usa.html')">United States of America</li>
            </ul>

            <h2 onclick="toggleCategories('africa')">Africa</h2>
            <ul id="africa">
                <li onclick="navigateTo('drc.html')">Democratic Republic of the Congo</li>
                <li onclick="navigateTo('egypt.html')">Egypt</li>
                <li onclick="navigateTo('ethiopia.html')">Ethiopia</li>
                <li onclick="navigateTo('ghana.html')">Ghana</li>
                <li onclick="navigateTo('guinea.html')">Guinea</li>
                <li onclick="navigateTo('kenya.html')">Kenya</li>
                <li onclick="navigateTo('malawi.html')">Malawi</li>
                <li onclick="navigateTo('mauritius.html')">Mauritius</li>
                <li onclick="navigateTo('rwanda.html')">Rwanda</li>
                <li onclick="navigateTo('somalia.html')">Somalia</li>
            </ul>

            <h2 onclick="toggleCategories('europe')">Europe</h2>
            <ul id="europe">
                <li onclick="navigateTo('belarus.html')">Belarus</li>
                <li onclick="navigateTo('england.html')">England</li>
                <li onclick="navigateTo('eu.html')">European Union</li>
                <li onclick="navigateTo('ireland.html')">Ireland</li>
                <li onclick="navigateTo('italy.html')">Italy</li>
                <li onclick="navigateTo('moldova.html')">Moldova</li>
                <li onclick="navigateTo('norway.html')">Norway</li>
                <li onclick="navigateTo('russia.html')">Russia</li>
                <li onclick="navigateTo('scotland.html')">Scotland</li>
                <li onclick="navigateTo('transnistria.html')">Transnistria</li>
                <li onclick="navigateTo('turkey.html')">Turkey</li>
                <li onclick="navigateTo('ukraine.html')">Ukraine</li>
            </ul>

            <h2 onclick="toggleCategories('asia')">Asia</h2>
            <ul id="asia">
                <li onclick="navigateTo('bangladesh.html')">Bangladesh</li>
                <li onclick="navigateTo('bhutan.html')">Bhutan</li>
                <li onclick="navigateTo('cambodia.html')">Cambodia</li>
                <li onclick="navigateTo('china.html')">China</li>
                <li onclick="navigateTo('hongkong.html')">Hongkong</li>
                <li onclick="navigateTo('india.html')">India</li>
                <li onclick="navigateTo('indonesia.html')">Indonesia</li>
                <li onclick="navigateTo('iran.html')">Iran</li>
                <li onclick="navigateTo('israel.html')">Israel</li>
                <li onclick="navigateTo('japan.html')">Japan</li>
                <li onclick="navigateTo('laos.html')">Laos</li>
                <li onclick="navigateTo('malaysia.html')">Malaysia</li>
                <li onclick="navigateTo('mogolia.html')">Mongolia</li>
                <li onclick="navigateTo('myanmar.html')">Myanmar</li>
                <li onclick="navigateTo('nepal.html')">Nepal</li>
                <li onclick="navigateTo('north-korea.html')">North Korea</li>
                <li onclick="navigateTo('oman.html')">Oman</li>
                <li onclick="navigateTo('pakistan.html')">Pakistan</li>
                <li onclick="navigateTo('saudi-arabia.html')">Saudi Arabia</li>
                <li onclick="navigateTo('singapore.html')">Singapore</li>
                <li onclick="navigateTo('south-korea.html')">South Korea</li>
                <li onclick="navigateTo('taiwan.html')">Taiwan</li>
                <li onclick="navigateTo('thailand.html')">Thailand</li>
                <li onclick="navigateTo('turkmenistan.html')">Turkmenistan</li>
                <li onclick="navigateTo('uzbekistan.html')">Uzbekistan</li>
                <li onclick="navigateTo('vietnam.html')">Vietnam</li>
            </ul>

            <h2 onclick="toggleCategories('oceania')">Oceania</h2>
            <ul id="oceania">
                <li onclick="navigateTo('australia.html')">Australia</li>
            </ul>

            <h2 onclick="toggleCategories('arctic')">Arctic</h2>
            <ul id="arctic">
                <li onclick="navigateTo('arctic-territories.html')">Arctic Territories</li>
            </ul>

            <h2 onclick="toggleCategories('antartica')">Antartica</h2>
            <ul id="antartica">
                <li onclick="navigateTo('kerguelen-islands.html')">Kerguelen Islands</li>
            </ul>
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
function generateSlideShowInfo(containerId, title, year, type, size, figure) {
    // Create the container div
    const infoDiv = document.createElement("div");
    infoDiv.className = "slideshow-info";

    // Create the title (h3)
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    infoDiv.appendChild(titleElement);

    // Create the year paragraph
    const yearElement = document.createElement("p");
    yearElement.innerHTML = `<strong>Year:</strong> ${year}`;
    infoDiv.appendChild(yearElement);

    // Create the type paragraph
    const typeElement = document.createElement("p");
    typeElement.innerHTML = `<strong>Type:</strong> ${type}`;
    infoDiv.appendChild(typeElement);

    // Create the size paragraph
    const sizeElement = document.createElement("p");
    sizeElement.innerHTML = `<strong>Size:</strong> ${size}`;
    infoDiv.appendChild(sizeElement);

    // Create the figure paragraph
    const figureElement = document.createElement("p");
    figureElement.innerHTML = `<strong>Figure:</strong> ${figure}`;
    infoDiv.appendChild(figureElement);

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