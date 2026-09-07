const translations = {
    heading: {
        en: "Syria",
        vi: "Syria"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/syria/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Syrian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Syria` 
});
const issuer = { en: "Central Bank Of Syria", vi: "Ngân Hàng Trung Ương Syria" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 pound
images.push([
    {
        src: imagePath("1997-1998/100-pound", "f"),
        alt: altInfo("100", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1997-1998/100-pound", "b"),
        alt: altInfo("100", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "155 \u00D7 75 mm",
    }
);
//#endregion

//#region 2 - 200 pound
images.push([
    {
        src: imagePath("1997-1998/200-pound", "f"),
        alt: altInfo("200", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1997-1998/200-pound", "b"),
        alt: altInfo("200", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("200", "200", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "160 \u00D7 75 mm",
    }
);
//#endregion