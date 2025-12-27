const translations = {
    heading: {
        en: "Switzerland",
        vi: "Thụy Sĩ"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/switzerland/9/10-franc-f.jpg",
            alt: {en: "Front of the 10 Franc Bill", vi: "Mặt Trước Tờ 10 Franc"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/switzerland/9/10-franc-b.jpg",
            alt: {en: "Back of the 10 Franc Bill", vi: "Mặt Sau Tờ 10 Franc"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Swiss 10 Francs", 
            vi: "10 Franc Thụy Sĩ" 
        },
        issuer: {
            en: "Swiss National Bank",
            vi: "Ngân Hàng Nhà Nước Thụy Sĩ"
        },
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "70 \u00D7 123 mm",
        note: {
            en: `Banknote of 2017 by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`,
            vi: `Tờ tiền của năm 2017 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`
        },
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/switzerland/9/20-franc-f.jpg",
        alt: {en: "Front of the 20 Franc Bill", vi: "Mặt Trước Tờ 20 Franc"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/switzerland/9/20-franc-b.jpg",
        alt: {en: "Back of the 20 Franc Bill", vi: "Mặt Sau Tờ 20 Franc"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Swiss 20 Francs", 
        vi: "20 Franc Thụy Sĩ" 
    },
    issuer: {
        en: "Swiss National Bank",
        vi: "Ngân Hàng Nhà Nước Thụy Sĩ"
    },
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "70 \u00D7 130 mm",
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/switzerland/9/50-franc-f.jpg",
        alt: {en: "Front of the 50 Franc Bill", vi: "Mặt Trước Tờ 50 Franc"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/switzerland/9/50-franc-b.jpg",
        alt: {en: "Back of the 50 Franc Bill", vi: "Mặt Sau Tờ 50 Franc"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Swiss 50 Francs", 
        vi: "50 Franc Thụy Sĩ" 
    },
    issuer: {
        en: "Swiss National Bank",
        vi: "Ngân Hàng Nhà Nước Thụy Sĩ"
    },
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "70 \u00D7 137 mm",
    note: {
        en: `Banknote of 2016 by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`,
        vi: `Tờ tiền của năm 2016 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`
    },
};