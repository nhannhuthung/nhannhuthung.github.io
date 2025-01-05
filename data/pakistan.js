const images1 = [
    {
        src: "../images/collection/pakistan/2005/100-rupee-f.jpg",
        alt: "Front of the 100 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/pakistan/2005/100-rupee-b.jpg",
        alt: "Back of the 100 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Pakistani 100 Rupees",
    "2015",
    "In circulation",
    "139 $\\times$ 65 mm",
    "Muhammad Ali Jinnah (1876-1948)"
);