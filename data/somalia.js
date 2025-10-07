const translations = {
    heading: {
        en: "Somalia",
        vi: "Somalia"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/somalia/mogadishu/50-shilling-f.jpg",
            alt: {en: "Front of the 50 Shilling Bill", vi: "Mặt Trước Tờ 50 Shilling"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/somalia/mogadishu/50-shilling-b.jpg",
            alt: {en: "Back of the 50 Shilling Bill", vi: "Mặt Sau Tờ 50 Shilling"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Somali 50 Shillings - Mogadishu Northern Forces", 
            vi: "50 Shilling Somalia - Mogadishu Northern Forces" 
        },
        issuer: {
            en: "Central Bank Of Somalia",
            vi: "Ngân Hàng Trung Ương Somalia"
        },
        year: "1991",
        type: { 
            en: "? Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn ?" 
        },
        size: "140 \u00D7 70 mm",
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/somalia/1989/1000-shilling-f.jpg",
        alt: {en: "Front of the 1000 Shilling Bill", vi: "Mặt Trước Tờ 1000 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/somalia/1989/1000-shilling-b.jpg",
        alt: {en: "Back of the 1000 Shilling Bill", vi: "Mặt Sau Tờ 1000 Shilling"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Somali 1000 Shillings - Puntland", 
        vi: "1000 Shilling Somalia - Puntland" 
    },
    issuer: {
        en: "Central Bank Of Somalia",
        vi: "Ngân Hàng Trung Ương Somalia"
    },
    year: "1990 (1999)",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "155 \u00D7 75 mm",
    note: {
        en: "It's been through war ...",
        vi: "Nó đã sống sót qua chiến tranh ..."
    },
};