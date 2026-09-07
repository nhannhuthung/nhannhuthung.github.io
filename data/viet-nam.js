const translations = {
    heading: {
        en: "Viet Nam",
        vi: "Việt Nam"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/viet-nam/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Vietnamese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Việt Nam` 
});
const issuer   = { en: "State Bank Of Vietnam", vi: "Ngân Hàng Nhà Nước Việt Nam" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
const comType = { en: "Commemorative Banknote", vi: "Tiền Kỷ Niệm" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 dong
images.push([
    {
        src: imagePath("1946/5-dong", "f"),
        alt: altInfo("5", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1946/5-dong", "b"),
        alt: altInfo("5", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dong", "Đồng"),
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "128 \u00D7 86 mm",
        new: true,
    }
);
//#endregion

//#region 2 - 1 dong
images.push([
    {
        src: imagePath("1947/1-dong", "f"),
        alt: altInfo("1", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1947/1-dong", "b"),
        alt: altInfo("1", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Dong", "Đồng"),
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "112 \u00D7 61 mm",
        new: true,
    }
);
//#endregion

//#region 3 - 5 dong
images.push([
    {
        src: imagePath("1947/5-dong", "f"),
        alt: altInfo("5", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1947/5-dong", "b"),
        alt: altInfo("5", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dong", "Đồng"),
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "64 \u00D7 129 mm",
        new: true,
    }
);
//#endregion

//#region 4 - 5 dong
images.push([
    {
        src: imagePath("1948/5-dong-2", "f"),
        alt: altInfo("5", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1948/5-dong-2", "b"),
        alt: altInfo("5", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dong", "Đồng"),
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "118 \u00D7 59 mm",
        new: true,
    }
);
//#endregion

//#region 5 - 5 hao
images.push([
    {
        src: imagePath("1976/5-hao", "f"),
        alt: altInfo("5", "Haos", "Hào", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1976/5-hao", "b"),
        alt: altInfo("5", "Haos", "Hào", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Haos", "Hào"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "107 \u00D7 53 mm",
        new: true,
    }
);
//#endregion

//#region 6 - 1 dong
images.push([
    {
        src: imagePath("1976/1-dong", "f"),
        alt: altInfo("1", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1976/1-dong", "b"),
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
        size: "113 \u00D7 57 mm",
        new: true,
    }
);
//#endregion

//#region 7 - 5 dong
images.push([
    {
        src: imagePath("1976/5-dong", "f"),
        alt: altInfo("5", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1976/5-dong", "b"),
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
        size: "123 \u00D7 62 mm",
        new: true,
    }
);
//#endregion

//#region 8 - 2 dong
images.push([
    {
        src: imagePath("1980-1981/2-dong", "f"),
        alt: altInfo("2", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1980-1981/2-dong", "b"),
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
        size: "116 \u00D7 58 mm",
        new: true,
    }
);
//#endregion

//#region 9 - 10 dong
images.push([
    {
        src: imagePath("1980-1981/10-dong", "f"),
        alt: altInfo("10", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1980-1981/10-dong", "b"),
        alt: altInfo("10", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "123 \u00D7 63 mm",
        new: true,
    }
);
//#endregion

//#region 10 - 30 dong
images.push([
    {
        src: imagePath("1980-1981/30-dong", "f"),
        alt: altInfo("30", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1980-1981/30-dong", "b"),
        alt: altInfo("30", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("30", "30", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "139 \u00D7 70 mm",
        new: true,
    }
);
//#endregion

//#region 11 - 5 hao
images.push([
    {
        src: imagePath("1985/5-hao", "f"),
        alt: altInfo("5", "Haos", "Hào", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/5-hao", "b"),
        alt: altInfo("5", "Haos", "Hào", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Haos", "Hào"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
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

//#region 12 - 1 dong
images.push([
    {
        src: imagePath("1985/1-dong", "f"),
        alt: altInfo("1", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/1-dong", "b"),
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
        size: "114 \u00D7 57 mm",
        new: true,
    }
);
//#endregion

//#region 13 - 2 dong
images.push([
    {
        src: imagePath("1985/2-dong", "f"),
        alt: altInfo("2", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/2-dong", "b"),
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
        size: "110 \u00D7 56 mm",
        new: true,
    }
);
//#endregion

//#region 14 - 5 dong
images.push([
    {
        src: imagePath("1985/5-dong", "f"),
        alt: altInfo("5", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/5-dong", "b"),
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
        size: "127 \u00D7 63 mm",
        new: true,
    }
);
//#endregion

//#region 15 - 10 dong
images.push([
    {
        src: imagePath("1985/10-dong", "f"),
        alt: altInfo("10", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/10-dong", "b"),
        alt: altInfo("10", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "125 \u00D7 64 mm",
        new: true,
    }
);
//#endregion

//#region 16 - 20 dong
images.push([
    {
        src: imagePath("1985/20-dong", "f"),
        alt: altInfo("20", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/20-dong", "b"),
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
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "124 \u00D7 63 mm",
        new: true,
    }
);
//#endregion

//#region 17 - 50 dong
images.push([
    {
        src: imagePath("1985/50-dong-2", "f"),
        alt: altInfo("50", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/50-dong-2", "b"),
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
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "150 \u00D7 75 mm",
        new: true,
    }
);
//#endregion

//#region 18 - 100 dong
images.push([
    {
        src: imagePath("1985/100-dong", "f"),
        alt: altInfo("100", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1985/100-dong", "b"),
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
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "158 \u00D7 78 mm",
        new: true,
    }
);
//#endregion

//#region 19 - 200 dong
images.push([
    {
        src: imagePath("1987-1988/200-dong", "f"),
        alt: altInfo("200", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1987-1988/200-dong", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "130 \u00D7 65 mm",
    }
);
//#endregion

//#region 20 - 500 dong
images.push([
    {
        src: imagePath("1987-1988/500-dong", "f"),
        alt: altInfo("500", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1987-1988/500-dong", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "130 \u00D7 65 mm",
    }
);
//#endregion

//#region 21 - 1000 dong
images.push([
    {
        src: imagePath("1988-1991/1000-dong", "f"),
        alt: altInfo("1000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1988-1991/1000-dong", "b"),
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
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "134 \u00D7 65 mm",
    }
);
//#endregion

//#region 22 - 2000 dong
images.push([
    {
        src: imagePath("1988-1991/2000-dong", "f"),
        alt: altInfo("2000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1988-1991/2000-dong", "b"),
        alt: altInfo("2000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2,000", "2.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "134 \u00D7 65 mm",
    }
);
//#endregion

//#region 23 - 5000 dong
images.push([
    {
        src: imagePath("1988-1991/5000-dong", "f"),
        alt: altInfo("5000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1988-1991/5000-dong", "b"),
        alt: altInfo("5000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5,000", "5.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "134 \u00D7 65 mm",
    }
);
//#endregion

//#region 24 - 10000 dong
images.push([
    {
        src: imagePath("1993-1994/10000-dong", "f"),
        alt: altInfo("10000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1993-1994/10000-dong", "b"),
        alt: altInfo("10000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "140 \u00D7 68 mm",
        note: { 
            en: "The queen of Vietnamese banknotes", 
            vi: "Hoa hậu tiền giấy Việt Nam"
        },
        new: true,
    }
);
//#endregion

//#region 25 - 10000 dong
images.push([
    {
        src: imagePath("2003/10000-dong", "f"),
        alt: altInfo("10000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/10000-dong", "b"),
        alt: altInfo("10000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10,000", "10.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "132 \u00D7 60 mm",
    }
);
//#endregion

//#region 26 - 20000 dong
images.push([
    {
        src: imagePath("2003/20000-dong", "f"),
        alt: altInfo("20000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/20000-dong", "b"),
        alt: altInfo("20000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20,000", "20.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "138 \u00D7 66 mm",
    }
);
//#endregion

//#region 27 - 50000 dong
images.push([
    {
        src: imagePath("2003/50000-dong", "f"),
        alt: altInfo("50000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/50000-dong", "b"),
        alt: altInfo("50000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50,000", "50.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "142 \u00D7 66 mm",
        new: true,
    }
);
//#endregion

//#region 28 - 100000 dong
images.push([
    {
        src: imagePath("2003/100000-dong", "f"),
        alt: altInfo("100000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/100000-dong", "b"),
        alt: altInfo("100000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100,000", "100.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "144 \u00D7 66 mm",
        new: true,
    }
);
//#endregion

//#region 29 - 200000 dong
images.push([
    {
        src: imagePath("2003/200000-dong", "f"),
        alt: altInfo("200000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/200000-dong", "b"),
        alt: altInfo("200000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200,000", "200.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "148 \u00D7 66 mm",
        note: {
            en: `2006\'s top 15 banknotes by ${ibnsLink}`,
            vi: `Top 15 tờ tiền của năm 2006 theo ${ibnsLink}`
        },
        new: true,
    }
);
//#endregion

//#region 30 - 500000 dong
images.push([
    {
        src: imagePath("2003/500000-dong", "f"),
        alt: altInfo("500000", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/500000-dong", "b"),
        alt: altInfo("500000", "Dong", "Đồng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("500,000", "500.000", "Dong", "Đồng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "152 \u00D7 66 mm",
        new: true,
    }
);
//#endregion

//#region 31 - 100 dong
images.push([
    {
        src: imagePath("2016/100-dong", "f"),
        alt: altInfo("100", "Dong", "Đồng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/100-dong", "b"),
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
        year: 2016,
        type: { 
            en: comType.en, 
            vi: comType.vi 
        },
        figure: { 
            en: "Ho Chi Minh (1890-1969)", 
            vi: "Hồ Chí Minh (1890-1969)" 
        },
        size: "163 \u00D7 83 mm",
    }
);
//#endregion