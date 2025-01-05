const images1 = [
    {
        src: "../images/collection/ukraine/3/1-hryvnia-f.jpg",
        alt: "Front of the 1 Hryvnia Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/ukraine/3/1-hryvnia-b.jpg",
        alt: "Back of the 1 Hryvnia Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Ukrainian 1 Hryvnia",
    "2014",
    "In circulation",
    "118 $\\times$ 63 mm",
    "Volodymyr I Sviatoslavych (958?-1015)"
);