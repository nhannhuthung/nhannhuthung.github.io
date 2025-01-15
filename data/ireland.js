let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/ireland/c/5-pound-f.jpg",
            alt: "Front of the 5 Pound Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/ireland/c/5-pound-b.jpg",
            alt: "Back of the 5 Pound Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Irish 5 Pounds",
    "1995",
    "Non-circulating Standard Banknote",
    "120 $\\times$ 64 mm",
    "Catherine McAuley (1778-1841)"
);