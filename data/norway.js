const translations = {
    heading: {
        en: "Norway",
        vi: "Na Uy"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/norway/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Norweigian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Na Uy` 
});
const issuer = { en: "Bank Of Norway", vi: "Ngân Hàng Na Uy" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 krone
images.push([
    {
        src: imagePath("7/50-krone", "f"),
        alt: altInfo("50", "Kroner", "Krone", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("7/50-krone", "b"),
        alt: altInfo("50", "Kroner", "Krone", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Kroner", "Krone"),
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
            en: "Peter Christen Asbjørnsen (1812-1885)", 
            vi: "Peter Christen Asbjørnsen (1812-1885)" 
        },
        size: "128 \u00D7 60 mm",
    }
);
//#endregion

//#region 2 - 100 krone
images.push([
    {
        src: imagePath("8/100-krone", "f"),
        alt: altInfo("100", "Kroner", "Krone", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("8/100-krone", "b"),
        alt: altInfo("100", "Kroner", "Krone", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Kroner", "Krone"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2016",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "133 \u00D7 70 mm",
        note: {
            en: `2017\'s top 22 banknotes by ${ibnsLink}`,
            vi: `Top 22 tờ tiền của năm 2017 theo ${ibnsLink}`
        },
        new: true,
    }
);
//#endregion

//#region 3 - 200 krone
images.push([
    {
        src: imagePath("8/200-krone", "f"),
        alt: altInfo("200", "Kroner", "Krone", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("8/200-krone", "b"),
        alt: altInfo("200", "Kroner", "Krone", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Kroner", "Krone"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2016",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 70 mm",
    }
);
//#endregion

//#region 4 - 500 krone
images.push([
    {
        src: imagePath("8/500-krone", "f"),
        alt: altInfo("500", "Kroner", "Krone", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("8/500-krone", "b"),
        alt: altInfo("500", "Kroner", "Krone", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Kroner", "Krone"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "147 \u00D7 70 mm",
        note: { 
            en: `2018\'s top 16 banknotes by ${ibnsLink}`, 
            vi: `Top 16 tờ tiền năm 2018 theo ${ibnsLink}`
        },
        new: true,
    }
);
//#endregion