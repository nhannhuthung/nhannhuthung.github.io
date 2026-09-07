const translations = {
    heading: {
        en: "Pakistan",
        vi: "Pakistan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/pakistan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Pakistani ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Pakistan` 
});
const issuer = { en: "State Bank of Pakistan", vi: "Ngân Hàng Nhà Nước Pakistan" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 rupee
images.push([
    {
        src: imagePath("2005/100-rupee", "f"),
        alt: altInfo("100", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/100-rupee", "b"),
        alt: altInfo("100", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2015",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Muhammad Ali Jinnah (1876-1948)", 
            vi: "Muhammad Ali Jinnah (1876-1948)" 
        },
        size: "139 \u00D7 65 mm",
    }
);
//#endregion