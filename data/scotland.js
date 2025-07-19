const translations = {
    heading: {
        en: "Scotland",
        vi: "Scotland"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/scotland/royal-bank/1987-2001/1-pound-f.jpg",
            alt: {en: "Front of the 1 Pound Bill", vi: "Mặt Trước Tờ 1 Bảng"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/scotland/royal-bank/1987-2001/1-pound-b.jpg",
            alt: {en: "Back of the 1 Pound Bill", vi: "Mặt Sau Tờ 1 Bảng"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Scottish 1 Pound - Royal Bank", 
            vi: "1 Bảng Scotland - Royal Bank" 
        },
        year: "1992",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "128 $\\times$ 65 mm",
        figure:  { 
            en: "Ilay Campbell (1734-1823)", 
            vi: "Ilay Campbell (1734-1823)"
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/scotland/clydesdale-bank/2016/5-pound-f.jpg",
        alt: {en: "Front of the 5 Pound Bill", vi: "Mặt Trước Tờ 5 Bảng"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/scotland/clydesdale-bank/2016/5-pound-b.jpg",
        alt: {en: "Back of the 5 Pound Bill", vi: "Mặt Sau Tờ 5 Bảng"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Scottish 5 Pounds - Clydesdale Bank", 
        vi: "5 Bảng Scotland - Clydesdale Bank" 
    },
    year: "2016",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "125 $\\times$ 65 mm",
    figure: { 
        en: "William Arol (1839-1913)", 
        vi: "William Arol (1839-1913)" 
    },
    note: { 
        en: `2015\'s top 20 banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Top 20 tờ tiền năm 2015 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>` 
    },
};