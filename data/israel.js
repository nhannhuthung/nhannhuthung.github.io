const translations = {
    heading: {
        en: "Israel",
        vi: "Israel"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/israel/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Israeli ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Israel` 
});
const issuer   = { en: "Bank Of Israel", vi: "Ngân Hàng Israel" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 shekel
images.push([
    {
        src: imagePath("c/20-shekel", "f"),
        alt: altInfo("20", "Shekels", "Shekel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("c/20-shekel", "b"),
        alt: altInfo("20", "Shekels", "Shekel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Shekels", "Shekel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2017",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Rachel Bluwstein (1890-1931)", 
            vi: "Rachel Bluwstein (1890-1931)" 
        },
        size: "129 \u00D7 71 mm",
    }
);
//#endregion

//#region 2 - 50 shekel
images.push([
    {
        src: imagePath("c/50-shekel", "f"),
        alt: altInfo("50", "Shekels", "Shekel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("c/50-shekel", "b"),
        alt: altInfo("50", "Shekels", "Shekel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Shekels", "Shekel"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Shaul Tchernichovsky (1875-1943)", 
            vi: "Shaul Tchernichovsky (1875-1943)" 
        },
        size: "136 \u00D7 71 mm",
        note: { 
            en: `2014\'s top 12 banknotes by ${ibnsLink}`, 
            vi: `Top 12 tờ tiền năm 2014 theo ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 3 - 200 shekel
images.push([
    {
        src: imagePath("c/200-shekel", "f"),
        alt: altInfo("200", "Shekels", "Shekel", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("c/200-shekel", "b"),
        alt: altInfo("200", "Shekels", "Shekel", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Shekels", "Shekel"),
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
            en: "Nathan Alterman (1910-1970)", 
            vi: "Nathan Alterman (1910-1970)" 
        },
        size: "150 \u00D7 20 mm",
        note: { 
            en: `2015\'s top 20 banknotes by ${ibnsLink}`, 
            vi: `Top 20 tờ tiền năm 2015 theo ${ibnsLink}` 
        },
    }
);
//#endregion