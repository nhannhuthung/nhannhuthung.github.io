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
        acknowledge_para: `I would like to express my gratitude to everyone who has contributed to my collection. It truly wouldn't be as complete and meaningful without each of you. Your support and contributions have made all the difference.`,

        remark: `Remark`,
        remark_para_1: `I started my collection with only coins and I continue collecting them until now. However, since there are too many - more than 650 coins, I couldn't put all of them here.`,
        remark_para_2: `A few highlights about my coin collection:`,
        remark_subpara_1: `<span>&#9757;</span> There are around 60 regions, including no longer exsited regions (Yugoslavia, Czechslovakia, French Indochina etc.).`,
        remark_subpara_2: `<span>&#9996;</span> The oldest coins I own are American 1-dollar (1881) and French Indochinese 1-piastre (1902).`,
        remark_para_3: `My collection is extending with banknotes. I have lost count the total number of unique regions for accounting banknotes and coins.`,

        collect_update: `Collection Update`,
        last_update: `Last Updated: Mar 17th 2025.`,
        update_1: `One Vietnamese bill: 100-dong bill.`,
        update_2: `One Australian bill: 10-dollar bill.`,

        highlight: `Highlight`,
        banknote: `Banknote`,
        norway: `Norway`,
        hong_kong: `Hong Kong`,
        south_korea: `South Korea`,
        australia: `Australia`,

        america: `America`,
        north_america: `North America`,
        central_america: `Central America`,
        south_america: `South America`,

        africa: `Africa`,
        north_africa: `North Africa`,
        west_africa: `West Africa`,
        central_africa: `Central Africa`,
        east_africa: `East Africa`,
        southern_africa: `Southern Aftica`,

        europe: `Europe`,
        northern_europe: `Northern Europe`,
        eastern_europre: `Eastern Europe`,
        southern_europe: `Southern Europe`,

        asia: `Asia`,
        mid_east_asia: `Middle East Asia`,
        central_asia: `Central Asia`,
        south_asia: `South Asia`,
        south_east_asia: `South East Asia`,
        east_asia: `East Asia`,

        oceania: `Oceania`,

        arctic: `Arctic`,

        antartica: `Antartica`,
    },
    vi: {
        acknowledge: `Lời Cảm Ơn`,
        acknowledge_para: `Mình xin bày tỏ lòng biết ơn đến mọi người đã đóng góp vào bộ sưu tập của tôi. Nếu không có mỗi người trong các bạn, bộ sưu tập sẽ không thể hoàn thiện và ý nghĩa như bây giờ. Sự ủng hộ và đóng góp của các bạn đã tạo nên sự khác biệt.`,

        remark: `Nhận Xét`,
        remark_para_1: `Mình bắt đầu bộ sưu tập của mình chỉ với những đồng xu và vẫn tiếp tục sưu tầm cho đến nay. Tuy nhiên, vì số lượng quá nhiều – hơn 650 đồng xu, mình không thể đưa tất cả lên đây.`,
        remark_para_2: `Một vài tiêu điểm về bộ sưu tập tiền xu của mình:`,
        remark_subpara_1: `<span>&#9757;</span> Có khoảng 60 khu vực, bao gồm những khu vực không còn tồn tại (Yugoslavia, Czechslovakia, Liên Bang Đông Dương, vân vân).`,
        remark_subpara_2: `<span>&#9996;</span> Đồng tiền cổ nhất mà mình có bao gồm đồng 1 đô la Mỹ (1881) và đồng 1 piastre Đông Dương (1902).`,
        remark_para_3: `Mình mở rộng bộ sưu tập với các tiền giấy. Mình không nhớ chính xác có tổng cộng bao nhiêu khu vực trong bộ sưu tập của mình.`,

        collect_update: `Cập Nhật Bộ Sưu Tập`,
        last_update: `Cập Nhật Lần Cuối: ngày 17 tháng 3 năm 2025`,
        update_1: `Một tờ tiền Việt Nam: tờ 100 đồng.`,
        update_2: `Một tờ tiền Úc: tờ 10 đô.`,

        highlight: `Điểm Nổi Bật`,
        banknote: `Tiền Giấy`,
        norway: `Na Uy`,
        hong_kong: `Hồng Kông`,
        south_korea: `Hàn Quốc`,
        australia: `Úc`,
    }
};

