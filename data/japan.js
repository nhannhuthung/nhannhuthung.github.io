const translations = {
    heading: {
        en: "Japan",
        vi: "Nhật Bản"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/japan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Japanese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Nhật Bản` 
});
const issuer = { en: "Bank of Japan", vi: "Ngân Hàng Nhật Bản" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "7 6 5 | 4 3 2 | 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 2000 yen
images.push([
    {
        src: imagePath("2000/2000-yen", "f"),
        alt: altInfo("2000", "Yen", "Yên", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2000/2000-yen", "b"),
        alt: altInfo("2000", "Yen", "Yên", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Yen", "Yên"),
        subtitle: {
            en: "End of 2nd Millennium & G-8 Economic Summit in Okinawa",
            vi: "Sự kiện kết thúc Thiên niên kỷ thứ 2 & Hội nghị Thượng đỉnh Kinh tế G-8 tại Okinawa"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comInType.en, 
            vi: comInType.vi 
        },
        size: "154 \u00D7 76 mm",
        reference: refLink("P-103b", "http://www.banknote.ws/COLLECTION/countries/ASI/JAP/JAP0103.htm#103b"),
    }
);
//#endregion

//#region 2 - 1000 yen
images.push([
    {
        src: imagePath("2004/1000-yen", "f"),
        alt: altInfo("1000", "Yen", "Yên", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/1000-yen", "b"),
        alt: altInfo("1000", "Yen", "Yên", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Yen", "Yên"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Hideyo Noguchi (1876-1928)", 
            vi: "Noguchi Hideyo (1876-1928)" 
        },
        size: "150 \u00D7 76 mm",
        reference: refLink("P-104b", "http://www.banknote.ws/COLLECTION/countries/ASI/JAP/JAP0104.htm#104b"),
    }
);
//#endregion

//#region 3 - 5000 yen
images.push([
    {
        src: imagePath("2004/5000-yen", "f"),
        alt: altInfo("5000", "Yen", "Yên", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/5000-yen", "b"),
        alt: altInfo("5000", "Yen", "Yên", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Yen", "Yên"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ichiyō Higuchi (1872-1896)", 
            vi: "Higuchi Ichiyō (1872-1896)" 
        },
        size: "156 \u00D7 76 mm",
        reference: refLink("P-105d", "http://www.banknote.ws/COLLECTION/countries/ASI/JAP/JAP0105.htm#105d"),
    }
);
//#endregion

//#region 4 - 10000 yen
images.push([
    {
        src: imagePath("2004/10000-yen", "f"),
        alt: altInfo("10000", "Yen", "Yên", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004/10000-yen", "b"),
        alt: altInfo("10000", "Yen", "Yên", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Yen", "Yên"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Yukichi Fukuzawa (1835-1901)", 
            vi: "Fukuzawa Yukichi (1835-1901)" 
        },
        size: "160 \u00D7 76 mm",
        reference: refLink("P-106d", "http://www.banknote.ws/COLLECTION/countries/ASI/JAP/JAP0106.htm#106d"),
    }
);
//#endregion

//#region 5 - 1000 yen
images.push([
    {
        src: imagePath("2024/1000-yen", "f"),
        alt: altInfo("1000", "Yen", "Yên", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2024/1000-yen", "b"),
        alt: altInfo("1000", "Yen", "Yên", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Yen", "Yên"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Shibasaburō Kitasato (1853-1931)", 
            vi: "Kitasato Shibasaburō (1853-1931)" 
        },
        size: "150 \u00D7 76 mm",
        reference: refLink("P-W107", "http://www.banknote.ws/COLLECTION/countries/ASI/JAP/JAPW0107.htm"),
        note: { 
            en: `2024\'s top 21 banknotes by ${ibnsLink}`, 
            vi: `Top 21 tờ tiền năm 2024 theo ${ibnsLink}`
        },
    }
);
//#endregion

//#region 6 - 5000 yen
images.push([
    {
        src: imagePath("2024/5000-yen", "f"),
        alt: altInfo("5000", "Yen", "Yên", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2024/5000-yen", "b"),
        alt: altInfo("5000", "Yen", "Yên", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Yen", "Yên"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Umeko Tsuda (1864-1929)", 
            vi: "Tsuda Umeko (1864-1929)" 
        },
        size: "156 \u00D7 76 mm",
        reference: refLink("P-W108", "http://www.banknote.ws/COLLECTION/countries/ASI/JAP/JAPW0108.htm"),
    }
);
//#endregion

//#region 7 - 10000 yen
images.push([
    {
        src: imagePath("2024/10000-yen", "f"),
        alt: altInfo("10000", "Yen", "Yên", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2024/10000-yen", "b"),
        alt: altInfo("10000", "Yen", "Yên", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Yen", "Yên"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Eiichi Shibusawa (1840-1931)", 
            vi: "Shibusawa Eiichi (1840-1931)" 
        },
        size: "160 \u00D7 76 mm",
        reference: refLink("P-W109", "http://www.banknote.ws/COLLECTION/countries/ASI/JAP/JAPW0109.htm"),
    }
);
//#endregion