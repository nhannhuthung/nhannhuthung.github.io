const images1 = [
    {
        src: "../images/collection/oman/1995/100-baisa-f.jpg",
        alt: "Front of the 100 Baisa Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/oman/1995/100-baisa-b.jpg",
        alt: "Back of the 100 Baisa Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Omani 100 Baisa",
    "1416 (1995)",
    "In circulation",
    "140 $\\times$ 72 mm",
    "Qaboos bin Said (1940-2020)"
);

const images2 = [
    {
        src: "../images/collection/oman/2020/1-rial-f.jpg",
        alt: "Front of the 1 Rial Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/oman/2020/1-rial-b.jpg",
        alt: "Back of the 1 Rial Bill",
        description: "Reverse"
    }
];
createSlideshow("slide2", images2);
new Slideshow("slideshow2");
generateSlideShowInfo(
    "info2",
    "Omani 1 Rial",
    "1441 (2020)",
    "In circulation",
    "156 $\\times$ 75 mm",
    ""
);