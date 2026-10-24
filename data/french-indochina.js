const translations = {
    heading: {
        en: "Indochinese Union",
        vi: "Liên Bang Đông Dương"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/french-indochina/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Indochinese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Liên Bang Đông Dương` 
});
const issuer1   = { en: "Bank of Indochina", vi: "Ngân Hàng Đông Dương" };
const issuer2   = { en: "General Government of Indochina", vi: "Đông Dương Tổng Thống Toàn Quyền Đại Thần" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "4 | 3 | 2 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 piastre
images.push([
    {
        src: imagePath("1932/1-piastre", "f"),
        alt: altInfo("1", "Piastre", "Đồng Vàng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1932/1-piastre", "b"),
        alt: altInfo("1", "Piastre", "Đồng Vàng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Piastre", "Đồng Vàng"),
        issuer: { 
            en: issuer1.en, 
            vi: issuer1.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "127 \u00D7 80 mm",
        reference: refLink("P-54c", "http://www.banknote.ws/COLLECTION/countries/ASI/FIC/FIC0054.htm#54c"),
    }
);
//#endregion

//#region 2 - 5 piastre
images.push([
    {
        src: imagePath("1932/5-piastre", "f"),
        alt: altInfo("5", "Piastres", "Đồng Vàng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1932/5-piastre", "b"),
        alt: altInfo("5", "Piastres", "Đồng Vàng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Piastres", "Đồng Vàng"),
        issuer: { 
            en: issuer1.en, 
            vi: issuer1.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "140 \u00D7 91 mm",
        reference: refLink("P-55d", "http://www.banknote.ws/COLLECTION/countries/ASI/FIC/FIC0055.htm#55d"),
    }
);
//#endregion

//#region 3 - 50 cent
images.push([
    {
        src: imagePath("1939/50-cent", "f"),
        alt: altInfo("50", "Cents", "Xu", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1939/50-cent", "b"),
        alt: altInfo("50", "Cents", "Xu", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Cents", "Xu"),
        issuer: { 
            en: issuer2.en, 
            vi: issuer2.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "104 \u00D7 70 mm",
        reference: refLink("P-87d", "http://www.banknote.ws/COLLECTION/countries/ASI/FIC/FIC0087.htm#87d"),
    }
);
//#endregion

//#region 4 - 10 cent
images.push([
    {
        src: imagePath("1942/10-cent", "f"),
        alt: altInfo("10", "Cents", "Xu", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1942/10-cent", "b"),
        alt: altInfo("10", "Cents", "Xu", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Cents", "Xu"),
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "75 \u00D7 49 mm",
        reference: refLink("P-89a", "http://www.banknote.ws/COLLECTION/countries/ASI/FIC/FIC0089.htm"),
    }
);
//#endregion