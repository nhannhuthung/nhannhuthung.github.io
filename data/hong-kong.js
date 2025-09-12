const translations = {
    heading: {
        en: "Hong Kong",
        vi: "Hồng Kông"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/hong-kong/10-series/2002-f.jpg",
            alt: {en: "Front of the 10 Dollar Bill", vi: "Mặt Trước Tờ 10 Đô La"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/hong-kong/10-series/2002-b.jpg",
            alt: {en: "Back of the 10 Dollar Bill", vi: "Mặt Sau Tờ 10 Đô La"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Hongkongese 10 Dollars", 
            vi: "10 Đô La Hồng Kông" 
        },
        year: "2002",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "138 $\\times$ 69 mm",
        figure: null,
        note: null
    }
};

index++ //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/10-series/2014-f.jpg",
        alt: {en: "Front of the 10 Dollar Bill", vi: "Mặt Trước Tờ 10 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/10-series/2014-b.jpg",
        alt: {en: "Back of the 10 Dollar Bill", vi: "Mặt Sau Tờ 10 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 10 Dollars", 
        vi: "10 Đô La Hồng Kông" 
    },
    year: "2014",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "138 $\\times$ 69 mm",
    figure: null,
    note: null
};

index++ //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2003/bochk/50-dollar-f.jpg",
        alt: {en: "Front of the 50 Dollar Bill", vi: "Mặt Trước Tờ 50 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2003/bochk/50-dollar-b.jpg",
        alt: {en: "Back of the 50 Dollar Bill", vi: "Mặt Sau Tờ 50 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 50 Dollars - Bank of China", 
        vi: "50 Đô La Hồng Kông - Bank of China" 
    },
    year: "2007",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "148 $\\times$ 74 mm",
    figure: null,
    note: null
};

index++ //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2003/hsbc/50-dollar-f.jpg",
        alt: {en: "Front of the 50 Dollar Bill", vi: "Mặt Trước Tờ 50 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2003/hsbc/50-dollar-b.jpg",
        alt: {en: "Back of the 50 Dollar Bill", vi: "Mặt Sau Tờ 50 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 50 Dollars - HSBC", 
        vi: "50 Đô La Hồng Kông - HSBC" 
    },
    year: "2009",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "148 $\\times$ 74 mm",
    figure: null,
    note: null,
};

index++ //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2003/hsbc/100-dollar-f.jpg",
        alt: {en: "Front of the 100 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2003/hsbc/100-dollar-b.jpg",
        alt: {en: "Back of the 100 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 100 Dollars - HSBC", 
        vi: "100 Đô La Hồng Kông - HSBC" 
    },
    year: "2008",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "153 $\\times$ 77 mm",
    figure: null,
    note: null,
    
};

index++ //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2003/scbhk/50-dollar-f.jpg",
        alt: {en: "Front of the 50 Dollar Bill", vi: "Mặt Trước Tờ 50 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2003/scbhk/50-dollar-b.jpg",
        alt: {en: "Back of the 50 Dollar Bill", vi: "Mặt Sau Tờ 50 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 50 Dollars - Standard Chartered Bank", 
        vi: "50 Đô La Hồng Kông - Standard Chartered Bank" 
    },
    year: "2003",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "148 $\\times$ 74 mm",
    figure: null,
    note: null,
};

index++ //index = 7
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/bochk/20-dollar-f.jpg",
        alt: {en: "Front of the 20 Dollar Bill", vi: "Mặt Trước Tờ 20 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/bochk/20-dollar-b.jpg",
        alt: {en: "Back of the 20 Dollar Bill", vi: "Mặt Sau Tờ 20 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 20 Dollars - Bank of China", 
        vi: "20 Đô La Hồng Kông - Bank of China" 
    },
    year: "2014",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "143 $\\times$ 72 mm",
    figure: null,
    note: null
};

index++ //index = 8
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/bochk/100-dollar-f.jpg",
        alt: {en: "Front of the 100 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/bochk/100-dollar-b.jpg",
        alt: {en: "Back of the 100 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 100 Dollars - Bank of China", 
        vi: "100 Đô La Hồng Kông - Bank of China" 
    },
    year: "2014",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "153 $\\times$ 77 mm",
    figure: null,
    note: null
};

index++ //index = 9
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/hsbc/20-dollar-f.jpg",
        alt: {en: "Front of the 20 Dollar Bill", vi: "Mặt Trước Tờ 20 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/hsbc/20-dollar-b.jpg",
        alt: {en: "Back of the 20 Dollar Bill", vi: "Mặt Sau Tờ 20 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 20 Dollars - HSBC", 
        vi: "20 Đô La Hồng Kông - HSBC" 
    },
    year: "2013",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "143 $\\times$ 72 mm",
    figure: null,
    note: null
};

index++ //index = 10
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/hsbc/50-dollar-f.jpg",
        alt: {en: "Front of the 50 Dollar Bill", vi: "Mặt Trước Tờ 50 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/hsbc/50-dollar-b.jpg",
        alt: {en: "Back of the 50 Dollar Bill", vi: "Mặt Sau Tờ 50 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 50 Dollars - HSBC", 
        vi: "50 Đô La Hồng Kông - HSBC" 
    },
    year: "2012",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "148 $\\times$ 74 mm",
    figure: null,
    note: null
};

index++ //index = 11
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/hsbc/100-dollar-f.jpg",
        alt: {en: "Front of the 100 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/hsbc/100-dollar-b.jpg",
        alt: {en: "Back of the 100 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 100 Dollars - HSBC", 
        vi: "100 Đô La Hồng Kông - HSBC" 
    },
    year: "2012",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "153 $\\times$ 77 mm",
    figure: null,
    note: null
};

index++ //index = 12
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/hsbc/500-dollar-f.jpg",
        alt: {en: "Front of the 500 Dollar Bill", vi: "Mặt Trước Tờ 500 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/hsbc/500-dollar-b.jpg",
        alt: {en: "Back of the 500 Dollar Bill", vi: "Mặt Sau Tờ 500 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 500 Dollars - HSBC", 
        vi: "500 Đô La Hồng Kông - HSBC" 
    },
    year: "2014",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "158 $\\times$ 79 mm",
    figure: null,
    note: null
};

index++ //index = 13
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/scbhk/100-dollar-f.jpg",
        alt: {en: "Front of the 100 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/scbhk/100-dollar-b.jpg",
        alt: {en: "Back of the 100 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 100 Dollars - Standard Chartered Bank", 
        vi: "100 Đô La Hồng Kông - Standard Chartered Bank" 
    },
    year: "2016",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "153 $\\times$ 77 mm",
    figure: null,
    note: null
};

index++ //index = 14
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2010/scbhk/500-dollar-f.jpg",
        alt: {en: "Front of the 500 Dollar Bill", vi: "Mặt Trước Tờ 500 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2010/scbhk/500-dollar-b.jpg",
        alt: {en: "Back of the 500 Dollar Bill", vi: "Mặt Sau Tờ 500 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 500 Dollars - Standard Chartered Bank", 
        vi: "500 Đô La Hồng Kông - Standard Chartered Bank" 
    },
    year: "2014",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "158 $\\times$ 79 mm",
    figure: null,
    note: null,
};

index++ //index = 15
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2018/bochk/100-dollar-f.jpg",
        alt: {en: "Front of the 100 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2018/bochk/100-dollar-b.jpg",
        alt: {en: "Back of the 100 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 100 Dollars - Bank of China", 
        vi: "100 Đô La Hồng Kông - Bank of China" 
    },
    year: "2018",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "153 $\\times$ 77 mm",
    figure: null,
    note: null,
};

index++ //index = 16
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2018/hsbc/50-dollar-f.jpg",
        alt: {en: "Front of the 50 Dollar Bill", vi: "Mặt Trước Tờ 50 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2018/hsbc/50-dollar-b.jpg",
        alt: {en: "Back of the 50 Dollar Bill", vi: "Mặt Sau Tờ 50 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 50 Dollars - HSBC", 
        vi: "50 Đô La Hồng Kông - HSBC" 
    },
    year: "2018",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "153 $\\times$ 77 mm",
    figure: null,
    note: null
};


index++ //index = 17
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2018/hsbc/100-dollar-f.jpg",
        alt: {en: "Front of the 100 Dollar Bill", vi: "Mặt Trước Tờ 100 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2018/hsbc/100-dollar-b.jpg",
        alt: {en: "Back of the 100 Dollar Bill", vi: "Mặt Sau Tờ 100 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 100 Dollars - HSBC", 
        vi: "100 Đô La Hồng Kông - HSBC" 
    },
    year: "2018",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "153 $\\times$ 77 mm",
    figure: null,
    note: null
};

index++ //index = 18
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2018/scbhk/20-dollar-f.jpg",
        alt: {en: "Front of the 20 Dollar Bill", vi: "Mặt Trước Tờ 20 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2018/scbhk/20-dollar-b.jpg",
        alt: {en: "Back of the 20 Dollar Bill", vi: "Mặt Sau Tờ 20 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 20 Dollars - Standard Chartered Bank", 
        vi: "20 Đô La Hồng Kông - Standard Chartered Bank" 
    },
    year: "2020",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "143 $\\times$ 72 mm",
    figure: null,
    note: null,
};

index++ //index = 19
images[`${index}`] = [
    {
        src: "../images/collection/hong-kong/2018/scbhk/500-dollar-f.jpg",
        alt: {en: "Front of the 500 Dollar Bill", vi: "Mặt Trước Tờ 500 Đô La"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/hong-kong/2018/scbhk/500-dollar-b.jpg",
        alt: {en: "Back of the 500 Dollar Bill", vi: "Mặt Sau Tờ 500 Đô La"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Hongkongese 500 Dollars - Standard Chartered Bank", 
        vi: "500 Đô La Hồng Kông - Standard Chartered Bank" 
    },
    year: "2020",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "158 $\\times$ 79 mm",
    figure: null,
    note: null
};