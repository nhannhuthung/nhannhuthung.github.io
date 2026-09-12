const translations = {
    heading: {
        en: "Indonesia",
        vi: "Indonesia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/indonesia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Indonesian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Indonesia` 
});
const issuer   = { en: "Bank Indonesia", vi: "Ngân Hàng Indonesia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 sen
images.push([
    {
        src: imagePath("1965-1967/5-sen", "f"),
        alt: altInfo("5", "Sen", "Sen", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1965-1967/5-sen", "b"),
        alt: altInfo("5", "Sen", "Sen", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Sen", "Sen"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "104 \u00D7 52 mm",
        new: true
    }
);
//#endregion

//#region 2 - 10 sen
images.push([
    {
        src: imagePath("1965-1967/10-sen", "f"),
        alt: altInfo("10", "Sen", "Sen", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1965-1967/10-sen", "b"),
        alt: altInfo("10", "Sen", "Sen", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Sen", "Sen"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "104 \u00D7 52 mm",
        new: true
    }
);
//#endregion

//#region 3 - 1000 rupiah
images.push([
    {
        src: imagePath("2000-2014/1000-rupiah", "f"),
        alt: altInfo("1000", "Rupiah", "Rupiah", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000-2014/1000-rupiah", "b"),
        alt: altInfo("1000", "Rupiah", "Rupiah", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Rupiah", "Rupiah"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2009",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Kapitan Pattimura (1783-1817)", 
            vi: "Kapitan Pattimura (1783-1817)" 
        },
        size: "141 \u00D7 65 mm",
    }
);
//#endregion

//#region 4 - 2000 rupiah
images.push([
    {
        src: imagePath("2000-2014/2000-rupiah", "f"),
        alt: altInfo("2000", "Rupiah", "Rupiah", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000-2014/2000-rupiah", "b"),
        alt: altInfo("2000", "Rupiah", "Rupiah", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Rupiah", "Rupiah"),
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
            en: "Pangeran Antasari (1797-1862)", 
            vi: "Pangeran Antasari (1797-1862)" 
        },
        size: "141 \u00D7 65 mm",
    }
);
//#endregion

//#region 5 - 2000 rupiah
images.push([
    {
        src: imagePath("2016/2000-rupiah", "f"),
        alt: altInfo("2000", "Rupiah", "Rupiah", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/2000-rupiah", "b"),
        alt: altInfo("2000", "Rupiah", "Rupiah", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Rupiah", "Rupiah"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Mohammad Husni Thamrin (1894-1941)", 
            vi: "Mohammad Husni Thamrin (1894-1941)" 
        },
        size: "141 \u00D7 65 mm",
        new: true,
    }
);
//#endregion

//#region 6 - 5000 rupiah
images.push([
    {
        src: imagePath("2016/5000-rupiah", "f"),
        alt: altInfo("5000", "Rupiah", "Rupiah", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/5000-rupiah", "b"),
        alt: altInfo("5000", "Rupiah", "Rupiah", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Rupiah", "Rupiah"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Idham Chalid (1921-2010)", 
            vi: "Idham Chalid (1921-2010)" 
        },
        size: "143 \u00D7 65 mm",
        new: true,
    }
);
//#endregion

//#region 7 - 10000 rupiah
images.push([
    {
        src: imagePath("2016/10000-rupiah", "f"),
        alt: altInfo("10000", "Rupiah", "Rupiah", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/10000-rupiah", "b"),
        alt: altInfo("10000", "Rupiah", "Rupiah", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Rupiah", "Rupiah"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Frans Kaisiepo (1921-1979)", 
            vi: "Frans Kaisiepo (1921-1979)" 
        },
        size: "145 \u00D7 65 mm",
        new: true,
    }
);
//#endregion

//#region 8 - 20000 rupiah
images.push([
    {
        src: imagePath("2016/20000-rupiah", "f"),
        alt: altInfo("20000", "Rupiah", "Rupiah", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/20000-rupiah", "b"),
        alt: altInfo("20000", "Rupiah", "Rupiah", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20,000", "20.000", "Rupiah", "Rupiah"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Sam Ratulangi (1890-1949)", 
            vi: "Sam Ratulangi (1890-1949)" 
        },
        size: "147 \u00D7 65 mm",
        new: true,
    }
);
//#endregion

//#region 9 - 50000 rupiah
images.push([
    {
        src: imagePath("2016/50000-rupiah", "f"),
        alt: altInfo("50000", "Rupiah", "Rupiah", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/50000-rupiah", "b"),
        alt: altInfo("50000", "Rupiah", "Rupiah", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50,000", "50.000", "Rupiah", "Rupiah"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Djuanda Kartawidjaja (1911-1963)", 
            vi: "Djuanda Kartawidjaja (1911-1963)" 
        },
        size: "149 \u00D7 65 mm",
        new: true,
    }
);
//#endregion