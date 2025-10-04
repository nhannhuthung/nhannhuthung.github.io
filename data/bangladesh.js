const translations = {
    heading: {
        en: "Bangladesh",
        vi: "Bangladesh"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/bangladesh/2-series/2013-f.jpg",
            alt: {en: "Front of the 2 Taka Bill", vi: "Mặt Trước Tờ 2 Taka"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/bangladesh/2-series/2013-b.jpg",
            alt: {en: "Back of the 2 Taka Bill", vi: "Mặt Sau Tờ 2 Taka"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Bangladeshi 2 Taka", 
            vi: "2 Taka Bangladesh" 
        },
        year: "2013",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "100 \u00D7 60 mm",
        figure: { 
            en: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)", 
            vi: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)" 
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/bangladesh/5-series/2015-f.jpg",
        alt: {en: "Front of the 5 Taka Bill", vi: "Mặt Trước Tờ 5 Taka"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/bangladesh/5-series/2015-b.jpg",
        alt: {en: "Back of the 5 Taka Bill", vi: "Mặt Sau Tờ 5 Taka"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Bangladeshi 5 Taka", 
        vi: "5 Taka Bangladesh" 
    },
    year: "2015",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "142 \u00D7 68 mm",
    figure: { 
        en: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)", 
        vi: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)" 
    },
    note: null
};