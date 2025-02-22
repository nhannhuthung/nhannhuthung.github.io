let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/croatia/1991-1993/5-dinar-f.jpg",
            alt: "Front of the 5 Dinar Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/croatia/1991-1993/5-dinar-b.jpg",
            alt: "Back of the 5 Dinar Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Croatian 5 Dinars",
    "1991",
    "Non-circulating Standard Banknote",
    "105 $\\times$ 55 mm",
    "Roger Joseph Boscovich (1711-1787)"
);