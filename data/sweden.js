const translations = {
    heading: {
        en: "Sweden",
        vi: "Thụy Điển"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/sweden/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Swedish ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Thụy Điển` 
});
const issuer = { en: "National Bank of Sweden", vi: "Ngân Hàng Nhà Nước Thụy Điển" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 krona
images.push([
    {
        src: imagePath("2017/20-krona", "f"),
        alt: altInfo("20", "Kronor", "Krona", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/20-krona", "b"),
        alt: altInfo("20", "Kronor", "Krona", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Kronor ", "Krona"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Astrid Lindgren (1907-2002)", 
            vi: "Astrid Lindgren (1907-2002)"
        },
        size: "120 \u00D7 66 mm",
        note: {
            en: `2015\'s top 20 banknotes by ${ibnsLink}`,
            vi: `Top 20 tờ tiền của năm 2015 theo ${ibnsLink}`
        },
        new: true
    }
);
//#endregion

//#region 2 - 50 krona
images.push([
    {
        src: imagePath("2017/50-krona", "f"),
        alt: altInfo("50", "Kronor", "Krona", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/50-krona", "b"),
        alt: altInfo("50", "Kronor", "Krona", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Kronor ", "Krona"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Evert Taube (1890-1976)", 
            vi: "Evert Taube (1890-1976)"
        },
        size: "126 \u00D7 66 mm",
        new: true,
    }
);
//#endregion

//#region 3 - 100 krona
images.push([
    {
        src: imagePath("2017/100-krona", "f"),
        alt: altInfo("100", "Kronor", "Krona", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/100-krona", "b"),
        alt: altInfo("100", "Kronor", "Krona", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Kronor ", "Krona"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Greta Garbo (1905-1990)", 
            vi: "Greta Garbo (1905-1990)"
        },
        size: "133 \u00D7 66 mm",
        note: {
            en: `2016\'s top 19 banknotes by ${ibnsLink}`,
            vi: `Top 19 tờ tiền của năm 2016 theo ${ibnsLink}`
        },
        new: true,
    }
);
//#endregion

//#region 4 - 200 krona
images.push([
    {
        src: imagePath("2017/200-krona", "f"),
        alt: altInfo("200", "Kronor", "Krona", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/200-krona", "b"),
        alt: altInfo("200", "Kronor", "Krona", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Kronor ", "Krona"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ingmar Bergman (1918-2007)", 
            vi: "Ingmar Bergman (1918-2007)"
        },
        size: "140 \u00D7 66 mm",
        new: true,
    }
);
//#endregion

//#region 5 - 500 krona
images.push([
    {
        src: imagePath("2017/500-krona", "f"),
        alt: altInfo("500", "Kronor", "Krona", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/500-krona", "b"),
        alt: altInfo("500", "Kronor", "Krona", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Kronor ", "Krona"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Birgit Nilsson (1918-2005)", 
            vi: "Birgit Nilsson (1918-2005)"
        },
        size: "147 \u00D7 70 mm",
        new: true,
    }
);
//#endregion