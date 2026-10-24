const translations = {
    heading: {
        en: "Cook Islands",
        vi: "Quần Đảo Cook"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/cook-islands/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Cook Islands ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Quần Đảo Cook` 
});
const issuer   = { en: "Ministry Of Finance Of Cook Islands", vi: "Bộ Tài Chính Quần Đảo Cook" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 3 dollar
images.push([
    {
        src: imagePath("2021/3-dollar", "f"),
        alt: altInfo("3", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2021/3-dollar", "b"),
        alt: altInfo("3", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("3", "3", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        size: "140 \u00D7 67 mm",
        reference: refLink("P-W11", "https://banknote.ws/COLLECTION/countries/AUS/COK/COKW2021-03.htm"),
        note: {
            en: `2021\'s top 20 banknotes by ${ibnsLink}`,
            vi: `Top 20 tờ tiền của năm 2021 theo ${ibnsLink}`
        },
        new: true,
    }
);
//#endregion