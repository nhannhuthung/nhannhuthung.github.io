const translations = {
    heading: {
        en: "Rwanda",
        vi: "Rwanda"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/rwanda/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Rwandan ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Rwanda` 
});
const issuer = { en: "National Bank of Rwanda", vi: "Ngân Hàng Nhà Nước Rwanda" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1000 franc
images.push([
    {
        src: imagePath("2013/1000-franc", "f"),
        alt: altInfo("1000", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2013/1000-franc", "b"),
        alt: altInfo("1000", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "135 \u00D7 65 mm",
    }
);
//#endregion

//#region 2 - 2000 franc
images.push([
    {
        src: imagePath("2013/2000-franc", "f"),
        alt: altInfo("2000", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2013/2000-franc", "b"),
        alt: altInfo("2000", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 68 mm",
    }
);
//#endregion

//#region 3 - 5000 franc
images.push([
    {
        src: imagePath("2013/5000-franc", "f"),
        alt: altInfo("5000", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2013/5000-franc", "b"),
        alt: altInfo("5000", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Francs", "Franc"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "155 \u00D7 85 mm",
    }
);
//#endregion