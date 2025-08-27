const translations = {
    heading: {
        en: "Macau",
        vi: "Ma Cao"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/macau/2005/10-pataca-f.jpg",
            alt: "Front of the 10 Pataca Bill",
            alt: {en: "Front of the 10 Pataca Bill", vi: "Mặt Trước Tờ 10 Pataca"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/macau/2005/10-pataca-b.jpg",
            alt: {en: "Back of the 10 Pataca Bill", vi: "Mặt Sau Tờ 10 Pataca"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Macanese 10 Patacas", 
            vi: "10 Pataca Ma Cao" 
        },
        year: "2005",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "138 $\\times$ 69 mm",
        figure: null,
        note: null,
        new: true
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/macau/new-year/10-pataca-f.jpg",
        alt: {en: "Front of the 10 Ringgit Bill", vi: "Mặt Trước Tờ 10 Ringgit"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/macau/new-year/10-pataca-b.jpg",
        alt: {en: "Back of the 10 Ringgit Bill", vi: "Mặt Sau Tờ 10 Ringgit"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Macanese 10 Patacas", 
        vi: "10 Pataca Ma Cao" 
    },
    year: "2014",
    type: { 
        en: "Circulating Commemorative Banknote", 
        vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" 
    },
    size: "138 $\\times$ 69 mm",
    figure: null,
    note: null,
    new: true
};