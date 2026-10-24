const translations = {
    heading: {
        en: "Somalia",
        vi: "Somalia"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/somalia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Somali ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Somalia` 
});
const issuer1 = { en: "Central Bank Of Somalia", vi: "Ngân Hàng Trung Ương Somalia" };
const issuer2 = { en: "Mogadishu Northern Forces", vi: "Lực Lượng Miền Bắc Mogadishu" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 50 shilling
images.push([
    {
        src: imagePath("mogadishu/50-shilling", "f"),
        alt: altInfo("50", "Shillings", "Shilling", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("mogadishu/50-shilling", "b"),
        alt: altInfo("50", "Shillings", "Shilling", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("50", "50", "Shillings", "Shilling"),
        issuer: { 
            en: issuer2.en, 
            vi: issuer2.vi 
        },
        year: "1991",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "140 \u00D7 70 mm",
        reference: refLink("P-R2(3)", "https://banknote.ws/COLLECTION/countries/AFR/SOM/SOMR0002.htm#R2-3"),
    }
);
//#endregion