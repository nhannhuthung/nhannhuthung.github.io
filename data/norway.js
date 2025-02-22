let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/norway/7/50-kroner-f.jpg",
            alt: "Front of the 50 Kroner Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/norway/7/50-kroner-b.jpg",
            alt: "Back of the 50 Kroner Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Norweigian 50 Kroner",
    "2005",
    "Non-circulating Standard Banknote",
    "128 $\\times$ 60 mm",
    "Peter Christen Asbjørnsen (1812-1885)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/norway/8/200-kroner-f.jpg",
        alt: "Front of the 200 Kroner Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/norway/8/200-kroner-b.jpg",
        alt: "Back of the 200 Kroner Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Omani 200 Kroner",
    "2016",
    "Circulating Standard Banknote",
    "140 $\\times$ 70 mm",
    ""
);