let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/transnistria/2007/1-ruble-f.jpg",
            alt: "Front of the 1 Ruble Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/transnistria/2007/1-ruble-b.jpg",
            alt: "Back of the 1 Ruble Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Transnistrian 1 Ruble",
    "2007",
    "Circulating Standard Banknote",
    "129 $\\times$ 55 mm",
    "Alexander Suvorov (1730-1800)"
);