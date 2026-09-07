const fixed_trans = {
    en: {
        home: `Home`,
        collection: `Collection`,
        about: `About`,
        contact: `Contact`,
        search_placeholder: `Enter page name...`,
        top_btn: `Top`,
        top_title: `Go to top`,
    },
    vi: {
        home: `Trang Chủ`,
        collection: `Bộ Sưu Tập`,
        about: `Giới Thiệu`,
        contact: `Liên Hệ`,
        search_placeholder: `Nhập tên trang...`,
        top_btn: `Đầu`,
        top_title: `Quay lại đầu trang`,
    }
};

const main_trans = {
    en: {
        acknowledge: `Acknowledgment`,
        acknowledge_para: `Welcome to my online money gallary! I would like to express my gratitude to everyone who has contributed to my collection. It truly wouldn't be as complete and meaningful without each of you. Your support and contributions have made all the difference.`,

        remark: `Remark`,
        remark_para_1: `I started my collection with only coins and I continue collecting them until now. However, since there are too many, I couldn't display all of them here.`,
        remark_para_2: `A few highlights about my coin collection:`,
        remark_subpara_1: `<span>&#9757;</span> There are around 70 regions, including no longer exsited regions (Yugoslavia, Czechslovakia, French Indochina, etc.).`,
        remark_subpara_2: `<span>&#9996;</span> I have a few silver coins and I display them in the highlight section right below.`,
        remark_para_3: `My collection is expanding with banknotes. Right now, I prefer collecting banknotes over coins because they are lighter, neater, and basically have higher value.`,

        last_update: `Last Updated:`,

        highlight: `Highlight`,
        banknote: `Banknote`,
        norway: `Norway`,
        hong_kong: `Hong Kong`,
        australia: `Australia`,
        south_korea: `South Korea`,
        coin: `Coin`,
        usa_coin: `USA ~ 1881-O ~ 1 Dollar`,
        indochina_coin: `Indochina ~ 1902 ~ 1 Piastre`,
        canada_coin: `Canada ~ 1967 ~ 1 Dollar`,
    },
    vi: {
        acknowledge: `Lời Cảm Ơn`,
        acknowledge_para: `Chào mừng đến với nơi trưng bày bộ sưu tập tiền online của mình! Mình xin bày tỏ lòng biết ơn đến mọi người đã đóng góp vào bộ sưu tập của mình. Nếu không có mọi người, bộ sưu tập sẽ không thể hoàn thiện và ý nghĩa như bây giờ. Mình rất biết ơn sự ủng hộ và đóng góp của mọi người.`,

        remark: `Tổng Quan`,
        remark_para_1: `Mình bắt đầu bộ sưu tập chỉ với những đồng xu và vẫn tiếp tục sưu tầm cho đến bây giờ. Tuy nhiên, vì số lượng quá nhiều, mình không thể đưa tất cả lên đây được.`,
        remark_para_2: `Một vài điểm nhấn về bộ sưu tập tiền xu của mình:`,
        remark_subpara_1: `<span>&#9757;</span> Có khoảng 70 khu vực, bao gồm những khu vực không còn tồn tại (Nam Tư, Tiệp Khắc, Liên Bang Đông Dương, ...).`,
        remark_subpara_2: `<span>&#9996;</span> Mình có vài đồng tiền bằng bạc và mình có để ở phần tâm điểm ngay bên dưới.`,
        remark_para_3: `Mình cũng mở rộng bộ sưu tập với tiền giấy. Hiện tại, mình tập trung vào sưu tầm tiền giấy nhiều hơn tiền xu tại vì nó nhẹ, gọn và cơ bản chúng có giá trị cao hơn.`,

        last_update: `Cập Nhật Lần Cuối:`,

        highlight: `Tâm Điểm`,
        banknote: `Tiền Giấy`,
        norway: `Na Uy`,
        hong_kong: `Hồng Kông`,
        australia: `Úc`,
        coin: `Tiền Xu`,
        usa_coin: `Mỹ ~ 1881-O ~ 1 Đô La`,
        indochina_coin: `Đông Dương ~ 1902 ~ 1 Đồng Vàng`,
        canada_coin: `Canada ~ 1967 ~ 1 Đô La`,
    }
};

