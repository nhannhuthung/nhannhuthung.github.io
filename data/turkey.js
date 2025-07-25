const translations = {
    heading: {
        en: "Turkey",
        vi: "Thổ Nhĩ Kỳ"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/turkey/2009/20-lira-f.jpg",
            alt: {en: "Front of the 20 Lira Bill", vi: "Mặt Trước Tờ 20 Lira"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/turkey/2009/20-lira-b.jpg",
            alt: {en: "Back of the 20 Lira Bill", vi: "Mặt Sau Tờ 20 Lira"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Turkish 20 Lira", 
            vi: "20 Lira Thổ Nhĩ Kỳ" 
        },
        year: null,
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "142 $\\times$ 68 mm",
        figure: { 
            en: "Mustafa Kemal Atatürk (1881?-1938)", 
            vi: "Mustafa Kemal Atatürk (1881?-1938)" 
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/turkey/2013/5-lira-f.jpg",
        alt: {en: "Front of the 5 Lira Bill", vi: "Mặt Trước Tờ 5 Lira"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/turkey/2013/5-lira-b.jpg",
        alt: {en: "Back of the 5 Lira Bill", vi: "Mặt Sau Tờ 5 Lira"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Turkish 5 Lira", 
        vi: "5 Lira Thổ Nhĩ Kỳ" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "130 $\\times$ 64 mm",
    figure: { 
        en: "Mustafa Kemal Atatürk (1881?-1938)", 
        vi: "Mustafa Kemal Atatürk (1881?-1938)" 
    },
    note: null
};