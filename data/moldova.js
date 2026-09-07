const translations = {
    heading: {
        en: "Moldova",
        vi: "Moldova"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/moldova/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Moldovan ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Moldova` 
});
const issuer = { en: "National Bank of Moldova", vi: "Ngân Hàng Quốc Gia Moldova" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 leu
images.push([
    {
        src: imagePath("2015/1-leu", "f"),
        alt: altInfo("1", "Leu", "Leu", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2015/1-leu", "b"),
        alt: altInfo("1", "Leu", "Leu", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Leu", "Leu"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2015",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Stephen III ((1433-1440)?-1504)", 
            vi: "Stephen III ((1433-1440)?-1504)" 
        },
        size: "114 \u00D7 58 mm",
    }
);
//#endregion