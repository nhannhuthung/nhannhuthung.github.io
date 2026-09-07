const translations = {
    heading: {
        en: "United Arab Emirates",
        vi: "Các Tiểu Vương Quốc Ả Rập Thống Nhất"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/uae/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Emirati ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Các Tiểu Vương Quốc Ả Rập Thống Nhất` 
});
const issuer   = { en: "Central Bank of the United Arab Emirates", vi: "Ngân Hàng Trung Ương Các Tiểu Vương Quốc Ả Rập Thống Nhất" };
const standardType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 dirham
images.push([
    {
        src: imagePath("3/5-dirham", "f"),
        alt: altInfo("5", "Dirhams", "Dirham", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("3/5-dirham", "b"),
        alt: altInfo("5", "Dirhams", "Dirham", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dirhams", "Dirham"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1443 (2022)",
        type: { 
            en: standardType.en, 
            vi: standardType.vi 
        },
        size: "143 \u00D7 66 mm",
        new: true,
    }
);
//#endregion

//#region 2 - 10 dirham
images.push([
    {
        src: imagePath("3/10-dirham", "f"),
        alt: altInfo("10", "Dirhams", "Dirham", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("3/10-dirham", "b"),
        alt: altInfo("10", "Dirhams", "Dirham", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Dirhams", "Dirham"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1443 (2022)",
        type: { 
            en: standardType.en, 
            vi: standardType.vi 
        },
        size: "147 \u00D7 66 mm",
        new: true,
    }
);
//#endregion