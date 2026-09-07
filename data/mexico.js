const translations = {
    heading: {
        en: "Mexico",
        vi: "Mexico"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/mexico/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Mexican ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Mexico` 
});
const issuer = { en: "Bank Of Mexico", vi: "Ngân Hàng Mexico" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
const standComInType = { en: "Circulating Standard/Commemorative Banknote", vi: "Tiền Tiêu Chuẩn/Kỷ Niệm Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 peso
images.push([
    {
        src: imagePath("d/20-peso", "f"),
        alt: altInfo("20", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("d/20-peso", "b"),
        alt: altInfo("20", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1998",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Benito Juárez (1858-1872)", 
            vi: "Benito Juárez (1858-1872)" 
        },
        size: "129 \u00D7 65 mm",
    }
);
//#endregion

//#region 2 - 50 peso
images.push([
    {
        src: imagePath("d/50-peso", "f"),
        alt: altInfo("50", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("d/50-peso", "b"),
        alt: altInfo("50", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1998",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "José María Morelos (1765-1815)", 
            vi: "José María Morelos (1765-1815)" 
        },
        size: "129 \u00D7 65 mm",
    }
);
//#endregion

//#region 3 - 20 peso
images.push([
    {
        src: imagePath("f/20-peso", "f"),
        alt: altInfo("20", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("f/20-peso", "b"),
        alt: altInfo("20", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2012",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Benito Juárez (1858-1872)", 
            vi: "Benito Juárez (1858-1872)" 
        },
        size: "120 \u00D7 66 mm",
    }
);
//#endregion

//#region 4 - 50 peso
images.push([
    {
        src: imagePath("f/50-peso", "f"),
        alt: altInfo("50", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("f/50-peso", "b"),
        alt: altInfo("50", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Pesos", "Peso"),
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
            en: "José María Morelos (1765-1815)", 
            vi: "José María Morelos (1765-1815)" 
        },
        size: "127 \u00D7 66 mm",
    }
);
//#endregion

//#region 5 - 20 peso
images.push([
    {
        src: imagePath("g/20-peso", "f"),
        alt: altInfo("20", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("g/20-peso", "b"),
        alt: altInfo("20", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2021",
        type: { 
            en: standComInType.en, 
            vi: standComInType.vi 
        },
        size: "129 \u00D7 65 mm",
    }
);
//#endregion

//#region 6 - 50 peso
images.push([
    {
        src: imagePath("g/50-peso", "f"),
        alt: altInfo("50", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("g/50-peso", "b"),
        alt: altInfo("50", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2023",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "65 \u00D7 125 mm",
        note: { 
            en: `Banknote of 2021 by ${ibnsLink}`, 
            vi: `Tờ tiền của năm 2021 by ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 7 - 100 peso
images.push([
    {
        src: imagePath("g/100-peso", "f"),
        alt: altInfo("100", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("g/100-peso", "b"),
        alt: altInfo("100", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2023",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Juana Inés de la Cruz (1651-1695)", 
            vi: "Juana Inés de la Cruz (1651-1695)" 
        },
        size: "65 \u00D7 132 mm",
        note: { 
            en: `Banknote of 2020 by ${ibnsLink}`, 
            vi: `Tờ tiền của năm 2020 by ${ibnsLink}` 
        },
    }
);
//#endregion