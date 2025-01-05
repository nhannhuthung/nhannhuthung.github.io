const images1 = [
    {
        src: "../images/collection/turkey/2009/20-lira-f.jpg",
        alt: "Front of the 20 Lira Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/turkey/2009/20-lira-b.jpg",
        alt: "Back of the 20 Lira Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Turkish 20 Lira",
    "2009",
    "In circulation",
    "142 $\\times$ 68 mm",
    "Mustafa Kemal Atatürk (1881?-1938)"
);