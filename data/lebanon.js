const translations = {
    heading: {
        en: "Lebanon",
        vi: "Liban"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/lebanon/2011-2012/1000-lira-f.jpg",
            alt: "Front of the 1000 Lira Bill",
            alt: {en: "Front of the 1000 Lira Bill", vi: "Mặt Trước Tờ 1000 Lira"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/lebanon/2011-2012/1000-lira-b.jpg",
            alt: {en: "Back of the 1000 Lira Bill", vi: "Mặt Sau Tờ 1000 Lira"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Lebanese 1,000 Livres", 
            vi: "1.000 Lira Liban" 
        },
        issuer: {
            en: "Bank Of Lebanon",
            vi: "Ngân Hàng Liban"
        },
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "115 \u00D7 60 mm",
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/lebanon/2011-2012/5000-lira-f.jpg",
        alt: {en: "Front of the 5000 Lira Bill", vi: "Mặt Trước Tờ 5000 Lira"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/lebanon/2011-2012/5000-lira-b.jpg",
        alt: {en: "Back of the 5000 Lira Bill", vi: "Mặt Sau Tờ 5000 Lira"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Lebanese 5,000 Livres", 
        vi: "5.000 Lira Liban" 
    },
    issuer: {
        en: "Bank Of Lebanon",
        vi: "Ngân Hàng Liban"
    },
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "120 \u00D7 62 mm",
    new: true,
};