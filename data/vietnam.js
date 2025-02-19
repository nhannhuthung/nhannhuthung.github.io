let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/vietnam/1987-2000/1000-dong-f.jpg",
            alt: "Front of the 1000 Dong Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/vietnam/1987-2000/1000-dong-b.jpg",
            alt: "Back of the 1000 Dong Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Vietnamese 1,000 Dong",
    "1988",
    "Circulating Standard Banknote",
    "134 $\\times$ 65 mm",
    "Ho Chi Minh (1890-1969)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/vietnam/1987-2000/2000-dong-f.jpg",
        alt: "Front of the 2000 Dong Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/vietnam/1987-2000/2000-dong-b.jpg",
        alt: "Back of the 2000 Dong Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Vietnamese 2,000 Dong",
    "1988",
    "Circulating Standard Banknote",
    "134 $\\times$ 65 mm",
    "Ho Chi Minh (1890-1969)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/vietnam/1987-2000/5000-dong-f.jpg",
        alt: "Front of the 10000 Dong Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/vietnam/1987-2000/5000-dong-b.jpg",
        alt: "Back of the 10000 Dong Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Vietnamese 5,000 Dong",
    "1991",
    "Circulating Standard Banknote",
    "134 $\\times$ 65 mm",
    "Ho Chi Minh (1890-1969)"
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/vietnam/2003/10000-dong-f.jpg",
        alt: "Front of the 10000 Dong Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/vietnam/2003/10000-dong-b.jpg",
        alt: "Back of the 10000 Dong Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Vietnamese 10,000 Dong",
    "",
    "Circulating Standard Banknote",
    "140 $\\times$ 68 mm",
    "Ho Chi Minh (1890-1969)"
);

index = index + 1; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/vietnam/2003/20000-dong-f.jpg",
        alt: "Front of the 20000 Dong Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/vietnam/2003/20000-dong-b.jpg",
        alt: "Back of the 20000 Dong Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Vietnamese 20,000 Dong",
    "",
    "Circulating Standard Banknote",
    "140 $\\times$ 68 mm",
    "Ho Chi Minh (1890-1969)"
);