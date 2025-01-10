let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/taiwan/1999/100-dollar-f.jpg",
            alt: "Front of the 100 Dollar Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/taiwan/1999/100-dollar-b.jpg",
            alt: "Back of the 100 Dollar Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Taiwanese 100 Dollars",
    "2000",
    "In circulation",
    "145 $\\times$ 70 mm",
    "Sun Yat-sen (1866-1925)"
);