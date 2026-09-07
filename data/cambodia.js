const translations = {
    heading: {
        en: "Cambodia",
        vi: "Campuchia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/cambodia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Cambodian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Campuchia` 
});
const issuer = { en: "National Bank of Cambodia", vi: "Ngân Hàng Quốc Gia Campuchia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 riel
images.push([
    {
        src: imagePath("1956-1972/1-riel", "f"),
        alt: altInfo("1", "Riel", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1956-1972/1-riel", "b"),
        alt: altInfo("1", "Riel", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Riel", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "128 \u00D7 64 mm",
        new: true,
    }
);
//#endregion

//#region 2 - 20 riel
images.push([
    {
        src: imagePath("1956-1972/20-riel", "f"),
        alt: altInfo("20", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1956-1972/20-riel", "b"),
        alt: altInfo("20", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "156 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 3 - 50 riel
images.push([
    {
        src: imagePath("1956-1972/50-riel", "f"),
        alt: altInfo("50", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1956-1972/50-riel", "b"),
        alt: altInfo("50", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "162 \u00D7 74 mm",
        new: true,
    }
);
//#endregion

//#region 4 - 100 riel
images.push([
    {
        src: imagePath("1956-1972/100-riel", "f"),
        alt: altInfo("100", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1956-1972/100-riel", "b"),
        alt: altInfo("100", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "175 \u00D7 77 mm",
        new: true,
    }
);
//#endregion

//#region 5 - 5 riel
images.push([
    {
        src: imagePath("1962-1972/5-riel", "f"),
        alt: altInfo("5", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1962-1972/5-riel", "b"),
        alt: altInfo("5", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "134 \u00D7 67 mm",
        new: true,
    }
);
//#endregion

//#region 6 - 10 riel
images.push([
    {
        src: imagePath("1962-1972/10-riel", "f"),
        alt: altInfo("10", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1962-1972/10-riel", "b"),
        alt: altInfo("10", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "145 \u00D7 69 mm",
        new: true,
    }
);
//#endregion

//#region 7 - 100 riel
images.push([
    {
        src: imagePath("1970/100-riel", "f"),
        alt: altInfo("100", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/100-riel", "b"),
        alt: altInfo("100", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "175 \u00D7 77 mm",
        new: true,
    }
);
//#endregion

//#region 8 - 500 riel
images.push([
    {
        src: imagePath("1970/500-riel", "f"),
        alt: altInfo("500", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/500-riel", "b"),
        alt: altInfo("500", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "179 \u00D7 96 mm",
        new: true,
    }
);
//#endregion

//#region 9 - 100 riel
images.push([
    {
        src: imagePath("1973/100-riel", "f"),
        alt: altInfo("100", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1973/100-riel", "b"),
        alt: altInfo("100", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "172 \u00D7 77 mm",
        new: true,
    }
);
//#endregion

//#region 10 - 500 riel
images.push([
    {
        src: imagePath("1973/500-riel", "f"),
        alt: altInfo("500", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1973/500-riel", "b"),
        alt: altInfo("500", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "183 \u00D7 86 mm",
        new: true,
    }
);
//#endregion

//#region 11 - 1000 riel
images.push([
    {
        src: imagePath("1973/1000-riel", "f"),
        alt: altInfo("1000", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1973/1000-riel", "b"),
        alt: altInfo("1000", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "186 \u00D7 89 mm",
        new: true,
    }
);
//#endregion

//#region 12 - 1 riel
images.push([
    {
        src: imagePath("1975/1-riel", "f"),
        alt: altInfo("1", "Riel", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1975/1-riel", "b"),
        alt: altInfo("1", "Riel", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Riel", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "120 \u00D7 58 mm",
        new: true,
    }
);
//#endregion

//#region 13 - 10 riel
images.push([
    {
        src: imagePath("1975/10-riel", "f"),
        alt: altInfo("10", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1975/10-riel", "b"),
        alt: altInfo("10", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "133 \u00D7 69 mm",
        new: true,
    }
);
//#endregion

//#region 14 - 50 riel
images.push([
    {
        src: imagePath("1975/50-riel", "f"),
        alt: altInfo("50", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1975/50-riel", "b"),
        alt: altInfo("50", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "140 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 15 - 100 riel
images.push([
    {
        src: imagePath("1990-1992/100-riel", "f"),
        alt: altInfo("100", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1990-1992/100-riel", "b"),
        alt: altInfo("100", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Son Ngoc Minh (1920-1972)", 
            vi: "Sơn Ngọc Minh (1920-1972)" 
        },
        size: "138 \u00D7 63 mm",
        new: true,
    }
);
//#endregion

//#region 16 - 500 riel
images.push([
    {
        src: imagePath("2001-2014/500-riel", "f"),
        alt: altInfo("500", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2001-2014/500-riel", "b"),
        alt: altInfo("500", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2004",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "138 \u00D7 64 mm",
    }
);
//#endregion

//#region 17 - 500 riel
images.push([
    {
        src: imagePath("2001-2004/500-riel", "f"),
        alt: altInfo("500", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2001-2004/500-riel", "b"),
        alt: altInfo("500", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2004",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 65 mm",
    }
);
//#endregion

//#region 18 - 1000 riel
images.push([
    {
        src: imagePath("2005/1000-riel", "f"),
        alt: altInfo("1000", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/1000-riel", "b"),
        alt: altInfo("1000", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2007",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 65 mm",
    }
);
//#endregion

//#region 19 - 50000 riel
images.push([
    {
        src: imagePath("2005/50000-riel", "f"),
        alt: altInfo("50000", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/50000-riel", "b"),
        alt: altInfo("50000", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50,000", "50.000", "Riels", "Riel"),
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
            en: "Norodom Sihanouk (1941-1955)", 
            vi: "Norodom Sihanouk (1941-1955)" 
        },
        size: "155 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 20 - 100 riel
images.push([
    {
        src: imagePath("2014/100-riel", "f"),
        alt: altInfo("100", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2014/100-riel", "b"),
        alt: altInfo("100", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Norodom Sihanouk (1941-1955)", 
            vi: "Norodom Sihanouk (1941-1955)" 
        },
        size: "140 \u00D7 65 mm",
    }
);
//#endregion

//#region 21 - 500 riel
images.push([
    {
        src: imagePath("2014/500-riel", "f"),
        alt: altInfo("500", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2014/500-riel", "b"),
        alt: altInfo("500", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Norodom Sihamoni (1953-Present)", 
            vi: "Norodom Sihamoni (1953-Present)" 
        },
        size: "140 \u00D7 65 mm",
    }
);
//#endregion

//#region 22 - 1000 riel
images.push([
    {
        src: imagePath("2014/1000-riel", "f"),
        alt: altInfo("1000", "Riels", "Riel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2014/1000-riel", "b"),
        alt: altInfo("1000", "Riels", "Riel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Riels", "Riel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2016",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Norodom Sihanouk (1922-2012)", 
            vi: "Norodom Sihanouk (1953-2012)" 
        },
        size: "142 \u00D7 68 mm",
        new: true,
    }
);
//#endregion