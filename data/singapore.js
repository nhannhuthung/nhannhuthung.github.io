let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/singapore/2004/2-dollar-f.jpg",
            alt: "Front of the 2 Dollar Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/singapore/2004/2-dollar-b.jpg",
            alt: "Back of the 2 Dollar Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Singaporean 2 Dollars",
    "",
    "Circulating Standard Banknote",
    "126 $\\times$ 63 mm",
    "Yusof Ishak (1910-1970)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/singapore/2004/5-dollar-f.jpg",
        alt: "Front of the 5 Dollar Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/singapore/2004/5-dollar-b.jpg",
        alt: "Back of the 5 Dollar Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Singaporean 5 Dollars",
    "",
    "Circulating Standard Banknote",
    "133 $\\times$ 66 mm",
    "Yusof Ishak (1910-1970)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/singapore/2004/10-dollar-f.jpg",
        alt: "Front of the 10 Dollar Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/singapore/2004/10-dollar-b.jpg",
        alt: "Back of the 10 Dollar Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Singaporean 10 Dollars",
    "",
    "Circulating Standard Banknote",
    "141 $\\times$ 69 mm",
    "Yusof Ishak (1910-1970)"
);