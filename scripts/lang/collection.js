const fixed_trans = {
    en: {
        home: `Home`,
        collection: `Collection`,
        about: `About`,
        contact: `Contact`,
        search_placeholder: `Enter page name...`,
        top_btn: `Top`,
        top_title: `Go to top`,
        // the toggle names the language you switch TO first
        lang_toggle: `Vie | Eng`,
    },
    vi: {
        home: `Trang Chủ`,
        collection: `Bộ Sưu Tập`,
        about: `Giới Thiệu`,
        contact: `Liên Hệ`,
        search_placeholder: `Nhập tên trang...`,
        top_btn: `Đầu`,
        top_title: `Quay lại đầu trang`,
        lang_toggle: `Eng | Vie`,
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

        last_update: `Last Updated: 12/09/2026`,

        highlight: `Highlight`,
        banknote: `Banknote`,

        // Highlight motif captions — edit each to name what's in that square crop (examples below)
        hl_1: `part of "Portrait of a wife with flowers and fruits"`,
        hl_2: `a banana tree and a flower tree`,
        hl_3: `a swallowtail butterfly on a hibiscus flower`,
        hl_4: `a VIA Rail crossing the Canadian Rockies`,
        hl_5: `a sunflower with a bee`,
        hl_6: `a vessel of the First Fleet`,
        hl_7: `an axolotl`,
        hl_8: `a yellow-eyed penguin (hoiho)`,
        hl_9: `Ha Long Bay`,

        coin: `Coin`,
        usa_coin: `USA ~ 1881 ~ 1 Dollar`,
        indochina_coin: `Indochina ~ 1902 ~ 1 Piastre`,
        canada_coin: `Canada ~ 1967 ~ 1 Dollar`,

        value_label: `Total Circulating Face Value`,
        value_notes: `banknotes`,
        value_loading: `Calculating total value...`,
        value_error: `Total value unavailable`,
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

        last_update: `Cập Nhật Lần Cuối: 12/09/2026`,

        highlight: `Tâm Điểm`,
        banknote: `Tiền Giấy`,

        // Highlight motif captions — edit each to name what's in that square crop
        hl_1: `một phần của "Chân dung người vợ với hoa và trái cây"`,
        hl_2: `cây chuối và cây hoa`,
        hl_3: `bướm phượng đậu trên hoa dâm bụt`,
        hl_4: `đoàn tàu VIA Rail băng qua dãy Rocky Canada`,
        hl_5: `hoa hướng dương và con ong`,
        hl_6: `một con tàu của Hạm Đội Đầu Tiên`,
        hl_7: `kỳ giông Axolotl`,
        hl_8: `chim cánh cụt mắt vàng (hoiho)`,
        hl_9: `Vịnh Hạ Long`,

        coin: `Tiền Xu`,
        usa_coin: `Mỹ ~ 1881 ~ 1 Đô La`,
        indochina_coin: `Đông Dương ~ 1902 ~ 1 Đồng Vàng`,
        canada_coin: `Canada ~ 1967 ~ 1 Đô La`,

        value_label: `Tổng Giá Trị Đang Lưu Hành`,
        value_notes: `tờ tiền`,
        value_loading: `Đang tính tổng giá trị...`,
        value_error: `Không thể tính tổng giá trị`,
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
                    { "en": "Uruguay", "vi": "Uruguay", "url": "collection/uruguay.html" },
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

    // The region navigator is built from data, so rebuild it in the new language
    buildRegionNav();
}

/* ---------------------------------------------------------------
   Region navigator (mega-menu).

   Desktop: hovering a continent slowly reveals a panel where each
   subregion is a horizontal column and its countries run vertically.
   Mobile:  hover is unreliable on touch, so the panel becomes a
            tap-to-expand accordion (one continent open at a time).
   --------------------------------------------------------------- */

function isRegionMobile() {
    return window.matchMedia("(max-width: 700px)").matches;
}

// One subregion column: optional heading + a vertical list of countries.
function buildSubregion(title, list) {
    const col = document.createElement("div");
    col.className = "subregion";

    if (title) {
        const heading = document.createElement("h3");
        heading.className = "subregion-title";
        heading.textContent = title;
        col.appendChild(heading);
    }

    const ul = document.createElement("ul");
    ul.className = "subregion-countries";
    list.forEach(country => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = country.url;
        a.textContent = country[currentLang];
        li.appendChild(a);
        ul.appendChild(li);
    });
    col.appendChild(ul);

    return col;
}

