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
const issuer = { en: "Central Bank Of Somalia", vi: "Ngân Hàng Trung Ương Somalia" };
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

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
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "1991",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "140 \u00D7 70 mm",
        note: {
            en: "This banknote was intended for circulation in areas controlled by the Mogadishu Northern Forces during the civil war.",
            vi: "Tờ tiền này được lưu hành bởi Lực lượng miền Bắc Mogadishu trong thời gian nội chiến."
        },
    }
);
//#endregion