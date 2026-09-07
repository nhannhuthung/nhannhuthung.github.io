const translations = {
    heading: {
        en: "Mauritius",
        vi: "Mauritius"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/mauritius/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Mauritian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Mauritius` 
});
const issuer = { en: "Bank Of Mauritius", vi: "Ngân Hàng Mauritius" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 25 rupee
images.push([
    {
        src: imagePath("1999/25-rupee", "f"),
        alt: altInfo("25", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1999/25-rupee", "b"),
        alt: altInfo("25", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("25", "25", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2003",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Moilin Jean Ah-Chuen (1911-1991)", 
            vi: "Moilin Jean Ah-Chuen (1911-1991)" 
        },
        size: "135 \u00D7 65 mm",
    }
);
//#endregion

//#region 2 - 50 rupee
images.push([
    {
        src: imagePath("1999/50-rupee", "f"),
        alt: altInfo("50", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1999/50-rupee", "b"),
        alt: altInfo("50", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2001",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Joseph Maurice Paturau (1916-1996)", 
            vi: "Joseph Maurice Paturau (1916-1996)" 
        },
        size: "140 \u00D7 68 mm",
    }
);
//#endregion

//#region 3 - 100 rupee
images.push([
    {
        src: imagePath("1999/100-rupee", "f"),
        alt: altInfo("100", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1999/100-rupee", "b"),
        alt: altInfo("100", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2004",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Renganaden Seeneevassen (1910-1958)", 
            vi: "Renganaden Seeneevassen (1910-1958)" 
        },
        size: "145 \u00D7 70 mm",
    }
);
//#endregion