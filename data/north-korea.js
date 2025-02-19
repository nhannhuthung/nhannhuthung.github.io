let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/north-korea/1992/200-won-f.jpg",
            alt: "Front of the 200 Won Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/north-korea/1992/200-won-b.jpg",
            alt: "Back of the 200 Won Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "North Korean 200 Won",
    "2005",
    "Circulating Standard Banknote",
    "140 $\\times$ 72 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/north-korea/1992/500-won-f.jpg",
        alt: "Front of the 500 Won Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/north-korea/1992/500-won-b.jpg",
        alt: "Back of the 500 Won Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "North Korean 500 Won",
    "2007",
    "Circulating Standard Banknote",
    "156 $\\times$ 75 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/north-korea/1992/5000-won-f.jpg",
        alt: "Front of the 5000 Won Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/north-korea/1992/5000-won-b.jpg",
        alt: "Back of the 5000 Won Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "North Korean 5,000 Wons",
    "2006",
    "Circulating Standard Banknote",
    "156 $\\times$ 75 mm",
    "Kim Il Sung (1912-1994)"
);