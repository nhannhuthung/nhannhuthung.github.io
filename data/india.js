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
const issuer1 = { en: "Reserve Bank Of India", vi: "Ngân Hàng Dự Trữ Ấn Độ" };
const issuer2 = { en: "Government Of India", vi: "Chính Phủ Ấn Độ" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

let index = 1;

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "7 6 | 5 | 4 | 3 2 | 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 rupee
images.push([
    {
        src: imagePath("1-rupee-series/2015", "f"),
        alt: altInfo("1", "Rupee", "Rupee", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1-rupee-series/2015", "b"),
        alt: altInfo("1", "Rupee", "Rupee", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Rupee", "Rupee"),
        issuer: { 
            en: issuer2.en, 
            vi: issuer2.vi 
        },
        year: "2015",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "97 \u00D7 63 mm",
        reference: refLink("P-117a", "http://www.banknote.ws/COLLECTION/countries/ASI/IND/IND0117.htm"),
    }
);
//#endregion

//#region 2 - 5 rupee
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
            en: issuer1.en, 
            vi: issuer1.vi 
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
        reference: refLink("P-88Aa", "http://www.banknote.ws/COLLECTION/countries/ASI/IND/IND0088A2.htm"),
    }
);
//#endregion

//#region 3 - 10 rupee
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
            en: issuer1.en, 
            vi: issuer1.vi 
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
        reference: refLink("P-89o", "http://www.banknote.ws/COLLECTION/countries/ASI/IND/IND0089.htm#89d"),
    }
);
//#endregion

//#region 4 - 10 rupee
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
            en: issuer1.en, 
            vi: issuer1.vi 
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
        reference: refLink("P-95a", "http://www.banknote.ws/COLLECTION/countries/ASI/IND/IND0095.htm"),
    }
);
//#endregion

//#region 5 - 100 rupee
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
            en: issuer1.en, 
            vi: issuer1.vi 
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
        reference: refLink("P-105ai", "http://www.banknote.ws/COLLECTION/countries/ASI/IND/IND0105.htm#2017WO"),
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
            en: issuer1.en, 
            vi: issuer1.vi 
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
        reference: refLink("P-109h", "http://www.banknote.ws/COLLECTION/countries/ASI/IND/IND0109.htm#2018R"),
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
            en: issuer1.en, 
            vi: issuer1.vi 
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
        reference: refLink("P-112 2019", "http://www.banknote.ws/COLLECTION/countries/ASI/IND/IND0112.htm#2019"),
    }
);
//#endregion