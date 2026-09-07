const translations = {
    heading: {
        en: "Italy",
        vi: "Ý"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/italy/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Italian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ý` 
});
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 500 lira
images.push([
        {
            src: imagePath("1971/500-lira", "f"),
            alt: altInfo("500", "Lire", "Lira", "Front", "trước"),
            description: obverse
        },
        {
            src: imagePath("1971/500-lira", "b"),
            alt: altInfo("500", "Lire", "Lira", "Back", "sau"),
            description: reverse
        }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Lire", "Lira"),
        year: "1966",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "110 \u00D7 55 mm",
    }
);
//#endregion