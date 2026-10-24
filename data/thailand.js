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
const comType = { en: "Commemorative Banknote", vi: "Tiền Kỷ Niệm" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "15 | 14 13 12 11 | 10 | 9 | 8 | 7 6 | 5 | 4 | 3 | 2 | 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 60 baht
images.push([
    {
        src: imagePath("1987/60-baht", "f"),
        alt: altInfo("60", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1987/60-baht", "b"),
        alt: altInfo("60", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("60", "60", "Baht", "Baht",),
        subtitle: {
            en: "King Bhumibol's 60th Birthday",
            vi: "Lễ Mừng Thọ 60 Tuổi Của Đức Vua Bhumibol"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comType.en, 
            vi: comType.vi 
        },
        figure: { 
            en: "Rama IX (1927-2016)", 
            vi: "Rama IX (1927-2016)" 
        },
        size: "159 \u00D7 159 mm",
        reference: refLink("P-93", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0093.htm"),
        new: true,
    }
);
//#endregion

//#region 2 - 20 baht
images.push([
    {
        src: imagePath("2003/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2003/20-baht", "b"),
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
        reference: refLink("P-109(4)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0109.htm#109-4"),
    }
);
//#endregion

//#region 3 - 100 baht 2
images.push([
    {
        src: imagePath("2004-2005/100-baht-2", "f"),
        alt: altInfo("100", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2004-2005/100-baht-2", "b"),
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
        reference: refLink("P-114(5)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0114.htm#114-5"),
    }
);
//#endregion

//#region 4 - 60 baht
images.push([
    {
        src: imagePath("2006/60-baht", "f"),
        alt: altInfo("60", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2006/60-baht", "b"),
        alt: altInfo("60", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("60", "60", "Baht", "Baht",),
        subtitle: {
            en: "60th Anniversary Of King Bhumbol's Accession To Throne",
            vi: "Đại Lễ Bạch Kim 60 Năm Trị Vì Của Nhà Vua Bhumibol"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comType.en, 
            vi: comType.vi 
        },
        figure:{ 
            en: "Rama IX (1927-2016)", 
            vi: "Rama IX (1927-2016)"
        },
        size: "162 \u00D7 81 mm",
        reference: refLink("P-116", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0116.htm"),
        new: true,
    }
);
//#endregion

//#region 5 - 16 baht
images.push([
    {
        src: imagePath("2007/16-baht", "f"),
        alt: altInfo("16", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2007/16-baht", "b"),
        alt: altInfo("16", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("16", "16", "Baht", "Baht",),
        subtitle: {
            en: "King Bhumibol's 80th Birthday",
            vi: "Lễ Mừng Thọ 80 Tuổi Của Đức Vua Bhumibol"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comType.en, 
            vi: comType.vi 
        },
        figure: { 
            en: "Rama IX (1927-2016)", 
            vi: "Rama IX (1927-2016)"
        },
        size: "229 \u00D7 147 mm",
        reference: refLink("P-117", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0117.htm"),
        special: {
            en: "The most unique banknotes (3 in 1)",
            vi: "Tờ tiền độc nhất (3 trong 1)"
        },
        new: true,
    }
);
//#endregion

//#region 6 - 20 baht
images.push([
    {
        src: imagePath("2010-2017/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010-2017/20-baht", "b"),
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
        reference: refLink("P-118(1)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0118.htm"),
    }
);
//#endregion

//#region 7 - 50 baht
images.push([
    {
        src: imagePath("2010-2017/50-baht", "f"),
        alt: altInfo("50", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010-2017/50-baht", "b"),
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
        reference: refLink("P-119(3)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0119.htm#119-3"),
    }
);
//#endregion

//#region 8 - 80 baht
images.push([
    {
        src: imagePath("2012/80-baht", "f"),
        alt: altInfo("80", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2012/80-baht", "b"),
        alt: altInfo("80", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("80", "80", "Baht", "Baht",),
        subtitle: {
            en: "Queen Sirikit's 80th Birthday",
            vi: "Lễ Mừng Thọ 80 Tuổi Của Hoàng hậu Sirikit"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comType.en, 
            vi: comType.vi 
        },
        figure: { 
            en: "Rama IX (1927-2016), Sirikit (1932-2025)", 
            vi: "Rama IX (1927-2016), Sirikit (1932-2025)"
        },
        size: "162 \u00D7 80 mm",
        reference: refLink("P-125", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0125.htm"),
        new: true,
    }
);
//#endregion

//#region 9 - 70 baht
images.push([
    {
        src: imagePath("2016/70-baht", "f"),
        alt: altInfo("70", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2016/70-baht", "b"),
        alt: altInfo("70", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("70", "70", "Baht", "Baht",),
        subtitle: {
            en: "70th Anniversary Of King Bhumbol's Accession To Throne",
            vi: "Đại Lễ Bạch Kim 70 Năm Trị Vì Của Nhà Vua Bhumibol"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comType.en, 
            vi: comType.vi 
        },
        figure: { 
            en: "Rama IX (1927-2016), Sirikit (1932-2025)", 
            vi: "Rama IX (1927-2016), Sirikit (1932-2025)"
        },
        size: "162 \u00D7 80 mm",
        reference: refLink("P-125", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0125.htm"),
        new: true,
    }
);
//#endregion

//#region 10 - 20 baht
images.push([
    {
        src: imagePath("2017/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/20-baht", "b"),
        alt: altInfo("20", "Baht", "Baht", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Baht", "Baht"),
        subtitle: {
            en: "King Bhumibol Adulyadej Lifetime (1927-2016)",
            vi: "Cuộc Đời Quốc Vương Bhumibol Adulyadej (1927-2016)"
        },
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
        reference: refLink("P-130", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0130.htm"),
    }
);
//#endregion

//#region 11 - 20 baht
images.push([
    {
        src: imagePath("2018/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/20-baht", "b"),
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
        reference: refLink("P-135b(1-3)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0135.htm#135b13"),
    }
);
//#endregion

//#region 12 - 50 baht
images.push([
    {
        src: imagePath("2018/50-baht", "f"),
        alt: altInfo("50", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/50-baht", "b"),
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
        reference: refLink("P-136b(1-2)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0136.htm#136b12"),
    }
);
//#endregion

//#region 13 - 100 baht
images.push([
    {
        src: imagePath("2018/100-baht", "f"),
        alt: altInfo("100", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/100-baht", "b"),
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
        reference: refLink("P-137b(5)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0137.htm#137b5"),
    }
);
//#endregion

//#region 14 - 1000 baht
images.push([
    {
        src: imagePath("2018/1000-baht", "f"),
        alt: altInfo("1000", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/1000-baht", "b"),
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
        reference: refLink("P-139(3)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THL0139.htm#139-3"),
    }
);
//#endregion

//#region 15 - 20 baht
images.push([
    {
        src: imagePath("2022/20-baht", "f"),
        alt: altInfo("20", "Baht", "Baht", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2022/20-baht", "b"),
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
        reference: refLink("P-W145(1-2)", "https://banknote.ws/COLLECTION/countries/ASI/THL/THLW0145.htm#145-1-2"),
    }
);
//#endregion