let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/belarius/2000/50-ruble-f.jpg",
            alt: "Front of the 50 Ruble Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/belarius/2000/50-ruble-b.jpg",
            alt: "Back of the 50 Ruble Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Belarusian 50 Rubles",
    "2000",
    "Non-circulating Standard Banknote",
    "150 $\\times$ 69 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/belarius/2000/100-ruble-f.jpg",
        alt: "Front of the 100 Ruble Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/belarius/2000/100-ruble-b.jpg",
        alt: "Back of the 100 Ruble Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Belarusian 100 Rubles",
    "2000",
    "Non-circulating Standard Banknote",
    "150 $\\times$ 69 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/belarius/2000/500-ruble-f.jpg",
        alt: "Front of the 500 Ruble Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/belarius/2000/500-ruble-b.jpg",
        alt: "Back of the 500 Ruble Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Belarusian 500 Rubles",
    "2000",
    "Non-circulating Standard Banknote",
    "150 $\\times$ 74 mm",
    ""
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/belarius/2000/1000-ruble-f.jpg",
        alt: "Front of the 1,000 Ruble Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/belarius/2000/1000-ruble-b.jpg",
        alt: "Back of the 1000 Ruble Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Belarusian 1000 Rubles",
    "2000",
    "Non-circulating Standard Banknote",
    "150 $\\times$ 74 mm",
    ""
);