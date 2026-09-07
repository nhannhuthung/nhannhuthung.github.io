const translations = {
    heading: {
        en: "Puntland",
        vi: "Puntland"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/puntland/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Somali ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Somalia` 
});
const issuer = { en: "Central Bank Of Somalia", vi: "Ngân Hàng Trung Ương Somalia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1000 shilling
images.push([
    {
        src: imagePath("1990/1000-shilling", "f"),
        alt: altInfo("1000", "Shillings", "Shilling", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1990/1000-shilling", "b"),
        alt: altInfo("1000", "Shillings", "Shilling", "Back", "sau"),
        description: reverse
    }
 ]);
slideshowInfo.push(
    {
        title: currencyInfo("1.000", "1,000", "Shillings", "Shilling"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "155 \u00D7 75 mm",
    }
);
//#endregion