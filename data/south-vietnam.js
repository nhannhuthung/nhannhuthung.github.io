const translations = {
    heading: {
        en: "South Vietnam",
        vi: "Việt Nam Cộng Hòa"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/south-vietnam/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} South Vietnamese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Việt Nam Cộng Hòa` 
});
const issuer = { en: "National Bank of Vietnam", vi: "Ngân Hàng Quốc Gia Việt Nam" };
const issuer1975 = { en: "Bank of Vietnam", vi: "Ngân Hàng Việt Nam" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 dong
images.push([
    {
        src: imagePath("1955-1956/5-dong", "f"),
        alt: altInfo("5", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1955-1956/5-dong", "b"),
        alt: altInfo("5", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "134 \u00D7 84 mm",
        new: true,
    }
);
//#endregion

//#region 2 - 20 dong
images.push([
    {
        src: imagePath("1955-1956/20-dong", "f"),
        alt: altInfo("20", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1955-1956/20-dong", "b"),
        alt: altInfo("20", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "144 \u00D7 90 mm",
        new: true,
    }
);
//#endregion

//#region 3 - 1 dong
images.push([
    {
        src: imagePath("1955-1962/1-dong", "f"),
        alt: altInfo("1", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1955-1962/1-dong", "b"),
        alt: altInfo("1", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "110 \u00D7 65 mm",
        new: true,
    }
);
//#endregion

//#region 4 - 2 dong
images.push([
    {
        src: imagePath("1955-1962/2-dong", "f"),
        alt: altInfo("2", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1955-1962/2-dong", "b"),
        alt: altInfo("2", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "120 \u00D7 65 mm",
        new: true,
    }
);
//#endregion

//#region 5 - 500 dong
images.push([
    {
        src: imagePath("1955-1962/500-dong", "f"),
        alt: altInfo("500", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1955-1962/500-dong", "b"),
        alt: altInfo("500", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "165 \u00D7 92 mm",
        new: true,
    }
);
//#endregion

//#region 6 - 500 dong
images.push([
    {
        src: imagePath("1966/500-dong", "f"),
        alt: altInfo("500", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1966/500-dong", "b"),
        alt: altInfo("500", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Tran Hung Dao (1228?-1300)", 
            vi: "Trần Hưng Đạo (1228?-1300)" 
        },
        size: "150 \u00D7 74 mm",
        new: true,
    }
);
//#endregion

//#region 7 - 20 dong
images.push([
    {
        src: imagePath("1970/20-dong", "f"),
        alt: altInfo("20", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/20-dong", "b"),
        alt: altInfo("20", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "141 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 8 - 50 dong
images.push([
    {
        src: imagePath("1970/50-dong", "f"),
        alt: altInfo("50", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/50-dong", "b"),
        alt: altInfo("50", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "142 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 9 - 100 dong
images.push([
    {
        src: imagePath("1970/100-dong", "f"),
        alt: altInfo("100", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/100-dong", "b"),
        alt: altInfo("100", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "146 \u00D7 73 mm",
        new: true,
    }
);
//#endregion

//#region 10 - 500 dong
images.push([
    {
        src: imagePath("1970/500-dong", "f"),
        alt: altInfo("500", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/500-dong", "b"),
        alt: altInfo("500", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "150 \u00D7 75 mm",
        new: true,
    }
);
//#endregion

//#region 11 - 1000 dong
images.push([
    {
        src: imagePath("1970/1000-dong", "f"),
        alt: altInfo("1000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/1000-dong", "b"),
        alt: altInfo("1000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "153 \u00D7 76 mm",
        new: true,
    }
);
//#endregion

//#region 12 - 50 dong
images.push([
    {
        src: imagePath("1972/50-dong", "f"),
        alt: altInfo("50", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1972/50-dong", "b"),
        alt: altInfo("50", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "138 \u00D7 68 mm",
        new: true,
    }
);
//#endregion

//#region 13 - 100 dong
images.push([
    {
        src: imagePath("1972/100-dong", "f"),
        alt: altInfo("100", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1972/100-dong", "b"),
        alt: altInfo("100", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "146 \u00D7 73 mm",
        new: true,
    }
);
//#endregion

//#region 14 - 200 dong
images.push([
    {
        src: imagePath("1972/200-dong", "f"),
        alt: altInfo("200", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1972/200-dong", "b"),
        alt: altInfo("200", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "147 \u00D7 73 mm",
        new: true,
    }
);
//#endregion

//#region 15 - 500 dong
images.push([
    {
        src: imagePath("1972/500-dong", "f"),
        alt: altInfo("500", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1972/500-dong", "b"),
        alt: altInfo("500", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500", "500", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "152 \u00D7 76 mm",
        new: true,
    }
);
//#endregion

//#region 16 - 1000 dong
images.push([
    {
        src: imagePath("1972/1000-dong", "f"),
        alt: altInfo("1000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1972/1000-dong", "b"),
        alt: altInfo("1000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "152 \u00D7 76 mm",
        new: true,
    }
);
//#endregion

//#region 17 - 10 xu
images.push([
    {
        src: imagePath("1975/10-xu", "f"),
        alt: altInfo("10", "Xu", "Xu", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1975/10-xu", "b"),
        alt: altInfo("10", "Xu", "Xu", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Xu", "Xu"),
        issuer: { 
            en: issuer1975.en, 
            vi: issuer1975.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "100 \u00D7 50 mm",
        new: true,
    }
);
//#endregion