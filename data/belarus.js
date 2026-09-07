const translations = {
    heading: {
        en: "Belarus",
        vi: "Belarus"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/belarus/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Belarusian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Belarus` 
});
const issuer = { en: "National Bank Of The Republic Of Belarus", vi: "Ngân Hàng Quốc Gia Cộng Hòa Belarus" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 ruble
images.push([
    {
        src: imagePath("2000/50-ruble", "f"),
        alt: altInfo("50", "Rubles", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/50-ruble", "b"),
        alt: altInfo("50", "Rubles", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Rubles", "Rúp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "150 \u00D7 69 mm",
    }
);
//#endregion

//#region 2 - 100 ruble
images.push([
    {
        src: imagePath("2000/100-ruble", "f"),
        alt: altInfo("100", "Rubles", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/100-ruble", "b"),
        alt: altInfo("100", "Rubles", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Rubles", "Rúp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "150 \u00D7 69 mm",
    }
);
//#endregion

//#region 3 - 500 ruble
images.push([
    {
        src: imagePath("2000/500-ruble", "f"),
        alt: altInfo("500", "Rubles", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/500-ruble", "b"),
        alt: altInfo("500", "Rubles", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Rubles", "Rúp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "150 \u00D7 74 mm",
    }
);
//#endregion

//#region 4 - 1000 ruble
images.push([
    {
        src: imagePath("2000/1000-ruble", "f"),
        alt: altInfo("1000", "Rubles", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/1000-ruble", "b"),
        alt: altInfo("1000", "Rubles", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Rubles", "Rúp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "150 \u00D7 74 mm",
    }
);
//#endregion