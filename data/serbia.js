const translations = {
    heading: {
        en: "Serbia",
        vi: "Serbia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/serbia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Serbian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Serbia` 
});
const issuer = { en: "National Bank of Serbia", vi: "Ngân Hàng Nhà Nước Serbia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 dinar
images.push([
    {
        src: imagePath("3/20-dinar", "f"),
        alt: altInfo("20", "Dinara", "Dinar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("3/20-dinar", "b"),
        alt: altInfo("20", "Dinara", "Dinar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dinara", "Dinar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Petar II Petrović-Njegoš (1813-1851)",
            vi: "Petar II Petrović-Njegoš (1813-1851)",
        },
        size: "135 \u00D7 64 mm",
    }
);
//#endregion

//#region 2 - 50 dinar
images.push([
    {
        src: imagePath("3/50-dinar", "f"),
        alt: altInfo("50", "Dinara", "Dinar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("3/50-dinar", "b"),
        alt: altInfo("50", "Dinara", "Dinar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dinara", "Dinar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Stevan Stojanović Mokranjac (1856-1914)",
            vi: "Stevan Stojanović Mokranjac (1856-1914)"
        },
        size: "139 \u00D7 66 mm",
    }
);
//#endregion

//#region 3 - 200 dinar
images.push([
    {
        src: imagePath("3/200-dinar", "f"),
        alt: altInfo("200", "Dinara", "Dinar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("3/200-dinar", "b"),
        alt: altInfo("200", "Dinara", "Dinar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Dinara", "Dinar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2011",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Nadežda Petrović (1873-1915)",
            vi: "Nadežda Petrović (1873-1915)"
        },
        size: "147 \u00D7 70 mm",
    }
);
//#endregion