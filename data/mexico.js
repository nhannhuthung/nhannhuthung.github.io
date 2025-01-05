const images1 = [
    {
        src: "../images/collection/mexico/1994-1999/20-peso-f.jpg",
        alt: "Front of the 20 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/1994-1999/20-peso-b.jpg",
        alt: "Back of the 20 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Mexican 20 Pesos",
    "1998",
    "Out of circulation",
    "129 $\\times$ 65 mm",
    "Benito Juárez (1858-1872)"
);

const images2 = [
    {
        src: "../images/collection/mexico/1994-1999/50-peso-f.jpg",
        alt: "Front of the 50 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/1994-1999/50-peso-b.jpg",
        alt: "Back of the 50 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide2", images2);
new Slideshow("slideshow2");
generateSlideShowInfo(
    "info2",
    "Mexican 50 Pesos",
    "1998",
    "Out of circulation",
    "129 $\\times$ 65 mm",
    "José María Morelos (1765-1815)"
);

const images3 = [
    {
        src: "../images/collection/mexico/2021/20-peso-f.jpg",
        alt: "Front of the 20 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/2021/20-peso-b.jpg",
        alt: "Back of the 20 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide3", images3);
new Slideshow("slideshow3");
generateSlideShowInfo(
    "info3",
    "Mexican 20 Pesos (Commemorative)",
    "2021",
    "In circulation",
    "120 $\\times$ 66 mm",
    ""
);