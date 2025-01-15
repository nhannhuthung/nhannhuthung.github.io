let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/scotland/clydesdale-bank/2016/5-pound-f.jpg",
            alt: "Front of the 5 Pound Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/scotland/clydesdale-bank/2016/5-pound-b.jpg",
            alt: "Back of the 5 Pound Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Scottish 5 Pounds - Clydesdale Bank",
    "2016",
    "Circulating Standard Banknote",
    "125 $\\times$ 65 mm",
    "William Arol (1839-1913)"
);