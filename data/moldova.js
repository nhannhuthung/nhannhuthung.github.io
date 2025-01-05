const images1 = [
    {
        src: "../images/collection/moldova/2015/1-leu-f.jpg",
        alt: "Front of the 1 Leu Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/moldova/2015/1-leu-b.jpg",
        alt: "Back of the 1 Leu Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Moldovan 1 Leu",
    "2015",
    "In circulation",
    "114 $\\times$ 58 mm",
    "Stephen III ((1433-1440)?-1504)"
);