let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/eu/es1/5-euro-f.jpg",
            alt: "Front of the 5 Euro Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/eu/es1/5-euro-b.jpg",
            alt: "Back of the 5 Euro Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "European Union's 5 Euros",
    "2002",
    "In circulation",
    "120 $\\times$ 62 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/eu/es1/20-euro-f.jpg",
        alt: "Front of the 20 Euro Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/eu/es1/20-euro-b.jpg",
        alt: "Back of the 20 Euro Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "European Union's 20 Euros",
    "2002",
    "In circulation",
    "133 $\\times$ 72 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/eu/es2/5-euro-f.jpg",
        alt: "Front of the 5 Euro Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/eu/es2/5-euro-b.jpg",
        alt: "Back of the 5 Euro Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "European Union's 5 Euros",
    "2013",
    "In circulation",
    "120 $\\times$ 62 mm",
    ""
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/eu/es2/10-euro-f.jpg",
        alt: "Front of the 10 Euro Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/eu/es2/10-euro-b.jpg",
        alt: "Back of the 10 Euro Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "European Union's 10 Euros",
    "2014",
    "In circulation",
    "127 $\\times$ 67 mm",
    ""
);