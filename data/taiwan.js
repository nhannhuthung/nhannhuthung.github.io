const images1 = [
    {
        src: "../images/collection/taiwan/1999/100-dollar-f.jpg",
        alt: "Front of the 100 Dollar Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/taiwan/1999/100-dollar-b.jpg",
        alt: "Back of the 100 Dollar Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Taiwanese 100 Dollars",
    "2000",
    "In circulation",
    "145 $\\times$ 70 mm",
    "Sun Yat-sen (1866-1925)"
);