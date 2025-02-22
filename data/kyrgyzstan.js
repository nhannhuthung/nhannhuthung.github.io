let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/kyrgyzstan/1/1-tyiyn-f.jpg",
            alt: "Front of the 1 Tyiyn Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/kyrgyzstan/1/1-tyiyn-b.jpg",
            alt: "Back of the 1 Tyiyn Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Kyrgyz 1 Tyiyn",
    "",
    "Non-circulating Standard Banknote",
    "90 $\\times$ 70 mm",
    ""
);