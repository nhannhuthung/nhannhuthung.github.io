let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/zambia/1980/50-kwacha-f.jpg",
            alt: "Front of the 50 Kwacha Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/zambia/1980/50-kwacha-b.jpg",
            alt: "Back of the 50 Kwacha Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Zambian 50 Kwacha",
    "",
    "Circulating Standard Banknote",
    "153 $\\times$ 75 mm",
    "Kenneth Kaunda (1924-2021)"
);