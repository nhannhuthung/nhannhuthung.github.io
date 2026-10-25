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

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "16 15 | 14 13 12 11 10 | 9 | 8 7 6 5 4 | 3 | 2 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 jiao
images.push([
    {
        src: imagePath("1980/1-jiao", "f"),
        alt: altInfo("1", "Jiao", "Jiao", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1980/1-jiao", "b"),
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
        reference: refLink("P-881b", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0881.htm#881b"),
    }
);
//#endregion

//#region 2 - 5 jiao
images.push([
    {
        src: imagePath("1980/5-jiao", "f"),
        alt: altInfo("5", "Jiao", "Jiao", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1980/5-jiao", "b"),
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
        reference: refLink("P-883b", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0883.htm#883b"),
    }
);
//#endregion

//#region 3 - 1 yuan
images.push([
    {
        src: imagePath("1999/1-yuan", "f"),
        alt: altInfo("1", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1999/1-yuan", "b"),
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
        reference: refLink("P-895a", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0895.htm"),
    }
);
//#endregion

//#region 4 - 5 yuan
images.push([
    {
        src: imagePath("2005/5-yuan", "f"),
        alt: altInfo("5", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/5-yuan", "b"),
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
        year: "1999",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "135 \u00D7 63 mm",
        reference: refLink("P-903a", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0903.htm"),
    }
);
//#endregion

//#region 5 - 10 yuan
images.push([
    {
        src: imagePath("2005/10-yuan", "f"),
        alt: altInfo("10", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/10-yuan", "b"),
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
        year: "1999",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "140 \u00D7 70 mm",
        reference: refLink("P-904a", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0904.htm"),
    }
);
//#endregion

//#region 6 - 20 yuan
images.push([
    {
        src: imagePath("2005/20-yuan", "f"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/20-yuan", "b"),
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
        year: "1999",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Mao Zedong (1893-1976)", 
            vi: "Mao Trạch Đông (1893-1976)" 
        },
        size: "145 \u00D7 70 mm",
        reference: refLink("P-905", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0905.htm"),
    }
);
//#endregion

//#region 7 - 50 yuan
images.push([
    {
        src: imagePath("2005/50-yuan", "f"),
        alt: altInfo("50", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/50-yuan", "b"),
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
        year: "1999",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "150 \u00D7 70 mm",
        reference: refLink("P-906", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0906.htm"),
    }
);
//#endregion

//#region 8 - 100 yuan
images.push([
    {
        src: imagePath("2005/100-yuan", "f"),
        alt: altInfo("100", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2005/100-yuan", "b"),
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
        year: "1999",
        type: {
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "155 \u00D7 77 mm",
        reference: refLink("P-907c", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0907.htm#907-3"),
    }
);
//#endregion

//#region 9 - 100 yuan
images.push([
    {
        src: imagePath("2015/100-yuan", "f"),
        alt: altInfo("100", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2015/100-yuan", "b"),
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
        reference: refLink("P-909(3)", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CIN0909.htm#909-3"),
    }
);
//#endregion

//#region 10 - 1 yuan
images.push([
    {
        src: imagePath("2019/1-yuan", "f"),
        alt: altInfo("1", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/1-yuan", "b"),
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
        reference: refLink("P-W912", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CINW2019-001.htm"),
    }
);
//#endregion

//#region 11 - 5 yuan
images.push([
    {
        src: imagePath("2019/5-yuan", "f"),
        alt: altInfo("5", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/5-yuan", "b"),
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
        reference: refLink("P-W913", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CINW2020-005.htm"),
    }
);
//#endregion

//#region 12 - 10 yuan
images.push([
    {
        src: imagePath("2019/10-yuan", "f"),
        alt: altInfo("10", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/10-yuan", "b"),
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
        reference: refLink("P-W914", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CINW2019-010.htm"),
    }
);
//#endregion

//#region 13 - 20 yuan
images.push([
    {
        src: imagePath("2019/20-yuan", "f"),
        alt: altInfo("20", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/20-yuan", "b"),
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
        reference: refLink("P-W915", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CINW2019-020.htm"),
    }
);
//#endregion

//#region 14 - 50 yuan
images.push([
    {
        src: imagePath("2019/50-yuan", "f"),
        alt: altInfo("50", "Yuan", "Nhân Dân Tệ", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2019/50-yuan", "b"),
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
        reference: refLink("P-W916", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CINW2019-050.htm"),
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
        subtitle: {
            en: "Olympic Winter Games Beijing 2022",
            vi: "Thế Vận Hội Mùa Đông Bắc Kinh 2022"
        },
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
        reference: refLink("P-W918", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CINW2022-020-1.htm"),
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
        subtitle: {
            en: "Olympic Winter Games Beijing 2022",
            vi: "Thế Vận Hội Mùa Đông Bắc Kinh 2022"
        },
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
        reference: refLink("P-W919", "https://banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PR/CINW2022-020-2.htm"),
        note: { 
            en: `2021\'s top 20 banknotes by ${ibnsLink}`, 
            vi: `Top 20 tờ tiền năm 2021 theo ${ibnsLink}`
        },
    }
);
//#endregion