const translations = {
    heading: {
        en: "Malaysia",
        vi: "Malaysia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/malaysia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Malaysian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Malaysia` 
});
const issuer = { en: "Central Bank Of Malaysia", vi: "Ngân Hàng Trung Ương Malaysia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 ringgit
images.push([
    {
        src: imagePath("1996/1-ringgit", "f"),
        alt: altInfo("1", "Ringgit", "Ringgit", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1996/1-ringgit", "b"),
        alt: altInfo("1", "Ringgit", "Ringgit", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Ringgit", "Ringgit"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Tunku Abdul Rahman (1895-1960)", 
            vi: "Tunku Abdul Rahman (1895-1960)" 
        },
        size: "120 \u00D7 65 mm",
    }
);
//#endregion

//#region 2 - 10 ringgit
images.push([
    {
        src: imagePath("1996/10-ringgit", "f"),
        alt: altInfo("10", "Ringgit", "Ringgit", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1996/10-ringgit", "b"),
        alt: altInfo("10", "Ringgit", "Ringgit", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Ringgit", "Ringgit"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Tunku Abdul Rahman (1895-1960)", 
            vi: "Tunku Abdul Rahman (1895-1960)" 
        },
        size: "140 \u00D7 65 mm",
    }
);
//#endregion

//#region 3 - 1 ringgit
images.push([
    {
        src: imagePath("2012/1-ringgit", "f"),
        alt: altInfo("1", "Ringgit", "Ringgit", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2012/1-ringgit", "b"),
        alt: altInfo("1", "Ringgit", "Ringgit", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Ringgit", "Ringgit"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Tunku Abdul Rahman (1895-1960)", 
            vi: "Tunku Abdul Rahman (1895-1960)" 
        },
        size: "120 \u00D7 65 mm",
    }
);
//#endregion

//#region 4 - 5 ringgit
images.push([
    {
        src: imagePath("2012/5-ringgit", "f"),
        alt: altInfo("5", "Ringgit", "Ringgit", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2012/5-ringgit", "b"),
        alt: altInfo("5", "Ringgit", "Ringgit", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Ringgit", "Ringgit"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Tunku Abdul Rahman (1895-1960)", 
            vi: "Tunku Abdul Rahman (1895-1960)" 
        },
        size: "135 \u00D7 65 mm",
        note: { 
            en: `2012\'s top 13 banknotes by ${ibnsLink}`, 
            vi: `Top 13 tờ tiền năm 2012 theo ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 5 - 10 ringgit
images.push([
    {
        src: imagePath("2012/10-ringgit", "f"),
        alt: altInfo("10", "Ringgit", "Ringgit", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2012/10-ringgit", "b"),
        alt: altInfo("10", "Ringgit", "Ringgit", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Ringgit", "Ringgit"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Tunku Abdul Rahman (1895-1960)", 
            vi: "Tunku Abdul Rahman (1895-1960)" 
        },
        size: "140 \u00D7 65 mm",
    }
);
//#endregion

//#region 6 - 20 ringgit
images.push([
    {
        src: imagePath("2012/20-ringgit", "f"),
        alt: altInfo("20", "Ringgit", "Ringgit", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2012/20-ringgit", "b"),
        alt: altInfo("20", "Ringgit", "Ringgit", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Ringgit", "Ringgit"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Tunku Abdul Rahman (1895-1960)", 
            vi: "Tunku Abdul Rahman (1895-1960)" 
        },
        size: "145 \u00D7 65 mm",
    }
);
//#endregion

//#region 7 - 50 ringgit
images.push([
    {
        src: imagePath("2012/50-ringgit", "f"),
        alt: altInfo("50", "Ringgit", "Ringgit", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2012/50-ringgit", "b"),
        alt: altInfo("50", "Ringgit", "Ringgit", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Ringgit", "Ringgit"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Tunku Abdul Rahman (1895-1960)", 
            vi: "Tunku Abdul Rahman (1895-1960)" 
        },
        size: "145 \u00D7 69 mm",
    }
);
//#endregion