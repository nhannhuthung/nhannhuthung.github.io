let index = 1;

const images = {
        [`${index}`]: [
        {
            src: "../images/collection/cambodia/500-series/2004-f.jpg",
            alt: "Front of the 500 Riel Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/cambodia/500-series/2004-b.jpg",
            alt: "Back of the 500 Riel Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Cambodian 500 Riels",
    "2004",
    "Circulating Standard Banknote",
    "138 $\\times$ 64 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/cambodia/1000-series/2007-f.jpg",
        alt: "Front of the 1000 Riel Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/cambodia/1000-series/2007-b.jpg",
        alt: "Back of the 1000 Riel Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Cambodian 1000 Riels",
    "2007",
    "Circulating Standard Banknote",
    "138 $\\times$ 64 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/cambodia/100-series/2014-f.jpg",
        alt: "Front of the 100 Riel Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/cambodia/100-series/2014-b.jpg",
        alt: "Back of the 100 Riel Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Cambodian 100 Riels",
    "2014",
    "Circulating Standard Banknote",
    "138 $\\times$ 64 mm",
    "Norodom Sihanouk (1941-1955)"
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/cambodia/500-series/2014-f.jpg",
        alt: "Front of the 500 Riel Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/cambodia/500-series/2014-b.jpg",
        alt: "Back of the 500 Riel Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Cambodian 500 Riels",
    "2014",
    "Circulating Standard Banknote",
    "138 $\\times$ 64 mm",
    "Norodom Sihamoni (1953-Present)"
);