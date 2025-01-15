let index = 1;

const images = {
    [`${index}`]: [
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
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Kerguelenian 100 Francs",
    "2012",
    "Fantasy Banknote",
    "159 $\\times$ 80 mm",
    "Yves-Joseph de Kerguelen-Tremarec (1734-1797)"
);