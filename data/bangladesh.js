const translations = {
    heading: {
        en: "Bangladesh",
        vi: "Bangladesh"
    }
};

let index = 1;

//#region input info
const imagePath = (name, side) => (
    `../images/collection/bangladesh/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Bangladeshi ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Bangladesh` 
});
const issuer = { en: "Bangladesh Bank", vi: "Ngân Hàng Bangladesh" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 2 taka
images.push([
    {
        src: imagePath("2011-2024/2-taka", "f"),
        alt: altInfo("2", "Taka", "Taka", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2024/2-taka", "b"),
        alt: altInfo("2", "Taka", "Taka", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2", "2", "Taka", "Taka"),
        year: "2013",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)", 
            vi: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)" 
        },
        size: "100 \u00D7 60 mm",
    }
);
//#endregion

//#region 2 - 5 taka a
images.push([
    {
        src: imagePath("2011-2024/5-taka-a", "f"),
        alt: altInfo("5", "Taka", "Taka", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2011-2024/5-taka-a", "b"),
        alt: altInfo("5", "Taka", "Taka", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Taka", "Taka"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2015",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)", 
            vi: "Bangabandhu Sheikh Mujibur Rahman (1920-1975)" 
        },
        size: "142 \u00D7 68 mm",
    }
);
//#endregion