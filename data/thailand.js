let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/thailand/15/20-baht-f.jpg",
            alt: "Front of the 20 Baht Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/thailand/15/20-baht-b.jpg",
            alt: "Back of the 20 Baht Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Thai 20 Baht",
    "",
    "Circulating Standard Banknote",
    "138 $\\times$ 72 mm",
    "Rama IX (1927-2016)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/thailand/15/100-baht-f.jpg",
        alt: "Front of the 100 Baht Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/thailand/15/100-baht-b.jpg",
        alt: "Back of the 100 Baht Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Thai 100 Baht",
    "",
    "Circulating Standard Banknote",
    "150 $\\times$ 72 mm",
    "Rama IX (1927-2016)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/thailand/16/20-baht-f.jpg",
        alt: "Front of the 20 Baht Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/thailand/16/20-baht-b.jpg",
        alt: "Back of the 20 Baht Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Thai 20 Baht",
    "",
    "Circulating Standard Banknote",
    "138 $\\times$ 72 mm",
    "Rama IX (1927-2016)"
);