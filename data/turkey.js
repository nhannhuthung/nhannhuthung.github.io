let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/turkey/2009/20-lira-f.jpg",
            alt: "Front of the 20 Lira Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/turkey/2009/20-lira-b.jpg",
            alt: "Back of the 20 Lira Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Turkish 20 Lira",
    "2009",
    "Circulating Standard Banknote",
    "142 $\\times$ 68 mm",
    "Mustafa Kemal Atatürk (1881?-1938)"
);