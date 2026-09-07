const translations = {
    heading: {
        en: "Philippines",
        vi: "Philippines"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/philippines/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Filipino ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Philippines` 
});
const issuer   = { en: "Central Bank of the Philippines", vi: "Ngân Hàng Trung Ương Philippines" };
const standardType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 peso
images.push([
    {
        src: imagePath("2010-2020/20-peso", "f"),
        alt: altInfo("20", "Pesos", "Peso", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2010-2020/20-peso", "b"),
        alt: altInfo("20", "Pesos", "Peso", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Pesos", "Peso"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standardType.en, 
            vi: standardType.vi 
        },
        figure: {
            en: "Manuel L. Quezon (1935-1944)",
            vi: "Manuel L. Quezon (1935-1944)"
        },
        size: "160 \u00D7 66 mm",
        new: true,
    }
);
//#endregion