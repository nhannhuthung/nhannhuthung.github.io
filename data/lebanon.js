const translations = {
    heading: {
        en: "Lebanon",
        vi: "Liban"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/lebenon/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Lebanese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Liban` 
});
const issuer = { en: "Bank Of Lebanon", vi: "Ngân Hàng Liban" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1000 lira
images.push([
        {
            src: imagePath("2011-2012/1000-lira", "f"),
            alt: altInfo("1000", "Livres", "Lira", "Front", "trước"),
            description: obverse
        },
        {
            src: imagePath("2011-2012/1000-lira", "b"),
            alt: altInfo("1000", "Livres", "Lira", "Back", "sau"),
            description: reverse
        }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Livres", "Lira"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "115 \u00D7 60 mm",
    }
);
//#endregion

//#region 2 - 5000 lira
images.push([
    {
        src: imagePath("2011-2012/5000-lira", "f"),
        alt: altInfo("5000", "Livres", "Lira", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2012/5000-lira", "b"),
        alt: altInfo("5000", "Livres", "Lira", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Livres", "Lira"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "120 \u00D7 62 mm",
    }
);
//#endregion