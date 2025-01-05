const images1 = [
    {
        src: "../images/collection/bhutan/2006/1-ngultrum-f.jpg",
        alt: "Front of the 1 Ngultrum Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/bhutan/2006/1-ngultrum-b.jpg",
        alt: "Back of the 1 Ngultrum Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Bhutanese 1 Ngultrum",
    "2013",
    "In circulation",
    "120 $\\times$ 60 mm",
    ""
);