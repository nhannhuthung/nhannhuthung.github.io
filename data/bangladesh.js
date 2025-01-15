let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/bangladesh/2-series/2013-f.jpg",
            alt: "Front of the 2 Taka Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/bangladesh/2-series/2013-b.jpg",
            alt: "Back of the 2 Taka Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Bangladeshi 2 Taka",
    "2013",
    "Circulating Standard Banknote",
    "100 $\\times$ 60 mm",
    "Bangabandhu Sheikh Mujibur Rahman (1920-1975)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/bangladesh/5-series/2015-f.jpg",
        alt: "Front of the 5 Taka Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/bangladesh/5-series/2015-b.jpg",
        alt: "Back of the 5 Taka Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Bangladeshi 5 Taka",
    "2015",
    "Circulating Standard Banknote",
    "142 $\\times$ 68 mm",
    "Bangabandhu Sheikh Mujibur Rahman (1920-1975)"
);