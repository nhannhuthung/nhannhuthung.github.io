const translations = {
    heading: {
        en: "Dominican Republic",
        vi: "Cộng Hòa Dominica"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/dominican-republic/2014/50-peso-f.jpg",
            alt: {en: "Front of the 50 Peso Bill", vi: "Mặt Trước Tờ 50 Peso"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/dominican-republic/2014/50-peso-b.jpg",
            alt: {en: "Back of the 50 Peso Bill", vi: "Mặt Sau Tờ 50 Peso"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Dominican 50 Pesos", 
            vi: "50 Peso Dominica" 
        },
        issuer: {
            en: "Central Bank Of The Dominican Republic",
            vi: "Ngân Hàng Trung Ương Cộng Hòa Dominica"
        },
        year: "2024",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "158 \u00D7 67 mm",
        new: true,
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/dominican-republic/2014/100-peso-f.jpg",
        alt: {en: "Front of the 100 Peso Bill", vi: "Mặt Trước Tờ 100 Peso"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/dominican-republic/2014/100-peso-b.jpg",
        alt: {en: "Back of the 100 Peso Bill", vi: "Mặt Sau Tờ 100 Peso"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Dominican 100 Pesos", 
        vi: "100 Peso Dominica" 
    },
    issuer: {
        en: "Central Bank Of The Dominican Republic",
        vi: "Ngân Hàng Trung Ương Cộng Hòa Dominica"
    },
    year: "2024",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: {
        en: "Francisco del Rosario Sánchez (1817-1861), Juan Pablo Duarte (1813-1876), Matías Ramón Mella (1816-1864)", 
        vi: "Francisco del Rosario Sánchez (1817-1861), Juan Pablo Duarte (1813-1876), Matías Ramón Mella (1816-1864)"
    },
    size: "158 \u00D7 67 mm",
    new: true,
};