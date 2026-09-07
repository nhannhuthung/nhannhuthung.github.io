const fixed_trans = {
    en: {
        collection: `Collection`,
        about: `About`,
        contact: `Contact`,
    },
    vi: {
        collection: `Bộ Sưu Tập`,
        about: `Giới Thiệu`,
        contact: `Liên Hệ`,
    }
};

let currentLang = localStorage.getItem('language') || "en"; // Default to English if no language is stored

function toggleLanguage() {
    currentLang = currentLang === "en" ? "vi" : "en"; // Toggle between English and Vietnamese
    localStorage.setItem('language', currentLang); // Save the current language in localStorage
    
    updatePageLanguage(currentLang);
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
});