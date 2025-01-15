let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/nepal/2007/5-rupee-f.jpg",
            alt: "Front of the 5 Rupee Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/nepal/2007/5-rupee-b.jpg",
            alt: "Back of the 5 Rupee Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Nepalese 5 Rupees",
    "",
    "Circulating Standard Banknote",
    "120 $\\times$ 70 mm",
    ""
);