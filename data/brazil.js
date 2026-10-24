const translations = {
    heading: {
        en: "Brazil",
        vi: "Brasil"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/brazil/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Brazilian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Brasil` 
});
const issuer = { en: "Central Bank Of Brazil", vi: "Ngân Hàng Trung Ương Brasil" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "4 3 2 | 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 real
images.push([
    {
        src: imagePath("1994/1-real", "f"),
        alt: altInfo("1", "real", "real", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994/1-real", "b"),
        alt: altInfo("1", "real", "real", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "reais", "real"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 65 mm",
        reference: refLink("P-243Ab", "https://banknote.ws/COLLECTION/countries/AME/BRA/BRA0243A2.htm#243Ab"),
    }
);
//#endregion

//#region 2 - 2 real
images.push([
    {
        src: imagePath("2003/2-real", "f"),
        alt: altInfo("2", "reais", "real", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/2-real", "b"),
        alt: altInfo("2", "reais", "real", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "reais", "real"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "121 \u00D7 65 mm",
        reference: refLink("P-252[f]", "https://banknote.ws/COLLECTION/countries/AME/BRA/BRA0252.htm#252e"),
    }
);
//#endregion

//#region 3 - 10 real
images.push([
    {
        src: imagePath("2003/10-real", "f"),
        alt: altInfo("10", "reais", "real", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/10-real", "b"),
        alt: altInfo("10", "reais", "real", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "reais", "real"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "135 \u00D7 65 mm",
        reference: refLink("P-254[f]", "https://banknote.ws/COLLECTION/countries/AME/BRA/BRA0254.htm#254f"),
    }
);
//#endregion

//#region 4 - 50 real
images.push([
    {
        src: imagePath("2003/50-real", "f"),
        alt: altInfo("50", "reais", "real", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/50-real", "b"),
        alt: altInfo("50", "reais", "real", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "reais", "real"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "149 \u00D7 70 mm",
        reference: refLink("P-256b", "https://banknote.ws/COLLECTION/countries/AME/BRA/BRA0256.htm#256b"),
    }
);
//#endregion