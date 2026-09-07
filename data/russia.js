const translations = {
    heading: {
        en: "Russia",
        vi: "Nga"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/russia/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Russian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Nga` 
});
const issuer = { en: "Central Bank Of Russia", vi: "Ngân Hàng Trung Ương Russia" };
const comInType = {  en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành"  };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 100 ruble
images.push([
    {
        src: imagePath("2018/100-ruble", "f"),
        alt: altInfo("100", "Rubles", "Rúp", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2018/100-ruble", "b"),
        alt: altInfo("100", "Rubles", "Rúp", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("100", "100", "Rubles", "Rúp"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        year: "2018",
        type: { 
            en: comInType.en, 
            vi: comInType.vi 
        },
        size: "65 \u00D7 150 mm",
        note: { 
            en: `2018\'s top 16 banknotes by ${ibnsLink}`, 
            vi: `Top 16 tờ tiền năm 2018 theo ${ibnsLink}`
        },
    }
);
//#endregion