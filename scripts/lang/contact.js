const fixed_trans = {
    en: {
        home: `Home`,
        collection: `Collection`,
        about: `About`,
        contact: `Contact`,
        search_placeholder: `Enter page name...`,
    },
    vi: {
        home: `Trang Chủ`,
        collection: `Bộ Sưu Tập`,
        about: `Giới Thiệu`,
        contact: `Liên Hệ`,
        search_placeholder: `Nhập tên trang...`,
    }
};

const main_trans = {
    en: {
        title: `Contact Me`,
        sub_title_1: `Social Media`,
        sentence_1: `I am active on the following platforms. You are welcome to connect with me through any of these channels.`,
        sub_title_2: `Work`,
        sentence_2: `For business inquiries, please feel free to contact me through the following platforms.`,
    },
    vi: {
        title: `Liên Hệ Mình`,
        sub_title_1: `Mạng Xã Hội`,
        sentence_1: `Mình hoạt động trên các nền tảng sau. Bạn có thể kết nối với mình qua bất kỳ kênh nào trong số này.`,
        sub_title_2: `Công Việc`,
        sentence_2: `Đối với các yêu cầu công việc, xin vui lòng liên hệ với mình qua các nền tảng sau.`,
    }
};

let currentLang = localStorage.getItem('language') || "en"; // Default to English if no language is stored

function toggleLanguage() {
    currentLang = currentLang === "en" ? "vi" : "en"; // Toggle between English and Vietnamese
    localStorage.setItem('language', currentLang); // Save the current language in localStorage
    
    updatePageLanguage(currentLang);
}

function updatePageLanguage(currentLang) {
    const foundationToUpdate = [
        { id: "home-nav", key: "home" },
        { id: "collection-nav", key: "collection" },
        { id: "about-nav", key: "about" },
        { id: "contact-nav", key: "contact" },
        { id: "searchInput", key: "search_placeholder", attr: "placeholder" },
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
        { id: "main-title", key: "title" },
        { id: "sub-title-1", key: "sub_title_1" },
        { id: "sub-title-2", key: "sub_title_2" },
        { id: "sentence-1", key: "sentence_1" },
        { id: "sentence-2", key: "sentence_2" }
    ];

    contentsToUpdate.forEach(({ id, key }) => {
        document.getElementById(id).innerHTML = main_trans[currentLang][key];
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updatePageLanguage(currentLang);
});