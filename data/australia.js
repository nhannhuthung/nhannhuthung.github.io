let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/australia/1988/10-dollar-f.jpg",
            alt: {en: "Front of the 10 Dollar Bill", vi: "Mặt Trước Tờ 10 Đô La"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/australia/1988/10-dollar-b.jpg",
            alt: {en: "Back of the 10 Dollar Bill", vi: "Mặt Sau Tờ 10 Đô La"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Australian 10 Dollars", 
            vi: "10 Đô La Úc" 
        },
        year: null,
        type: { 
            en: "Non-circulating Commemorative Banknote", 
            vi: "Tiền Kỷ Niệm Đã Từng Lưu Hành" 
        },
        size: "155 $\\times$ 78 mm",
        figure: null,
        note: { 
            en: "First polymer banknote in the world", 
            vi: "Tiền polymer đầu tiên trên thế giới" 
        },
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/australia/1992-2016/20-dollar-f.jpg",
        alt: {en: "Front of the 20 Dollar Bill", vi: "Mặt Trước Tờ 20 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/australia/1992-2016/20-dollar-b.jpg",
        alt: {en: "Back of the 20 Dollar Bill", vi: "Mặt Sau Tờ 20 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Australian 20 Dollars", 
        vi: "20 Đô La Úc" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "144 $\\times$ 65 mm",
    figure: { 
        en: "Mary Reibey (1777-1855)", 
        vi: "Mary Reibey (1777-1855)" 
    },
    note: null
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/australia/1992-2016/50-dollar-f.jpg",
        alt: {en: "Front of the 50 Dollar Bill", vi: "Mặt Trước Tờ 50 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/australia/1992-2016/50-dollar-b.jpg",
        alt: {en: "Back of the 50 Dollar Bill", vi: "Mặt Sau Tờ 50 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Australian 50 Dollars", 
        vi: "50 Đô La Úc" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "151 $\\times$ 65 mm",
    figure: { 
        en: "David Unaipon (1872-1967)", 
        vi: "David Unaipon (1872-1967)" 
    },
    note: null
};

index++; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/australia/1992-2016/100-dollar-f.jpg",
        alt: {en: "Front of the 100 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/australia/1992-2016/100-dollar-b.jpg",
        alt: {en: "Back of the 100 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Australian 100 Dollars", 
        vi: "100 Đô La Úc" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "158 $\\times$ 65 mm",
    figure: { 
        en: "Nellie Melba (1861-1931)", 
        vi: "Nellie Melba (1861-1931)" 
    },
    note: null
};

index++; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/australia/2016/5-dollar-f.jpg",
        alt: {en: "Front of the 5 Dollar Bill", vi: "Mặt Trước Tờ 5 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/australia/2016/5-dollar-b.jpg",
        alt: {en: "Back of the 5 Dollar Bill", vi: "Mặt Sau Tờ 5 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Australian 5 Dollars", 
        vi: "5 Đô La Úc" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "130 $\\times$ 65 mm",
    figure: { 
        en: "Elizabeth II (1952-2022)", 
        vi: "Elizabeth II (1952-2022)" 
    },
    note: { 
        en: `2016\'s top 19 banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Top 19 tờ tiền năm 2016 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`
    },
};

index++; //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/australia/2016/10-dollar-f.jpg",
        alt: {en: "Front of the 10 Dollar Bill", vi: "Mặt Trước Tờ 10 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/australia/2016/10-dollar-b.jpg",
        alt: {en: "Back of the 10 Dollar Bill", vi: "Mặt Sau Tờ 10 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Australian 10 Dollars", 
        vi: "10 Đô La Úc" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "137 $\\times$ 65 mm",
    figure: { 
        en: "Banjo Paterson (1864-1941)", 
        vi: "Banjo Paterson (1864-1941)" 
    },
    note: { 
        en: `2017\'s top 22 banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Top 22 tờ tiền năm 2017 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`
    },
};

index++; //index = 7
images[`${index}`] = [
    {
        src: "../images/collection/australia/2016/100-dollar-f.jpg",
        alt: {en: "Front of the 10 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/australia/2016/100-dollar-b.jpg",
        alt: {en: "Back of the 10 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Australian 1000 Dollars", 
        vi: "100 Đô La Úc" 
    },
    year: null,
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "158 $\\times$ 65 mm",
    figure: { 
        en: "Banjo Paterson (1864-1941)", 
        vi: "Banjo Paterson (1864-1941)" 
    },
    note: { 
        en: `2020\'s top 24 banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`, 
        vi: `Top 24 tờ tiền năm 2020 theo <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`
    },
};