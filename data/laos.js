const translations = {
    heading: {
        en: "Laos",
        vi: "Lào"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/laos/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Lao ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Lào` 
});
const issuer   = { en: "Bank Of The Lao People's Democratic Republic", vi: "Ngân Hàng Cộng Hòa Dân Chủ Nhân Dân Lào" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 500 kip
images.push([
    {
        src: imagePath("1988-2004/500-kip", "f"),
        alt: altInfo("500", "Kip", "Kíp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1988-2004/500-kip", "b"),
        alt: altInfo("500", "Kip", "Kíp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Kip", "Kíp"),
        issuer: {
            en: issuer.en,
            vi: issuer.vi
        },
        type: {
            en: standInType.en,
            vi: standInType.vi
        },
        size: "150 \u00D7 69 mm",
        new: true
    }
);
//#endregion

//#region 2 - 5000 kip
images.push([
    {
        src: imagePath("1988-2004/5000-kip", "f"),
        alt: altInfo("5000", "Kip", "Kíp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1988-2004/5000-kip", "b"),
        alt: altInfo("5000", "Kip", "Kíp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Kip", "Kíp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Kaysone Phomvihane (1920-1992)", 
            vi: "Kaysone Phomvihane (1920-1992)" 
        },
        size: "152 \u00D7 68 mm",
    }
);
//#endregion

//#region 3 - 2000 kip
images.push([
    {
        src: imagePath("2011/2000-kip", "f"),
        alt: altInfo("2000", "Kip", "Kíp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011/2000-kip", "b"),
        alt: altInfo("2000", "Kip", "Kíp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Kip", "Kíp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Kaysone Phomvihane (1920-1992)", 
            vi: "Kaysone Phomvihane (1920-1992)" 
        },
        size: "141 \u00D7 65 mm",
    }
);
//#endregion