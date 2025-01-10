let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/myanmar/1990/5-kyat-f.jpg",
            alt: "Front of the 5 Kyat Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/myanmar/1990/5-kyat-b.jpg",
            alt: "Back of the 5 Kyat Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Myanma 5 Kyats",
    "",
    "In circulation",
    "110 $\\times$ 55 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/myanmar/1990/50-kyat-f.jpg",
        alt: "Front of the 50 Kyat Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/myanmar/1990/50-kyat-b.jpg",
        alt: "Back of the 50 Kyat Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Myanma 50 Kyats",
    "",
    "In circulation",
    "145 $\\times$ 70 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/myanmar/1990/100-kyat-f.jpg",
        alt: "Front of the 100 Kyat Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/myanmar/1990/100-kyat-b.jpg",
        alt: "Back of the 100 Kyat Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Myanma 100 Kyats",
    "",
    "In circulation",
    "145 $\\times$ 70 mm",
    ""
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/myanmar/1990/200-kyat-f.jpg",
        alt: "Front of the 200 Kyat Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/myanmar/1990/200-kyat-b.jpg",
        alt: "Back of the 200 Kyat Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Myanma 200 Kyats",
    "",
    "In circulation",
    "150 $\\times$ 70 mm",
    ""
);

index = index + 1; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/myanmar/1990/500-kyat-f.jpg",
        alt: "Front of the 500 Kyat Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/myanmar/1990/500-kyat-b.jpg",
        alt: "Back of the 500 Kyat Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Myanma 500 Kyats",
    "",
    "In circulation",
    "150 $\\times$ 70 mm",
    ""
);

index = index + 1; //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/myanmar/1990/1000-kyat-f.jpg",
        alt: "Front of the 1000 Kyat Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/myanmar/1990/1000-kyat-b.jpg",
        alt: "Back of the 1000 Kyat Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Myanma 1,000 Kyat",
    "",
    "In circulation",
    "150 $\\times$ 70 mm",
    ""
);