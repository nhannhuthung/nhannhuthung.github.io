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

const images = [null];
const slideshowInfo = [null];

//#region 1 - 2 reai
images.push([
    {
        src: imagePath("2/2-reai", "f"),
        alt: altInfo("2", "Reais", "Reai", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2/2-reai", "b"),
        alt: altInfo("2", "Reais", "Reai", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Reais", "Reai"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "121 \u00D7 65 mm",
    }
);
//#endregion

//#region 2 - 10 reai
images.push([
    {
        src: imagePath("2/10-reai", "f"),
        alt: altInfo("10", "Reais", "Reai", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2/10-reai", "b"),
        alt: altInfo("10", "Reais", "Reai", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Reais", "Reai"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "135 \u00D7 65 mm",
    }
);
//#endregion

//#region 3 - 50 reai
images.push([
    {
        src: imagePath("2/50-reai", "f"),
        alt: altInfo("50", "Reais", "Reai", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2/50-reai", "b"),
        alt: altInfo("50", "Reais", "Reai", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Reais", "Reai"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "149 \u00D7 70 mm",
    }
);
//#endregion