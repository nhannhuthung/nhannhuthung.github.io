const images1 = [
    {
        src: "../images/collection/laos/2000-series/2011-f.jpg",
        alt: "Front of the 2000 Kip Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/laos/2000-series/2011-b.jpg",
        alt: "Back of the 2000 Kip Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Lao 2,000 Kip",
    "2011",
    "In circulation",
    "141 $\\times$ 65 mm",
    "Kaysone Phomvihane (1920-1992)"
);

const images2 = [
    {
        src: "../images/collection/laos/5000-series/2003-f.jpg",
        alt: "Front of the 5000 Kip Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/laos/5000-series/2003-b.jpg",
        alt: "Back of the 5000 Kip Bill",
        description: "Reverse"
    }
];
createSlideshow("slide2", images2);
new Slideshow("slideshow2");
generateSlideShowInfo(
    "info2",
    "Lao 5,000 Kip",
    "2003",
    "In circulation",
    "152 $\\times$ 68 mm",
    "Kaysone Phomvihane (1920-1992)"
);