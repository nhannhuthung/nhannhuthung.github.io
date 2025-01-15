let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/ukraine/3/1-hryvnia-f.jpg",
            alt: "Front of the 1 Hryvnia Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/ukraine/3/1-hryvnia-b.jpg",
            alt: "Back of the 1 Hryvnia Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Ukrainian 1 Hryvnia",
    "2014",
    "Circulating Standard Banknote",
    "118 $\\times$ 63 mm",
    "Volodymyr I Sviatoslavych (958?-1015)"
);