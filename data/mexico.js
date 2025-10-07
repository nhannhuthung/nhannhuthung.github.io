const translations = {
    heading: {
        en: "Mexico",
        vi: "Mexico"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/mexico/d/20-peso-f.jpg",
            alt: {en: "Front of the 20 Peso Bill", vi: "Mặt Trước Tờ 20 Peso"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/mexico/d/20-peso-b.jpg",
            alt: {en: "Back of the 20 Peso Bill", vi: "Mặt Sau Tờ 20 Peso"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Mexican 20 Pesos", 
            vi: "20 Peso Mexico" 
        },
        issuer: {
            en: "Bank Of Mexico",
            vi: "Ngân Hàng Mexico"
        },
        year: "1998",
        type: { 
            en: "Non-circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" 
        },
        figure: { 
            en: "Benito Juárez (1858-1872)", 
            vi: "Benito Juárez (1858-1872)" 
        },
        size: "129 \u00D7 65 mm",
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/mexico/d/50-peso-f.jpg",
        alt: {en: "Front of the 50 Peso Bill", vi: "Mặt Trước Tờ 50 Peso"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/mexico/d/50-peso-b.jpg",
        alt: {en: "Back of the 50 Peso Bill", vi: "Mặt Sau Tờ 50 Peso"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Mexican 50 Pesos", 
        vi: "50 Peso Mexico" 
    },
    issuer: {
        en: "Bank Of Mexico",
        vi: "Ngân Hàng Mexico"
    },
    year: "1998",
    type: { 
        en: "Non-circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" 
    },
    figure: { 
        en: "José María Morelos (1765-1815)", 
        vi: "José María Morelos (1765-1815)" 
    },
    size: "129 \u00D7 65 mm",
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/mexico/f/50-peso-f.jpg",
        alt: {en: "Front of the 50 Peso Bill", vi: "Mặt Trước Tờ 50 Peso"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/mexico/f/50-peso-b.jpg",
        alt: {en: "Back of the 50 Peso Bill", vi: "Mặt Sau Tờ 50 Peso"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Mexican 50 Pesos", 
        vi: "50 Peso Mexico" 
    },
    issuer: {
        en: "Bank Of Mexico",
        vi: "Ngân Hàng Mexico"
    },
    year: "2015",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: { 
        en: "José María Morelos (1765-1815)", 
        vi: "José María Morelos (1765-1815)" 
    },
    size: "127 \u00D7 66 mm",
};

index++; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/mexico/g/20-peso-f.jpg",
        alt: {en: "Front of the 20 Peso Bill", vi: "Mặt Trước Tờ 20 Peso"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/mexico/g/20-peso-b.jpg",
        alt: {en: "Back of the 20 Peso Bill", vi: "Mặt Sau Tờ 20 Peso"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Mexican 20 Pesos", 
        vi: "20 Peso Mexico" 
    },
    issuer: {
        en: "Bank Of Mexico",
        vi: "Ngân Hàng Mexico"
    },
    year: "2021",
    type: { 
        en: "Circulating Standard/Commemorative Banknote", 
        vi: "Tiền Tiêu Chuẩn/Kỷ Niệm Còn Đang Lưu Hành" 
    },
    size: "129 \u00D7 65 mm",
};

index++; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/mexico/g/50-peso-f.jpg",
        alt: {en: "Front of the 50 Peso Bill", vi: "Mặt Trước Tờ 50 Peso"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/mexico/g/50-peso-b.jpg",
        alt: {en: "Back of the 50 Peso Bill", vi: "Mặt Sau Tờ 50 Peso"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Mexican 50 Pesos", 
        vi: "50 Peso Mexico" 
    },
    issuer: {
        en: "Bank Of Mexico",
        vi: "Ngân Hàng Mexico"
    },
    year: "2023",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "65 \u00D7 125 mm",
    note: { 
        en: `Banknote of 2021 by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Tờ tiền của năm 2021 by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>` 
    },
};

index++; //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/mexico/g/100-peso-f.jpg",
        alt: {en: "Front of the 100 Peso Bill", vi: "Mặt Trước Tờ 100 Peso"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/mexico/g/100-peso-b.jpg",
        alt: {en: "Back of the 100 Peso Bill", vi: "Mặt Sau Tờ 100 Peso"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Mexican 100 Pesos", 
        vi: "100 Peso Mexico" 
    },
    issuer: {
        en: "Bank Of Mexico",
        vi: "Ngân Hàng Mexico"
    },
    year: "2023",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    figure: { 
        en: "Juana Inés de la Cruz (1651-1695)", 
        vi: "Juana Inés de la Cruz (1651-1695)" 
    },
    size: "65 \u00D7 132 mm",
    note: { 
        en: `Banknote of 2020 by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Tờ tiền của năm 2020 by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>` 
    },
};