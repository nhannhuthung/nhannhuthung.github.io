let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/drc/2000/50-franc-f.jpg",
            alt: "Front of the 50 Franc Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/drc/2000/50-franc-b.jpg",
            alt: "Back of the 50 Franc Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Congolese 50 Francs",
    "2013",
    "In circulation",
    "150 $\\times$ 70 mm",
    ""
);