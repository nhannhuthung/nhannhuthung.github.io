const translations = {
    heading: {
        en: "Macau",
        vi: "Ma Cao"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/macau/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Macanese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ma Cao` 
});
const issuer = { en: "National Overseas Bank", vi: "Ngân Hàng Quốc Gia Nước Ngoài" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" }

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 10 pataca
images.push([
    {
        src: imagePath("2005/10-pataca", "f"),
        alt: altInfo("10", "Patacas", "Pataca", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/10-pataca", "b"),
        alt: altInfo("10", "Patacas", "Pataca", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Patacas", "Pataca"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "138 \u00D7 69 mm",
        note: {
            en: `2006\'s top 15 banknotes by ${ibnsLink}`,
            vi: `Top 15 tờ tiền của năm 2006 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 2 - 10 pataca
images.push([
    {
        src: imagePath("new-year/10-pataca", "f"),
        alt: altInfo("10", "Patacas", "Pataca", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("new-year/10-pataca", "b"),
        alt: altInfo("10", "Patacas", "Pataca", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Patacas", "Pataca"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: { 
            en: comInType.en, 
            vi: comInType.vi 
        },
        size: "138 \u00D7 69 mm",
        note: {
            en: `2014\'s top 12 banknotes by ${ibnsLink}`,
            vi: `Top 12 tờ tiền của năm 2014 theo ${ibnsLink}`
        },
    }
);
//#endregion