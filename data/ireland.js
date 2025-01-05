const images1 = [
    {
        src: "../images/collection/ireland/c/5-pound-f.jpg",
        alt: "Front of the 5 Pound Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/ireland/c/5-pound-b.jpg",
        alt: "Back of the 5 Pound Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Irish 5 Pounds",
    "1995",
    "Out of circulation",
    "120 $\\times$ 64 mm",
    "Catherine McAuley (1778-1841)"
);