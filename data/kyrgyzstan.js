const translations = {
    heading: {
        en: "Kyrgyzstan",
        vi: "Kyrgyzstan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/kyrgyzstan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Kyrgyz ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Kyrgyzstan` 
});
const issuer = { en: "Kyrgyz Bank", vi: "Ngân Hàng Kyrgyzstan" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 tyiyn
images.push([
        {
            src: imagePath("1/1-tyiyn", "f"),
            alt: altInfo("1", "Tyiyn", "Tyiyn", "Front", "trước"),
            description: obverse
        },
        {
            src: imagePath("1/1-tyiyn", "b"),
            alt: altInfo("1", "Tyiyn", "Tyiyn", "Back", "sau"),
            description: reverse
        }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Tyiyn", "Tyiyn"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1954",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "90 \u00D7 70 mm",
    }
);
//#endregion