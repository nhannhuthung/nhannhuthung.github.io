const translations = {
    heading: {
        en: "Mauritius",
        vi: "Mauritius"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/mauritius/1999/25-rupee-f.jpg",
            alt: {en: "Front of the 25 Rupee Bill", vi: "Mặt Trước Tờ 25 Rupee"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/mauritius/1999/25-rupee-b.jpg",
            alt: {en: "Back of the 25 Rupee Bill", vi: "Mặt Sau Tờ 25 Rupee"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Mauritian 25 Rupees", 
            vi: "25 Rupee Mauritius" 
        },
        issuer: {
            en: "Bank Of Mauritius",
            vi: "Ngân Hàng Mauritius"
        },
        year: "2003",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "135 \u00D7 65 mm",
        figure: { 
            en: "Moilin Jean Ah-Chuen (1911-1991)", 
            vi: "Moilin Jean Ah-Chuen (1911-1991)" 
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/mauritius/1999/50-rupee-f.jpg",
        alt: {en: "Front of the 50 Rupee Bill", vi: "Mặt Trước Tờ 50 Rupee"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/mauritius/1999/50-rupee-b.jpg",
        alt: {en: "Back of the 50 Rupee Bill", vi: "Mặt Sau Tờ 50 Rupee"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Mauritian 50 Rupees", 
        vi: "50 Rupee Mauritius" 
    },
    issuer: {
        en: "Bank Of Mauritius",
        vi: "Ngân Hàng Mauritius"
    },
    year: "2001",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: { 
        en: "Joseph Maurice Paturau (1916-1996)", 
        vi: "Joseph Maurice Paturau (1916-1996)" 
    },
    size: "140 \u00D7 68 mm",
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/mauritius/1999/100-rupee-f.jpg",
        alt: {en: "Front of the 100 Rupee Bill", vi: "Mặt Trước Tờ 100 Rupee"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/mauritius/1999/100-rupee-b.jpg",
        alt: {en: "Back of the 100 Rupee Bill", vi: "Mặt Sau Tờ 100 Rupee"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Mauritian 100 Rupees", 
        vi: "100 Rupee Mauritius" 
    },
    issuer: {
        en: "Bank Of Mauritius",
        vi: "Ngân Hàng Mauritius"
    },
    year: "2004",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: { 
        en: "Renganaden Seeneevassen (1910-1958)", 
        vi: "Renganaden Seeneevassen (1910-1958)" 
    },
    size: "145 \u00D7 70 mm",
};