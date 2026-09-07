const translations = {
    heading: {
        en: "Yugoslavia",
        vi: "Nam Tư"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/yugoslavia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Yugoslav ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Nam Tư` 
});
const issuer = { en: "National Bank of Yugoslavia", vi: "Ngân Hàng Nhà Nước Nam Tư" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 million dinar
images.push([
    {
        src: imagePath("1992/100-million-dinar", "f"),
        alt: altInfo("100000000", "Dinara", "Dinar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992/100-million-dinar", "b"),
        alt: altInfo("100000000", "Dinara", "Dinar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100,000,000", "100.000.000", "Dinara", "Dinar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1993",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "159 \u00D7 76 mm",
    }
);
//#endregion

//#region 2 - 500 million dinar
images.push([
    {
        src: imagePath("1993/500-million-dinar", "f"),
        alt: altInfo("500000000", "Dinara", "Dinar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993/500-million-dinar", "b"),
        alt: altInfo("500000000", "Dinara", "Dinar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500,000,000", "500.000.000", "Dinara", "Dinar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1993",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: {
            en: "Jovan Cvijić (1865-1927)",
            vi: "Jovan Cvijić (1865-1927)"
        },
        size: "139 \u00D7 66 mm",
    }
);
//#endregion

//#region 3 - 10 dinar
images.push([
    {
        src: imagePath("1994-1/10-dinar", "f"),
        alt: altInfo("10", "Dinara", "Dinar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994-1/10-dinar", "b"),
        alt: altInfo("10", "Dinara", "Dinar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dinara", "Dinar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1994",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: {
            en: "Josif Pančić (1814-1888)",
            vi: "Josif Pančić (1814-1888)"
        },
        size: "116 \u00D7 55 mm",
    }
);
//#endregion

//#region 4 - 5 dinar
images.push([
    {
        src: imagePath("1994-2/5-dinar", "f"),
        alt: altInfo("5", "Dinara", "Dinar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994-2/5-dinar", "b"),
        alt: altInfo("5", "Dinara", "Dinar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dinara", "Dinar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1994",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: {
            en: "Nikola Tesla (1856-1943)",
            vi: "Nikola Tesla (1856-1943)"
        },
        size: "131 \u00D7 62 mm",
    }
);
//#endregion