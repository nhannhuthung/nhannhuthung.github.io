let index = 1;

const images = {
    [`${index}`]: [
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
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Malawian 20 Kwacha",
    "2016",
    "In circulation",
    "128 $\\times$ 64 mm",
    "Inkosi Ya Makhosi M'mbelwa II (1860-1959)"
);
