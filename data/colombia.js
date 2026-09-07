const translations = {
    heading: {
        en: "Colombia",
        vi: "Colombia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/colombia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Colombian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Colombia` 
});
const issuer   = { en: "Bank Of The Republic Of Colombia", vi: "Ngân Hàng Cộng Hòa Colombia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 2000 peso
images.push([
    {
        src: imagePath("2016/2000-peso", "f"),
        alt: altInfo("2000", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/2000-peso", "b"),
        alt: altInfo("2000", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Débora Arango Pérez (1907-2005)", 
            vi: "Débora Arango Pérez (1907-2005)" 
        },
        size: "128 \u00D7 66 mm",
    }
);
//#endregion