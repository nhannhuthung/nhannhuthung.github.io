# nhannhuthung.github.io

Source for gathering the information: wikipedia, numista.com, atsnotes.com, banknote.ws, ibns.com

For "country name".html file, use these codes to separate the series of banknote:
    <hr width="75%" size="2" style="margin-top: 25px;">
    <hr class="dashed" width="75%" size="2">

For the data in "country name".js file:, 
    I: The order to enter the information is:
        1. title
        2. issuer
        3. year
        4. type
        5. figure
        6. size
        7. note
        8. new
        
    II: At the beginning of the file, here are the structure of data entries:
        - Note: CountryName, Currency will be changed; there could be more than one currency, issuer variables

            const imagePath = (name, side) => (
                `../images/collection/CountryName/${name}-${side}.jpg`
            );
            const obverse = { en: "Obverse", vi: "Trước" };
            const reverse = { en: "Reverse", vi: "Sau" };
            const altInfo = (denom, currencyEng, currencyViet, sideEng, sideViet) => ({
                en: `${sideEng} of ${denom} ${currencyEng} Bill`,
                vi: `Mặt ${sideViet} Tờ ${denom} ${currencyViet}`
            });

            const currencyInfo = (denomEng, denomViet, currencyEng, currencyViet) => ({ 
                en: `${denomEng} Country's ${currencyEng}`,  
                vi: `${denomViet} ${currencyViet} Nước` 
            });
            const issuer = { en: "Bank", vi: "Ngân Hàng" };
            const standInType = { en: "Circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" };
            const standOutType = { en: "Non-circulating Standard Banknote", vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" };
            const comInType = { en: "Circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Còn Đang Lưu Hành" };
            const comOutType = { en: "Non-circulating Commemorative Banknote", vi: "Tiền Kỷ Niệm Đã Từng Lưu Hành" };
            const standComInType = { en: "Circulating Standard/Commemorative Banknote", vi: "Tiền Tiêu Chuẩn/Kỷ Niệm Còn Đang Lưu Hành" };
            const comType = { en: "Commemorative Banknote", vi: "Tiền Kỷ Niệm" };
            const fanType = { en: "Fantasy Banknote", vi: "Tiền Sưu Tầm" };

            const ibnsLink = `<a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>`;