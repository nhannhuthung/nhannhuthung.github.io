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

function searchPage() {
  const pages = {
      "index": ["home", "homepage", "index"],
      "collection": ["collection", "collections", "collect"],
      "about": ["about", "information", "info"],
      "contact": ["contact", "contanct us"]
  };

  // Define countries and their associated pages
  const countries = {
      "canada": ["canada"],
      "colombia": ["colombia", "republic of colombia"],
      "costa-rica": ["costa rica", "republic of costa rica"],
      "mexico": ["mexico", "united mexican states"],
      "usa": ["usa", "united states of america", "america"],
      "venezuela": ["venezuela", "bolivarian republic of venezuela"],

      "drc": ["drc", "democratic republic of congo", "dr congo", "congo"],
      "egypt": ["egypt", "arab republic of egypt"],
      "ethiopia": ["ethiopia", "federal democratic republic of ethiopia"],
      "ghana": ["ghana", "republic of ghana"],
      "guinea": ["guinea", "republic of guinea"],
      "kenya": ["kenya", "republic of kenya"],
      "malawi": ["malawi", "republic of malawi"],
      "mauritius": ["mauritius", "republic of mauritius"],
      "rwanda": ["rwanda", "republic of rwanda"],
      "somalia": ["somalia", "federal republic of somalia"],
      "west-africa": ["west africa, western africa"],
      "zambia": ["zambia", "republic of zambia"],

      "belarus": ["belarus", "republic of belarus"],
      "croatia": ["croatia", "republic of croatia"],
      "england": ["england"],
      "eu": ["eu", "european union"],
      "ireland": ["ireland", "republic of ireland"],
      "italy": ["italy"],
      "moldova": ["moldova", "republic of moldova"],
      "norway": ["norway", "kingdom of norway"],
      "russia": ["russia", "russian federation"],
      "scotland": ["scotland"],
      "transnistria": ["transnistria"],
      "ukraine": ["ukraine"],

      "bangladesh": ["bangladesh", "people's republic of bangladesh"],
      "bhutan": ["bhutan", "kingdom of bhutan"],
      "cambodia": ["cambodia", "kingdom of cambodia"],
      "china": ["china", "people's republic of china"],
      "hong-kong": ["hong kong"],
      "india": ["india", "republic of india"],
      "indonesia": ["indonesia", "indo", "republic of indonesia"],
      "iran": ["iran", "islamic republic of iran"],
      "israel": ["israel", "state of israel"],
      "japan": ["japan"],
      "kyrgyzstan": ["kyrgyzstan", "kyrgyz republic"],
      "laos": ["laos", "lao people's democratic republic"],
      "lebanon": ["lebanon", "republic of lebanon"],
      "malaysia": ["malaysia", "malay"],
      "mongolia": ["mongolia"],
      "myanmar": ["myanmar", "burma"],
      "nepal": ["nepal", "federal democratic republic of nepal"],
      "north-korea": ["north korea", "democratic people's republic of korea"],
      "oman": ["oman", "sultanate of oman"],
      "pakistan": ["pakistan", "islamic republic of pakistan"],
      "saudi-arabia": ["saudi arabia", "kingdom of saudi arabia"],
      "singapore": ["singapore", "sing", "republic of singapore"],
      "south-korea": ["south korea", "korea", "republic of korea"],
      "taiwan": ["taiwan", "republic of china"],
      "tajikistan": ["tajikistan", "republic of tajikistan"],
      "thailand": ["thailand", "kingdom of thailand"],
      "turkey": ["turkey", "republic of turkiye"],
      "turkmenistan": ["turkmenistan"],
      "uzbekistan": ["uzbekistan", "republic of uzbekistan"],
      "vietnam": ["vietnam", "viet nam", "socialist republic of vietnam"],

      "australia": ["australia", "commonwealth of australia"],

      "arctic-territories": ["arctic territories"],
      
      "kerguelen-islands": ["kerguelen islands"]
  };

  const inputField = document.getElementById("searchInput");
  const input = inputField.value.trim().toLowerCase();  // Clean and standardize the input

  let foundPage = null;
  // Check if the input matches any of the country keywords
  for (let country in countries) {
      if (countries[country].some(keyword => input === keyword.toLowerCase())) {
        inputField.value = ""; // Clear the input field
        foundPage = window.location.href.includes("/collection/") 
        ? `${country}.html`  // If already in the 'collection' folder, no need to add 'collection/'
        : `collection/${country}.html`;  // Otherwise, add 'collection/' folder
        break; // Stop checking once a match is found
      }
  }

  // If it's not a country, check the specific pages (contact, about, collection)
  if (!foundPage) {
    for (let page in pages) {
        if (pages[page].includes(input)) {
            // If inside "countries" folder, we need to navigate back
            if (window.location.href.includes("/collection/")) {
                foundPage = `../${page}.html`;
            } else {
                foundPage = `${page}.html`;
            }
            break;
        }
    }
}

  if (foundPage) {
    inputField.value = ""; // Clear input field
    window.location.href = foundPage;
  } else {
    alert("Page not found. Please enter a valid page name.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchInput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          searchPage();
      }
  });
});