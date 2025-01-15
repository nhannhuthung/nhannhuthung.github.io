let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/bhutan/2006/1-ngultrum-f.jpg",
            alt: "Front of the 1 Ngultrum Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/bhutan/2006/1-ngultrum-b.jpg",
            alt: "Back of the 1 Ngultrum Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Bhutanese 1 Ngultrum",
    "2013",
    "Circulating Standard Banknote",
    "120 $\\times$ 60 mm",
    ""
);