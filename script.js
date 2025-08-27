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

// Define pages with multiple keywords
const pages = {
  "index": ["home", "homepage", "index", "trang chủ"],
  "collection": ["collection", "collections", "collect", "sưu tầm", "bộ sưu tậm"],
  "about": ["about", "information", "info", "thông tin", "giới thiệu"],
  "contact": ["contact", "contanct us", "liên hệ", "liên lạc"]
};

// Define country pages with multiple keywords
const countries_list = {
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
  "uemoa": ["uemoa", "waemu", "west african economic and monetary union", "west africa, western africa", "liên minh kinh tế và tiền tệ tây phi", "tây phi"],
  "zambia": ["zambia", "republic of zambia"],

  "belarus": ["belarus", "republic of belarus"],
  "croatia": ["croatia", "republic of croatia"],
  "england": ["england", "anh", "anh quốc"],
  "eu": ["eu", "european union", "liên minh châu âu"],
  "france": ["france", "pháp"],
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
  "lebanon": ["lebanon", "republic of lebanon", "liban"],
  "macau": ["macau", "macao", "ma cao"],
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
  "syria": ["syria", "syrian arab republic"],
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

// Define country pages with suggested display names
const displayCountry = {
  "index": { en: "Home", vi: "Trang Chủ" },
  "collection": { en: "Collection", vi: "Bộ Sưu Tập" },
  "about": { en: "About", vi: "Giới Thiệu" },
  "contact": { en: "Contact", vi: "Liên Hệ" },

  "canada": { en: "Canada", vi: "Canada" },
  "colombia": { en: "Colombia", vi: "Colombia" },
  "costa-rica": { en: "Costa Rica", vi: "Costa Rica" },
  "mexico": { en: "Mexico", vi: "Mexico" },
  "usa": { en: "United States of America", vi: "Hợp Chủng Quốc Hoa Kỳ"},
  "venezuela": { en: "Venezuela", vi: "Venezuela" },

  "drc": { en: "Democratic Republic of the Congo", vi: "Cộng Hòa Dân Chủ Congo"},
  "egypt": { en: "Egypt", vi: "Ai Cập" },
  "ethiopia": { en: "Ethiopia", vi: "Ethiopia" },
  "ghana": { en: "Ghana", vi: "Ghana" },
  "guinea": { en: "Guinea", vi: "Guinea" },
  "kenya": { en: "Kenya", vi: "Kenya" },
  "malawi": { en: "Malawi", vi: "Malawi" },
  "mauritius": { en: "Mauritius", vi: "Mauritius" },
  "rwanda": { en: "Rwanda", vi: "Rwanda" },
  "somalia": { en: "Somalia", vi: "Somalia" },
  "uemoa": { en: "West African Economic And Monetary Union", vi: "Liên Minh Kinh Tế Và Tiền Tệ Tây Phi"},
  "zambia": { en: "Zambia", vi: "Zambia" },

  "belarus": { en: "Belarus", vi: "Belarus" },
  "croatia": { en: "Croatia", vi: "Croatia" },
  "england": { en: "England", vi: "Anh Quốc" },
  "eu": { en: "European Union", vi: "Liên Minh Châu Âu" },
  "france": { en: "France", vi: "Pháp" },
  "ireland": { en: "Ireland", vi: "Ireland" },
  "italy": { en: "Italy", vi: "Ý" },
  "moldova": { en: "Moldova", vi: "Moldova" },
  "norway": { en: "Norway", vi: "Na Uy" },
  "russia": { en: "Russia", vi: "Nga" },
  "scotland": { en: "Scotland", vi: "Scotland" },
  "transnistria": { en: "Transnistria", vi: "Transnistria" },
  "ukraine": { en: "Ukraine", vi: "Ukraine" },

  "bangladesh": { en: "Bangladesh", vi: "Băng La Đét" },
  "bhutan": { en: "Bhutan", vi: "Bhutan" },
  "cambodia": { en: "Cambodia", vi: "Campuchia" },
  "china": { en: "China", vi: "Trung Quốc" },
  "hong-kong": { en: "Hong Kong", vi: "Hồng Kông" },
  "india": { en: "India", vi: "Ấn Độ" },
  "indonesia": { en: "Indonesia", vi: "Indonesia" },
  "iran": { en: "Iran", vi: "Iran" },
  "israel": { en: "Israel", vi: "Israel" },
  "japan": { en: "Japan", vi: "Nhật Bản" },
  "kyrgyzstan": { en: "Kyrgyzstan", vi: "Kyrgyzstan" },
  "laos": { en: "Laos", vi: "Lào" },
  "lebanon": { en: "Lebanon", vi: "Liban" },
  "macau": { en: "Macau", vi: "Ma Cao" },
  "malaysia": { en: "Malaysia", vi: "Malaysia" },
  "mongolia": { en: "Mongolia", vi: "Mông Cổ" },
  "myanmar": { en: "Myanmar", vi: "Miến Điện" },
  "nepal": { en: "Nepal", vi: "Nepal" },
  "north-korea": { en: "North Korea", vi: "Triều Tiên" },
  "oman": { en: "Oman", vi: "Oman" },
  "pakistan": { en: "Pakistan", vi: "Pakistan" },
  "saudi-arabia": { en: "Saudi Arabia", vi: "Ả Rập Xê Út" },
  "singapore": { en: "Singapore", vi: "Singapore" },
  "south-korea": { en: "South Korea", vi: "Hàn Quốc" },
  "syria": { en: "Syria", vi: "Syria" },
  "taiwan": { en: "Taiwan", vi: "Đài Loan" },
  "tajikistan": { en: "Tajikistan", vi: "Tajikistan" },
  "thailand": { en: "Thailand", vi: "Thái Lan" },
  "turkey": { en: "Turkey", vi: "Thổ Nhĩ Kỳ" },
  "turkmenistan": { en: "Turkmenistan", vi: "Turkmenistan" },
  "uzbekistan": { en: "Uzbekistan", vi: "Uzbekistan" },
  "vietnam": { en: "Vietnam", vi: "Việt Nam" },

  "australia": { en: "Australia", vi: "Úc" },

  "arctic-territories": { en: "Arctic Territories", vi: "Lãnh Thổ Bắc Cực" },
  
  "kerguelen-islands": { en: "Kerguelen Islands", vi: "Quần Đảo Kerguelen" }
};

// Function for searching bar
function searchPage() {
  const inputField = document.getElementById("searchInput");
  let rawInput = inputField.value.trim().toLowerCase(); // Get input and normalize case
  let modifiedInput = rawInput.replace(/-/g, " "); // Replace hyphens with spaces in a separate variable

  // Get current URL path to check if we're inside "/countries/"
  const currentPath = window.location.pathname;
  const insideCountries = currentPath.includes("/collection/");

  let foundPage = null;

  // First, check if the input matches a country keyword
  for (const [fileName, keywords] of Object.entries(countries_list)) {
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

  const alertMessages = {
    en: "There is no such page existed in Howl's website. Please enter a different page name or check the spelling.",
    vi: "Không có trang nào như vậy trong trang web của Hưng. Vui lòng nhập tên trang khác hoặc kiểm tra lại chính tả."
  };

  // Get current language (default to English if not set)
  const currentLang = localStorage.getItem('language') || 'en';

  // Redirect if a match is found
  if (foundPage) {
    inputField.value = ""; // Clear input field
    window.location.href = foundPage;
  } else {
    alert(alertMessages[currentLang]);
  }
}

// Attach event listener for Enter key press
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("searchInput");
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchPage();
    }
  });
});

