const translations = {
    heading: {
        en: "South Korea",
        vi: "Hàn Quốc"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/south-korea/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Korean ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Hàn Quốc` 
});
const issuer = { en: "Bank Of Korea", vi: "Ngân Hàng Hàn Quốc" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" }

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1000 won
images.push([
    {
        src: imagePath("2006/1000-won", "f"),
        alt: altInfo("1000", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2006/1000-won", "b"),
        alt: altInfo("1000", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1.000", "1,000", "Won ", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Yi Hwang (1501-1570)", 
            vi: "Lý Hoảng (1501-1570)" 
        },
        size: "136 \u00D7 68 mm",
    }
);
//#endregion

//#region 2 - 5000 won
images.push([
    {
        src: imagePath("2006/5000-won", "f"),
        alt: altInfo("5000", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2006/5000-won", "b"),
        alt: altInfo("5000", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5.000", "5,000", "Won ", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Yi I (1536-1584)", 
            vi: "Lý Nhị (1536-1584)" 
        },
        size: "142 \u00D7 68 mm",
    }
);
//#endregion

//#region 3 - 10000 won
images.push([
    {
        src: imagePath("2006/10000-won", "f"),
        alt: altInfo("10000", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2006/10000-won", "b"),
        alt: altInfo("10000", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10.000", "10,000", "Won ", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Sejong the Great (1397-1450)", 
            vi: "Triều Tiên Thế Tông (1397-1450)" 
        },
        size: "148 \u00D7 68 mm",
    }
);
//#endregion

//#region 4 - 50000 won
images.push([
    {
        src: imagePath("2006/50000-won", "f"),
        alt: altInfo("50000", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2006/50000-won", "b"),
        alt: altInfo("50000", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50.000", "50,000", "Won ", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Shin Saimdang (1504-1551)", 
            vi: "Thân Sư Nhâm Đường (1504-1551)" 
        },
        size: "154 \u00D7 68 mm",
        note: { 
            en: `2009\'s top 9 banknotes by ${ibnsLink}`, 
            vi: `Top 9 tờ tiền năm 2009 theo ${ibnsLink}` 
        },
    }
);
//#endregion

//#region 5 - 2000 won
images.push([
    {
        src: imagePath("2018/2000-won", "f"),
        alt: altInfo("2000", "Won", "Won", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/2000-won", "b"),
        alt: altInfo("2000", "Won", "Won", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2.000", "2,000", "Won ", "Won"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 75 mm",
    }
);
//#endregion