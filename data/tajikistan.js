let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/tajikistan/1994/20-ruble-f.jpg",
            alt: "Front of the 20 Ruble Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/tajikistan/1994/20-ruble-b.jpg",
            alt: "Back of the 20 Ruble Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Tajikistani 20 Rubles",
    "1994",
    "Non-circulating Standard Banknote",
    "102 $\\times$ 56 mm",
    ""
);