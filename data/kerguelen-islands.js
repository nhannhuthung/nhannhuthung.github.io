const translations = {
    heading: {
        en: "Kerguelen Islands",
        vi: "Quần Đảo Kerguelen"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/kerguelen-islands/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Kerguelenian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Quần Đảo Kerguelen` 
});
const issuer = { en: "Antarctica Overseas Exchange Office", vi: "Bộ Trao Đổi Nước Ngoài Nam Cực" };
const fanType = { en: "Fantasy Banknote", vi: "Tiền Sưu Tầm" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 franc
images.push([
    {
        src: imagePath("100-franc", "f"),
        alt: altInfo("100", "Frnacs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("100-franc", "b"),
        alt: altInfo("100", "Frnacs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2012",
        type: { 
            en: fanType.en, 
            vi: fanType.vi 
        },
        figure: { 
            en: "Yves-Joseph de Kerguelen-Tremarec (1734-1797)", 
            vi: "Yves-Joseph de Kerguelen-Tremarec (1734-1797)" 
        },
        size: "159 \u00D7 80 mm",
    }
);
//#endregion