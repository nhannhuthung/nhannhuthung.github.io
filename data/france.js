const translations = {
    heading: {
        en: "France",
        vi: "Pháp"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/france/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} French ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Pháp` 
});
const issuer   = { en: "Bank Of France", vi: "Ngân Hàng Pháp" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 franc
images.push([
    {
        src: imagePath("1969-1982/20-franc", "f"),
        alt: altInfo("20", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1969-1982/20-franc", "b"),
        alt: altInfo("20", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1997",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Claude Debussy (1862-1918)", 
            vi: "Claude Debussy (1862-1918)" 
        },
        size: "140 \u00D7 75 mm",
    }
);
//#endregion

//#region 2 - 50 franc
images.push([
    {
        src: imagePath("1993-1998/50-franc", "f"),
        alt: altInfo("50", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993-1998/50-franc", "b"),
        alt: altInfo("50", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1994",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Antoine de Saint-Exupéry (1900-1944?)", 
            vi: "Antoine de Saint-Exupéry (1900-1944?)"
        },
        size: "123 \u00D7 80 mm",
    }
);
//#endregion

//#region 3 - 100 franc
images.push([
    {
        src: imagePath("1993-1998/100-franc", "f"),
        alt: altInfo("100", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993-1998/100-franc", "b"),
        alt: altInfo("100", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Francs", "Franc"),
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
            en: "Paul Cézanne (1839-1906)", 
            vi: "Paul Cézanne (1839-1906)"
        },
        size: "133 \u00D7 80 mm",
    }
);
//#endregion

//#region 4 - 200 franc
images.push([
    {
        src: imagePath("1993-1998/200-franc", "f"),
        alt: altInfo("200", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993-1998/200-franc", "b"),
        alt: altInfo("200", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1997",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Gustave Eiffel (1832-1923)", 
            vi: "Gustave Eiffel (1832-1923)"
        },
        size: "143 \u00D7 80 mm",
    }
);
//#endregion

//#region 5 - 500 franc
images.push([
    {
        src: imagePath("1993-1998/500-franc", "f"),
        alt: altInfo("500", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993-1998/500-franc", "b"),
        alt: altInfo("500", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1994",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Marie Curie (1867-1934), Pierre Curie (1859-1906)", 
            vi: "Marie Curie (1867-1934), Pierre Curie (1859-1906)"
        },
        size: "153 \u00D7 80 mm",
    }
);
//#endregion