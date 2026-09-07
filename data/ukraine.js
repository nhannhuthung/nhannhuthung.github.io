const translations = {
    heading: {
        en: "Ukraine",
        vi: "Ukraine"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/ukraine/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Ukrainian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ukraine` 
});
const issuer = {  en: "National Bank of Ukraine", vi: "Ngân Hàng Quốc Gia Ukraine" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 hryvnia
images.push([
    {
        src: imagePath("3/1-hryvnia", "f"),
        alt: altInfo("1", "Hryvnia", "Hryvnia", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("3/1-hryvnia", "b"),
        alt: altInfo("1", "Hryvnia", "Hryvnia", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Hryvnia", "Hryvnia"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2014",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure:  { 
            en: "Volodymyr I Sviatoslavych (958?-1015)", 
            vi: "Volodymyr I Sviatoslavych (958?-1015)"
        },
        size: "118 \u00D7 63 mm",
    }
);
//#endregion