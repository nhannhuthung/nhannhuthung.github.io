const translations = {
    heading: {
        en: "Costa Rica",
        vi: "Costa Rica"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/costa-rica/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Costa Rican ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Costa Rica` 
});
const issuer   = { en: "Central Bank Of Costa Rica", vi: "Ngân Hàng Trung Ương Costa Rica" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1000 colon
images.push([
    {
        src: imagePath("2018-2019/1000-colon", "f"),
        alt: altInfo("1000", "Colones", "Colon", "Front","trước"),
        description: obverse
    },
    {
        src: imagePath("2018-2019/1000-colon", "b"),
        alt: altInfo("1000", "Colones", "Colon", "Back","sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Colones", "Colon"),
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
            en: "Braulio Carrillo Colina (1800-1845)", 
            vi: "Braulio Carrillo Colina (1800-1845)" 
        },
        size: "125 \u00D7 67 mm",
    }
);
//#endregion

//#region 2 - 2000 colon
images.push([
    {
        src: imagePath("2018-2019/2000-colon", "f"),
        alt: altInfo("2000", "Colones", "Colon", "Front","trước"),
        description: obverse
    },
    {
        src: imagePath("2018-2019/2000-colon", "b"),
        alt: altInfo("2000", "Colones", "Colon", "Back","sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Colones", "Colon"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "132 \u00D7 67 mm",
        figure: { 
            en: "Mauro Fernández Acuña (1843-1905)", 
            vi: "Mauro Fernández Acuña (1843-1905)" 
        },
    }
);
//#endregion

//#region 3 - 5000 colon
images.push([
    {
        src: imagePath("2018-2019/5000-colon", "f"),
        alt: altInfo("5000", "Colones", "Colon", "Front","trước"),
        description: obverse
    },
    {
        src: imagePath("2018-2019/5000-colon", "b"),
        alt: altInfo("5000", "Colones", "Colon", "Back","sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Colones", "Colon"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2018",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "139 \u00D7 67 mm",
        figure: { 
            en: "Alfredo González Flores (1877-1962)", 
            vi: "Alfredo González Flores (1877-1962)" 
        },
        note: { 
            en: `2020\'s top 24 banknotes by ${ibnsLink}`, 
            vi: `Top 24 tờ tiền năm 2020 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 4 - 10000 colon
images.push([
    {
        src: imagePath("2018-2019/10000-colon", "f"),
        alt: altInfo("10000", "Colones", "Colon", "Front","trước"),
        description: obverse
    },
    {
        src: imagePath("2018-2019/10000-colon", "b"),
        alt: altInfo("10000", "Colones", "Colon", "Back","sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Colones", "Colon"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "146 \u00D7 67 mm",
        figure: { 
            en: "José Figueres Ferrer (1906-1990)", 
            vi: "José Figueres Ferrer (1906-1990)" 
        },
        note: { 
            en: `2021\'s top 20 banknotes by ${ibnsLink}`, 
            vi: `Top 20 tờ tiền năm 2021 theo ${ibnsLink}`
        },
    }
);
//#endregion