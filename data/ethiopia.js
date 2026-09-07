const translations = {
    heading: {
        en: "Ethiopia",
        vi: "Ethiopia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/ethiopia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Ethiopian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ethiopia` 
});
const issuer   = { en: "National Bank Of Ethiopia", vi: "Ngân Hàng Quốc Gia Ethiopia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 10 birr
images.push([
    {
        src: imagePath("2020/10-birr", "f"),
        alt: altInfo("10", "Birrs", "Birr", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2020/10-birr", "b"),
        alt: altInfo("10", "Birrs", "Birr", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Birrs", "Birr"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "142 \u00D7 67 mm",
    }
);
//#endregion

//#region 2 - 50 birr
images.push([
    {
        src: imagePath("2020/50-birr", "f"),
        alt: altInfo("50", "Birrs", "Birr", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2020/50-birr", "b"),
        alt: altInfo("50", "Birrs", "Birr", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Birrs", "Birr"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "145 \u00D7 70 mm",
    }
);
//#endregion

//#region 3 - 100 birr
images.push([
    {
        src: imagePath("2020/100-birr", "f"),
        alt: altInfo("100", "Birrs", "Birr", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2020/100-birr", "b"),
        alt: altInfo("100", "Birrs", "Birr", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Birrs", "Birr"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "147 \u00D7 72 mm",
    }
);
//#endregion