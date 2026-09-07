const translations = {
    heading: {
        en: "Kenya",
        vi: "Kenya"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/kenya/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Kenyan ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Kenya` 
});
const issuer = { en: "Central Bank Of Kenya", vi: "Ngân Hàng Trung Ương Kenya" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 shilling
images.push([
    {
        src: imagePath("2019/100-shilling", "f"),
        alt: altInfo("100", "Shillings", "Shilling", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/100-shilling", "b"),
        alt: altInfo("100", "Shillings", "Shilling", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Shillings", "Shilling"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "128 \u00D7 64 mm",
    }
);
//#endregion

//#region 2 - 200 shilling
images.push([
    {
        src: imagePath("2019/200-shilling", "f"),
        alt: altInfo("200", "Shillings", "Shilling", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/200-shilling", "b"),
        alt: altInfo("200", "Shillings", "Shilling", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Shillings", "Shilling"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "133 \u00D7 67 mm",
    }
);
//#endregion

//#region 3 - 500 shilling
images.push([
    {
        src: imagePath("2019/500-shilling", "f"),
        alt: altInfo("500", "Shillings", "Shilling", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/500-shilling", "b"),
        alt: altInfo("500", "Shillings", "Shilling", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Shillings", "Shilling"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "138 \u00D7 68 mm",
        note: { 
            en: `2019\'s top 22 banknotes by ${ibnsLink}`, 
            vi: `Top 22 tờ tiền năm 2019 theo ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 4 - 1000 shilling
images.push([
    {
        src: imagePath("2019/1000-shilling", "f"),
        alt: altInfo("1000", "Shillings", "Shilling", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/1000-shilling", "b"),
        alt: altInfo("1000", "Shillings", "Shilling", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Shillings", "Shilling"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "143 \u00D7 70 mm",
    }
);
//#endregion