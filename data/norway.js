const translations = {
    heading: {
        en: "Norway",
        vi: "Na Uy"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/norway/7/50-kroner-f.jpg",
            alt: {en: "Front of the 50 Kroner Bill", vi: "Mặt Trước Tờ 50 Krone"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/norway/7/50-kroner-b.jpg",
            alt: {en: "Back of the 50 Kroner Bill", vi: "Mặt Sau Tờ 50 Krone"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Norweigian 50 Kroner", 
            vi: "50 Krone Na Uy" 
        },
        year: "2005",
        type: { 
            en: "Non-circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" 
        },
        size: "128 $\\times$ 60 mm",
        figure: { 
            en: "Peter Christen Asbjørnsen (1812-1885)", 
            vi: "Peter Christen Asbjørnsen (1812-1885)" 
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/norway/8/200-kroner-f.jpg",
        alt: "Front of the 200 Kroner Bill",
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/norway/8/200-kroner-b.jpg",
        alt: "Back of the 200 Kroner Bill",
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Norweigian 200 Kroner", 
        vi: "200 Krone Na Uy" 
    },
    year: "2016",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "140 $\\times$ 70 mm",
    figure: null,
    note: null
};