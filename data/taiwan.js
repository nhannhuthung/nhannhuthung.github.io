const translations = {
    heading: {
        en: "Taiwan",
        vi: "Đài Loan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/taiwan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Taiwanese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Đài Loan` 
});
const issuer = { en: "Central Bank Of The Republic Of China", vi: "Ngân Hàng Trung Ương Trung Hoa Dân Quốc" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 dollar
images.push([
    {
        src: imagePath("1999/100-dollar", "f"),
        alt: altInfo("100", "Dollars", "Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1999/100-dollar", "b"),
        alt: altInfo("100", "Dollars", "Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dollars", "Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2000",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Sun Yat-sen (1866-1925)", 
            vi: "Tôn Trung Sơn (1866-1925)" 
        },
        size: "145 \u00D7 70 mm",
    }
);
//#endregion