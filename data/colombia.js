let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/colombia/2016/2000-peso-f.jpg",
            alt: "Front of the 2000 Peso Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/colombia/2016/2000-peso-b.jpg",
            alt: "Back of the 2000 Peso Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Colombian 2,000 Pesos",
    "",
    "Circulating Standard Banknote",
    "128 $\\times$ 66 mm",
    "Débora Arango Pérez (1907-2005)"
);