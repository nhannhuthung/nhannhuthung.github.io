const translations = {
    heading: {
        en: "India",
        vi: "Ấn Độ"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/india/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Indian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ấn Độ` 
});
const issuer = { en: "Reserve Bank Of India", vi: "Ngân Hàng Dự Trữ Ấn Độ" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

let index = 1;

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 rupee
images.push([
    {
        src: imagePath("1996/5-rupee", "f"),
        alt: altInfo("5", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1996/5-rupee", "b"),
        alt: altInfo("5", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Mahatma Gandhi (1869-1948)", 
            vi: "Mahatma Gandhi (1869-1948)" 
        },
        size: "117 \u00D7 63 mm",
    }
);
//#endregion

//#region 2 - 10 rupee
images.push([
    {
        src: imagePath("1996/10-rupee", "f"),
        alt: altInfo("10", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1996/10-rupee", "b"),
        alt: altInfo("10", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Mahatma Gandhi (1869-1948)", 
            vi: "Mahatma Gandhi (1869-1948)" 
        },
        size: "117 \u00D7 63 mm",
    }
);
//#endregion

//#region 3 - 10 rupee
images.push([
    {
        src: imagePath("2005/10-rupee", "f"),
        alt: altInfo("10", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/10-rupee", "b"),
        alt: altInfo("10", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2006",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Mahatma Gandhi (1869-1948)", 
            vi: "Mahatma Gandhi (1869-1948)" 
        },
        size: "117 \u00D7 63 mm",
    }
);
//#endregion

//#region 4 - 100 rupee
images.push([
    {
        src: imagePath("2011/100-rupee", "f"),
        alt: altInfo("100", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011/100-rupee", "b"),
        alt: altInfo("100", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2017",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Mahatma Gandhi (1869-1948)", 
            vi: "Mahatma Gandhi (1869-1948)" 
        },
        size: "157 \u00D7 73 mm",
    }
);
//#endregion

//#region 5 - 1 rupee
images.push([
    {
        src: imagePath("2015/1-rupee", "f"),
        alt: altInfo("1", "Rupee", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2015/1-rupee", "b"),
        alt: altInfo("1", "Rupee", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Rupee", "Rupee"),
        year: "2015",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "97 \u00D7 63 mm",
    }
);
//#endregion

//#region 6 - 10 rupee
images.push([
    {
        src: imagePath("2016/10-rupee", "f"),
        alt: altInfo("10", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/10-rupee", "b"),
        alt: altInfo("10", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mahatma Gandhi (1869-1948)", 
            vi: "Mahatma Gandhi (1869-1948)" 
        },
        size: "123 \u00D7 63 mm",
    }
);
//#endregion

//#region 7 - 100 rupee
images.push([
    {
        src: imagePath("2016/100-rupee", "f"),
        alt: altInfo("100", "Rupees", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/100-rupee", "b"),
        alt: altInfo("100", "Rupees", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Rupees", "Rupee"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mahatma Gandhi (1869-1948)", 
            vi: "Mahatma Gandhi (1869-1948)" 
        },
        size: "142 \u00D7 66 mm",
    }
);
//#endregion