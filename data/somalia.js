const images1 = [
    {
        src: "../images/collection/somalia/1991/50-shilling-f.jpg",
        alt: "Front of the 50 Shilling Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/somalia/1991/50-shilling-b.jpg",
        alt: "Back of the 50 Shilling Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Somali 50 Shillings",
    "1991",
    "Out of circulation",
    "140 $\\times$ 70 mm",
    ""
);