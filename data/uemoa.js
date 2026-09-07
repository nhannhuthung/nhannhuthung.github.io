const translations = {
    heading: {
        en: "West African Economic And Monetary Union",
        vi: "Liên Minh Kinh Tế Và Tiền Tệ Tây Phi"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/west-africa/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} West African ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Tây Phi` 
});
const issuer = { en: "Central Bank Of West African States", vi: "Ngân Hàng Trung Ương Các Quốc Gia Tây Phi" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 500 franc
images.push([
    {
        src: imagePath("2003/500-franc", "f"),
        alt: altInfo("500", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/500-franc", "b"),
        alt: altInfo("500", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Francs ", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2012",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "114 \u00D7 60 mm",
    }
);
//#endregion