const countries = {
    "americas": {
        "name": { "en": "Americas", "vi": "Châu Mỹ" },
        "regions": {
            "north-america": {
                "name": { "en": "North America", "vi": "Bắc Mỹ" },
                "countries": [
                    { "en": "Canada", "vi": "Canada", "url": "collection/canada.html" },
                    { "en": "Mexico", "vi": "Mexico", "url": "collection/mexico.html" },
                    { "en": "United States", "vi": "Hoa Kỳ", "url": "collection/usa.html" },
                ]
            },
            "central-america": {
                "name": { "en": "Central America", "vi": "Trung Mỹ" },
                "countries": [
                    { "en": "Costa Rica", "vi": "Costa Rica", "url": "collection/costa-rica.html" },
                    { "en": "Honduras", "vi": "Honduras", "url": "collection/honduras.html" },
                ]
            },
            "caribbean": {
                "name": { "en": "Caribbean", "vi": "Caribe" },
                "countries": [
                    { "en": "Dominican Republic", "vi": "Cộng Hòa Dominica", "url": "collection/dominican-republic.html" },
                ]
            },
            "south-america": {
                "name": { "en": "South America", "vi": "Nam Mỹ" },
                "countries": [
                    { "en": "Brazil", "vi": "Brasil", "url": "collection/brazil.html" },
                    { "en": "Colombia", "vi": "Colombia", "url": "collection/colombia.html" },
                    { "en": "Venezuela", "vi": "Venezuela", "url": "collection/venezuela.html" },
                ]
            },
        }
    },
    "africa": {
        "name": { "en": "Africa", "vi": "Châu Phi" },
        "regions": {
            "north-africa": {
                "name": { "en": "North Africa", "vi": "Bắc Phi" },
                "countries": [
                    { "en": "Egypt", "vi": "Ai Cập", "url": "collection/egypt.html" },
                ]
            },
            "west-africa": {
                "name": { "en": "West Africa", "vi": "Tây Phi" },
                "countries": [
                    { "en": "Ghana", "vi": "Ghana", "url": "collection/ghana.html" },
                    { "en": "Guinea", "vi": "Guinea", "url": "collection/guinea.html" },
                    { "en": "West African Economic And Monetary Union", "vi": "Liên Minh Kinh Tế Và Tiền Tệ Tây Phi", "url": "collection/uemoa.html" },
                ]
            },
            "central-africa": {
                "name": { "en": "Central Africa", "vi": "Trung Phi" },
                "countries": [
                    { "en": "Democratic Republic of the Congo", "vi": "Cộng Hòa Dân Chủ Congo", "url": "collection/drc.html" },
                ]
            },
            "east-africa": {
                "name": { "en": "East Africa", "vi": "Đông Phi" },
                "countries": [
                    { "en": "Ethiopia", "vi": "Ethiopia", "url": "collection/ethiopia.html" },
                    { "en": "Kenya", "vi": "Kenya", "url": "collection/kenya.html" },
                    { "en": "Malawi", "vi": "Malawi", "url": "collection/malawi.html"},
                    { "en": "Mauritius", "vi": "Mauritius", "url": "collection/mauritius.html"},
                    { "en": "Puntland", "vi": "Puntland", "url": "collection/puntland.html"},
                    { "en": "Rwanda", "vi": "Rwanda", "url": "collection/rwanda.html"},
                    { "en": "Somalia", "vi": "Somalia", "url": "collection/somalia.html"},
                ]
            },
            "southern-africa": {
                "name": { "en": "Southern Africa", "vi": "Nam Phi" },
                "countries": [
                    { "en": "Zambia", "vi": "Zambia", "url": "collection/zambia.html" },
                ]
            },
        }
    },
    "europe": {
        "name": { "en": "Europe", "vi": "Châu Âu" },
        "eu": { "en": "European Union", "vi": "Liên Minh Châu Âu", "url": "collection/eu.html" },
        "regions": {
            "northern-europe": {
                "name": { "en": "Northern Europe", "vi": "Bắc Âu" },
                "countries": [
                    { "en": "England", "vi": "Anh", "url": "collection/england.html" },
                    { "en": "Ireland", "vi": "Ireland", "url": "collection/ireland.html" },
                    { "en": "Norway", "vi": "Na Uy", "url": "collection/norway.html" },
                    { "en": "Scotland", "vi": "Scotland", "url": "collection/scotland.html" },
                    { "en": "Sweden", "vi": "Thụy Điển", "url": "collection/sweden.html" },
                ]
            },
            "western-europe": {
                "name": {"en": "Western Europe", "vi": "Tây Âu"},
                "countries": [
                    { "en": "France", "vi": "Pháp", "url": "collection/france.html"},
                    { "en": "Netherlands", "vi": "Hà Lan", "url": "collection/netherlands.html"},
                    { "en": "Switzerland", "vi": "Thụy Sĩ", "url": "collection/switzerland.html"},
                ]
            },
            "eastern-europe": {
                "name": { "en": "Eastern Europe", "vi": "Đông Âu" },
                "countries": [
                    { "en": "Belarus", "vi": "Belarus", "url": "collection/belarus.html" },
                    { "en": "Moldova", "vi": "Moldova", "url": "collection/moldova.html" },
                    { "en": "Russia", "vi": "Nga", "url": "collection/russia.html" },
                    { "en": "Transnistria", "vi": "Transnistria", "url": "collection/transnistria.html" },
                    { "en": "Ukraine", "vi": "Ukraine", "url": "collection/ukraine.html" },
                ]
            },
            "southern-europe": {
                "name": { "en": "Southern Europe", "vi": "Nam Âu" },
                "countries": [
                    { "en": "Croatia", "vi": "Croatia", "url": "collection/croatia.html" },
                    { "en": "Italy", "vi": "Ý", "url": "collection/italy.html" },
                    { "en": "Serbia", "vi": "Serbia", "url": "collection/serbia.html" },
                    { "en": "Yugoslavia", "vi": "Nam Tư", "url": "collection/yugoslavia.html" },
                ]
            },
        }
    },
    "asia": {
        "name": { "en": "Asia", "vi": "Châu Á"},
        "regions": {
            "mid-east-asia": {
                "name": { "en": "West Asia (Middle East)", "vi": "Tây Á (Trung Đông)" },
                "countries": [
                    { "en": "Iran", "vi": "Iran", "url": "collection/iran.html" },
                    { "en": "Israel", "vi": "Israel", "url": "collection/israel.html" },
                    { "en": "Lebanon", "vi": "Liban", "url": "collection/lebanon.html" },
                    { "en": "Oman", "vi": "Oman", "url": "collection/oman.html" },
                    { "en": "Saudi Arabia", "vi": "Ả Rập Xê Út", "url": "collection/saudi-arabia.html" },
                    { "en": "Syria", "vi": "Syria", "url": "collection/syria.html" },
                    { "en": "Turkiye", "vi": "Thổ Nhĩ Kỳ", "url": "collection/turkey.html" },
                    { "en": "United Arab Emirates", "vi": "Các Tiểu Vương Quốc Ả Rập Thống Nhất", "url": "collection/uae.html" },
                ]
            },
            "central-asia": {
                "name": { "en": "Central Asia", "vi": "Trung Á" },
                "countries": [
                    { "en": "Kyrgyzstan", "vi": "Kyrgyzstan", "url": "collection/kyrgyzstan.html" },
                    { "en": "Tajikistan", "vi": "Tajikistan", "url": "collection/tajikistan.html" },
                    { "en": "Turkmenistan", "vi": "Turkmenistan", "url": "collection/turkmenistan.html" },
                    { "en": "Uzbekistan", "vi": "Uzbekistan", "url": "collection/uzbekistan.html" },
                ]
            },
            "south-asia": {
                "name": { "en": "South Asia", "vi": "Nam Á" },
                "countries": [
                    { "en": "Bangladesh", "vi": "Bangladesh", "url": "collection/bangladesh.html" },
                    { "en": "Bhutan", "vi": "Bhutan", "url": "collection/bhutan.html" },
                    { "en": "India", "vi": "Ấn Độ", "url": "collection/india.html" },
                    { "en": "Nepal", "vi": "Nepal", "url": "collection/nepal.html" },
                    { "en": "Pakistan", "vi": "Pakistan", "url": "collection/pakistan.html" },
                ]
            },
            "east-asia": {
                "name": { "en": "East Asia", "vi": "Đông Á" },
                "countries": [
                    { "en": "China", "vi": "Trung Quốc", "url": "collection/china.html" },
                    { "en": "Hong Kong", "vi": "Hồng Kông", "url": "collection/hong-kong.html" },
                    { "en": "Japan", "vi": "Nhật Bản", "url": "collection/japan.html" },
                    { "en": "Macau", "vi": "Ma Cao", "url": "collection/macau.html" },
                    { "en": "Mongolia", "vi": "Mông Cổ", "url": "collection/mongolia.html" },
                    { "en": "North Korea", "vi": "Triều Tiên", "url": "collection/north-korea.html" },
                    { "en": "South Korea", "vi": "Hàn Quốc", "url": "collection/south-korea.html" },
                    { "en": "Taiwan", "vi": "Đài Loan", "url": "collection/taiwan.html" },
                ]
            },
            "south-east-asia": {
                "name": { "en": "South East Asia", "vi": "Đông Nam Á" },
                "countries": [
                    { "en": "Cambodia", "vi": "Campuchia", "url": "collection/cambodia.html" },
                    { "en": "Indochinese Union", "vi": "Liên Bang Đông Dương", "url": "collection/indochinese-union.html" },
                    { "en": "Indonesia", "vi": "Indonesia", "url": "collection/indonesia.html" },
                    { "en": "Laos", "vi": "Lào", "url": "collection/laos.html" },
                    { "en": "Malaysia", "vi": "Malaysia", "url": "collection/malaysia.html" },
                    { "en": "Myanmar", "vi": "Myanmar", "url": "collection/myanmar.html" },
                    { "en": "Philippines", "vi": "Philippines", "url": "collection/philippines.html" },
                    { "en": "Singapore", "vi": "Singapore", "url": "collection/singapore.html" },
                    { "en": "South Vietnam", "vi": "Việt Nam Cộng Hòa", "url": "collection/south-vietnam.html" },
                    { "en": "Thailand", "vi": "Thái Lan", "url": "collection/thailand.html" },
                    { "en": "Viet Nam", "vi": "Việt Nam", "url": "collection/viet-nam.html" },
                ]
            },
        }
    },
    "oceania": {
        "name": { "en": "Oceania", "vi": "Châu Úc" },
        "australia": { "en": "Australia", "vi": "Úc", "url": "collection/australia.html" },
        "regions": {
            "polynesia": {
                "name": { "en": "Polynesia", "vi": "Đa Đảo"},
                "countries": [
                    { "en": "New Zealand", "vi": "New Zealand", "url": "collection/new-zealand.html" },
                ]
            },
        }
    },
    "arctic": {
        "name": { "en": "Arctic", "vi": "Bắc Cực" },
        "arctic_territories": { "en": "Arctic Territories", "vi": "Lãnh Thổ Bắc Cực", "url": "collection/arctic-territories.html" },
    },
    "antartica": {
        "name": { "en": "Antarctica", "vi": "Nam Cực" },
        "kerguelen_islands": { "en": "Kerguelen Islands", "vi": "Quần Đảo Kerguelen", "url": "collection/kerguelen-islands.html" },
    },
};

