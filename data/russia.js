const images1 = [
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
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Russian 100 Rubles (Commemorative)",
    "2018",
    "In circulation",
    "65 $\\times$ 150 mm",
    ""
);