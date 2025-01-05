const images1 = [
    {
        src: "../images/collection/italy/1971/500-lire-f.jpg",
        alt: "Front of the 500 Lire Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/italy/1971/500-lire-b.jpg",
        alt: "Back of the 500 Lire Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Italian 500 Lire",
    "1966",
    "Out of circulation",
    "110 $\\times$ 55 mm",
    ""
);