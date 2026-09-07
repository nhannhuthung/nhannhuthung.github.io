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

        form_title: `Mail Me`,
        form_intro: `I'm happy to take any feedback from you for a better experience in my website.`,
        form_name: `Name`,
        form_name_ph: `Your name`,
        form_email: `Email`,
        form_email_ph: `name@domain.com`,
        form_message: `Message`,
        form_message_ph: `Write your message...`,
        form_submit: `Send`,
        form_sending: `Sending...`,
        form_success: `Thanks! Your message has been sent.`,
        form_error: `Oops, something went wrong. Please try again.`,
    },
    vi: {
        title: `Liên Hệ Mình`,
        sub_title_1: `Mạng Xã Hội`,
        sentence_1: `Mình hoạt động trên các nền tảng sau. Bạn có thể kết nối với mình qua bất kỳ nền tảng nào trong số này.`,
        sub_title_2: `Công Việc`,
        sentence_2: `Đối với các yêu cầu công việc, xin vui lòng liên hệ với mình qua các nền tảng sau.`,

        form_title: `Gửi Thư Cho Mình`,
        form_intro: `Mình rất sẵn lòng tiếp nhận mọi góp ý để mọi người có trải nghiệm trên trang web của mình tốt hơn.`,
        form_name: `Tên`,
        form_name_ph: `Tên của bạn`,
        form_email: `Email`,
        form_email_ph: `ten@domain.com`,
        form_message: `Lời Nhắn`,
        form_message_ph: `Viết lời nhắn của bạn...`,
        form_submit: `Gửi`,
        form_sending: `Đang gửi...`,
        form_success: `Cảm ơn bạn! Tin nhắn của bạn đã được gửi.`,
        form_error: `Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại.`,
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

// Handle contact form submission (Web3Forms). Falls back to a demo if no key is set.
function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const status = document.getElementById("form-status");
    const button = form.querySelector("button[type=submit]");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const buttonText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = getTranslation(currentLang, "form_sending");
        status.className = "form-status";
        status.textContent = "";

        const showResult = (ok, extra = "") => {
            status.classList.add(ok ? "success" : "error");
            status.textContent = getTranslation(currentLang, ok ? "form_success" : "form_error") + extra;
            if (ok) form.reset();
            button.disabled = false;
            button.innerHTML = buttonText;
        };

        const accessKey = form.querySelector("[name=access_key]").value;

        // TRIAL/demo mode: no real key yet, so simulate a successful send.
        if (accessKey === "YOUR_ACCESS_KEY_HERE") {
            setTimeout(() => showResult(true, " (demo)"), 800);
            return;
        }

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: new FormData(form)
            });
            const data = await res.json();
            showResult(data.success === true);
        } catch (err) {
            showResult(false);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updatePageLanguage(currentLang);
    setupContactForm();
});