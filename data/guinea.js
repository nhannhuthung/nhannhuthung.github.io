const images1 = [
    {
        src: "../images/collection/guinea/1998/100-franc-f.jpg",
        alt: "Front of the 100 Franc Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/guinea/1998/100-franc-b.jpg",
        alt: "Back of the 100 Franc Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Guinean 100 Franc",
    "2015",
    "In circulation",
    "124 $\\times$ 64 mm",
    ""
);