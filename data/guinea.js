const translations = {
    heading: {
        en: "Guinea",
        vi: "Guinea"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/guinea/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Guinean ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Guinea` 
});
const issuer   = { en: "Central Bank Of The Republic of Guinea", vi: "Ngân Hàng Trung Ương Cộng Hòa Guinea" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 franc
images.push([
        {
            src: imagePath("1998/100-franc", "f"),
            alt: altInfo("100", "Francs", "Franc", "Front", "trước"),
            description: obverse
        },
        {
            src: imagePath("1998/100-franc", "b"),
            alt: altInfo("100", "Francs", "Franc", "Back", "sau"),
            description: reverse
        }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2015",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "124 \u00D7 64 mm",
    }
);
//#endregion