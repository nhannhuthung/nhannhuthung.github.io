let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/ethiopia/2020/10-birr-f.jpg",
            alt: "Front of the 10 Birr Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/ethiopia/2020/10-birr-b.jpg",
            alt: "Back of the 10 Birr Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Ethiopian 10 Birr",
    "2012 (2020)",
    "Circulating Standard Banknote",
    "142 $\\times$ 67 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/ethiopia/2020/50-birr-f.jpg",
        alt: "Front of the 50 Birr Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/ethiopia/2020/50-birr-b.jpg",
        alt: "Back of the 50 Birr Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Ethiopian 50 Birr",
    "2012 (2020)",
    "Circulating Standard Banknote",
    "145 $\\times$ 70 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/ethiopia/2020/100-birr-f.jpg",
        alt: "Front of the 50 Birr Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/ethiopia/2020/100-birr-b.jpg",
        alt: "Back of the 50 Birr Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Ethiopian 100 Birr",
    "2015 (2023)",
    "Circulating Standard Banknote",
    "147 $\\times$ 72 mm",
    ""
);