let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/venezuela/2008/5-bolivar-f.jpg",
            alt: "Front of the 5 Bolivar Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/venezuela/2008/5-bolivar-b.jpg",
            alt: "Back of the 5 Bolivar Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Venezuelan 5 Bolivar",
    "2013",
    "Non-circulating Standard Banknote",
    "96 $\\times$ 156 mm",
    ""
);