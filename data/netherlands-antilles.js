const translations = {
    heading: {
        en: "Netherlands Antilles",
        vi: "Antilles Hà Lan"
    }
};

//#region input info
const imagePath = (name, side) => (
    `../images/collection/netherlands-antilles/${name}-${side}.jpg`
);
const obverse = { en: "Obverse", vi: "Trước" };
const reverse = { en: "Reverse", vi: "Sau" };
const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
    en: `${sideEng} of ${denom} ${currencyEng} Bill`,
    vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
});

const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
    en: `${denomEng} Netherlands Antillean ${currencyEng}`,  
    vi: `${denomViet} ${currencyViet} Antilles Hà Lan` 
});
const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
//#endregion

// Page order, newest first. "|" draws a solid line between banknotes, ":" a dashed one.
const layout = "2 1";

const images = [null];
const slideshowInfo = [null];

//#region 1 - 1 guilden
images.push([
    {
        src: imagePath("1970/1-gulden", "f"),
        alt: altInfo("1", "Guilden", "Guilden", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/1-gulden", "b"),
        alt: altInfo("1", "Guilden", "Guilden", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("1", "1", "Guilden", "Guilden"),
        year: "1970",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "155 \u00D7 66 mm",
        reference: refLink("P-20a", "https://banknote.ws/COLLECTION/countries/AME/NAN/NAN0020.htm"),
        new: true, 
    }
);
//#endregion

//#region 2 - 2 1/2 guilden
images.push([
    {
        src: imagePath("1970/2-half-gulden", "f"),
        alt: altInfo("10", "Guilder", "Guilder", "Front", "trước"),
        description: obverse
    },
    {
        src: imagePath("1970/2-half-gulden", "b"),
        alt: altInfo("10", "Guilder", "Guilder", "Back", "sau"),
        description: reverse
    }
]);
slideshowInfo.push(
    {
        title: currencyInfo("2\u00BD", "2\u00BD", "Guilden", "Guilden"),
        year: "1970",
        type: { 
            en: standOutType.en, 
            vi: standOutType.vi 
        },
        size: "155 \u00D7 66 mm",
        reference: refLink("P-21a", "https://banknote.ws/COLLECTION/countries/AME/NAN/NAN0021.htm"),
        new: true, 
    }
);
//#endregion