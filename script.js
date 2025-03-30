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

// Function for searching bar
function searchPage() {
  // Define pages with multiple keywords
  const pages = {
    "index": ["home", "homepage", "index"],
    "collection": ["collection", "collections", "collect"],
    "about": ["about", "information", "info"],
    "contact": ["contact", "contanct us"]
  };

  // Define country pages with multiple keywords
  const countries = {
    "canada": ["canada"],
    "colombia": ["colombia", "republic of colombia"],
    "costa-rica": ["costa rica", "republic of costa rica"],
    "mexico": ["mexico", "united mexican states", "mê hi cô"],
    "usa": ["usa", "united states of america", "united states", "america", "mỹ", "mĩ", "hoa kì", "hợp chủng quốc hoa kì"],
    "venezuela": ["venezuela", "bolivarian republic of venezuela"],

    "drc": ["drc", "democratic republic of congo", "dr congo", "congo"],
    "egypt": ["egypt", "arab republic of egypt", "ai cập"],
    "ethiopia": ["ethiopia", "federal democratic republic of ethiopia"],
    "ghana": ["ghana", "republic of ghana"],
    "guinea": ["guinea", "republic of guinea"],
    "kenya": ["kenya", "republic of kenya"],
    "malawi": ["malawi", "republic of malawi"],
    "mauritius": ["mauritius", "republic of mauritius"],
    "rwanda": ["rwanda", "republic of rwanda"],
    "somalia": ["somalia", "federal republic of somalia"],
    "west-africa": ["west africa, western africa", "tây phi"],
    "zambia": ["zambia", "republic of zambia"],

    "belarus": ["belarus", "republic of belarus"],
    "croatia": ["croatia", "republic of croatia"],
    "england": ["england", "anh", "anh quốc"],
    "eu": ["eu", "european union"],
    "ireland": ["ireland", "republic of ireland"],
    "italy": ["italy", "ý"],
    "moldova": ["moldova", "republic of moldova"],
    "norway": ["norway", "kingdom of norway", "na uy"],
    "russia": ["russia", "russian federation", "nga"],
    "scotland": ["scotland", "kingdom of scotland"],
    "transnistria": ["transnistria"],
    "ukraine": ["ukraine"],

    "bangladesh": ["bangladesh", "people's republic of bangladesh", "băng la đét"],
    "bhutan": ["bhutan", "kingdom of bhutan"],
    "cambodia": ["cambodia", "kingdom of cambodia", "campuchia", "cam pu chia"],
    "china": ["china", "people's republic of china", "trung quốc", "trung"],
    "hong-kong": ["hong kong", "hồng kông"],
    "india": ["india", "republic of india", "ấn độ", "ấn"],
    "indonesia": ["indonesia", "indo", "republic of indonesia"],
    "iran": ["iran", "islamic republic of iran"],
    "israel": ["israel", "state of israel"],
    "japan": ["japan", "nhật bản", "nhật"],
    "kyrgyzstan": ["kyrgyzstan", "kyrgyz republic"],
    "laos": ["laos", "lao people's democratic republic", "lào"],
    "lebanon": ["lebanon", "republic of lebanon", "li băng"],
    "malaysia": ["malaysia", "malay", "mã lai", "ma lai xi a"],
    "mongolia": ["mongolia", "mông cổ"],
    "myanmar": ["myanmar", "burma", "miến điện", "mi an ma"],
    "nepal": ["nepal", "federal democratic republic of nepal"],
    "north-korea": ["north korea", "democratic people's republic of korea", "triều tiên", "bắc triều tiên"],
    "oman": ["oman", "sultanate of oman"],
    "pakistan": ["pakistan", "islamic republic of pakistan"],
    "saudi-arabia": ["saudi arabia", "kingdom of saudi arabia", "a rập xê út"],
    "singapore": ["singapore", "republic of singapore", "xing ga po"],
    "south-korea": ["south korea", "korea", "republic of korea", "hàn quốc", "hàn"],
    "taiwan": ["taiwan", "republic of china", "đài loan", "đài"],
    "tajikistan": ["tajikistan", "republic of tajikistan"],
    "thailand": ["thailand", "kingdom of thailand", "thái lan", "thái"],
    "turkey": ["turkey", "republic of turkiye", "thổ nhĩ kỳ"],
    "turkmenistan": ["turkmenistan"],
    "uzbekistan": ["uzbekistan", "republic of uzbekistan"],
    "vietnam": ["vietnam", "viet nam", "socialist republic of vietnam", "việt nam"],

    "australia": ["australia", "commonwealth of australia", "úc"],

    "arctic-territories": ["arctic territories", "lãnh thổ bắc cực"],
    
    "kerguelen-islands": ["kerguelen islands", "kerguelen", "quần đảo kerguelen"]
  };
    

  const inputField = document.getElementById("searchInput");
  let rawInput = inputField.value.trim().toLowerCase(); // Get input and normalize case

  // ✅ Replace hyphens with spaces in a separate variable
  let modifiedInput = rawInput.replace(/-/g, " ");

  // Get current URL path to check if we're inside "/countries/"
  const currentPath = window.location.pathname;
  const insideCountries = currentPath.includes("/collection/");

  let foundPage = null;

  // First, check if the input matches a country keyword
  for (const [fileName, keywords] of Object.entries(countries)) {
    if (keywords.includes(modifiedInput)) {
      foundPage = insideCountries ? `${fileName}.html` : `collection/${fileName}.html`;
      break;
    }
  }

  // If no country match, check general pages
  if (!foundPage) {
    for (const [fileName, keywords] of Object.entries(pages)) {
      if (keywords.includes(modifiedInput)) {
        foundPage = insideCountries ? `../${fileName}.html` : `${fileName}.html`;
        break;
      }
    }
  }

  // Redirect if a match is found
  if (foundPage) {
    inputField.value = ""; // Clear input field
    window.location.href = foundPage;
  } else {
    alert("There is no such page existed in Howl's website. Please enter a different page name or check the spelling.");
  }
}

// 🔄 Attach event listener for Enter key press
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("searchInput");
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchPage();
    }
  });
});