let currentLang = localStorage.getItem('language') || "en"; // Default to English if no language is stored

function toggleLanguage() {
    currentLang = currentLang === "en" ? "vi" : "en"; // Toggle between English and Vietnamese
    localStorage.setItem('language', currentLang); // Save the current language in localStorage
    
    updatePageLanguage(currentLang);
    // generateCountryList(currentLang)

    if (selectedContinent) {
        showContinentDetails(selectedContinent);
    } else {
        showContinentPanels();
    }
}

function showContinentPanels() {
    selectedContinent = null;
    let container = document.getElementById("country-list");
    container.innerHTML = "";

    // Create regions wrapper with title
    let regionsWrapper = document.createElement("div");
    regionsWrapper.className = "regions-wrapper";
    
    let regionsHeading = document.createElement("h1");
    regionsHeading.className = "regions-heading";
    regionsHeading.innerText = currentLang === "en" ? "Regions" : "Các Khu Vực";
    regionsWrapper.appendChild(regionsHeading);

    let panelsContainer = document.createElement("div");
    panelsContainer.className = "continent-panels";

    Object.entries(countries).forEach(([key, continent]) => {
        let panel = document.createElement("div");
        panel.className = "continent-panel";
        panel.innerText = continent.name[currentLang];
        panel.onclick = () => showContinentDetails(key);
        panelsContainer.appendChild(panel);
    });

    regionsWrapper.appendChild(panelsContainer);
    container.appendChild(regionsWrapper);
}

