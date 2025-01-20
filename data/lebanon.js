let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/lebanon/2011-2012/1000-lira-f.jpg",
            alt: "Front of the 1000 Lira Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/lebanon/2011-2012/1000-lira-b.jpg",
            alt: "Back of the 1000 Lira Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Lebanese 1,000 Lira",
    "",
    "Circulating Standard Banknote",
    "115 $\\times$ 60 mm",
    ""
);