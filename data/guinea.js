let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/guinea/1998/100-franc-f.jpg",
            alt: "Front of the 100 Franc Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/guinea/1998/100-franc-b.jpg",
            alt: "Back of the 100 Franc Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Guinean 100 Franc",
    "2015",
    "Circulating Standard Banknote",
    "124 $\\times$ 64 mm",
    ""
);