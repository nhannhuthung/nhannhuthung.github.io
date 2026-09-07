const translations = {
    heading: {
        en: "Tajikistan",
        vi: "Tajikistan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/tajikistan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Tajikistani ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Tajikistan` 
});
const issuer = { en: "National Bank Of The Republic Of Tajikistan", vi: "Ngân Hàng Quốc Gia Cộng Hòa Tajikistan" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 ruble
images.push([
    {
        src: imagePath("1994/20-ruble", "f"),
        alt: altInfo("20", "Rubles", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994/20-ruble", "f"),
        alt: altInfo("20", "Rubles", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Rubles", "Rúp",),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1994",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "102 \u00D7 56 mm",
    }
);
//#endregion