const translations = {
    heading: {
        en: "Costa Rica",
        vi: "Costa Rica"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/costa-rica/2018-2019/1000-colon-f.jpg",
            alt: {en: "Front of the 1000 Peso Colon", vi: "Mặt Trước Tờ 1000 Colon"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/costa-rica/2018-2019/1000-colon-b.jpg",
            alt: {en: "Back of the 1000 Colon Bill", vi: "Mặt Sau Tờ 1000 Colon"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Costa Rican 1,000 Colones", 
            vi: "1.000 Colon Costa Rica" 
        },
        year: "2019",
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "125 $\\times$ 67 mm",
        figure: { 
            en: "Braulio Carrillo Colina (1800-1845)", 
            vi: "Braulio Carrillo Colina (1800-1845)" 
        },
        note: null
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/costa-rica/2018-2019/2000-colon-f.jpg",
        alt: {en: "Front of the 2000 Peso Colon", vi: "Mặt Trước Tờ 1000 Colon"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/costa-rica/2018-2019/2000-colon-b.jpg",
        alt: {en: "Back of the 2000 Colon Bill", vi: "Mặt Sau Tờ 1000 Colon"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Costa Rican 2,000 Colones", 
        vi: "2.000 Colon Costa Rica" 
    },
    year: "2018",
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "132 $\\times$ 67 mm",
    figure: { 
        en: "Mauro Fernández Acuña (1843-1905)", 
        vi: "Mauro Fernández Acuña (1843-1905)" 
    },
    note: null
};