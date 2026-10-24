const translations = {
    heading: {
        en: "North Macedonia",
        vi: "Bắc Macedonia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/north-macedonia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Macedonian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Macedonia` 
});
const issuer   = { en: "National Bank Of The Republic Of Macedonia", vi: "Ngân Hàng Quốc Gia Cộng Hòa Macedonia" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 40 franc
images.push([
    {
        src: imagePath("1996-2018/10-denar", "f"),
        alt: altInfo("10", "Denars", "Denar", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1996-2018/10-denar", "b"),
        alt: altInfo("10", "Denars", "Denar", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Denars", "Denar"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1997",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 70 mm",
        reference: refLink("P-14b", "https://banknote.ws/COLLECTION/countries/EUR/MCD/MCD0014.htm#14b"),
        new: true,
    }
);
//#endregion