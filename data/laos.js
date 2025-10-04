const translations = {
    heading: {
        en: "Laos",
        vi: "Lào"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/laos/2000-series/2011-f.jpg",
            alt: {en: "Front of the 2000 Kip Bill", vi: "Mặt Trước Tờ 2000 Kip"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/laos/2000-series/2011-b.jpg",
            alt: {en: "Back of the 2000 Kip Bill", vi: "Mặt Sau Tờ 2000 Kip"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Lao 2,000 Kip", 
            vi: "2.000 Kíp Lào" 
        },
        year: "2011",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "141 \u00D7 65 mm",
        figure: { 
            en: "Kaysone Phomvihane (1920-1992)", 
            vi: "Kaysone Phomvihane (1920-1992)" 
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/laos/5000-series/2003-f.jpg",
        alt: {en: "Front of the 5000 Kip Bill", vi: "Mặt Trước Tờ 5000 Kip"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/laos/5000-series/2003-b.jpg",
        alt: {en: "Back of the 5000 Kip Bill", vi: "Mặt Sau Tờ 5000 Kip"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Lao 5,000 Kip", 
        vi: "5.000 Kíp Lào" 
    },
    year: "2003",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "152 \u00D7 68 mm",
    figure: { 
        en: "Kaysone Phomvihane (1920-1992)", 
        vi: "Kaysone Phomvihane (1920-1992)" 
    },
    note: null
};