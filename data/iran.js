const translations = {
    heading: {
        en: "Iran",
        vi: "Iran"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/iran/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Iranian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Iran` 
});
const issuer = { en: "Central Bank Of The Islamic Republic Of Iran", vi : "Ngân Hàng Trung Ương Cộng Hòa Hồi Giáo Iran" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5000 rial
images.push([
    {
        src: imagePath("1992-2019/5000-rial", "f"),
        alt: altInfo("5000", "Rials", "Rial", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992-2019/5000-rial", "b"),
        alt: altInfo("5000", "Rials", "Rial", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Rials", "Rial"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ruhollah Khomeini ((1900/1902)?-1989)", 
            vi: "Ruhollah Khomeini ((1900/1902)?-1989)" 
        },
        size: "154 \u00D7 75 mm",
    }
);
//#endregion

//#region 2 - 10000 rial
images.push([
    {
        src: imagePath("1992-2019/10000-rial", "f"),
        alt: altInfo("10000", "Rials", "Rial", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992-2019/10000-rial", "b"),
        alt: altInfo("10000", "Rials", "Rial", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Rials", "Rial"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ruhollah Khomeini ((1900/1902)?-1989)", 
            vi: "Ruhollah Khomeini ((1900/1902)?-1989)" 
        },
        size: "160 \u00D7 77 mm",
    }
);
//#endregion

//#region 3 - 50000 rial
images.push([
    {
        src: imagePath("1992-2019/50000-rial", "f"),
        alt: altInfo("50000", "Rials", "Rial", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992-2019/50000-rial", "b"),
        alt: altInfo("50000", "Rials", "Rial", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50,000", "50.000", "Rials", "Rial"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ruhollah Khomeini ((1900/1902)?-1989)", 
            vi: "Ruhollah Khomeini ((1900/1902)?-1989)" 
        },
        size: "166 \u00D7 79 mm",
    }
);
//#endregion

//#region 4 - 100000 rial
images.push([
    {
        src: imagePath("1992-2019/100000-rial", "f"),
        alt: altInfo("100000", "Rials", "Rial", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1992-2019/100000-rial", "b"),
        alt: altInfo("100000", "Rials", "Rial", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100,000", "100.000", "Rials", "Rial"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ruhollah Khomeini ((1900/1902)?-1989)", 
            vi: "Ruhollah Khomeini ((1900/1902)?-1989)" 
        },
        size: "166 \u00D7 79 mm",
    }
);
//#endregion

//#region 5 - 500000 rial
images.push([
    {
        src: imagePath("2014/500000-rial", "f"),
        alt: altInfo("500000", "Rials", "Rial", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2014/500000-rial", "b"),
        alt: altInfo("500000", "Rials", "Rial", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500,000", "500.000", "Rials", "Rial"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "142 \u00D7 71 mm",
    }
);
//#endregion