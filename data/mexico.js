let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/mexico/d/20-peso-f.jpg",
            alt: "Front of the 20 Peso Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/mexico/d/20-peso-b.jpg",
            alt: "Back of the 20 Peso Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mexican 20 Pesos",
    "1998",
    "Non-circulating Standard Banknote",
    "129 $\\times$ 65 mm",
    "Benito Juárez (1858-1872)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/mexico/d/50-peso-f.jpg",
        alt: "Front of the 50 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/d/50-peso-b.jpg",
        alt: "Back of the 50 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mexican 50 Pesos",
    "1998",
    "Non-circulating Standard Banknote",
    "129 $\\times$ 65 mm",
    "José María Morelos (1765-1815)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/mexico/f/50-peso-f.jpg",
        alt: "Front of the 50 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/f/50-peso-b.jpg",
        alt: "Back of the 50 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mexican 50 Pesos",
    "2015",
    "Circulating Standard Banknote",
    "127 $\\times$ 66 mm",
    "José María Morelos (1765-1815)"
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/mexico/g/20-peso-f.jpg",
        alt: "Front of the 20 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/g/20-peso-b.jpg",
        alt: "Back of the 20 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mexican 20 Pesos",
    "2021",
    "Circulating Standard/Commemorative Banknote",
    "120 $\\times$ 65 mm",
    ""
);

index = index + 1; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/mexico/g/50-peso-f.jpg",
        alt: "Front of the 50 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/g/50-peso-b.jpg",
        alt: "Back of the 50 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mexican 50 Pesos",
    "2023",
    "Circulating Standard Banknote",
    "65 $\\times$ 125 mm",
    ""
);

index = index + 1; //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/mexico/g/100-peso-f.jpg",
        alt: "Front of the 100 Peso Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mexico/g/100-peso-b.jpg",
        alt: "Back of the 100 Peso Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mexican 100 Pesos",
    "2023",
    "Circulating Standard Banknote",
    "65 $\\times$ 132 mm",
    "Juana Inés de la Cruz (1651-1695)"
);