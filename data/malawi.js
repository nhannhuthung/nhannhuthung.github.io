const images1 = [
    {
        src: "../images/collection/malawi/2012/20-kwacha-f.jpg",
        alt: "Front of the 20 Kwacha Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/malawi/2012/20-kwacha-b.jpg",
        alt: "Back of the 20 Kwacha Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Malawian 20 Kwacha",
    "2016",
    "In circulation",
    "128 $\\times$ 64 mm",
    "Inkosi Ya Makhosi M'mbelwa II (1860-1959)"
);
