const translations = {
    heading: {
        en: "United States of America",
        vi: "Hợp Chúng Quốc Hoa Kỳ"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/usa/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} American ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Mỹ` 
});
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 dollar
images.push([
    {
        src: imagePath("1-series/2013", "f"),
        alt: altInfo("1", "Dollar", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1-series/2013", "b"),
        alt: altInfo("1", "Dollar", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Dollar", "Đô La"),
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "George Washington (1732-1799)", 
            vi: "George Washington (1732-1799)" 
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 2 - 2 dollar
images.push([
    {
        src: imagePath("2-series/2013", "f"),
        alt: altInfo("2", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2-series/2013", "b"),
        alt: altInfo("2", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Dollars", "Đô La"),
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Thomas Jefferson (1743-1826)", 
            vi: "Thomas Jefferson (1743-1826)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 3 - 5 dollar
images.push([
    {
        src: imagePath("5-series/1988A", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5-series/1988A", "b"),
        alt: altInfo("5", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dollars", "Đô La"),
        year: "1988",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Abraham Lincoln (1809-1865)", 
            vi: "Abraham Lincoln (1809-1865)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 4 - 5 dollar
images.push([
    {
        src: imagePath("5-series/2013", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5-series/2013", "b"),
        alt: altInfo("5", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dollars", "Đô La"),
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Abraham Lincoln (1809-1865)", 
            vi: "Abraham Lincoln (1809-1865)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 5 - 10 dollar
images.push([
    {
        src: imagePath("10-series/2013", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("10-series/2013", "b"),
        alt: altInfo("10", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dollars", "Đô La"),
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Alexander Hamilton (1757-1804)", 
            vi: "Alexander Hamilton (1757-1804)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 6 - 20 dollar
images.push([
    {
        src: imagePath("20-series/2013", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("20-series/2013", "b"),
        alt: altInfo("20", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dollars", "Đô La"),
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Andrew Jackson (1767-1845)", 
            vi: "Andrew Jackson (1767-1845)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 8 - 50 dollar
images.push([
    {
        src: imagePath("50-series/2013", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("50-series/2013", "b"),
        alt: altInfo("50", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dollars", "Đô La"),
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ulysses S. Grant (1822-1885)", 
            vi: "Ulysses S. Grant (1822-1885)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 9 - 100 dollar
images.push([
    {
        src: imagePath("100-series/1996", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("100-series/1996", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        year: "1996",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Benjamin Franklin (1706-1790)", 
            vi: "Benjamin Franklin (1706-1790)" 
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 10 - 100 dollar
images.push([
    {
        src: imagePath("100-series/2009A", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("100-series/2009A", "b"),
        alt: altInfo("100", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Đô La"),
        year: "2009",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Benjamin Franklin (1706-1790)", 
            vi: "Benjamin Franklin (1706-1790)" 
        },
        size: "156 \u00D7 67 mm",
        note: {
            en: `2013\'s top 12 banknotes by ${ibnsLink}`,
            vi: `Top 12 tờ tiền của năm 2013 theo ${ibnsLink}`
        }
    }
);
//#endregion