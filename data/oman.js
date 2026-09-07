const translations = {
    heading: {
        en: "Oman",
        vi: "Oman"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/oman/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Omani ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Oman` 
});
const issuer = { en: "Central Bank Of Oman", vi: "Ngân Hàng Trung Ương Oman" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 baisa
images.push([
    {
        src: imagePath("1995/100-baisa", "f"),
        alt: altInfo("100", "Baisas", "Baisa", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1995/100-baisa", "b"),
        alt: altInfo("100", "Baisas", "Baisa", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Baisas", "Baisa"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1416 (1995)",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Qaboos bin Said (1940-2020)", 
            vi: "Qaboos bin Said (1940-2020)" 
        },
        size: "140 \u00D7 72 mm",
    }
);
//#endregion

//#region 2 - 1 rial
images.push([
    {
        src: imagePath("2020/1-rial", "f"),
        alt: altInfo("1", "Rial", "Rial", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2020/1-rial", "b"),
        alt: altInfo("1", "Rial", "Rial", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Rial", "Rial"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1441 (2020)",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "156 \u00D7 75 mm",
    }
);
//#endregion