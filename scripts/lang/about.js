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
        title: `About Me`,
        greeting: `Hello! 🦉😀`,
        name_intro: `My name is Hưng. If you are unfamiliar with that name, please call me Howl. The name comes from the movie - Howl's Moving Castle.`,
        study_intro: `I am Vietnamese and currently studying in Canada. My background is in Applied Mathematics. I finished my first bachelor and I'm pursuing a new journey. New but old, old but new!!!`,
        math_intro: `If you are wondering what am I studying in math, you can browse around <a href="https://www.researchgate.net/profile/Howl-Nhan?ev=hdr_xprf" target="_blank">here</a> and <a href="pdf/math/honours-project.pdf" target="_blank">here</a>.`,
        resume_intro: `Here is my resume in case you are curious: <a href="pdf/resume.pdf" class="fa fa-file-pdf-o" target="_blank"></a> 24/12/2025.`
    },
    vi: {
        title: `Bản Thân`,
        greeting: `Xin chào! 🦉😀`,
        name_intro: `Tên mình là Hưng. Mình có tên tiếng Anh là Howl và mình lấy tên này trong bộ phim - Lâu Đài Bay Của Pháp Sư Howl.`,
        study_intro: `Mình là người Việt Nam và hiện đang du học tại Canada. Chuyên ngành của mình là Toán Ứng Dụng. Mình đã tốt nghiệp với bằng cử nhân đầu tiên và mình đang theo đuổi một hình trình mới. Mới mà cũ, cũ mà mới!!!`,
        math_intro: `Nếu bạn thắc mắc mình đang học gì về toán, bạn có thể xem ở <a href="https://www.researchgate.net/profile/Howl-Nhan?ev=hdr_xprf" target="_blank">đây</a> và <a href="pdf/math/honours-project.pdf" target="_blank">đây</a>.`,
        resume_intro: `Đây là sơ yếu lý lịch về mình đề phòng bạn thắc mắc: <a href="pdf/resume.pdf" class="fa fa-file-pdf-o" target="_blank"></a> 24/12/2025.`
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
        { id: "title", key: "title" },
        { id: "greeting", key: "greeting" },
        { id: "name-intro", key: "name_intro" },
        { id: "study-intro", key: "study_intro" },
        { id: "math-intro", key: "math_intro" },
        { id: "resume-intro", key: "resume_intro" }
    ];

    contentsToUpdate.forEach(({ id, key }) => {
        document.getElementById(id).innerHTML = main_trans[currentLang][key];
    });

    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updatePageLanguage(currentLang);
});