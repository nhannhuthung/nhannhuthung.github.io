/* Light/dark theming lives in scripts/theme.js, which every page
   (index.html included) loads in <head> ahead of this file. */

// Navigation to other pagaes
function navigateTo(page) {
    window.location.href = page;
}

// Top button for the main page
let top_button = document.getElementById("top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

// Function for showing the top button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
}

// Function for going to the top of the page
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

// COUNTRIES, PAGES and the searchKeywords() helper come from
// scripts/regions.js, which every page loads before this file.

// Toggle the search bar
/* -------------------------
   Search / suggestion logic
   ------------------------- */

function searchPage() {
  const inputField = document.getElementById("searchInput");
  let rawInput = inputField.value.trim().toLowerCase();
  let modifiedInput = rawInput.replace(/-/g, " ");

  const currentPath = window.location.pathname;
  const insideCountries = currentPath.includes("/collection/");

  let foundPage = null;

  // First, check if the input matches a country keyword
  for (const [slug, entry] of Object.entries(COUNTRIES)) {
    if (searchKeywords(entry).includes(modifiedInput)) {
      foundPage = countryHref(slug, insideCountries);
      break;
    }
  }

  // If no country match, check general pages
  if (!foundPage) {
    for (const [slug, entry] of Object.entries(PAGES)) {
      if (searchKeywords(entry).includes(modifiedInput)) {
        foundPage = insideCountries ? `../${slug}.html` : `${slug}.html`;
        break;
      }
    }
  }

  const alertMessages = {
    en: "There is no such page existed in Howl's website. Please enter a different page name or check the spelling.",
    vi: "Không có trang nào như vậy trong trang web của Hưng. Vui lòng nhập tên trang khác hoặc kiểm tra lại chính tả."
  };

  const currentLang = localStorage.getItem('language') || 'en';

  if (foundPage) {
    inputField.value = "";
    window.location.href = foundPage;
  } else {
    alert(alertMessages[currentLang]);
  }
}

// Toggle for mobile search icon/button (fixed behavior)
function toggleSearch(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("searchInput");

    // If container is already open
    if (searchContainer.classList.contains("active")) {
        // If user typed something -> perform search
        if (searchInput.value.trim() !== "") {
            searchPage();
            return;
        }
        // If input is empty -> close (toggle off)
        closeSearch();
        return;
    }

    // Otherwise open the search (toggle on) and focus input
    searchContainer.classList.add("active");
    setTimeout(() => searchInput.focus(), 50);
}

// Close search (remove active state + clear suggestions + clear input)
function closeSearch() {
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("searchInput");
    const suggestionBox = document.getElementById("suggestions");

    if (searchContainer) searchContainer.classList.remove("active");
    if (searchInput) searchInput.value = "";
    if (suggestionBox) {
        suggestionBox.style.display = "none";
        suggestionBox.innerHTML = "";
    }
}

// SINGLE DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("searchInput");
    const suggestionBox = document.getElementById("suggestions");
    const searchContainer = document.querySelector(".search-container");

    // Everything the bar can find, pages first then countries
    const searchable = Object.assign({}, PAGES, COUNTRIES);

    // Build keyword-to-key map
    const keywordMap = {};
    for (const [key, entry] of Object.entries(searchable)) {
        for (const kw of searchKeywords(entry)) {
            keywordMap[kw] = key;
        }
    }

    /* ---- walking the suggestions with the arrow keys ----
       activeIndex -1 means "nothing highlighted", and the field still holds
       what was typed. The arrows walk -1 .. last and back, writing the
       highlighted label into the field as they go, so Enter always submits
       whatever the bar is currently showing. */
    let activeIndex = -1;
    let typedValue = "";

    function suggestionItems() {
        return suggestionBox
            ? Array.from(suggestionBox.querySelectorAll(".suggestion-item"))
            : [];
    }

    function setActive(index) {
        const items = suggestionItems();
        items.forEach(el => el.classList.remove("active"));

        if (index < 0 || index >= items.length) {
            activeIndex = -1;
            inputField.value = typedValue;   // stepped back off the list
            return;
        }

        activeIndex = index;
        const item = items[index];
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest" });  // the box scrolls past 250px
        inputField.value = item.textContent;
    }

    function moveActive(step) {
        const items = suggestionItems();
        if (!items.length || suggestionBox.style.display === "none") return;

        // positions 0..items.length, where 0 is "what you typed"; wrap at both ends
        const span = items.length + 1;
        setActive(((activeIndex + 1 + step) % span + span) % span - 1);
    }

    inputField.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeSearch();
            return;
        }

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();   // stop the caret jumping to either end of the field
            moveActive(e.key === "ArrowDown" ? 1 : -1);
            return;
        }

        if (e.key === "Enter") {
            const open = suggestionBox && suggestionBox.style.display !== "none";
            const items = suggestionItems();
            // the highlighted suggestion, or the first one when none is highlighted
            const target = open ? (items[activeIndex] || items[0]) : null;
            if (target) {
                target.click();
            } else {
                searchPage();
            }
        }
    });

    // Input listener for suggestions
    inputField.addEventListener("input", function () {
        const input = this.value.trim().toLowerCase();
        if (!suggestionBox) return;

        // typing replaces any arrow-key selection
        typedValue = this.value;
        activeIndex = -1;

        if (input === "") {
            suggestionBox.style.display = "none";
            suggestionBox.innerHTML = "";
            return;
        }

        const foundKeys = new Set();
        const suggestions = [];

        for (const [kw, key] of Object.entries(keywordMap)) {
            if (kw.includes(input) && !foundKeys.has(key)) {
                foundKeys.add(key);
                const currentLang = localStorage.getItem('language') || 'en';
                const entry = searchable[key];
                const label = entry ? (entry[currentLang] || entry.en) : key;
                suggestions.push({ key, label });
            }
        }

        if (suggestions.length > 0) {
            suggestionBox.innerHTML = "";
            suggestions.forEach(s => {
                const item = document.createElement("div");
                item.className = "suggestion-item";
                item.textContent = s.label;
                item.onclick = () => {
                    inputField.value = s.label;
                    suggestionBox.style.display = "none";
                    navigateToMatch(s.key);
                };
                suggestionBox.appendChild(item);
            });
            suggestionBox.style.display = "block";
        } else {
            suggestionBox.style.display = "none";
            suggestionBox.innerHTML = "";
        }
    });

    // Outside click handler (won't fire when clicking inside searchContainer)
    document.addEventListener("click", function (e) {
        if (!searchContainer.contains(e.target)) {
            if (suggestionBox) {
                suggestionBox.style.display = "none";
            }
            // On small screens close the entire search
            if (window.innerWidth <= 768) {
                closeSearch();
            }
        }
    });

    function navigateToMatch(key) {
        const currentPath = window.location.pathname;
        const insideCountries = currentPath.includes("/collection/");

        const path = PAGES[key]
            ? (insideCountries ? `../${key}.html` : `${key}.html`)
            : countryHref(key, insideCountries);

        window.location.href = path;
    }

    // Close search on resize (mobile → desktop)
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeSearch();
        }
    });
});

