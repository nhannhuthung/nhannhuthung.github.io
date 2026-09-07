const translations = {
    heading: {
        en: "Honduras",
        vi: "Honduras"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/honduras/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Honduran ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Honduras` 
});
const frontAlt = (denom) => ({
    en: `Front of ${denom} Lempiras Bill`,
    vi: `Mặt Trước Tờ ${denom} Lempira`
});
const backAlt = (denom) => ({
    en: `Back of ${denom} Lempiras Bill`,
    vi: `Mặt Sau Tờ ${denom} Lempira`
});

const currency = { en: "Honduran Lempiras",  vi: "Lempira Honduras" };
const issuer   = { en: "Central Bank Of Honduras", vi: "Ngân Hàng Trung Ương Honduras" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 lempira
images.push([
    {
        src: imagePath("1-lempira", "f"),
        alt: altInfo("1", "Lempira", "Lempira", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1-lempira", "b"),
        alt: altInfo("1", "Lempira", "Lempira", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Lempira", "Lempira"),
        issuer: {
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2022",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: {
            en: "Lempira (1499-1537)", 
            vi: "Lempira (1499-1537)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion

//#region 2 - 2 lempira
images.push([
    {
        src: imagePath("2-lempira", "f"),
        alt: altInfo("2", "Lempiras", "Lempira", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2-lempira", "b"),
        alt: altInfo("2", "Lempiras", "Lempira", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Lempiras", "Lempira"),
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
            en: "Marco Aurelio Soto (1846-1908)", 
            vi: "Marco Aurelio Soto (1846-1908)"
        },
        size: "156 \u00D7 67 mm",
    }
);
//#endregion