const countries = {
    "america": {
        "name": { "en": "America", "vi": "Châu Mỹ" },
        "regions": {
            "north-america": {
                "name": { "en": "North America", "vi": "Bắc Mỹ" },
                "countries": [
                    { "en": "Canada", "vi": "Canada", "url": "collection/canada.html" },
                    { "en": "Mexico", "vi": "Mexico", "url": "collection/mexico.html" },
                    { "en": "United States of America", "vi": "Hợp Chủng Quốc Hoa Kỳ", "url": "collection/usa.html" },
                ]
            },
            "central-america": {
                "name": { "en": "Central America", "vi": "Trung Mỹ" },
                "countries": [
                    { "en": "Costa Rica", "vi": "Costa Rica", "url": "collection/costa-rica.html" },
                ]
            },
            "south-america": {
                "name": { "en": "South America", "vi": "Nam Mỹ" },
                "countries": [
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
                "name": { "en": "West America", "vi": "Tây Phi" },
                "countries": [
                    { "en": "Ghana", "vi": "Ghana", "url": "collection/ghana.html" },
                    { "en": "Guinea", "vi": "Guinea", "url": "collection/guinea.html" },
                    { "en": "West Africa", "vi": "Tây Phi", "url": "collection/west-africa.html" },
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
        "eu": { "en": "European Union", "vi": "Liên Minh châu Âu", "url": "collection/eu.html" },
        "regions": {
            "northern-europe": {
                "name": { "en": "Northern Europe", "vi": "Bắc Âu" },
                "countries": [
                    { "en": "England", "vi": "Anh", "url": "collection/england.html" },
                    { "en": "Ireland", "vi": "Ireland", "url": "collection/ireland.html" },
                    { "en": "Norway", "vi": "Na Uy", "url": "collection/norway.html" },
                    { "en": "Scotland", "vi": "Scotland", "url": "collection/scotland.html" },
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
                ]
            },
        }
    },
    "asia": {
        "name": { "en": "Asia", "vi": "Châu Á"},
        "regions": {
            "mid-east-asia": {
                "name": { "en": "Middle East Asia", "vi": "Trung Đông" },
                "countries": [
                    { "en": "Iran", "vi": "Iran", "url": "collection/iran.html" },
                    { "en": "Israel", "vi": "Israel", "url": "collection/israel.html" },
                    { "en": "Lebanon", "vi": "Liban", "url": "collection/lebanon.html" },
                    { "en": "Oman", "vi": "Oman", "url": "collection/oman.html" },
                    { "en": "Saudi Arabia", "vi": "Ả Rập Xê Út", "url": "collection/saudi-arabia.html" },
                    { "en": "Turkey", "vi": "Thổ Nhĩ Kỳ", "url": "collection/turkey.html" },
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
            "south-east-asia": {
                "name": { "en": "South East Asia", "vi": "Đông Nam Á" },
                "countries": [
                    { "en": "Cambodia", "vi": "Campuchia", "url": "collection/cambodia.html" },
                    { "en": "Indonesia", "vi": "Indonesia", "url": "collection/indonesia.html" },
                    { "en": "Laos", "vi": "Lào", "url": "collection/laos.html" },
                    { "en": "Malaysia", "vi": "Malaysia", "url": "collection/malaysia.html" },
                    { "en": "Myanmar", "vi": "Myanmar", "url": "collection/myanmar.html" },
                    { "en": "Singapore", "vi": "Singapore", "url": "collection/singapore.html" },
                    { "en": "Thailand", "vi": "Thái Lan", "url": "collection/thailand.html" },
                    { "en": "Vietnam", "vi": "Việt Nam", "url": "collection/vietnam.html" },
                ]
            },
            "east-asia": {
                "name": { "en": "SouthAsia", "vi": "Nam Á" },
                "countries": [
                    { "en": "China", "vi": "Trung Quốc", "url": "collection/china.html" },
                    { "en": "Hong Kong", "vi": "Hồng Kông", "url": "collection/hong-kong.html" },
                    { "en": "Japan", "vi": "Nhật Bản", "url": "collection/japan.html" },
                    { "en": "Mongolia", "vi": "Mông Cổ", "url": "collection/mongolia.html" },
                    { "en": "North Korea", "vi": "Triều Tiên", "url": "collection/north-korea.html" },
                    { "en": "South Korea", "vi": "Hàn Quốc", "url": "collection/south-korea.html" },
                    { "en": "Taiwan", "vi": "Đài Loan", "url": "collection/taiwan.html" },
                ]
            },
        }
    },
    "oceania": {
        "name": { "en": "Oceania", "vi": "Châu Úc" },
        "australia": { "en": "Australia", "vi": "Úc", "url": "collection/australia.html" },
    },
    "arctic": {
        "name": { "en": "Arctic", "vi": "Bắc Cực" },
        "arctic_territories": { "en": "Arctic Territories", "vi": "Các Lãnh Thổ Bắc Cực", "url": "collection/arctic-territories.html" },
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
    generateCountryList(currentLang)
}

function generateCountryList(currentLang) {
    let container = document.getElementById("country-list");
    container.innerHTML = "";  // Clear previous content

    Object.values(countries).forEach(continent => {
        // Create a container div for each continent
        let continentContainer = document.createElement("div");
        continentContainer.className = "container";

        // Generate continent title
        let continentTitle = document.createElement("h1");
        continentTitle.innerText = continent.name[currentLang];
        continentContainer.appendChild(continentTitle);

        // Handle special cases (European Union, Australia, Arctic Territories, Kerguelen Islands)
        if (continent.name.en === "Europe" && continent.eu) {
            let Div = document.createElement("div");
            Div.className = "category";
            let Item = document.createElement("div");
            Item.className = "category-item";
            Item.innerText = continent.eu[currentLang];
            Item.onclick = () => navigateTo(continent.eu.url);
            Div.appendChild(Item);
            continentContainer.appendChild(Div);
        }

        // Handle Oceania, Arctic, and Antarctica categories if they exist
        if (continent.name.en === "Oceania" && continent.australia) {
            let Div = document.createElement("div");
            Div.className = "category";
            let Item = document.createElement("div");
            Item.className = "category-item";
            Item.innerText = continent.australia[currentLang];
            Item.onclick = () => navigateTo(continent.australia.url);
            Div.appendChild(Item);
            continentContainer.appendChild(Div);
        }

        if (continent.name.en === "Arctic" && continent.arctic_territories) {
            let Div = document.createElement("div");
            Div.className = "category";
            let Item = document.createElement("div");
            Item.className = "category-item";
            Item.innerText = continent.arctic_territories[currentLang];
            Item.onclick = () => navigateTo(continent.arctic_territories.url);
            Div.appendChild(Item);
            continentContainer.appendChild(Div);
        }

        if (continent.name.en === "Antarctica" && continent.kerguelen_islands) {
            let Div = document.createElement("div");
            Div.className = "category";
            let Item = document.createElement("div");
            Item.className = "category-item";
            Item.innerText = continent.kerguelen_islands[currentLang];
            Item.onclick = () => navigateTo(continent.kerguelen_islands.url);
            Div.appendChild(Item);
            continentContainer.appendChild(Div);
        }

        // Handle regions within the continent
        if (continent.regions) {
            Object.values(continent.regions).forEach(region => {
                let regionTitle = document.createElement("h2");
                regionTitle.innerText = region.name[currentLang];
                continentContainer.appendChild(regionTitle);

                let categoryDiv = document.createElement("div");
                categoryDiv.className = "category";

                // Sort countries alphabetically based on selected language
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

        // Append the continent container to the main container
        container.appendChild(continentContainer);
    });
}

function updatePageLanguage(currentLang) {
    const foundationToUpdate = [
        { id: "home-nav", key: "home" },
        { id: "collection-nav", key: "collection" },
        { id: "about-nav", key: "about" },
        { id: "contact-nav", key: "contact" },
        { id: "searchInput", key: "search_placeholder", attr: "placeholder" },
        { id: "top_btn", key: "top_btn"},
        { id: "top_btn", key: "top_title", attr: "title"}
    ];

    foundationToUpdate.forEach(({ id, key, attr }) => {
        const element = document.getElementById(id);
        if (element) {
            if (attr) {
                element.setAttribute(attr, fixed_trans[currentLang][key]);
            } else {
                element.textContent = fixed_trans[currentLang][key];
            }
        }
    });

    const contentsToUpdate = [
        { id: "acknowledge", key: "acknowledge" },
        { id: "acknowledge-para", key: "acknowledge_para" },

        { id: "remark", key: "remark" },
        { id: "remark-para-1", key: "remark_para_1" },
        { id: "remark-para-2", key: "remark_para_2" },
        { id: "remark-subpara-1", key: "remark_subpara_1" },
        { id: "remark-subpara-2", key: "remark_subpara_2" },
        { id: "remark-para-3", key: "remark_para_3" },

        { id: "collect-update", key: "collect_update" },
        { id: "last-update", key: "last_update" },
        { id: "update-1", key: "update_1" },
        { id: "update-2", key: "update_2" },

        { id: "highlight", key: "highlight" },
        { id: "banknote", key: "banknote" },
        { id: "norway", key: "norway" },
        { id: "hong-kong", key: "hong_kong" },
        { id: "south-korea", key: "south_korea" },
        { id: "australia", key: "australia" },
    ];

    contentsToUpdate.forEach(({ id, key }) => {
        document.getElementById(id).innerHTML = main_trans[currentLang][key];
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updatePageLanguage(currentLang);
    generateCountryList(currentLang);
});