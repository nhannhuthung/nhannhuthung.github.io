const translations = {
    heading: {
        en: "Myanmar",
        vi: "Myanmar"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/myanmar/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Myanma ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Myanmar` 
});
const issuer = { en: "Central Bank Of Myanmar", vi: "Ngân Hàng Trung Ương Myanmar" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "7 | 6 5 4 | 3 2 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 kyat
images.push([
    {
        src: imagePath("1990/5-kyat", "f"),
        alt: altInfo("5", "Kyats", "Kyat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1990/5-kyat", "b"),
        alt: altInfo("5", "Kyats", "Kyat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Kyats", "Kyat"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "110 \u00D7 55 mm",
        reference: refLink("P-70b(2-1)", "https://banknote.ws/COLLECTION/countries/ASI/MYA/MYA0070.htm#70b2"),
    }
);
//#endregion

//#region 2 - 50 kyat
images.push([
    {
        src: imagePath("1990/50-kyat", "f"),
        alt: altInfo("50", "Kyats", "Kyat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1990/50-kyat", "b"),
        alt: altInfo("50", "Kyats", "Kyat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Kyats", "Kyat"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "145 \u00D7 70 mm",
        reference: refLink("P-73b(2)", "https://banknote.ws/COLLECTION/countries/ASI/MYA/MYA0073.htm#73b2"),
    }
);
//#endregion

//#region 3 - 100 kyat
images.push([
    {
        src: imagePath("1990/100-kyat", "f"),
        alt: altInfo("100", "Kyats", "Kyat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1990/100-kyat", "b"),
        alt: altInfo("100", "Kyats", "Kyat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Kyats", "Kyat"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "145 \u00D7 70 mm",
        reference: refLink("P-74b", "https://banknote.ws/COLLECTION/countries/ASI/MYA/MYA0074.htm#74b"),
    }
);
//#endregion

//#region 4 - 200 kyat
images.push([
    {
        src: imagePath("2004/200-kyat", "f"),
        alt: altInfo("200", "Kyats", "Kyat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/200-kyat", "b"),
        alt: altInfo("200", "Kyats", "Kyat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Kyats", "Kyat"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
        reference: refLink("P-78", "https://banknote.ws/COLLECTION/countries/ASI/MYA/MYA0078.htm"),
    }
);
//#endregion

//#region 5 - 500 kyat
images.push([
    {
        src: imagePath("2004/500-kyat", "f"),
        alt: altInfo("500", "Kyats", "Kyat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/500-kyat", "b"),
        alt: altInfo("500", "Kyats", "Kyat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Kyats", "Kyat"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
        reference: refLink("P-79", "https://banknote.ws/COLLECTION/countries/ASI/MYA/MYA0079.htm"),
    }
);
//#endregion

//#region 6 - 1000 kyat
images.push([
    {
        src: imagePath("2004/1000-kyat", "f"),
        alt: altInfo("1000", "Kyats", "Kyat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/1000-kyat", "b"),
        alt: altInfo("1000", "Kyats", "Kyat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Kyats", "Kyat"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
        reference: refLink("P-80", "https://banknote.ws/COLLECTION/countries/ASI/MYA/MYA0080.htm"),
    }
);
//#endregion

//#region 7 - 10000 kyat
images.push([
    {
        src: imagePath("2015/10000-kyat", "f"),
        alt: altInfo("10000", "Kyats", "Kyat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2015/10000-kyat", "b"),
        alt: altInfo("10000", "Kyats", "Kyat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Kyats", "Kyat"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
        reference: refLink("P-84", "https://banknote.ws/COLLECTION/countries/ASI/MYA/MYA0084.htm"),
        new: true
    }
);
//#endregion