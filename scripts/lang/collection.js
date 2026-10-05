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
        acknowledge_para: `Welcome to my online money gallery! I would like to express my gratitude to everyone who has contributed to my collection. It truly wouldn't be as complete and meaningful without each of you. Your support and contributions have made all the difference.`,

        remark: `Remark`,
        remark_para_1: `I started my collection with only coins and I continue collecting them until now. However, since there are too many, I couldn't display all of them here.`,
        remark_para_2: `A few highlights about my coin collection:`,
        remark_subpara_1: `<span>&#9757;</span> There are around 70 regions, including no longer existed regions (Yugoslavia, Czechslovakia, Indochinese Union, etc.).`,
        remark_subpara_2: `<span>&#9996;</span> I have a few silver coins and I display them in the highlight section right below.`,
        remark_para_3: `My collection is expanding with banknotes. Right now, I prefer collecting banknotes over coins because they are lighter, neater, and have higher value.`,

        last_update: `Last Updated: 30/09/2026`,

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
        value_regions: `across {n} regions`,   // {n} is filled in with the region count
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

        last_update: `Cập Nhật Lần Cuối: 30/09/2026`,

        highlight: `Tâm Điểm`,
        banknote: `Tiền Giấy`,

        // Highlight motif captions — edit each to name what's in that square crop
        hl_1: `một phần của "Chân dung người vợ với hoa và trái cây"`,
        hl_2: `cây chuối và cây hoa`,
        hl_3: `bướm phượng đậu trên hoa dâm bụt`,
        hl_4: `đoàn tàu VIA Rail băng qua dãy Rocky Canada`,
        hl_5: `hoa hướng dương và con ong`,
        hl_6: `một con tàu của Hạm Đội Đầu Tiên`,
        hl_7: `kỳ giông axolotl`,
        hl_8: `chim cánh cụt mắt vàng (hoiho)`,
        hl_9: `Vịnh Hạ Long`,

        coin: `Tiền Xu`,
        usa_coin: `Mỹ ~ 1881 ~ 1 Đô La`,
        indochina_coin: `Đông Dương ~ 1902 ~ 1 Đồng Vàng`,
        canada_coin: `Canada ~ 1967 ~ 1 Đô La`,

        value_label: `Tổng Giá Trị Đang Lưu Hành`,
        value_notes: `tờ tiền`,
        value_regions: `thuộc {n} khu vực`,
        value_loading: `Đang tính tổng giá trị...`,
        value_error: `Không thể tính tổng giá trị`,
    }
};

// The region menu is built from REGIONS / COUNTRIES in
// scripts/regions.js, which collection.html loads before this file.

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
// `slugs` are keys into COUNTRIES; the href is derived from the slug, so a
// column can never link to a page that does not exist.
function buildSubregion(title, slugs) {
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
    slugs.forEach(slug => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = countryHref(slug, false);
        a.textContent = COUNTRIES[slug][currentLang];
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

    Object.entries(REGIONS).forEach(([regionKey, continent], index) => {
        const item = document.createElement("li");
        item.className = "region-item";

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "region-trigger";
        trigger.textContent = continent[currentLang];
        trigger.setAttribute("aria-expanded", "false");
        item.appendChild(trigger);
        bar.appendChild(item);

        const panel = document.createElement("div");
        panel.className = "region-panel";

        // Countries with sub: null (European Union, Australia, the polar
        // pages) stand outside every subregion and get their own column.
        countriesInSub(regionKey, null, currentLang).forEach(slug => {
            panel.appendChild(buildSubregion(null, [slug]));
        });

        Object.entries(continent.sub).forEach(([subKey, sub]) => {
            const slugs = countriesInSub(regionKey, subKey, currentLang);
            if (slugs.length) panel.appendChild(buildSubregion(sub[currentLang], slugs));
        });
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
const valueState = { status: "loading", totalUsd: 0, noteCount: 0, totalNotes: 0, regions: 0 };

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
    const regions = t("value_regions").replace("{n}", valueState.regions.toLocaleString(locale));
    el.textContent =
        `${t("value_label")}: $${amount} USD (${count} / ${total} ${t("value_notes")} ${regions})`;
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
    valueState.regions = collectionValue.regionCount;
    valueState.status = "ok";
    renderCollectionValue();
}

document.addEventListener("DOMContentLoaded", function() {
    updatePageLanguage(currentLang);
    buildRegionNav();
    computeCollectionValue();
});
