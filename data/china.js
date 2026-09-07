const translations = {
    heading: {
        en: "China",
        vi: "Trung Quốc"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/china/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Chinese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Trung Quốc` 
});
const issuer   = { en: "People's Bank Of China", vi: "Ngân Hàng Nhân Dân Trung Quốc" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 jiao
images.push([
    {
        src: imagePath("4/1-jiao", "f"),
        alt: altInfo("1", "Jiao", "Jiao", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("4/1-jiao", "b"),
        alt: altInfo("1", "Jiao", "Jiao", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Jiao", "Jiao"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "115 \u00D7 52 mm",
    }
);
//#endregion

//#region 2 - 5 jiao
images.push([
    {
        src: imagePath("4/5-jiao", "f"),
        alt: altInfo("5", "Jiao", "Jiao", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("4/5-jiao", "b"),
        alt: altInfo("5", "Jiao", "Jiao", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Jiao", "Jiao"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: {
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "125 \u00D7 58 mm",
        new: true,
    }
);
//#endregion

//#region 3 - 1 yuan
images.push([
    {
        src: imagePath("5.1/1-yuan", "f"),
        alt: altInfo("1", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.1/1-yuan", "b"),
        alt: altInfo("1", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1999",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "131 \u00D7 63 mm",
    }
);
//#endregion

//#region 4 - 5 yuan
images.push([
    {
        src: imagePath("5.2/5-yuan", "f"),
        alt: altInfo("5", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.2/5-yuan", "b"),
        alt: altInfo("5", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "135 \u00D7 63 mm",
    }
);
//#endregion

//#region 5 - 10 yuan
images.push([
    {
        src: imagePath("5.2/10-yuan", "f"),
        alt: altInfo("10", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.2/10-yuan", "b"),
        alt: altInfo("10", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "140 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 6 - 20 yuan
images.push([
    {
        src: imagePath("5.2/20-yuan", "f"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.2/20-yuan", "b"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "145 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 7 - 50 yuan
images.push([
    {
        src: imagePath("5.2/50-yuan", "f"),
        alt: altInfo("50", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.2/50-yuan", "b"),
        alt: altInfo("50", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
    }
);
//#endregion

//#region 8 - 100 yuan
images.push([
    {
        src: imagePath("5.2/100-yuan", "f"),
        alt: altInfo("100", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.2/100-yuan", "b"),
        alt: altInfo("100", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2005",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "155 \u00D7 77 mm",
        new: true,
    }
);
//#endregion

//#region 9 - 1 yuan
images.push([
    {
        src: imagePath("5.3/1-yuan", "f"),
        alt: altInfo("1", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.3/1-yuan", "b"),
        alt: altInfo("1", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Yuan", "Nhân Dân Tệ"),
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
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "131 \u00D7 63 mm",
        new: true,
    }
);
//#endregion

//#region 10 - 5 yuan
images.push([
    {
        src: imagePath("5.3/5-yuan", "f"),
        alt: altInfo("5", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.3/5-yuan", "b"),
        alt: altInfo("5", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2020",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "135 \u00D7 63 mm",
        new: true,
    }
);
//#endregion

//#region 11 - 10 yuan
images.push([
    {
        src: imagePath("5.3/10-yuan", "f"),
        alt: altInfo("10", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.3/10-yuan", "b"),
        alt: altInfo("10", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Yuan", "Nhân Dân Tệ"),
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
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "140 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 12 - 20 yuan
images.push([
    {
        src: imagePath("5.3/20-yuan", "f"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.3/20-yuan", "b"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Yuan", "Nhân Dân Tệ"),
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
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "145 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 13 - 50 yuan
images.push([
    {
        src: imagePath("5.3/50-yuan", "f"),
        alt: altInfo("50", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.3/50-yuan", "b"),
        alt: altInfo("50", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 14 - 100 yuan
images.push([
    {
        src: imagePath("5.3/100-yuan", "f"),
        alt: altInfo("100", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("5.3/100-yuan", "b"),
        alt: altInfo("100", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2015",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "155 \u00D7 77 mm",
        new: true,
    }
);
//#endregion

//#region 15 - 20 yuan
images.push([
    {
        src: imagePath("2022/20-yuan-paper", "f"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2022/20-yuan-paper", "b"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2022",
        type: {
            en: comInType.en, 
            vi: comInType.vi 
        },
        size: "70 \u00D7 145 mm",
    }
);
//#endregion

//#region 16 - 20 yuan
images.push([
    {
        src: imagePath("2022/20-yuan-plastic", "f"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2022/20-yuan-plastic", "b"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Yuan", "Nhân Dân Tệ"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2022",
        type: {
            en: comInType.en, 
            vi: comInType.vi 
        },
        size: "70 \u00D7 145 mm",
        note: { 
            en: `2021\'s top 20 banknotes by ${ibnsLink}`, 
            vi: `Top 20 tờ tiền năm 2021 theo ${ibnsLink}`
        },
    }
);
//#endregion