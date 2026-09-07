const translations = {
    heading: {
        en: "Transnistria",
        vi: "Transnistria"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/transnistria/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Transnistrian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Transnistria` 
});
const issuer   = { en: "Transnistrian Republican Bank", vi: "Ngân Hàng Cộng Hòa Transnistria" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 ruble
images.push([
    {
        src: imagePath("1994/5-ruble", "f"),
        alt: altInfo("5", "Rubles", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994/5-ruble", "b"),
        alt: altInfo("5", "Rubles", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Rubles", "Rúp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure:  { 
            en: "Alexander Suvorov (1730-1800)", 
            vi: "Alexander Suvorov (1730-1800)"
        },
        size: "125 \u00D7 57 mm",
        new: true
    }
);
//#endregion

//#region 2 - 1 ruble
images.push([
    {
        src: imagePath("2007/1-ruble", "f"),
        alt: altInfo("1", "Ruble", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2007/1-ruble", "b"),
        alt: altInfo("1", "Ruble", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Ruble", "Rúp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure:  
        { 
            en: "Alexander Suvorov (1730-1800)", 
            vi: "Alexander Suvorov (1730-1800)"
        },
        size: "129 \u00D7 55 mm",
    }
);
//#endregion
        