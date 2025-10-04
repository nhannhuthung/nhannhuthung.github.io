const translations = {
    heading: {
        en: "Ethiopia",
        vi: "Ethiopia"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/ethiopia/2020/10-birr-f.jpg",
            alt: {en: "Front of the 10 Birr", vi: "Mặt Trước Tờ 10 Birr"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/ethiopia/2020/10-birr-b.jpg",
            alt: {en: "Back of the 10 Birr Bill", vi: "Mặt Sau Tờ 10 Birr"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Ethiopian 10 Birrs", 
            vi: "10 Birr Ethiopia" 
        },
        year: "2012 (2020)",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "142 \u00D7 67 mm",
        figure: null,
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/ethiopia/2020/50-birr-f.jpg",
        alt: {en: "Front of the 50 Birr", vi: "Mặt Trước Tờ 50 Birr"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/ethiopia/2020/50-birr-b.jpg",
        alt: {en: "Back of the 50 Birr Bill", vi: "Mặt Sau Tờ 50 Birr"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Ethiopian 50 Birrs", 
        vi: "50 Birr Ethiopia" 
    },
    year: "2012 (2020)",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "145 \u00D7 70 mm",
    figure: null,
    note: null
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/ethiopia/2020/100-birr-f.jpg",
        alt: {en: "Front of the 100 Birr", vi: "Mặt Trước Tờ 100 Birr"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/ethiopia/2020/100-birr-b.jpg",
        alt: {en: "Back of the 100 Birr Bill", vi: "Mặt Sau Tờ 100 Birr"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Ethiopian 100 Birrs", 
        vi: "100 Birr Ethiopia" 
    },
    year: "2015 (2023)",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "147 \u00D7 72 mm",
    figure: null,
    note: null
};