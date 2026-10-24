const translations = {
    heading: {
        en: "Turkmenistan",
        vi: "Turkmenistan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/turkmenistan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Turkmen ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Turkmenistan` 
});
const issuer = { en: "Central Bank Of Turkmenistan", vi: "Ngân Hàng Trung Ương Turkmenistan" };
const standComInType = { en: "Circulating Standard/Commemorative Banknote", vi: "Tiền Tiêu Chuẩn/Kỷ Niệm Còn Đang Lưu Hành" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "3 | 2 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 manat
images.push([
    {
        src: imagePath("2/2017/5-manat", "f"),
        alt: altInfo("5", "Manat", "Manat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2/2017/5-manat", "b"),
        alt: altInfo("5", "Manat", "Manat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Manat", "Manat"),
        subtitle: {
            en: "5th Asian Indoor And Martial Games Ashgabat 2017",
            vi: "Đại Hội Thể Thao Trong Nhà Và Võ Thuật Châu Á Lần Thứ 5 Ashgabat 2017"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standComInType.en, 
            vi: standComInType.vi 
        },
        figure: { 
            en: "Ahmad Sanjar (1086-1157)", 
            vi: "Ahmad Sanjar (1086-1157)" 
        },
        size: "126 \u00D7 63 mm",
        reference: refLink("P-37", "https://banknote.ws/COLLECTION/countries/ASI/TKM/TKM0037.htm"),
    }
);
//#endregion

//#region 2 - 10 manat
images.push([
    {
        src: imagePath("2/2017/10-manat", "f"),
        alt: altInfo("10", "Manat", "Manat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2/2017/10-manat", "b"),
        alt: altInfo("10", "Manat", "Manat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Manat", "Manat"),
        subtitle: {
            en: "5th Asian Indoor And Martial Games Ashgabat 2017",
            vi: "Đại Hội Thể Thao Trong Nhà Và Võ Thuật Châu Á Lần Thứ 5 Ashgabat 2017"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standComInType.en, 
            vi: standComInType.vi 
        },
        figure: { 
            en: "Magtymguly Pyragy (1724?-1807?)", 
            vi: "Magtymguly Pyragy (1724?-1807?)" 
        },
        size: "132 \u00D7 66 mm",
        reference: refLink("P-38", "https://banknote.ws/COLLECTION/countries/ASI/TKM/TKM0038.htm"),
    }
);
//#endregion

//#region 3 - 1 manat
images.push([
    {
        src: imagePath("2/2020/1-manat", "f"),
        alt: altInfo("1", "Manat", "Manat", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2/2020/1-manat", "b"),
        alt: altInfo("1", "Manat", "Manat", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Manat", "Manat"),
        subtitle: {
            en: "25th Anniversary Of Neutrality",
            vi: "Kỷ Niệm 25 Năm Ngày Công Bố Quy Chế Trung Lập"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standComInType.en, 
            vi: standComInType.vi 
        },
        figure: { 
            en: "Tughril I (993?-1063)", 
            vi: "Tughril I (993?-1063)" 
        },
        size: "120 \u00D7 60 mm",
        reference: refLink("P-W42", "https://banknote.ws/COLLECTION/countries/ASI/TKM/TKMW2020-001.htm"),
    }
);
//#endregion