function buildRegionNav() {
    const container = document.getElementById("country-list");
    if (!container) return;
    container.innerHTML = "";

    const nav = document.createElement("nav");
    nav.className = "region-nav";

    const bar = document.createElement("ul");
    bar.className = "region-bar";

    // Panels live OUTSIDE the bar: on mobile the bar scrolls sideways, and a
    // panel nested inside it would be trapped in that scrolling strip.
    const panels = document.createElement("div");
    panels.className = "region-panels";

    const entries = [];
    let closeTimer = null;

    function closeAll() {
        entries.forEach(({ trigger, panel }) => {
            panel.classList.remove("open");
            trigger.classList.remove("active");
            trigger.setAttribute("aria-expanded", "false");
        });
    }

    function openEntry(index) {
        closeAll();
        const { trigger, panel } = entries[index];
        panel.classList.add("open");
        trigger.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
    }

    Object.values(countries).forEach((continent, index) => {
        const item = document.createElement("li");
        item.className = "region-item";

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "region-trigger";
        trigger.textContent = continent.name[currentLang];
        trigger.setAttribute("aria-expanded", "false");
        item.appendChild(trigger);
        bar.appendChild(item);

        const panel = document.createElement("div");
        panel.className = "region-panel";

        // Standalone entries that sit outside "regions" (eu, australia,
        // arctic_territories, kerguelen_islands, ...) get their own column.
        Object.entries(continent).forEach(([key, value]) => {
            if (key === "name" || key === "regions") return;
            if (!value || !value.url) return;
            panel.appendChild(buildSubregion(null, [value]));
        });

        // Arctic / Antarctica have no "regions" key at all.
        if (continent.regions) {
            Object.values(continent.regions).forEach(region => {
                const sorted = [...region.countries].sort((a, b) =>
                    a[currentLang].localeCompare(b[currentLang])
                );
                panel.appendChild(buildSubregion(region.name[currentLang], sorted));
            });
        }
        panels.appendChild(panel);

        entries.push({ trigger, panel });

        // Desktop: open on hover.
        item.addEventListener("mouseenter", () => {
            if (isRegionMobile()) return;
            clearTimeout(closeTimer);
            openEntry(index);
        });

        // Mobile: tap to toggle.
        trigger.addEventListener("click", () => {
            if (!isRegionMobile()) return;
            if (panel.classList.contains("open")) closeAll();
            else openEntry(index);
        });
    });

    // Only close once the cursor leaves the WHOLE navigator, and even then
    // after a short grace period - so moving down from a button into its
    // panel (across the small gap) keeps the panel open.
    nav.addEventListener("mouseleave", () => {
        if (isRegionMobile()) return;
        clearTimeout(closeTimer);
        closeTimer = setTimeout(closeAll, 260);
    });
    nav.addEventListener("mouseenter", () => clearTimeout(closeTimer));

    nav.appendChild(bar);
    nav.appendChild(panels);
    container.appendChild(nav);
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

    // The collection total is built from numbers, so it needs an explicit re-render
    renderCollectionValue();
}

/* ---------------------------------------------------------------
   Total USD face value of the circulating banknotes.

   Face-value totals per currency come from scripts/collection-value.js
   (regenerate with tools/generate-collection-value.ps1 after adding
   banknotes). Exchange rates are fetched live, falling back to the
   rates captured when that file was generated.
   --------------------------------------------------------------- */
const valueState = { status: "loading", totalUsd: 0, noteCount: 0, totalNotes: 0 };

function renderCollectionValue() {
    const el = document.getElementById("collection-value");
    if (!el) return;

    const t = (key) => getTranslation(currentLang, key) || "";

    if (valueState.status === "loading") {
        el.textContent = t("value_loading");
        return;
    }
    if (valueState.status === "error") {
        el.textContent = t("value_error");
        return;
    }

    const locale = currentLang === "vi" ? "vi-VN" : "en-US";
    const amount = valueState.totalUsd.toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const count = valueState.noteCount.toLocaleString(locale);
    const total = valueState.totalNotes.toLocaleString(locale);
    el.textContent = `${t("value_label")}: $${amount} USD (${count} / ${total} ${t("value_notes")})`;
}

async function computeCollectionValue() {
    if (typeof collectionValue === "undefined") {
        valueState.status = "error";
        renderCollectionValue();
        return;
    }

    // Live rates: how many units of each currency equal 1 USD.
    let liveRates = null;
    try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data && data.result === "success" && data.rates) liveRates = data.rates;
    } catch (err) {
        // offline or API down - fall back to the captured rates
    }

    let total = 0;
    let notes = 0;
    const unpriced = [];

    for (const [code, amount] of Object.entries(collectionValue.amounts)) {
        const rate = (liveRates && liveRates[code]) || collectionValue.fallbackRates[code];
        if (!rate || rate <= 0) {
            unpriced.push(code);
            continue;
        }
        total += amount / rate;
        notes += collectionValue.notes[code] || 0;
    }

    if (unpriced.length) {
        console.warn("No exchange rate for:", unpriced.join(", ") + " - excluded from the total.");
    }

    valueState.totalUsd = total;
    valueState.noteCount = notes;
    valueState.totalNotes = collectionValue.totalNotes;
    valueState.status = "ok";
    renderCollectionValue();
}

document.addEventListener("DOMContentLoaded", function() {
    updatePageLanguage(currentLang);
    buildRegionNav();
    computeCollectionValue();
});
