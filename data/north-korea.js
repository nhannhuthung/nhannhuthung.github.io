const translations = {
    heading: {
        en: "North Korea",
        vi: "Triều Tiên"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/north-korea/1992/200-won-f.jpg",
            alt: {en: "Front of the 200 Won Bill", vi: "Mặt Trước Tờ 200 Won"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/north-korea/1992/200-won-b.jpg",
            alt: {en: "Back of the 200 Won Bill", vi: "Mặt Sau Tờ 200 Won"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "North Korean 200 Won", 
            vi: "200 Won Triều Tiên" 
        },
        issuer: {
            en: "Central Bank Of The Democratic People's Republic of Korea",
            vi: "Ngân Hàng Trung Ương Cộng Hòa Dân Chủ Nhân Dân Triều Tiên"
        },
        year: "1994 (2005)",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "140 \u00D7 72 mm",
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/north-korea/1992/500-won-f.jpg",
        alt: {en: "Front of the 500 Won Bill", vi: "Mặt Trước Tờ 500 Won"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/north-korea/1992/500-won-b.jpg",
        alt: {en: "Back of the 500 Won Bill", vi: "Mặt Sau Tờ 500 Won"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "North Korean 500 Won", 
        vi: "500 Won Triều Tiên" 
    },
    issuer: {
        en: "Central Bank Of The Democratic People's Republic of Korea",
        vi: "Ngân Hàng Trung Ương Cộng Hòa Dân Chủ Nhân Dân Triều Tiên"
    },
    year: "1996 (2007)",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "156 \u00D7 75 mm",
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/north-korea/1992/5000-won-f.jpg",
        alt: {en: "Front of the 5000 Won Bill", vi: "Mặt Trước Tờ 5000 Won"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/north-korea/1992/5000-won-b.jpg",
        alt: {en: "Back of the 5000 Won Bill", vi: "Mặt Sau Tờ 5000 Won"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "North Korean 5,000 Won", 
        vi: "5.000 Won Triều Tiên" 
    },
    issuer: {
        en: "Central Bank Of The Democratic People's Republic of Korea",
        vi: "Ngân Hàng Trung Ương Cộng Hòa Dân Chủ Nhân Dân Triều Tiên"
    },
    year: "1995 (2006)",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: { 
        en: "Kim Il Sung (1912-1994)", 
        vi: "Kim Il Sung (1912-1994)" 
    },
    size: "156 \u00D7 75 mm",
};