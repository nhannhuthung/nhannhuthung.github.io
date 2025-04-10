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
        name_intro: `My name is Hưng. If you are unfamiliar with that name, please call me Howl. It is the name from the movie - Howl's Moving Castle.`,
        study_intro: `I am Vietnamese and currently studying in Canada. My background is in Applied Mathematics. Right now I am finishing my last year of my first degree - Bachelor of Mathematics: Concentration in Applied Analysis, with a $\`\`$minor$"$ in Computer Science at Carleton University.`,
        paper_intro: `If you are wonder what am I studying in math, here are two main papers which highlight the areas I'm interested in and pursuing right now.`,
        first_paper: `The first paper is in Computational Mathematics area and is submitted to the journal - Mathematics and Computers in Simulation.`,
        second_paper: `The second paper is in Wave Phenomena area and it is my honours project.`,
    },
    vi: {
        title: `Bản Thân`,
        greeting: `Xin chào! 🦉😀`,
        name_intro: `Tên mình là Hưng. Mình có tên tiếng Anh là Howl và mình lấy tên này trong bộ phim - Lâu Đài Bay Của Pháp Sư Howl.`,
        study_intro: `Mình là người Việt Nam và hiện đang du học tại Canada. Chuyên ngành của mình là Toán ứng dụng. Mình đang hoàn thành bằng cử nhân đầu tiên - Cử Nhân Toán Học: Chuyên Phân Tích Ứng Dụng với $\`\`$chuyên ngành phụ$"$ về Khoa Học Máy Tính tại đại học Carleton.`,
        paper_intro: "Nếu bạn thắc mắc mình đang học gì về toán thì đây là hai bài báo cáo chính liên quan tới các lĩnh vực bản thân mình đang quan tâm và theo đuổi hiện tại.",
        first_paper: `Bài đầu tiên thuộc lĩnh vực Toán Học Tính Toán và đã được gửi đến tạp chí - Mathematics and Computers in Simulation.`,
        second_paper: `Bài thứ hai thuộc lĩnh vực Hiện Tượng Sóng và là đồ án tốt nghiệp của mình.`,
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
        { id: "paper-intro", key: "paper_intro" },
        { id: "first-paper", key: "first_paper" },
        { id: "second-paper", key: "second_paper" }
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