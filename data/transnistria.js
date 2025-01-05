const images1 = [
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
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Transnistrian 1 Ruble",
    "2007",
    "In circulation",
    "129 $\\times$ 55 mm",
    "Alexander Suvorov (1730-1800)"
);