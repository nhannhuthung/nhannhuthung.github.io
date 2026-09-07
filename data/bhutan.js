const translations = {
    heading: {
        en: "Bhutan",
        vi: "Bhutan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/bhutan/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Bhutanese ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Bhutan` 
});
const issuer = { en: "Royal Monetary Authority Of Bhutan", vi: "Cơ Quan Tiền Tệ Hoàng Gia Bhutan" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 ngultrum
images.push([
    {
        src: imagePath("2006/1-ngultrum", "f"),
        alt: altInfo("1", "Ngultrum", "Ngultrum", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2006/1-ngultrum", "b"),
        alt: altInfo("1", "Ngultrum", "Ngultrum", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Ngultrum", "Ngultrum"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "120 \u00D7 60 mm",
    }
);
//#endregion