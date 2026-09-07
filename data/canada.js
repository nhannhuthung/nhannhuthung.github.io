const translations = {
    heading: {
        en: "Canada",
        vi: "Canada"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/canada/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Canadian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Canada` 
});
const issuer = { en: "Bank Of Canada", vi: "Ngân Hàng Canada" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Đã Từng Lưu Hành" };
const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" };
const comOutType = { en: "Non-circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Đã Từng Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 dollar
images.push([
    {
        src: imagePath("1954/1-dollar-1954", "f"),
        alt: altInfo("1", "Dollar", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1954/1-dollar-1954", "b"),
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
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 2 - 2 dollar
images.push([
    {
        src: imagePath("1954/2-dollar", "f"),
        alt: altInfo("2", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1954/2-dollar", "b"),
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
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 3 - 10 dollar
images.push([
    {
        src: imagePath("1954/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1954/10-dollar", "b"),
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
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 4 - 1 dollar
images.push([
    {
        src: imagePath("1954/1-dollar-1967", "f"),
        alt: altInfo("1", "Dollar", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1954/1-dollar-1967", "b"),
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
            en: comOutType.en, 
            vi: comOutType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 5 - 2 dollar
images.push([
    {
        src: imagePath("1969-1979/2-dollar", "f"),
        alt: altInfo("2", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1969-1979/2-dollar", "b"),
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
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 6 - 5 dollar
images.push([
    {
        src: imagePath("1969-1979/5-dollar", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1969-1979/5-dollar", "b"),
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
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Wilfrid Laurier (1841-1919)", 
            vi: "Wilfrid Laurier (1841-1919)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 7 - 5 dollar
images.push([
    {
        src: imagePath("2001-2006/5-dollar", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2001-2006/5-dollar", "b"),
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
        year: "2010",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Wilfrid Laurier (1841-1919)", 
            vi: "Wilfrid Laurier (1841-1919)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 8 - 10 dollar
images.push([
    {
        src: imagePath("2001-2006/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2001-2006/10-dollar", "b"),
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
        year: "2007",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "John A. Macdonald (1815-1891)", 
            vi: "John A. Macdonald (1815-1891)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 9 - 20 dollar
images.push([
    {
        src: imagePath("2001-2006/20-dollar", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2001-2006/20-dollar", "b"),
        alt: altInfo("20", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
        note: {
            en: `Banknote of 2004 by ${ibnsLink}`,
            vi: `Tờ tiền của năm 2004 theo ${ibnsLink}`
        }
    }
);
//#endregion

//#region 10 - 5 dollar
images.push([
    {
        src: imagePath("2011-2013/5-dollar", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2013/5-dollar", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Wilfrid Laurier (1841-1919)", 
            vi: "Wilfrid Laurier (1841-1919)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 11 - 10 dollar
images.push([
    {
        src: imagePath("2011-2013/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2013/10-dollar", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "John A. Macdonald (1815-1891)", 
            vi: "John A. Macdonald (1815-1891)" 
        },
        size: "153 \u00D7 70 mm",
        note: {
            en: `2013\'s top 12 banknotes by ${ibnsLink}`,
            vi: `Top 12 tờ tiền của năm 2013 theo ${ibnsLink}`
        }
    }
);
//#endregion

//#region 12 - 20 dollar
images.push([
    {
        src: imagePath("2011-2013/20-dollar", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2013/20-dollar", "b"),
        alt: altInfo("20", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 13 - 50 dollar
images.push([
    {
        src: imagePath("2011-2013/50-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2013/50-dollar", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "W. L. Mackenzie King (1874-1950)", 
            vi: "W. L. Mackenzie King (1874-1950)" 
        },
        size: "153 \u00D7 70 mm",
        note: {
            en: `2012\'s top 13 banknotes by ${ibnsLink}`,
            vi: `Top 13 tờ tiền của năm 2012 theo ${ibnsLink}`
        }
    }
);
//#endregion

//#region 14 - 100 dollar
images.push([
    {
        src: imagePath("2011-2013/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2013/100-dollar", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Robert L. Borden (1854-1937)", 
            vi: "Robert L. Borden (1854-1937)" 
        },
        size: "153 \u00D7 70 mm",
        note: {
            en: `2011\'s top 12 banknotes by ${ibnsLink}`,
            vi: `Top 12 tờ tiền của năm 2011 theo ${ibnsLink}`
        }
    }
);
//#endregion

//#region 15 - 20 dollar
images.push([
    {
        src: imagePath("2011-2013/20-dollar-com", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2013/20-dollar-com", "b"),
        alt: altInfo("20", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comInType.en, 
            vi: comInType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "153 \u00D7 70 mm",
    }
);
//#endregion

//#region 16 - 10 dollar
images.push([
    {
        src: imagePath("2017/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/10-dollar", "b"),
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
        year: "2017",
        type: { 
            en: comInType.en, 
            vi: comInType.vi 
        },
        figure: { 
            en: "John A. Macdonald (1815-1891), George-Étienne Cartier (1814-1873), Agnes Macphail (1890-1954), James Gladstone (1887-1971)", 
            vi: "John A. Macdonald (1815-1891), George-Étienne Cartier (1814-1873), Agnes Macphail (1890-1954), James Gladstone (1887-1971)" 
        },
        size: "153 \u00D7 70 mm",
        note: {
            en: `2017\'s top 22 banknotes by ${ibnsLink}`,
            vi: `Top 22 tờ tiền của năm 2017 theo ${ibnsLink}`
        }
    }
);
//#endregion

//#region 17 - 10 dollar
images.push([
    {
        src: imagePath("2018/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/10-dollar", "b"),
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
            en: comInType.en, 
            vi: comInType.vi 
        },
        figure: { 
            en: "Viola Desmond (1914-1965)", 
            vi: "Viola Desmond (1914-1965)" 
        },
        size: "70 \u00D7 153 mm",
        note: {
            en: `Banknote of 2018 by ${ibnsLink}`,
            vi: `Tờ tiền của năm 2018 theo ${ibnsLink}`
        }
    }
);
//#endregion