const translations = {
    heading: {
        en: "Ghana",
        vi: "Ghana"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/ghana/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Ghanaian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Ghana` 
});
const issuer   = { en: "Bank Of Ghana", vi: "Ngân Hàng Ghana" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 cedi
images.push([
    {
        src: imagePath("2007/1-cedi", "f"),
        alt: altInfo("1", "Cedi", "Cedi", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2007/1-cedi", "b"),
        alt: altInfo("1", "Cedi", "Cedi", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Cedi", "Cedi"),
        issuer: {
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2019",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Kwame Nkrumah (1909-1972), Emmanuel Odarkwei Obetsebi Lamptey (1902-1963), William Ofori Atta (1910-1988), Ebenezer Ako Adjei (1916-2002), Joseph Boakye Danquah (1895-1965), Edward Akufo-Addo (1906-1979)", 
            vi: "Kwame Nkrumah (1909-1972), Emmanuel Odarkwei Obetsebi Lamptey (1902-1963), William Ofori Atta (1910-1988), Ebenezer Ako Adjei (1916-2002), Joseph Boakye Danquah (1895-1965), Edward Akufo-Addo (1906-1979)" 
        },
        size: "137 \u00D7 65 mm",
    }
);
//#endregion