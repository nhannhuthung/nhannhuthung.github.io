const translations = {
    heading: {
        en: "Oman",
        vi: "Oman"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/oman/1995/100-baisa-f.jpg",
            alt: {en: "Front of the 100 Baisa Bill", vi: "Mặt Trước Tờ 100 Baisa"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/oman/1995/100-baisa-b.jpg",
            alt: {en: "Back of the 100 Baisa Bill", vi: "Mặt Sau Tờ 100 Baisa"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Omani 100 Baisa", 
            vi: "100 Baisa Oman" 
        },
        issuer: {
            en: "Central Bank Of Oman",
            vi: "Ngân Hàng Trung Ương Oman"
        },
        year: "1416 (1995)",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        figure: { 
            en: "Qaboos bin Said (1940-2020)", 
            vi: "Qaboos bin Said (1940-2020)" 
        },
        size: "140 \u00D7 72 mm",
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/oman/2020/1-rial-f.jpg",
        alt: {en: "Front of the 1 Rial Bill", vi: "Mặt Trước Tờ 1 Rial"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/oman/2020/1-rial-b.jpg",
        alt: {en: "Back of the 1 Rial Bill", vi: "Mặt Sau Tờ 1 Rial"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Omani 1 Rial", 
        vi: "1 Rial Oman" 
    },
    issuer: {
        en: "Central Bank Of Oman",
        vi: "Ngân Hàng Trung Ương Oman"
    },
    year: "1441 (2020)",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: null,
    size: "156 \u00D7 75 mm",
};