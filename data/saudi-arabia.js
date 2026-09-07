const translations = {
    heading: {
        en: "Saudi Arabia",
        vi: "Ả Rập Xê Út"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/saudi-arabia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Saudi ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ả Rập Xê Út` 
});
const issuer = { en: "Saudi Arabian Monetary Agency", vi: "Cơ Quan Tiền Tệ Ả Rập Xê Út" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 riyal
images.push([
    {
        src: imagePath("2007-2016/1-riyal", "f"),
        alt: altInfo("1", "Riyal", "Riyal", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2007-2016/1-riyal", "b"),
        alt: altInfo("1", "Riyal", "Riyal", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Riyal", "Riyal"),
        issuer: {
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1433 (2012)",
        type: { 
            en: standInType.en, 
            vi: standInType.vi  
        },
        figure: { 
            en: "Abdullah bin Abdulaziz Al Saud (1924-2015)", 
            vi: "Abdullah bin Abdulaziz Al Saud (1924-2015)" 
        },
        size: "133 \u00D7 63 mm",
    }
);
//#endregion