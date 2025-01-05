const images1 = [
    {
        src: "../images/collection/saudi-arabia/2007-2016/1-riyal-f.jpg",
        alt: "Front of the 1 Riyal Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/saudi-arabia/2007-2016/1-riyal-b.jpg",
        alt: "Back of the 1 Riyal Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Saudi 1 Riyals",
    "1433 (2012)",
    "In circulation",
    "133 $\\times$ 63 mm",
    "Abdullah bin Abdulaziz Al Saud  (1924-2015)"
);