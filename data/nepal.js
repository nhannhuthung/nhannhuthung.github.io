const translations = {
    heading: {
        en: "Nepal",
        vi: "Nepal"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/nepal/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Nepalese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Nepal` 
});
const issuer = { en: "Nepal Rastra Bank", vi: "Ngân Hàng Rastra Nepal" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 rupee
images.push([
    {
        src: imagePath("2007/5-rupee", "f"),
        alt: altInfo("5", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2007/5-rupee", "b"),
        alt: altInfo("5", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "120 \u00D7 70 mm",
    }
);
//#endregion

//#region 2 - 10 rupee
images.push([
    {
        src: imagePath("2015/10-rupee", "f"),
        alt: altInfo("10", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2015/10-rupee", "b"),
        alt: altInfo("10", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2080 (2024)",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "133 \u00D7 70 mm",
        new: true,   
    }
);
//#endregion