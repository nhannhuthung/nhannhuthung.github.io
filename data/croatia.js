const translations = {
    heading: {
        en: "Croatia",
        vi: "Croatia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/croatia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Croatian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Croatia` 
});
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 dinar
images.push([
    {
        src: imagePath("1991-1993/5-dinar", "f"),
        alt: altInfo("5", "Dinars", "Dinar", "Front","trước"),
        description: obverse
    },
    {
        src: imagePath("1991-1993/5-dinar", "b"),
        alt: altInfo("5", "Dinars", "Dinar", "Back","sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dinars", "Dinar"),
        year: "1991",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Roger Joseph Boscovich (1711-1787)", 
            vi: "Roger Joseph Boscovich (1711-1787)" 
        },
        size: "105 \u00D7 55 mm",
    }
);
//#endregion