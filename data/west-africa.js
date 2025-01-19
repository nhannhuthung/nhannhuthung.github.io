let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/west-africa/2003/500-franc-f.jpg",
            alt: "Front of the 500 Franc Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/west-africa/2003/500-franc-b.jpg",
            alt: "Back of the 500 Franc Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "West African 500 Francs",
    "2012",
    "Circulating Standard Banknote",
    "114 $\\times$ 60 mm",
    ""
);