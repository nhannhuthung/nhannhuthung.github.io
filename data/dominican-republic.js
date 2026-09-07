const translations = {
    heading: {
        en: "Dominican Republic",
        vi: "Cộng Hòa Dominica"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/dominican-republic/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Dominican ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Dominica` 
});
const issuer   = { en: "Central Bank Of The Dominican Republic", vi: "Ngân Hàng Trung Ương Cộng Hòa Dominica" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 peso
images.push([
    {
        src: imagePath("2014/50-peso", "f"),
        alt: altInfo("50", "Pesos", "Peso", "Front","trước"),
        description: obverse
    },
    {
        src: imagePath("2014/50-peso", "b"),
        alt: altInfo("50", "Pesos", "Peso", "Back","sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2024",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "158 \u00D7 67 mm",
    }
);
//#endregion

//#region 2 - 100 peso
images.push([
    {
        src: imagePath("2014/100-peso", "f"),
        alt: altInfo("100", "Pesos", "Peso", "Front","trước"),
        description: obverse
    },
    {
        src: imagePath("2014/100-peso", "b"),
        alt: altInfo("100", "Pesos", "Peso", "Back","sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2024",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Francisco del Rosario Sánchez (1817-1861), Juan Pablo Duarte (1813-1876), Matías Ramón Mella (1816-1864)", 
            vi: "Francisco del Rosario Sánchez (1817-1861), Juan Pablo Duarte (1813-1876), Matías Ramón Mella (1816-1864)"
        },
        size: "158 \u00D7 67 mm",
    }
);
//#endregion