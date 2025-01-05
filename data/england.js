const images1 = [
    {
        src: "../images/collection/england/g/10-pound-f.jpg",
        alt: "Front of the 10 Pound Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/england/g/10-pound-b.jpg",
        alt: "Back of the 10 Pound Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "English 10 Pounds",
    "2016",
    "In circulation",
    "132 $\\times$ 69 mm",
    "Elizabeth II (1952-2022)"
);