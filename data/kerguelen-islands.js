const images1 = [
    {
        src: "../images/collection/kerguelen-islands/100-franc-f.jpg",
        alt: "Front of the 100 Franc Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/kerguelen-islands/100-franc-b.jpg",
        alt: "Back of the 100 Franc Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Kerguelenian 100 Francs (Commemorative)",
    "2012",
    "Non-circulation",
    "159 $\\times$ 80 mm",
    "Yves-Joseph de Kerguelen-Tremarec (1734-1797)"
);