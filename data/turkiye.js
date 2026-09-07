const translations = {
    heading: {
        en: "Turkiye",
        vi: "Thổ Nhĩ Kỳ"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/turkiye/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Turkish ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Thổ Nhĩ Kỳ` 
});
const issuer = { en: "Central Bank Of Turkey", vi: "Ngân Hàng Trung Ương Thổ Nhĩ Kỳ" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 lira
images.push([
    {
        src: imagePath("2009/20-lira", "f"),
        alt: altInfo("20", "Liras", "Lira", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2009/20-lira", "b"),
        alt: altInfo("20", "Liras", "Lira", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Liras", "Lira"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Mustafa Kemal Atatürk (1881?-1938)",
                vi: "Mustafa Kemal Atatürk (1881?-1938)"
            },
            {
                en: "Mimar Kemaleddin (1870-1927)", 
                vi: "Mimar Kemaleddin (1870-1927)" 
            }
        ],
        size: "142 \u00D7 68 mm",
    }
);
//#endregion

//#region 2 - 5 lira
images.push([
    {
        src: imagePath("2013/5-lira", "f"),
        alt: altInfo("5", "Liras", "Lira", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2013/5-lira", "b"),
        alt: altInfo("5", "Liras", "Lira", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Liras ", "Lira"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Mustafa Kemal Atatürk (1881?-1938)",
                vi: "Mustafa Kemal Atatürk (1881?-1938)"
            },
            {
                en: "Ayd\u0131n Say\u0131l\u0131 (1913-1993)", 
                vi: "Ayd\u0131n Say\u0131l\u0131 (1913-1993)" 
            }
        ],
        size: "130 \u00D7 64 mm",
    }
);
//#endregion