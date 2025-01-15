let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/china/2/1-jiao-f.jpg",
            alt: "Front of the 1 Jiao Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/china/2/1-jiao-b.jpg",
            alt: "Back of the 1 Jiao Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Chinese 1 Jiao",
    "1980",
    "Non-circulating Standard Banknote",
    "115 $\\times$ 52 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/china/3/1-yuan-f.jpg",
        alt: "Front of the 1 Yuan Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/china/3/1-yuan-b.jpg",
        alt: "Back of the 1 Yuan Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Chinese 1 Yuan",
    "1999",
    "Circulating Standard Banknote",
    "131 $\\times$ 63 mm",
    "Mao Zedong (1893-1976)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/china/3/5-yuan-f.jpg",
        alt: "Front of the 5 Yuan Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/china/3/5-yuan-b.jpg",
        alt: "Back of the 5 Yuan Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Chinese 5 Yuan",
    "2005",
    "Circulating Standard Banknote",
    "135 $\\times$ 63 mm",
    "Mao Zedong (1893-1976)"
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/china/3/50-yuan-f.jpg",
        alt: "Front of the 50 Yuan Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/china/3/50-yuan-b.jpg",
        alt: "Back of the 50 Yuan Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Chinese 50 Yuan",
    "2005",
    "Circulating Standard Banknote",
    "150 $\\times$ 70 mm",
    "Mao Zedong (1893-1976)"
);