const images1 = [
    {
        src: "../images/collection/norway/7/50-kroner-f.jpg",
        alt: "Front of the 50 Kroner Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/norway/7/50-kroner-b.jpg",
        alt: "Back of the 50 Kroner Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Norweigian 50 Kroner",
    "2005",
    "Out of circulation",
    "128 $\\times$ 60 mm",
    "Peter Christen Asbjørnsen (1812-1885)"
);