function showContinentDetails(continentKey) {
    selectedContinent = continentKey;
    let container = document.getElementById("country-list");
    container.innerHTML = "";

    let continent = countries[continentKey];

    // Continent container
    let continentContainer = document.createElement("div");
    continentContainer.className = "container";

    // Back button inside container
    let backBtn = document.createElement("button");
    backBtn.className = "back-button";
    backBtn.innerText = currentLang === "en" ? "Back" : "Quay Lại";
    backBtn.onclick = showContinentPanels;
    continentContainer.appendChild(backBtn);

    // Continent title
    let continentTitle = document.createElement("h1");
    continentTitle.innerText = continent.name[currentLang];
    continentContainer.appendChild(continentTitle);

    // Handle special cases
    if (continent.eu) {
        let div = document.createElement("div");
        div.className = "category";
        let item = document.createElement("div");
        item.className = "category-item";
        item.innerText = continent.eu[currentLang];
        item.onclick = () => navigateTo(continent.eu.url);
        div.appendChild(item);
        continentContainer.appendChild(div);
    }

    if (continent.australia) {
        let div = document.createElement("div");
        div.className = "category";
        let item = document.createElement("div");
        item.className = "category-item";
        item.innerText = continent.australia[currentLang];
        item.onclick = () => navigateTo(continent.australia.url);
        div.appendChild(item);
        continentContainer.appendChild(div);
    }

    if (continent.arctic_territories) {
        let div = document.createElement("div");
        div.className = "category";
        let item = document.createElement("div");
        item.className = "category-item";
        item.innerText = continent.arctic_territories[currentLang];
        item.onclick = () => navigateTo(continent.arctic_territories.url);
        div.appendChild(item);
        continentContainer.appendChild(div);
    }

    if (continent.kerguelen_islands) {
        let div = document.createElement("div");
        div.className = "category";
        let item = document.createElement("div");
        item.className = "category-item";
        item.innerText = continent.kerguelen_islands[currentLang];
        item.onclick = () => navigateTo(continent.kerguelen_islands.url);
        div.appendChild(item);
        continentContainer.appendChild(div);
    }


    // Handle regions
    if (continent.regions) {
        Object.values(continent.regions).forEach(region => {
            let regionTitle = document.createElement("h2");
            regionTitle.innerText = region.name[currentLang];
            continentContainer.appendChild(regionTitle);

            let categoryDiv = document.createElement("div");
            categoryDiv.className = "category";

            let countryList = [...region.countries].sort((a, b) => 
                a[currentLang].localeCompare(b[currentLang])
            );

            countryList.forEach(country => {
                let countryDiv = document.createElement("div");
                countryDiv.className = "category-item";
                countryDiv.innerText = country[currentLang];
                countryDiv.onclick = () => navigateTo(country.url);
                categoryDiv.appendChild(countryDiv);
            });

            continentContainer.appendChild(categoryDiv);
        });
    }

    container.appendChild(continentContainer);
}

function navigateTo(url) {
    window.location.href = url;
}

// Look up a key in main_trans first (page content), then fixed_trans (shared nav/UI).
function getTranslation(lang, key) {
    if (typeof main_trans !== "undefined" && main_trans[lang] && main_trans[lang][key] != null) {
        return main_trans[lang][key];
    }
    if (typeof fixed_trans !== "undefined" && fixed_trans[lang] && fixed_trans[lang][key] != null) {
        return fixed_trans[lang][key];
    }
    return null;
}

// Auto-discover every element tagged with data-i18n* and translate it.
// data-i18n -> innerHTML, data-i18n-placeholder -> placeholder, data-i18n-title -> title.
function updatePageLanguage(currentLang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const value = getTranslation(currentLang, el.dataset.i18n);
        if (value != null) el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const value = getTranslation(currentLang, el.dataset.i18nPlaceholder);
        if (value != null) el.placeholder = value;
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
        const value = getTranslation(currentLang, el.dataset.i18nTitle);
        if (value != null) el.title = value;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updatePageLanguage(currentLang);
    showContinentPanels();
});