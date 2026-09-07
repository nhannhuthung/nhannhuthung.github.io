const translations = {
    heading: {
        en: "Uzbekistan",
        vi: "Uzbekistan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/uzbekistan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Uzbekistani ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Uzbekistan` 
});
const issuer = { en: "Central Bank Of Uzbekistan", vi: "Ngân Hàng Trung Ương Uzbekistan" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 sum
images.push([
    {
        src: imagePath("1994-2019/100-sum", "f"),
        alt: altInfo("100", "Sum", "Sum", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994-2019/100-sum", "b"),
        alt: altInfo("100", "Sum", "Sum", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Sum", "Sum"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1994",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "142 \u00D7 69 mm",
    }
);
//#endregion

//#region 2 - 200 sum
images.push([
    {
        src: imagePath("1994-2019/200-sum", "f"),
        alt: altInfo("200", "Sum", "Sum", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994-2019/200-sum", "b"),
        alt: altInfo("200", "Sum", "Sum", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Sum", "Sum"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1997",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "145 \u00D7 77 mm",
    }
);
//#endregion

//#region 3 - 500 sum
images.push([
    {
        src: imagePath("1994-2019/500-sum", "f"),
        alt: altInfo("500", "Sum", "Sum", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994-2019/500-sum", "b"),
        alt: altInfo("500", "Sum", "Sum", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Sum", "Sum"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1999",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "144 \u00D7 78 mm",
    }
);
//#endregion