let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/italy/1971/500-lire-f.jpg",
            alt: "Front of the 500 Lire Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/italy/1971/500-lire-b.jpg",
            alt: "Back of the 500 Lire Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Italian 500 Lire",
    "1966",
    "Non-circulating Standard Banknote",
    "110 $\\times$ 55 mm",
    ""
);