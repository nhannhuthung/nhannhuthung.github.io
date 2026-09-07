const translations = {
    heading: {
        en: "Venezuela",
        vi: "Venezuela"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/venezuela/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Venezuelan ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Venezuela` 
});
const issuer = { en: "Central Bank Of Venezuela", vi: "Ngân Hàng Trung Ương Venezuela" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 bolivar
images.push([
    {
        src: imagePath("2008/5-bolivar", "f"),
        alt: altInfo("5", "Bolivares", "Bolivar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2008/5-bolivar", "b"),
        alt: altInfo("5", "Bolivares", "Bolivar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Bolivares", "Bolivar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2013",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "96 \u00D7 156 mm",
    }
);
//#endregion