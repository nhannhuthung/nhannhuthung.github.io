let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/pakistan/2005/100-rupee-f.jpg",
            alt: "Front of the 100 Rupee Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/pakistan/2005/100-rupee-b.jpg",
            alt: "Back of the 100 Rupee Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Pakistani 100 Rupees",
    "2015",
    "Circulating Standard Banknote",
    "139 $\\times$ 65 mm",
    "Muhammad Ali Jinnah (1876-1948)"
);