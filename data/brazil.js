const translations = {
    heading: {
        en: "Brazil",
        vi: "Brasil"
    }
};

let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/brazil/2/2-real-f.jpg",
            alt: {en: "Front of the 2 Real Bill", vi: "Mặt Trước Tờ 2 Real"},
            description: {en: "Obverse", vi: "Trước"}
        },
        {
            src: "../images/collection/brazil/2/2-real-b.jpg",
            alt: {en: "Back of the 2 Real Bill", vi: "Mặt Sau Tờ 2 Real"},
            description: {en: "Reverse", vi: "Sau"}
        }
    ]
};
const slideshowInfo = {
    [`${index}`]: {
        title: { 
            en: "Brazilian 2 Reals", 
            vi: "2 Real Brasil" 
        },
        issuer: {
            en: "Central Bank Of Brazil",
            vi: "Ngân Hàng Trung Ương Brasil"
        },
        type: { 
            en: "Circulating Standard Banknote", 
            vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
        },
        size: "121 \u00D7 65 mm",
    }
};

index++; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/brazil/2/10-real-f.jpg",
        alt: {en: "Front of the 10 Real Bill", vi: "Mặt Trước Tờ 10 Real"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/brazil/2/10-real-b.jpg",
        alt: {en: "Back of the 10 Real Bill", vi: "Mặt Sau Tờ 10 Real"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Brazilian 10 Reals", 
        vi: "10 Real Brasil" 
    },
    issuer: {
        en: "Central Bank Of Brazil",
        vi: "Ngân Hàng Trung Ương Brasil"
    },
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "135 \u00D7 65 mm",
};

index++; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/brazil/2/50-real-f.jpg",
        alt: {en: "Front of the 50 Real Bill", vi: "Mặt Trước Tờ 50 Real"},
        description: {en: "Obverse", vi: "Trước"}
    },
    {
        src: "../images/collection/brazil/2/50-real-b.jpg",
        alt: {en: "Back of the 50 Real Bill", vi: "Mặt Sau Tờ 50 Real"},
        description: {en: "Reverse", vi: "Sau"}
    }
];
slideshowInfo[`${index}`] = {
    title: { 
        en: "Brazilian 50 Reals", 
        vi: "50 Real Brasil" 
    },
    issuer: {
        en: "Central Bank Of Brazil",
        vi: "Ngân Hàng Trung Ương Brasil"
    },
    type: { 
        en: "Circulating Standard Banknote", 
        vi: "Tiền Tiêu Chuẩn Còn Đang Lưu Hành" 
    },
    size: "149 \u00D7 70 mm",
};