// For the search input field and suggestions box
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("searchInput");
  const suggestionBox = document.getElementById("suggestions");
  const currentLang = localStorage.getItem('language') || 'en';

  // Build keyword-to-key map
  const keywordMap = {};
  for (const [key, keywords] of Object.entries(pages)) {
    for (const kw of keywords) {
      keywordMap[kw.toLowerCase()] = key;
    }
  }
  for (const [key, keywords] of Object.entries(countries_list)) {
    for (const kw of keywords) {
      keywordMap[kw.toLowerCase()] = key;
    }
  }

  inputField.addEventListener("input", function () {
    const input = inputField.value.trim().toLowerCase();
    const currentLang = localStorage.getItem('language') || 'en';
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
        const label = displayCountry[key][currentLang] || displayCountry[key].en;
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
    }
  });

  // Hide box on outside click
  document.addEventListener("click", (e) => {
    if (!suggestionBox.contains(e.target) && e.target !== inputField) {
      suggestionBox.style.display = "none";
    }
  });

  function navigateToMatch(key) {
    const currentPath = window.location.pathname;
    const insideCountries = currentPath.includes("/collection/");
    const generalPages = ["index", "collection", "about", "contact"];

    let path;
    if (generalPages.includes(key)) {
      path = insideCountries ? `../${key}.html` : `${key}.html`;
    } else {
      path = insideCountries ? `${key}.html` : `collection/${key}.html`;
    }

    // For testing: just log the path instead of navigating
    console.log("Navigating to:", path);
    // Uncomment to enable navigation:
    window.location.href = path;
  }
});