const translations = {
    heading: {
        en: "European Union",
        vi: "Liên Minh Châu Âu"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/eu/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} European Union's ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Liên Minh Châu Âu` 
});
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 euro
images.push([
    {
        src: imagePath("es1/5-euro", "f"),
        alt: altInfo("5", "Euros", "Euro", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("es1/5-euro", "b"),
        alt: altInfo("5", "Euros", "Euro", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Euros", "Euro"),
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "120 \u00D7 62 mm",
    }
);
//#endregion

//#region 2 - 10 euro
images.push([
    {
        src: imagePath("es1/10-euro", "f"),
        alt: altInfo("10", "Euros", "Euro", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("es1/10-euro", "b"),
        alt: altInfo("10", "Euros", "Euro", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Euros", "Euro"),
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "127 \u00D7 67 mm",
    }
);
//#endregion

//#region 3 - 20 euro
images.push([
    {
        src: imagePath("es1/20-euro", "f"),
        alt: altInfo("20", "Euros", "Euro", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("es1/20-euro", "b"),
        alt: altInfo("20", "Euros", "Euro", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Euros", "Euro"),
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "133 \u00D7 72 mm",
    }
);
//#endregion

//#region 4 - 5 euro
images.push([
    {
        src: imagePath("es2/5-euro", "f"),
        alt: altInfo("5", "Euros", "Euro", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("es2/5-euro", "b"),
        alt: altInfo("5", "Euros", "Euro", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Euros", "Euro"),
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "120 \u00D7 62 mm",
        note: { 
            en: `2013\'s top 12 banknotes by ${ibnsLink}`, 
            vi: `Top 12 tờ tiền năm 2013 theo ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 5 - 10 euro
images.push([
    {
        src: imagePath("es2/10-euro", "f"),
        alt: altInfo("10", "Euros", "Euro", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("es2/10-euro", "b"),
        alt: altInfo("10", "Euros", "Euro", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Euros", "Euro"),
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "127 \u00D7 67 mm",
    }
);
//#endregion

//#region 6 - 20 euro
images.push([
    {
        src: imagePath("es2/20-euro", "f"),
        alt: altInfo("20", "Euros", "Euro", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("es2/20-euro", "b"),
        alt: altInfo("20", "Euros", "Euro", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Euros", "Euro"),
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "133 \u00D7 72 mm",
        note: {
            en: `2015\'s top 20 banknotes by ${ibnsLink}`,
            vi: `Top 20 tờ tiền của năm 2015 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 7 - 50 euro
images.push([
    {
        src: imagePath("es2/50-euro", "f"),
        alt: altInfo("50", "Euros", "Euro", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("es2/50-euro", "b"),
        alt: altInfo("50", "Euros", "Euro", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Euros", "Euro"),
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 77 mm",
    }
);
//#endregion