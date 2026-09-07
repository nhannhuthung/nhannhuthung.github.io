const translations = {
    heading: {
        en: "Scotland",
        vi: "Scotland"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/scotland/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Scottish ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Scotland` 
});
const issuerRoyal = { en: "Royal Bank Of Scotland", vi: "Ngân Hàng Hoàng Gia Scotland" };
const issuerClydedale = { en: "Clydesdale Bank", vi: "Ngân Hàng Clydesdale" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 pound
images.push([
    {
        src: imagePath("royal-bank/1987-2001/1-pound", "f"),
        alt: altInfo("1", "Pound", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("royal-bank/1987-2001/1-pound", "b"),
        alt: altInfo("1", "Pound", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Pound", "Bảng"),
        issuer: {
            en: issuerRoyal.en,
            vi: issuerRoyal.vi
        },
        year: "1992",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure:  { 
            en: "Ilay Campbell (1734-1823)", 
            vi: "Ilay Campbell (1734-1823)"
        },
        size: "128 \u00D7 65 mm",
    }
);
//#endregion

//#region 2 - 5 pound
images.push([
    {
        src: imagePath("clydesdale-bank/2016/5-pound", "f"),
        alt: altInfo("5", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("clydesdale-bank/2016/5-pound", "b"),
        alt: altInfo("5", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Pounds", "Bảng"),
        issuer: {
            en: issuerClydedale.en,
            vi: issuerClydedale.vi
        },
        year: "2016",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "William Arol (1839-1913)", 
            vi: "William Arol (1839-1913)" 
        },
        size: "125 \u00D7 65 mm",
        note: { 
            en: `2015\'s top 20 banknotes by ${ibnsLink}`, 
            vi: `Top 20 tờ tiền năm 2015 theo ${ibnsLink}` 
        },
    }
);
//#endregion