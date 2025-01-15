let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/japan/d/2000-yen-f.jpg",
            alt: "Front of the 2000 Yen Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/japan/d/2000-yen-b.jpg",
            alt: "Back of the 2000 Yen Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Japanese 2,000 Yen",
    "",
    "Circulating Standard Banknote",
    "154 $\\times$ 76 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/japan/e/1000-yen-f.jpg",
        alt: "Front of the 1000 Yen Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/japan/e/1000-yen-b.jpg",
        alt: "Back of the 1000 Yen Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Japanese 1,000 Yen",
    "",
    "Circulating Standard Banknote",
    "150 $\\times$ 76 mm",
    "Noguchi Hideyo (1876-1928)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/japan/e/5000-yen-f.jpg",
        alt: "Front of the 5000 Yen Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/japan/e/5000-yen-b.jpg",
        alt: "Back of the 5000 Yen Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Japanese 5,000 Yen",
    "",
    "Circulating Standard Banknote",
    "156 $\\times$ 76 mm",
    "Higuchi Ichiyō (1872-1896)"
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/japan/f/1000-yen-f.jpg",
        alt: "Front of the 1000 Yen Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/japan/f/1000-yen-b.jpg",
        alt: "Back of the 1000 Yen Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Japanese 1,000 Yen",
    "",
    "Circulating Standard Banknote",
    "150 $\\times$ 76 mm",
    "Kitasato Shibasaburō (1853-1931)"
);

index = index + 1; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/japan/f/5000-yen-f.jpg",
        alt: "Front of the 5000 Yen Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/japan/f/5000-yen-b.jpg",
        alt: "Back of the 5000 Yen Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Japanese 5,000 Yen",
    "",
    "Circulating Standard Banknote",
    "156 $\\times$ 76 mm",
    "Tsuda Umeko (1864-1929)"
);

index = index + 1; //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/japan/f/10000-yen-f.jpg",
        alt: "Front of the 10000 Yen Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/japan/f/10000-yen-b.jpg",
        alt: "Back of the 10000 Yen Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Japanese 10,000 Yen",
    "",
    "Circulating Standard Banknote",
    "160 $\\times$ 76 mm",
    "Shibusawa Eiichi (1840-1931)"
);