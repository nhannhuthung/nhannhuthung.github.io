const translations = {
    heading: {
        en: "Thailand",
        vi: "Thái Lan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/thailand/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Thai ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Thái Lan` 
});
const issuer = { en: "Bank Of Thailand", vi: "Ngân Hàng Thái Lan" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 baht
images.push([
    {
        src: imagePath("15/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("15/20-baht", "b"),
        alt: altInfo("20", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Baht", "Baht",),
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
                en: "Rama IX (1927-2016)", 
                vi: "Rama IX (1927-2016)" 
            },
            { 
                en: "Rama VIII (1925-1946)", 
                vi: "Rama VIII (1925-1946)"
            }
        ],
        size: "138 \u00D7 72 mm",
    }
);
//#endregion

//#region 2 - 100 baht 2
images.push([
    {
        src: imagePath("15/100-baht-2", "f"),
        alt: altInfo("100", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("15/100-baht-2", "b"),
        alt: altInfo("100", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Baht", "Baht",),
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
                en: "Rama IX (1927-2016)", 
                vi: "Rama IX (1927-2016)"
            },
            { 
                en: "Rama V (1853-1910)", 
                vi: "Rama V (1853-1910)"
            }
        ],
        size: "150 \u00D7 72 mm",
    }
);
//#endregion

//#region 3 - 20 baht
images.push([
    {
        src: imagePath("16/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("16/20-baht", "b"),
        alt: altInfo("20", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Baht", "Baht"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Rama IX (1927-2016)", 
            vi: "Rama IX (1927-2016)" 
        },
        size: "138 \u00D7 72 mm",
    }
);
//#endregion

//#region 4 - 50 baht
images.push([
    {
        src: imagePath("16/50-baht", "f"),
        alt: altInfo("50", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("16/50-baht", "b"),
        alt: altInfo("50", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Baht", "Baht"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Rama IX (1927-2016)", 
            vi: "Rama IX (1927-2016)" 
        },
        size: "144 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 5 - 20 baht
images.push([
    {
        src: imagePath("16-speical/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("16-speical/20-baht", "b"),
        alt: altInfo("20", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Baht", "Baht"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comInType.en, 
            vi: comInType.vi 
        },
        figure: { 
            en: "Rama IX (1927-2016)", 
            vi: "Rama IX (1927-2016)" 
        },
        size: "138 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 6 - 20 baht
images.push([
    {
        src: imagePath("17/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("17/20-baht", "b"),
        alt: altInfo("20", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Baht", "Baht"),
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
                en: "Rama X (1952-Present)", 
                vi: "Rama X (1952-Present)"
            },
            { 
                en: "Rama I (1737-1809), Rama II ((1767-1768)?-1824)", 
                vi: "Rama I (1737-1809), Rama II ((1767-1768)?-1824)"
            }
        ],
        size: "138 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 6 - 20 baht
images.push([
    {
        src: imagePath("17/50-baht", "f"),
        alt: altInfo("50", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("17/50-baht", "b"),
        alt: altInfo("50", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Baht", "Baht"),
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
                en: "Rama X (1952-Present)", 
                vi: "Rama X (1952-Present)"
            },
            { 
                en: "Rama III (1788-1851), Rama IV (1804-1868)", 
                vi: "Rama III (1788-1851), Rama IV (1804-1868)"
            }
        ],
        size: "138 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 7 - 100 baht
images.push([
    {
        src: imagePath("17/100-baht", "f"),
        alt: altInfo("100", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("17/100-baht", "b"),
        alt: altInfo("100", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Baht", "Baht"),
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
                en: "Rama X (1952-Present)", 
                vi: "Rama X (1952-Present)"
            },
            { 
                en: "Rama V (1853-1910), Rama VI (1880-1925)", 
                vi: "Rama V (1853-1910), Rama VI (1880-1925)"
            }
        ],
        size: "150 \u00D7 72 mm",
    }
);
//#endregion

//#region 8 - 1000 baht
images.push([
    {
        src: imagePath("17/1000-baht", "f"),
        alt: altInfo("1000", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("17/1000-baht", "b"),
        alt: altInfo("1000", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1,000", "1.000", "Baht", "Baht"),
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
                en: "Rama X (1952-Present)", 
                vi: "Rama X (1952-Present)" 
            },
            { 
                en: "Rama IX (1927-2016), Rama X (1952-Present)",
                vi: "Rama IX (1927-2016), Rama X (1952-Present)" 
            }
        ],
        size: "162 \u00D7 72 mm",
        new: true,
    }
);
//#endregion

//#region 9 - 20 baht plastic
images.push([
    {
        src: imagePath("17/20-baht-plastic", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("17/20-baht-plastic", "b"),
        alt: altInfo("20", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Baht", "Baht"),
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
                en: "Rama X (1952-Present)", 
                vi: "Rama X (1952-Present)"
            },
            { 
                en: "Rama I (1737-1809), Rama II ((1767-1768)?-1824)", 
                vi: "Rama I (1737-1809), Rama II ((1767-1768)?-1824)"
            }
        ],
        size: "138 \u00D7 72 mm",
        new: true,
    }
);
//#endregion