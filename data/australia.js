const translations = {
    heading: {
        en: "Australia",
        vi: "Úc"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/australia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Australian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Úc` 
});
const issuer = { en: "Reserve Bank Of Australia", vi: "Ngân Hàng Trữ Kim Úc" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const comOutType = { en: "Non-circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Đã Từng Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "8 7 6 5 | 4 3 | 2 | 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 10 dollar
images.push([
    {
        src: imagePath("1988/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1988/10-dollar", "b"),
        alt: altInfo("10", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dollars", "Đô La"),
        subtitle: {
            en: "Bicentennial Of The British Settlement (1788-1988)",
            vi: "Đại Lễ Song Bách Niên Định Cư Của Người Anh (1788-1988)"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comOutType.en, 
            vi: comOutType.vi 
        },
        size: "155 \u00D7 78 mm",
        note: { 
            en: "First polymer banknote in the world", 
            vi: "Tiền polymer đầu tiên trên thế giới" 
        },
        reference: refLink("P-49b", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUS0049.htm#49b"),
        special: {
            en: "My favorite banknotes",
            vi: "Tờ tiền mình yêu thích"
        }
    }
);
//#endregion

//#region 2 - 100 dollar
images.push([
    {
        src: imagePath("1992/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992/100-dollar", "b"),
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
        year: "1999",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Nellie Melba (1861-1931)", 
                vi: "Nellie Melba (1861-1931)" 
            },
            {
                en: "John Monash (1865-1931)", 
                vi: "John Monash (1865-1931)" 
            }
        ],
        size: "158 \u00D7 65 mm",
        reference: refLink("P-55b", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUS0055.htm#1998"),
    }
);
//#endregion

//#region 3 - 20 dollar
images.push([
    {
        src: imagePath("2002/20-dollar", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2002/20-dollar", "b"),
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
        year: "2010",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Mary Reibey (1777-1855)", 
                vi: "Mary Reibey (1777-1855)" 
            },
            {
                en: "John Flynn (1880-1951)", 
                vi: "John Flynn (1880-1951)" 
            }
        ],
        size: "144 \u00D7 65 mm",
        reference: refLink("P-59g", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUS0059.htm#2010"),
    }
);
//#endregion

//#region 4 - 50 dollar
images.push([
    {
        src: imagePath("2002/50-dollar", "f"),
        alt: altInfo("50", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2002/50-dollar", "b"),
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
        year: "2007",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "David Unaipon (1872-1967)", 
                vi: "David Unaipon (1872-1967)" 
            },
            {
                en: "Edith Cowan (1861-1932)", 
                vi: "Edith Cowan (1861-1932)" 
            }
        ],
        size: "151 \u00D7 65 mm",
        reference: refLink("P-60e", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUS0060.htm#60e"),
    }
);
//#endregion

//#region 5 - 5 dollar
images.push([
    {
        src: imagePath("2016/5-dollar", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/5-dollar", "b"),
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
        year: "2016",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Elizabeth II (1952-2022)", 
            vi: "Elizabeth II (1952-2022)" 
        },
        size: "130 \u00D7 65 mm",
        reference: refLink("P-62", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUS0062.htm"),
        note: { 
            en: `2016\'s top 19 banknotes by ${ibnsLink}`,
            vi: `Top 19 tờ tiền năm 2016 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 6 - 10 dollar
images.push([
    {
        src: imagePath("2016/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/10-dollar", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Banjo Paterson (1864-1941)", 
                vi: "Banjo Paterson (1864-1941)" 
            },
            {
                en: "Mary Gilmore (1865-1962)", 
                vi: "Mary Gilmore (1865-1962)" 
            }
        ],
        size: "137 \u00D7 65 mm",
        note: { 
            en: `2017\'s top 22 banknotes by ${ibnsLink}`,
            vi: `Top 22 tờ tiền năm 2017 theo ${ibnsLink}`
        },
        reference: refLink("P-63", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUS0063.htm"),
    }
);
//#endregion

//#region 7 - 20 dollar
images.push([
    {
        src: imagePath("2016/20-dollar", "f"),
        alt: altInfo("20", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/20-dollar", "b"),
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
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Mary Reibey (1777-1855)", 
                vi: "Mary Reibey (1777-1855)" 
            },
            {
                en: "John Flynn (1880-1951)", 
                vi: "John Flynn (1880-1951)" 
            }
        ],
        size: "144 \u00D7 65 mm",
        note: { 
            en: `2019\'s top 22 banknotes by ${ibnsLink}`,
            vi: `Top 22 tờ tiền năm 2019 theo ${ibnsLink}`
        },
        reference: refLink("P-W64", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUSW2019-020.htm#2019-2"),
    }
);
//#endregion

//#region 8 - 100 dollar
images.push([
    {
        src: imagePath("2016/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/100-dollar", "b"),
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
        year: "2020",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Nellie Melba (1861-1931)", 
                vi: "Nellie Melba (1861-1931)" 
            },
            {
                en: "John Monash (1865-1931)", 
                vi: "John Monash (1865-1931)" 
            }
        ],
        size: "158 \u00D7 65 mm",
        note: { 
            en: `2020\'s top 24 banknotes by ${ibnsLink}`,
            vi: `Top 24 tờ tiền năm 2020 theo ${ibnsLink}`
        },
        reference: refLink("P-W66", "https://banknote.ws/COLLECTION/countries/AUS/AUS/AUSW2020-100.htm#2020"),
    }
);
//#endregion