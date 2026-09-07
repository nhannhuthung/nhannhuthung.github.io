const translations = {
    heading: {
        en: "Arctic Territories",
        vi: "Các Lãnh Thổ Bắc Cực"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/arctic-territories/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Arctic Territories' ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Lãnh Thổ Bắc Cực` 
});
const issuer = { en: "Global Numismatic Services", vi: "Dịch Vụ Tiền Tệ Toàn Cầu" };
const fanType = { en: "Fantasy Banknote", vi: "Tiền Sưu Tầm" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 2 dollar
images.push([
    {
        src: imagePath("2010/2-polar-dollar", "f"),
        alt: altInfo("2", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/2-polar-dollar", "b"),
        alt: altInfo("2", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        figure: {
            en: "Fridtjof Wedel-Jarlsberg Nansen (1861-1930)", 
            vi: "Fridtjof Wedel-Jarlsberg Nansen (1861-1930)" 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 2 - 10 dollar
images.push([
    {
        src: imagePath("2010/10-polar-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/10-polar-dollar", "b"),
        alt: altInfo("10", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        figure: {
            en: "Fridtjof Wedel-Jarlsberg Nansen (1861-1930)", 
            vi: "Fridtjof Wedel-Jarlsberg Nansen (1861-1930)" 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 3 - 1 dollar
images.push([
    {
        src: imagePath("2011-2012/1-polar-dollar", "f"),
        alt: altInfo("1", "Dollar", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2012/1-polar-dollar", "b"),
        alt: altInfo("1", "Dollar", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Dollar", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 4 - 3 dollar
images.push([
    {
        src: imagePath("2011-2012/3-polar-dollar", "f"),
        alt: altInfo("3", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2012/3-polar-dollar", "b"),
        alt: altInfo("3", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("3", "3", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        figure: {
            en: "Roald Engelbregt Gravning Amundsen (1872-1928?)", 
            vi: "Roald Engelbregt Gravning Amundsen (1872-1928?)", 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 5 - 5 dollar
images.push([
    {
        src: imagePath("2011-2012/5-polar-dollar", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2012/5-polar-dollar", "b"),
        alt: altInfo("5", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 6 - 8 dollar
images.push([
    {
        src: imagePath("2011-2012/8-polar-dollar", "f"),
        alt: altInfo("8", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2012/8-polar-dollar", "b"),
        alt: altInfo("8", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("8", "8", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        figure: {
            en: "Roald Engelbregt Gravning Amundsen (1872-1928?)", 
            vi: "Roald Engelbregt Gravning Amundsen (1872-1928?)", 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 7 - 9 dollar
images.push([
    {
        src: imagePath("2011-2012/9-polar-dollar", "f"),
        alt: altInfo("9", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2012/9-polar-dollar", "b"),
        alt: altInfo("9", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("9", "9", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",   
    }
);
//#endregion

//#region 8 - 15 dollar
images.push([
    {
        src: imagePath("2011-2012/15-polar-dollar", "f"),
        alt: altInfo("15", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2012/15-polar-dollar", "b"),
        alt: altInfo("15", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("15", "15", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        figure: {
            en: "Roald Engelbregt Gravning Amundsen (1872-1928?)", 
            vi: "Roald Engelbregt Gravning Amundsen (1872-1928?)", 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 9 - 6 dollar
images.push([
    {
        src: imagePath("2013/6-polar-dollar", "f"),
        alt: altInfo("6", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2013/6-polar-dollar", "b"),
        alt: altInfo("6", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("6", "6", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",   
    }
);
//#endregion

//#region 10 - 25 dollar
images.push([
    {
        src: imagePath("2017/25-polar-dollar", "f"),
        alt: altInfo("25", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/25-polar-dollar", "b"),
        alt: altInfo("25", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("25", "25", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 11 - 50 dollar
images.push([
    {
        src: imagePath("2017/50-polar-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/50-polar-dollar", "b"),
        alt: altInfo("50", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 12 - 100 dollar
images.push([
    {
        src: imagePath("2017/100-polar-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/100-polar-dollar", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 13 - 250 dollar
images.push([
    {
        src: imagePath("2017/250-polar-dollar", "f"),
        alt: altInfo("250", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/250-polar-dollar", "b"),
        alt: altInfo("250", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("250", "250", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion

//#region 14 - 500 dollar
images.push([
    {
        src: imagePath("2017/500-polar-dollar", "f"),
        alt: altInfo("500", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/500-polar-dollar", "b"),
        alt: altInfo("500", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        size: "160 \u00D7 80 mm",
    }
);
//#endregion