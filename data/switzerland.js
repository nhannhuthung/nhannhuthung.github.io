const translations = {
    heading: {
        en: "Switzerland",
        vi: "Thụy Sĩ"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/switzerland/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Swiss ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Thụy Sĩ` 
});
const issuer = { en: "Swiss National Bank", vi: "Ngân Hàng Nhà Nước Thụy Sĩ" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 10 franc
images.push([
    {
        src: imagePath("9/10-franc", "f"),
        alt: altInfo("10", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("9/10-franc", "b"),
        alt: altInfo("10", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "70 \u00D7 123 mm",
        note: {
            en: `Banknote of 2017 by ${ibnsLink}`,
            vi: `Tờ tiền của năm 2017 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 2 - 20 franc
images.push([
    {
        src: imagePath("9/20-franc", "f"),
        alt: altInfo("20", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("9/20-franc", "b"),
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
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "70 \u00D7 130 mm",
    }
);
//#endregion

//#region 3 - 50 franc
images.push([
    {
        src: imagePath("9/50-franc", "f"),
        alt: altInfo("50", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("9/50-franc", "b"),
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
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "70 \u00D7 137 mm",
        note: {
            en: `Banknote of 2016 by ${ibnsLink}`,
            vi: `Tờ tiền của năm 2016 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 4 - 100 franc
images.push([
    {
        src: imagePath("9/100-franc", "f"),
        alt: altInfo("100", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("9/100-franc", "b"),
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
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "70 \u00D7 144 mm",
        new: true,
    }
);
//#endregion