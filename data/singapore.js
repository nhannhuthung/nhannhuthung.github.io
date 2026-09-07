const translations = {
    heading: {
        en: "Singapore",
        vi: "Singapore"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/singapore/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Singaporean ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Singapore` 
});
const issuer = { en: "Monetary Authority of Singapore", vi: "Cơ Quan Tiền Tệ Singapore" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 2 dollar
images.push([
    {
        src: imagePath("3/2-dollar", "f"),
        alt: altInfo("2", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("3/2-dollar", "b"),
        alt: altInfo("2", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Dollars", "Đô La"),
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "133 \u00D7 63 mm",
        new: true
    }
);
//#endregion

//#region 2 - 2 dollar
images.push([
    {
        src: imagePath("4/2-dollar", "f"),
        alt: altInfo("2", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("4/2-dollar", "b"),
        alt: altInfo("2", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Yusof Ishak (1910-1970)", 
            vi: "Yusof Ishak (1910-1970)" 
        },
        size: "126 \u00D7 63 mm",
    }
);
//#endregion

//#region 3 - 5 dollar
images.push([
    {
        src: imagePath("4/5-dollar", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("4/5-dollar", "b"),
        alt: altInfo("5", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Yusof Ishak (1910-1970)", 
            vi: "Yusof Ishak (1910-1970)" 
        },
        size: "133 \u00D7 66 mm",
    }
);
//#endregion

//#region 4 - 10 dollar
images.push([
    {
        src: imagePath("4/10-dollar", "f"),
        alt: altInfo("10", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("4/10-dollar", "b"),
        alt: altInfo("10", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Yusof Ishak (1910-1970)", 
            vi: "Yusof Ishak (1910-1970)" 
        },
        size: "141 \u00D7 69 mm",
    }
);
//#endregion