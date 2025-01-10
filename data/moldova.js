const images = {
    [`${index}`]: [
        {
            src: "../images/collection/moldova/2015/1-leu-f.jpg",
            alt: "Front of the 1 Leu Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/moldova/2015/1-leu-b.jpg",
            alt: "Back of the 1 Leu Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Moldovan 1 Leu",
    "2015",
    "In circulation",
    "114 $\\times$ 58 mm",
    "Stephen III ((1433-1440)?-1504)"
);