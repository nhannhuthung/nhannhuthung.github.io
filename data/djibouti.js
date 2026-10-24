const translations = {
    heading: {
        en: "Djibouti",
        vi: "Djibouti"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/djibouti/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Djiboutian ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Djibouti` 
});
const issuer   = { en: "Central Bank Of Djibouti", vi: "Ngân Hàng Trung Ương Djibouti" };
const comType = { en: "Commemorative Banknote", vi: "Tiền Kỷ Niệm" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 40 franc
images.push([
    {
        src: imagePath("2017/40-franc", "f"),
        alt: altInfo("40", "Francs", "Franc", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2017/40-franc", "b"),
        alt: altInfo("40", "Francs", "Franc", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("40", "40", "Francs", "Franc"),
        subtitle: {
            en: "40th Anniversary Of Independence (1977-2017)",
            vi: "Kỷ Niệm 40 Năm Ngày Độc Lập (1977-2017)"
        },
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: comType.en, 
            vi: comType.vi 
        },
        size: "153 \u00D7 70 mm",
        reference: refLink("P-46(1)", "https://banknote.ws/COLLECTION/countries/AFR/DJI/DJI0046.htm"),
        note: {
            en: `2017\'s top 22 banknotes by ${ibnsLink}`,
            vi: `Top 22 tờ tiền của năm 2017 theo ${ibnsLink}`
        },
        new: true,
    }
);
//#endregion