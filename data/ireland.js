const translations = {
    heading: {
        en: "Ireland",
        vi: "Ireland"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/ireland/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Irish ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ireland` 
});
const issuer   = { en: "Central Bank Of Ireland", vi: "Ngân Hàng Trung Ương Ireland" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 pound
images.push([
    {
        src: imagePath("c/5-pound", "f"),
        alt: altInfo("5", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("c/5-pound", "b"),
        alt: altInfo("5", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1995",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "120 \u00D7 64 mm",
        figure: { 
            en: "Catherine McAuley (1778-1841)", 
            vi: "Catherine McAuley (1778-1841)" 
        },
    }
);
//#endregion