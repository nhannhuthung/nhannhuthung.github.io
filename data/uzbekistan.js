let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/uzbekistan/1994-2019/100-sum-f.jpg",
            alt: "Front of the 100 Sum Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/uzbekistan/1994-2019/100-sum-b.jpg",
            alt: "Back of the 100 Sum Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Uzbekistani 100 Sum",
    "1994",
    "Circulating Standard Banknote",
    "142 $\\times$ 69 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/uzbekistan/1994-2019/200-sum-f.jpg",
        alt: "Front of the 200 Sum Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/uzbekistan/1994-2019/200-sum-b.jpg",
        alt: "Back of the 200 Sum Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Uzbekistani 200 Sum",
    "1997",
    "Circulating Standard Banknote",
    "145 $\\times$ 77 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/uzbekistan/1994-2019/500-sum-f.jpg",
        alt: "Front of the 500 Sum Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/uzbekistan/1994-2019/500-sum-b.jpg",
        alt: "Back of the 500 Sum Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Uzbekistani 500 Sum",
    "1999",
    "Circulating Standard Banknote",
    "144 $\\times$ 78 mm",
    ""
);