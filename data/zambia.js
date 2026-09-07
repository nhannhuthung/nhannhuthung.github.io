const translations = {
    heading: {
        en: "Zambia",
        vi: "Zambia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/zambia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Zambian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Zambia` 
});
const issuer = { en: "Bank of Zambia", vi: "Ngân Hàng Zambia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 kwacha
images.push([
    {
        src: imagePath("1980/50-kwacha", "f"),
        alt: altInfo("50", "Kwachas", "Kwacha", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1980/50-kwacha", "b"),
        alt: altInfo("50", "Kwachas", "Kwacha", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Kwachas", "Kwacha"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Kenneth Kaunda (1924-2021)", 
            vi: "Kenneth Kaunda (1924-2021)" 
        },
        size: "153 \u00D7 75 mm",
    }
);
//#endregion