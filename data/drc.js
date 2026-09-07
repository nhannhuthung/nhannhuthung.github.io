const translations = {
    heading: {
        en: "Democratic Republic of the Congo",
        vi: "Cộng Hòa Dân Chủ Congo"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/drc/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Congolese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Congo` 
});
const issuer   = { en: "Central Bank Of The Congo", vi: "Ngân Hàng Trung Ương Congo" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 franc
images.push([
    {
        src: imagePath("2000/50-franc", "f"),
        alt: altInfo("50", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/50-franc", "b"),
        alt: altInfo("50", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
    }
);
//#endregion