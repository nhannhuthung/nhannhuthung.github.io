let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/costa-rica/2018-2019/2000-colon-f.jpg",
            alt: "Front of the 2000 Colon Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/costa-rica/2018-2019/2000-colon-b.jpg",
            alt: "Back of the 2000 Colon Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Costa Rican 2,000 Colones",
    "2018",
    "Circulating Standard Banknote",
    "132 $\\times$ 67 mm",
    "Mauro Fernández Acuña (1843-1905)"
);