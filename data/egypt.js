const translations = {
    heading: {
        en: "Egypt",
        vi: "Ai Cập"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/egypt/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Egyptian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ai Cập` 
});
const issuer   = { en: "Central Bank Of Egypt", vi: "Ngân Hàng Trung Ương Ai Cập" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 piastre
images.push([
    {
        src: imagePath("1985/50-piastre", "f"),
        alt: altInfo("50", "Piastres", "Piastre", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/50-piastre", "b"),
        alt: altInfo("50", "Piastres", "Piastre", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Piastres", "Piastre"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2017",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "135 \u00D7 70 mm",
    }
);
//#endregion

//#region 2 - 5 pound
images.push([
    {
        src: imagePath("2000/5-pound", "f"),
        alt: altInfo("5", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/5-pound", "b"),
        alt: altInfo("5", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2021",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "145 \u00D7 70 mm",
    }
);
//#endregion

//#region 3 - 20 pound
images.push([
    {
        src: imagePath("2000/20-pound", "f"),
        alt: altInfo("20", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/20-pound", "b"),
        alt: altInfo("20", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2017",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "155 \u00D7 70 mm",
    }
);
//#endregion

//#region 4 - 50 pound
images.push([
    {
        src: imagePath("2000/50-pound", "f"),
        alt: altInfo("50", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/50-pound", "b"),
        alt: altInfo("50", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2022",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "160 \u00D7 70 mm",
    }
);
//#endregion

//#region 5 - 100 pound
images.push([
    {
        src: imagePath("2000/100-pound", "f"),
        alt: altInfo("100", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/100-pound", "b"),
        alt: altInfo("100", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2023",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "165 \u00D7 70 mm",
    }
);
//#endregion

//#region 6 - 200 pound
images.push([
    {
        src: imagePath("2009/200-pound", "f"),
        alt: altInfo("200", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2009/200-pound", "b"),
        alt: altInfo("200", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "165 \u00D7 72 mm",
        note: { 
            en: `2007\'s top 12 banknotes by ${ibnsLink}`, 
            vi: `Top 12 tờ tiền năm 2007 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 7 - 10 pound
images.push([
    {
        src: imagePath("2021/10-pound", "f"),
        alt: altInfo("10", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2021/10-pound", "b"),
        alt: altInfo("10", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "132 \u00D7 69 mm",
        note: { 
            en: `2022\'s top 19 banknotes by ${ibnsLink}`, 
            vi: `Top 19 tờ tiền năm 2022 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 8 - 20 pound
images.push([
    {
        src: imagePath("2021/20-pound", "f"),
        alt: altInfo("20", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2021/20-pound", "b"),
        alt: altInfo("20", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "137 \u00D7 69 mm",
        note: { 
            en: `2023\'s top 15 banknotes by ${ibnsLink}`, 
            vi: `Top 15 tờ tiền năm 2023 theo ${ibnsLink}`
        },
    }
);
//#endregion