const translations = {
    heading: {
        en: "Syria",
        vi: "Syria"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/syria/1997-1998/100-pound-f.jpg",
            alt: {en: "Front of the 100 Pound Bill", vi: "Mặt Trước Tờ 100 Bảng"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/syria/1997-1998/100-pound-b.jpg",
            alt: {en: "Back of the 1000 Won Bill", vi: "Mặt Sau Tờ 1000 Won"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Syrian 100 Pounds", 
            vi: "100 Bảng Syria" 
        },
        year: null,
        type: { 
            en: "Non-Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" 
        },
        size: "155 $\\times$ 75 mm",
        figure: null,
        note: null,
        new: true
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/syria/1997-1998/200-pound-f.jpg",
        alt: {en: "Front of the 200 Pound Bill", vi: "Mặt Trước Tờ 200 Bảng"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/syria/1997-1998/200-pound-b.jpg",
        alt: {en: "Back of the 200 Pound Bill", vi: "Mặt Sau Tờ 200 Bảng"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Syrian 200 Pounds", 
        vi: "200 Bảng Syria" 
    },
    year: null,
    type: { 
        en: "Non-Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Đã Từng Lưu Hành" 
    },
    size: "160 $\\times$ 75 mm",
    figure: null,
    note: null,
    new: true
};