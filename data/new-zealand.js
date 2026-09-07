const translations = {
    heading: {
        en: "New Zealand",
        vi: "New Zealand"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/new-zealand/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} New Zealand ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} New Zealand` 
});
const issuer = { en: "Reserve Bank Of New Zealand", vi: "Ngân Hàng Trữ Kim New Zealand" };
const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };

const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;
//#endregion

const images = [null];
const slideshowInfo = [null];

//#region 1 - 5 dollar
images.push([
    {
        src: imagePath("2015-2016/5-dollar", "f"),
        alt: altInfo("5", "Dollars", "Đô La", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("2015-2016/5-dollar", "b"),
        alt: altInfo("5", "Dollars", "Đô La", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("5", "5", "Dollars", "Đô La"),
        issuer: { 
            en: issuer.en, 
            vi: issuer.vi 
        },
        type: { 
            en: standInType.en, 
            vi: standInType.vi 
        },
        figure: { 
            en: "Edmund Hillary (1919-2008)", 
            vi: "Edmund Hillary (1919-2008)" 
        },
        size: "135 \u00D7 66 mm",
        note: {
            en: `Banknote of 2015 by ${ibnsLink}`,
            vi: `Tờ tiền của năm 2015 theo ${ibnsLink}`
        },
        new: true,
    }
);
//#endregion