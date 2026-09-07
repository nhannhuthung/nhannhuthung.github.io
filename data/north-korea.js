const translations = {
    heading: {
        en: "North Korea",
        vi: "Triều Tiên"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/north-korea/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} North Korean ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Triều Tiên` 
});
const issuer = { en: "Central Bank Of The Democratic People's Republic of Korea", vi: "Ngân Hàng Trung Ương Cộng Hòa Dân Chủ Nhân Dân Triều Tiên" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 won
images.push([
    {
        src: imagePath("1992/5-won", "f"),
        alt: altInfo("5", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992/5-won", "b"),
        alt: altInfo("5", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Won", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "126 \u00D7 60 mm",
        new: true
    }
);
//#endregion

//#region 2 - 200 won
images.push([
    {
        src: imagePath("1992/200-won", "f"),
        alt: altInfo("200", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992/200-won", "b"),
        alt: altInfo("200", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Won", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "140 \u00D7 72 mm",
    }
);
//#endregion

//#region 3 - 500 won
images.push([
    {
        src: imagePath("1992/500-won", "f"),
        alt: altInfo("500", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992/500-won", "b"),
        alt: altInfo("500", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Won", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "156 \u00D7 75 mm"
    }
);
//#endregion

//#region 4 - 5000 won
images.push([
    {
        src: imagePath("1992/5000-won", "f"),
        alt: altInfo("5000", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992/5000-won", "b"),
        alt: altInfo("5000", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Won", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Kim Il Sung (1912-1994)", 
            vi: "Kim Il Sung (1912-1994)" 
        },
        size: "156 \u00D7 75 mm",
    }
);
//#endregion