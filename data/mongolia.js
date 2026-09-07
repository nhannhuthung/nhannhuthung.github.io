const translations = {
    heading: {
        en: "Mongolia",
        vi: "Mông Cổ"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/mongolia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Mongolian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Mông Cổ` 
});
const issuer = { en: "Bank Of Mongolia", vi: "Ngân Hàng Mông Cổ" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 10 mongo
images.push([
    {
        src: imagePath("1993/10-mongo", "f"),
        alt: altInfo("10", "Mongo", "Mongo", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/10-mongo", "b"),
        alt: altInfo("10", "Mongo", "Mongo", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Mongo", "Mongo"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "45 \u00D7 90 mm",
    }
);
//#endregion

//#region 2 - 20 mongo
images.push([
    {
        src: imagePath("1993/20-mongo", "f"),
        alt: altInfo("20", "Mongo", "Mongo", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/20-mongo", "b"),
        alt: altInfo("20", "Mongo", "Mongo", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Mongo", "Mongo"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "45 \u00D7 90 mm",
    }
);
//#endregion

//#region 3 - 50 mongo
images.push([
    {
        src: imagePath("1993/50-mongo", "f"),
        alt: altInfo("50", "Mongo", "Mongo", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/50-mongo", "b"),
        alt: altInfo("50", "Mongo", "Mongo", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Mongo", "Mongo"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "45 \u00D7 90 mm",
    }
);
//#endregion

//#region 4 - 1 togrog
images.push([
    {
        src: imagePath("1993/1-togrog", "f"),
        alt: altInfo("1", "Togrog", "Togrog", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/1-togrog", "b"),
        alt: altInfo("1", "Togrog", "Togrog", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Togrog", "Togrog"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "115 \u00D7 57 mm",
    }
);
//#endregion

//#region 5 - 10 togrog
images.push([
    {
        src: imagePath("1993/10-togrog", "f"),
        alt: altInfo("10", "Togrog", "Togrog", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/10-togrog", "b"),
        alt: altInfo("10", "Togrog", "Togrog", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Togrog", "Togrog"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2017",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Damdin Sükhbaatar (1893-1923)", 
            vi: "Damdin Sükhbaatar (1893-1923)" 
        },
        size: "125 \u00D7 61 mm",
    }
);
//#endregion

//#region 6 - 20 togrog
images.push([
    {
        src: imagePath("1993/20-togrog", "f"),
        alt: altInfo("20", "Togrog", "Togrog", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/20-togrog", "b"),
        alt: altInfo("20", "Togrog", "Togrog", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Togrog", "Togrog"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2017",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Damdin Sükhbaatar (1893-1923)", 
            vi: "Damdin Sükhbaatar (1893-1923)" 
        },
        size: "130 \u00D7 64 mm",
    }
);
//#endregion

//#region 7 - 50 togrog
images.push([
    {
        src: imagePath("1993/50-togrog", "f"),
        alt: altInfo("50", "Togrog", "Togrog", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/50-togrog", "b"),
        alt: altInfo("50", "Togrog", "Togrog", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Togrog", "Togrog"),
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
            en: "Damdin Sükhbaatar (1893-1923)", 
            vi: "Damdin Sükhbaatar (1893-1923)" 
        },
        size: "135 \u00D7 66 mm",
    }
);
//#endregion

//#region 8 - 100 togrog
images.push([
    {
        src: imagePath("1993/100-togrog", "f"),
        alt: altInfo("100", "Togrog", "Togrog", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/100-togrog", "b"),
        alt: altInfo("100", "Togrog", "Togrog", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Togrog", "Togrog"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Damdin Sükhbaatar (1893-1923)", 
            vi: "Damdin Sükhbaatar (1893-1923)" 
        },
        size: "140 \u00D7 68 mm",
    }
);
//#endregion