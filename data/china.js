const translations = {
    heading: {
        en: "China",
        vi: "Trung Quốc"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/china/2/1-jiao-f.jpg",
            alt: {en: "Front of the 1 Jiao Bill", vi: "Mặt Trước Tờ 1 Jiao"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/china/2/1-jiao-b.jpg",
            alt: {en: "Back of the 1 Jiao Bill", vi: "Mặt Sau Tờ 1 Jiao"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Chinese 1 Jiao", 
            vi: "1 Jiao Trung Quốc" 
        },
        year: "1980",
        type: { 
            en: "Non-circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" 
        },
        size: "115 $\\times$ 52 mm",
        figure: null,
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/china/3/1-yuan-f.jpg",
        alt: {en: "Front of the 1 Yuan Bill", vi: "Mặt Trước Tờ 1 Tệ"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/china/3/1-yuan-b.jpg",
        alt: {en: "Back of the 1 Yuan Bill", vi: "Mặt Sau Tờ 1 Tệ"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Chinese 1 Yuan", 
        vi: "1 Nhân Dân Tệ" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "131 $\\times$ 63 mm",
    figure: { 
        en: "Mao Zedong (1893-1976)", 
        vi: "Mao Trạch Đông (1893-1976)" 
    },
    note: null
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/china/3/5-yuan-f.jpg",
        alt: {en: "Front of the 5 Yuan Bill", vi: "Mặt Trước Tờ 5 Tệ"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/china/3/5-yuan-b.jpg",
        alt: {en: "Back of the 5 Yuan Bill", vi: "Mặt Sau Tờ 5 Tệ"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Chinese 5 Yuan", 
        vi: "5 Nhân Dân Tệ" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "135 $\\times$ 63 mm",
    figure: { 
        en: "Mao Zedong (1893-1976)", 
        vi: "Mao Trạch Đông (1893-1976)" 
    },
    note: null
};

index++; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/china/3/50-yuan-f.jpg",
        alt: {en: "Front of the 50 Yuan Bill", vi: "Mặt Trước Tờ 50 Tệ"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/china/3/50-yuan-b.jpg",
        alt: {en: "Back of the 50 Yuan Bill", vi: "Mặt Sau Tờ 50 Tệ"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Chinese 50 Yuan", 
        vi: "50 Nhân Dân Tệ" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "150 $\\times$ 70 mm",
    figure: { 
        en: "Mao Zedong (1893-1976)", 
        vi: "Mao Trạch Đông (1893-1976)" 
    },
    note: null
};

index++; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/china/2022/20-yuan-paper-f.jpg",
        alt: {en: "Front of the 20 Yuan Bill", vi: "Mặt Trước Tờ 20 Tệ"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/china/2022/20-yuan-paper-b.jpg",
        alt: {en: "Back of the 20 Yuan Bill", vi: "Mặt Sau Tờ 20 Tệ"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Chinese 20 Yuan", 
        vi: "20 Nhân Dân Tệ" 
    },
    year: null,
    type: { 
        en: "Circulating Commemorative Banknote", 
        vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" 
    },
    size: "70 $\\times$ 145 mm",
    figure: null,
    note: null
};

index++; //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/china/2022/20-yuan-plastic-f.jpg",
        alt: {en: "Front of the 20 Yuan Bill", vi: "Mặt Trước Tờ 20 Tệ"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/china/2022/20-yuan-plastic-b.jpg",
        alt: {en: "Back of the 20 Yuan Bill", vi: "Mặt Sau Tờ 20 Tệ"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Chinese 20 Yuan", 
        vi: "20 Nhân Dân Tệ" 
    },
    year: null,
    type: { 
        en: "Circulating Commemorative Banknote", 
        vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" 
    },
    size: "70 $\\times$ 145 mm",
    figure: null,
    note: { 
        en: `2021\'s top 20 banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Top 20 tờ tiền năm 2021 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`
    },
};