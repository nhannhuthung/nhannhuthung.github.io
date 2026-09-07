const translations = {
    heading: {
        en: "Malawi",
        vi: "Malawi"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/malawi/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Malawian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Malawi` 
});
const issuer = { en: "Reserve Bank Of Malawi", vi: "Ngân Hàng Dự Trữ Malawi" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 kwacha
images.push([
        {
            src: imagePath("2012/20-kwacha", "f"),
            alt: altInfo("20", "Kwachas", "Kwacha", "Front", "trước"),
            description: obverse
        },
        {
            src: imagePath("2012/20-kwacha", "b"),
            alt: altInfo("20", "Kwachas", "Kwacha", "Back", "sau"),
            description: reverse
        }
]);
slideshowInfo.push(
    {
        title: currencyInfo("20", "20", "Kwachas", "Kwacha"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2016",
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Inkosi Ya Makhosi M'mbelwa II (1860-1959)", 
            vi: "Inkosi Ya Makhosi M'mbelwa II (1860-1959)" 
        },
        size: "128 \u00D7 64 mm",
    }
);
//#endregion
