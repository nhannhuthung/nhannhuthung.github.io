const translations = {
    heading: {
        en: "Indonesia",
        vi: "Indonesia"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/indonesia/2000-2014/1000-rupiah-f.jpg",
            alt: {en: "Front of the 1000 Rupiah Bill", vi: "Mặt Trước Tờ 1000 Rupiah"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/indonesia/2000-2014/1000-rupiah-b.jpg",
            alt: {en: "Back of the 1000 Rupiah Bill", vi: "Mặt Sau Tờ 1000 Rupiah"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Indonesian 1,000 Rupiah", 
            vi: "1.000 Rupiah Indonesia" 
        },
        issuer: {
            en: "Bank Indonesia",
            vi: "Ngân Hàng Indonesia"
        },
        year: "2009",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "141 \u00D7 65 mm",
        figure: { 
            en: "Kapitan Pattimura (1783-1817)", 
            vi: "Kapitan Pattimura (1783-1817)" 
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/indonesia/2000-2014/2000-rupiah-f.jpg",
        alt: {en: "Front of the 2000 Rupiah Bill", vi: "Mặt Trước Tờ 2000 Rupiah"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/indonesia/2000-2014/2000-rupiah-b.jpg",
        alt: {en: "Back of the 2000 Rupiah Bill", vi: "Mặt Sau Tờ 2000 Rupiah"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Indonesian 2,000 Rupiah", 
        vi: "2.000 Rupiah Indonesia" 
    },
    issuer: {
        en: "Bank Indonesia",
        vi: "Ngân Hàng Indonesia"
    },
    year: "2015",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "141 \u00D7 65 mm",
    figure: { 
        en: "Pangeran Antasari (1797-1862)", 
        vi: "Pangeran Antasari (1797-1862)" 
    },
};