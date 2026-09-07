const translations = {
    heading: {
        en: "Netherlands",
        vi: "Hà Lan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/netherlands/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Dutch ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Hà Lan` 
});
const issuer = { en: "The Dutch Bank", vi: "Ngân Hàng Hà Lan" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 guilder
images.push([
    {
        src: imagePath("1981-2002/50-guilder", "f"),
        alt: altInfo("50", "Guilders", "Guilder", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1981-2002/50-guilder", "b"),
        alt: altInfo("50", "Guilders", "Guilder", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Guilders", "Guilder"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1982",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "76 \u00D7 148 mm",
        special: {
            en: "My favorite banknotes.",
            vi: "Tờ tiền mình yêu thích."
        }
    }
);
//#endregion