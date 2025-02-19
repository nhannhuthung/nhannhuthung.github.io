let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/south-korea/2006/1000-won-f.jpg",
            alt: "Front of the 1000 Won Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/south-korea/2006/1000-won-b.jpg",
            alt: "Back of the 1000 Won Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "South Korean 1,000 Won",
    "",
    "Circulating Standard Banknote",
    "136 $\\times$ 68 mm",
    "Yi Hwang (1501-1570)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/south-korea/2006/5000-won-f.jpg",
        alt: "Front of the 5000 Won Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/south-korea/2006/5000-won-b.jpg",
        alt: "Back of the 5000 Won Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "South Korean 5,000 Won",
    "",
    "Circulating Standard Banknote",
    "142 $\\times$ 68 mm",
    "Yi I (1536-1584)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/south-korea/2006/10000-won-f.jpg",
        alt: "Front of the 10000 Won Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/south-korea/2006/10000-won-b.jpg",
        alt: "Back of the 10000 Won Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "South Korean 10,000 Won",
    "",
    "Circulating Standard Banknote",
    "148 $\\times$ 68 mm",
    "Sejong the Great (1397-1450)"
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/south-korea/2006/50000-won-f.jpg",
        alt: "Front of the 50000 Won Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/south-korea/2006/50000-won-b.jpg",
        alt: "Back of the 50000 Won Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "South Korean 50,000 Won",
    "",
    "Circulating Standard Banknote",
    "154 $\\times$ 68 mm",
    "Shin Saimdang (1504-1551)"
);

index = index + 1; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/south-korea/2018/2000-won-f.jpg",
        alt: "Front of the 2000 Won Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/south-korea/2018/2000-won-b.jpg",
        alt: "Back of the 2000 Won Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "South Korean 2,000 Won",
    "2018",
    "Circulating Commemorative Banknote",
    "140 $\\times$ 75 mm",
    ""
);