const translations = {
    heading: {
        en: "Serbia",
        vi: "Serbia"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/serbia/3/20-dinar-f.jpg",
            alt: {en: "Front of the 20 Dinar Bill", vi: "Mặt Trước Tờ 20 Dinar"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/serbia/3/20-dinar-b.jpg",
            alt: {en: "Back of the 20 Dinar Bill", vi: "Mặt Sau Tờ 20 Dinar"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Serbian 20 Dinara", 
            vi: "20 Dinar Serbia" 
        },
        issuer: {
            en: "National Bank of Serbia",
            vi: "Ngân Hàng Nhà Nước Serbia"
        },
        year: "2013",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        figure: {
            en: "Petar II Petrović-Njegoš (1813-1851)",
            vi: "Petar II Petrović-Njegoš (1813-1851)",
        },
        size: "135 \u00D7 64 mm",
        new: true,
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/serbia/3/50-dinar-f.jpg",
        alt: {en: "Front of the 50 Dinar Bill", vi: "Mặt Trước Tờ 50 Dinar"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/serbia/3/50-dinar-b.jpg",
        alt: {en: "Back of the 50 Dinar Bill", vi: "Mặt Sau Tờ 50 Dinar"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Serbian 50 Dinara", 
        vi: "50 Dinar Serbia" 
    },
    issuer: {
        en: "National Bank of Serbia",
        vi: "Ngân Hàng Nhà Nước Serbia"
    },
    year: "2005",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: {
        en: "Stevan Stojanović Mokranjac (1856-1914)",
        vi: "Stevan Stojanović Mokranjac (1856-1914)"
    },
    size: "139 \u00D7 66 mm",
    new: true,
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/serbia/3/200-dinar-f.jpg",
        alt: {en: "Front of the 200 Dinar Bill", vi: "Mặt Trước Tờ 200 Dinar"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/serbia/3/200-dinar-b.jpg",
        alt: {en: "Back of the 200 Dinar Bill", vi: "Mặt Sau Tờ 200 Dinar"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Serbian 200 Dinara", 
        vi: "200 Dinar Serbia" 
    },
    issuer: {
        en: "National Bank of Serbia",
        vi: "Ngân Hàng Nhà Nước Serbia"
    },
    year: "2011",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: {
        en: "Nadežda Petrović (1873-1915)",
        vi: "Nadežda Petrović (1873-1915)"
    },
    size: "147 \u00D7 70 mm",
    new: true,
};