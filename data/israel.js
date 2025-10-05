const translations = {
    heading: {
        en: "Israel",
        vi: "Israel"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/israel/c/20-shekel-f.jpg",
            alt: {en: "Front of the 20 Shekel Bill", vi: "Mặt Trước Tờ 20 Shekel"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/israel/c/20-shekel-b.jpg",
            alt: {en: "Back of the 20 Shekel Bill", vi: "Mặt Sau Tờ 20 Shekel"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Israeli 20 Shekels", 
            vi: "20 Shekel Israeli" 
        },
        issuer: {
            en: "Bank Of Israel",
            vi: "Ngân Hàng Israel"
        },
        year: "2017",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        figure: { 
            en: "Rachel Bluwstein (1890-1931)", 
            vi: "Rachel Bluwstein (1890-1931)" 
        },
        size: "129 \u00D7 71 mm",
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/israel/c/50-shekel-f.jpg",
        alt: {en: "Front of the 50 Shekel Bill", vi: "Mặt Trước Tờ 50 Shekel"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/israel/c/50-shekel-b.jpg",
        alt: {en: "Back of the 50 Shekel Bill", vi: "Mặt Sau Tờ 50 Shekel"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Israeli 50 Shekels", 
        vi: "50 Shekel Israel" 
    },
    issuer: {
        en: "Bank Of Israel",
        vi: "Ngân Hàng Israel"
    },
    year: "2014",
    type: { 
        en: "Circulating Commemorative Banknote", 
        vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" 
    },
    figure: { 
        en: "Shaul Tchernichovsky (1875-1943)", 
        vi: "Shaul Tchernichovsky (1875-1943)" 
    },
    size: "136 \u00D7 71 mm",
    note: { 
        en: `2014\'s top 12 banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Top 12 tờ tiền năm 2014 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>` 
    },
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/israel/c/200-shekel-f.jpg",
        alt: {en: "Front of the 200 Shekel Bill", vi: "Mặt Trước Tờ 200 Shekel"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/israel/c/200-shekel-b.jpg",
        alt: {en: "Back of the 200 Shekel Bill", vi: "Mặt Sau Tờ 200 Shekel"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Israeli 200 Shekels", 
        vi: "200 Shekel Israel" 
    },
    issuer: {
        en: "Bank Of Israel",
        vi: "Ngân Hàng Israel"
    },
    year: "2015",
    type: { 
        en: "Circulating Commemorative Banknote", 
        vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" 
    },
    figure: { 
        en: "Nathan Alterman (1910-1970)", 
        vi: "Nathan Alterman (1910-1970)" 
    },
    size: "150 \u00D7 20 mm",
    note: { 
        en: `2015\'s top 20 banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Top 20 tờ tiền năm 2015 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>` 
    },
};