let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/russia/2018/100-ruble-f.jpg",
            alt: "Front of the 100 Ruble Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/russia/2018/100-ruble-b.jpg",
            alt: "Back of the 100 Ruble Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Russian 100 Rubles",
    "2018",
    "Circulating Commemorative Banknote",
    "65 $\\times$ 150 mm",
    ""
);