const translations = {
    heading: {
        en: "England",
        vi: "Anh Quốc"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/england/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} English ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Anh` 
});
const issuer   = { en: "Bank Of England", vi: "Ngân Hàng Anh" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 20 peso
images.push([
    {
        src: imagePath("g/10-pound", "f"),
        alt: altInfo("10", "Pounds", "Bảng", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("g/10-pound", "b"),
        alt: altInfo("10", "Pounds", "Bảng", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("10", "10", "Pounds", "Bảng"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: [
            {
                en: "Elizabeth II (1952-2022)",
                vi: "Elizabeth II (1952-2022)"
            },
            {
                en: "Jane Austen (1775-1817)",
                vi: "Jane Austen (1775-1817)" 
            }
        ],
        size: "132 \u00D7 69 mm",
        note: { 
            en: `2017\'s top 22 banknotes by ${ibnsLink}`, 
            vi: `Top 22 tờ tiền năm 2017 theo ${ibnsLink}` 
        },
    }
);
//#endregion