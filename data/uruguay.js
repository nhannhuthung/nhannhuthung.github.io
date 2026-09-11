const translations = {
    heading: {
        en: "Uruguay",
        vi: "Uruguay"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/uruguay/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Uruguayan ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Uruguay` 
});
const issuer = {  en: "Central Bank of Uruguay", vi: "Ngân Hàng Trung Ương Uruguay" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 peso
images.push([
    {
        src: imagePath("1998/5-peso", "f"),
        alt: altInfo("5", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1998/5-peso", "b"),
        alt: altInfo("5", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure:  { 
            en: "Joaquín Torres-García (1874-1949)", 
            vi: "Joaquín Torres-García (1874-1949)"
        },
        size: "159 \u00D7 74 mm",
        new: true,
    }
);
//#endregion