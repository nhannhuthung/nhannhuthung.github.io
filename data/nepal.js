const images1 = [
    {
        src: "../images/collection/nepal/2007/5-rupee-f.jpg",
        alt: "Front of the 5 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/nepal/2007/5-rupee-b.jpg",
        alt: "Back of the 5 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Nepalese 5 Rupees",
    "",
    "In circulation",
    "120 $\\times$ 70 mm",
    ""
);