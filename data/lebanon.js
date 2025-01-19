let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/lebanon/2011-2012/1000-pound-f.jpg",
            alt: "Front of the 1000 Pound Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/lebanon/2011-2012/1000-pound-b.jpg",
            alt: "Back of the 1000 Pound Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Lebanese 1,000 Pounds",
    "",
    "Circulating Standard Banknote",
    "115 $\\times$ 60 mm",
    ""
);