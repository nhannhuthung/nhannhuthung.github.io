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
const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.or2017/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "7 | 6 5 | 4 3 | 2 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 peso
images.push([
    {
        src: imagePath("1994/20-peso", "f"),
        alt: altInfo("20", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994/20-peso", "b"),
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
        reference: refLink("P-106b", "https://banknote.ws/COLLECTION/countries/AM2004/MEX/MEX-GENERAL/MEX0106.htm#106bAG"),
    }
);
//#endregion

//#region 2 - 50 peso
images.push([
    {
        src: imagePath("1994/50-peso", "f"),
        alt: altInfo("50", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1994/50-peso", "b"),
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
        reference: refLink("P-107c", "https://banknote.ws/COLLECTION/countries/AM2004/MEX/MEX-GENERAL/MEX0107.htm#107cAV"),
    }
);
//#endregion

//#region 3 - 20 peso
images.push([
    {
        src: imagePath("2004/20-peso", "f"),
        alt: altInfo("20", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/20-peso", "b"),
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
        reference: refLink("P-122v", "https://banknote.ws/COLLECTION/countries/AM2004/MEX/MEX-GENERAL/MEX0122.htm#122-V"),
        note: {
            en: `2007\'s top 12 banknotes by ${ibnsLink}`, 
            vi: `Top 12 tờ tiền năm 2007 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 4 - 50 peso
images.push([
    {
        src: imagePath("2004/50-peso", "f"),
        alt: altInfo("50", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/50-peso", "b"),
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
        reference: refLink("P-123Ap", "https://banknote.ws/COLLECTION/countries/AM2004/MEX/MEX-GENERAL/MEX0123A2.htm#123AP"),
    }
);
//#endregion

//#region 5 - 50 peso
images.push([
    {
        src: imagePath("2017/50-peso", "f"),
        alt: altInfo("50", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/50-peso", "b"),
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
        reference: refLink("P-W133 12-2023(5)", "https://banknote.ws/COLLECTION/countries/AME/MEX/MEX-GENERAL/MEXW2021-0050.htm#06122023-5"),
        note: { 
            en: `Banknote of 2021 by ${ibnsLink}`, 
            vi: `Tờ tiền của năm 2021 by ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 6 - 100 peso
images.push([
    {
        src: imagePath("2017/100-peso", "f"),
        alt: altInfo("100", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/100-peso", "b"),
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
        reference: refLink("P-W134 7-2023(5)", "https://banknote.ws/COLLECTION/countries/AME/MEX/MEX-GENERAL/MEXW2020-0100.htm"),
        note: { 
            en: `Banknote of 2020 by ${ibnsLink}`, 
            vi: `Tờ tiền của năm 2020 by ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 7 - 20 peso
images.push([
    {
        src: imagePath("2021/20-peso", "f"),
        alt: altInfo("20", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2021/20-peso", "b"),
        alt: altInfo("20", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Pesos", "Peso"),
        subtitle: {
            en: "Bicentennial Of National Independence (1821-2021)",
            vi: "Đại Lễ Song Bách Niên Độc Lập Quốc Gia (1821-2021)"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2021",
        type: { 
            en: comInType.en, 
            vi: comInType.vi 
        },
        size: "129 \u00D7 65 mm",
        reference: refLink("P-W132 1-2021(2)", "https://banknote.ws/COLLECTION/countries/AME/MEX/MEX-GENERAL/MEXW2021-0020.htm#NEW2"),
    }
);
//#endregion