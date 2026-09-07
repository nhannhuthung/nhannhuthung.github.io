const translations = {
    heading: {
        en: "Hong Kong",
        vi: "Hồng Kông"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/hong-kong/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Hongkongese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Hồng Kông` 
});
const issuerBochk = { en: "Bank Of China", vi: "Ngân Hàng Trung Quốc" };
const issuerHsbc = { en: "HSBC", vi: "HSBC" };
const issuerScbhk = { en: "Standard Chartered Bank", vi: "Ngân Hàng Standard Chartered"}
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 10 dollar
images.push([
        {
            src: imagePath("10-series/2002", "f"),
            alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
            description: obverse
        },
        {
            src: imagePath("10-series/2002", "b"),
            alt: altInfo("10", "Dollars", "Đô La", "Back", "sau"),
            description: reverse
        }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dollars", "Đô La"),
        year: "2002",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "138 \u00D7 69 mm",
    }
);
//#endregion

//#region 2 - 10 dollar
images.push([
    {
        src: imagePath("10-series/2014", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("10-series/2014", "b"),
        alt: altInfo("10", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dollars", "Đô La"),
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "138 \u00D7 69 mm",
    }
);
//#endregion

//#region 3 - 50 dollar
images.push([
    {
        src: imagePath("2003/bochk/50-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/bochk/50-dollar", "b"),
        alt: altInfo("50", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dollars", "Đô La"),
        issuer: { 
            en: issuerBochk.en, 
            vi: issuerBochk.vi 
        },
        year: "2007",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "148 \u00D7 74 mm",
    }
);
//#endregion

//#region 4 - 50 dollar
images.push([
    {
        src: imagePath("2003/hsbc/50-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/hsbc/50-dollar", "b"),
        alt: altInfo("50", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2009",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "148 \u00D7 74 mm",
    }
);
//#endregion

//#region 5 - 100 dollar
images.push([
    {
        src: imagePath("2003/hsbc/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/hsbc/100-dollar", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2008",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "153 \u00D7 77 mm",
    }
);
//#endregion

//#region 6 - 50 dollar
images.push([
    {
        src: imagePath("2003/scbhk/50-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/scbhk/50-dollar", "b"),
        alt: altInfo("50", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dollars", "Đô La"),
        issuer: { 
            en: issuerScbhk.en, 
            vi: issuerScbhk.vi 
        },
        year: "2003",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "148 \u00D7 74 mm",
    }
);
//#endregion

//#region 7 - 20 dollar
images.push([
    {
        src: imagePath("2010/bochk/20-dollar", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/bochk/20-dollar", "b"),
        alt: altInfo("20", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dollars", "Đô La"),
        issuer: { 
            en: issuerBochk.en, 
            vi: issuerBochk.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "143 \u00D7 72 mm",
    }
);
//#endregion

//#region 8 - 100 dollar
images.push([
    {
        src: imagePath("2010/bochk/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/bochk/100-dollar", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        issuer: { 
            en: issuerBochk.en, 
            vi: issuerBochk.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "153 \u00D7 77 mm",
    }
);
//#endregion

//#region 9 - 20 dollar
images.push([
    {
        src: imagePath("2010/hsbc/20-dollar", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/hsbc/20-dollar", "b"),
        alt: altInfo("20", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "143 \u00D7 72 mm",
    }
);
//#endregion

//#region 10 - 50 dollar
images.push([
    {
        src: imagePath("2010/hsbc/50-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/hsbc/50-dollar", "b"),
        alt: altInfo("50", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2012",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "148 \u00D7 74 mm",
    }
);
//#endregion

//#region 11 - 100 dollar
images.push([
    {
        src: imagePath("2010/hsbc/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/hsbc/100-dollar", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2012",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "153 \u00D7 77 mm",
    }
);
//#endregion

//#region 12 - 500 dollar
images.push([
    {
        src: imagePath("2010/hsbc/500-dollar", "f"),
        alt: altInfo("500", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/hsbc/500-dollar", "b"),
        alt: altInfo("500", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "158 \u00D7 79 mm",
    }
);
//#endregion

//#region 13 - 100 dollar
images.push([
    {
        src: imagePath("2010/scbhk/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/scbhk/100-dollar", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        issuer: { 
            en: issuerScbhk.en, 
            vi: issuerScbhk.vi 
        },
        year: "2016",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "153 \u00D7 77 mm",
    }
);
//#endregion

//#region 14 - 500 dollar
images.push([
    {
        src: imagePath("2010/scbhk/500-dollar", "f"),
        alt: altInfo("500", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010/scbhk/500-dollar", "b"),
        alt: altInfo("500", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dollars", "Đô La"),
        issuer: { 
            en: issuerScbhk.en, 
            vi: issuerScbhk.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "158 \u00D7 79 mm",
    }
);
//#endregion

//#region 15 - 100 dollar
images.push([
    {
        src: imagePath("2018/bochk/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/bochk/100-dollar", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        issuer: { 
            en: issuerBochk.en, 
            vi: issuerBochk.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "153 \u00D7 77 mm",
        note: {
            en: `2019\'s top 22 banknotes by ${ibnsLink}`,
            vi: `Top 22 tờ tiền của năm 2019 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 16 - 50 dollar
images.push([
    {
        src: imagePath("2018/hsbc/50-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/hsbc/50-dollar", "b"),
        alt: altInfo("50", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "153 \u00D7 77 mm",
        special: {
            en: "My favorite banknotes.",
            vi: "Tờ tiền mình yêu thích."
        },
    }
);
//#endregion

//#region 17 - 100 dollar
images.push([
    {
        src: imagePath("2018/hsbc/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/hsbc/100-dollar", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        issuer: { 
            en: issuerHsbc.en, 
            vi: issuerHsbc.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "153 \u00D7 77 mm",
    }
);
//#endregion

//#region 18 - 20 dollar
images.push([
    {
        src: imagePath("2018/scbhk/20-dollar", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/scbhk/20-dollar", "b"),
        alt: altInfo("20", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dollars", "Đô La"),
        issuer: { 
            en: issuerScbhk.en, 
            vi: issuerScbhk.vi 
        },
        year: "2020",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "143 \u00D7 72 mm",
    }
);
//#endregion

//#region 19 - 500 dollar
images.push([
    {
        src: imagePath("2018/scbhk/500-dollar", "f"),
        alt: altInfo("500", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/scbhk/500-dollar", "b"),
        alt: altInfo("500", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dollars", "Đô La"),
        issuer: { 
            en: issuerScbhk.en, 
            vi: issuerScbhk.vi 
        },
        year: "2020",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "158 \u00D7 79 mm",
    }
);
//#endregion