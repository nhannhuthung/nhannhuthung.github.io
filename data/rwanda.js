let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/rwanda/2013/1000-franc-f.jpg",
            alt: "Front of the 1000 Franc Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/rwanda/2013/1000-franc-b.jpg",
            alt: "Back of the 1000 Franc Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Rwandan 1,000 Francs",
    "2019",
    "In circulation",
    "135 $\\times$ 65 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/rwanda/2013/2000-franc-f.jpg",
        alt: "Front of the 2000 Franc Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/rwanda/2013/2000-franc-b.jpg",
        alt: "Back of the 2000 Franc Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Rwandan 2,000 Francs",
    "2014",
    "In circulation",
    "143 $\\times$ 72 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/rwanda/2013/5000-franc-f.jpg",
        alt: "Front of the 5000 Franc Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/rwanda/2013/5000-franc-b.jpg",
        alt: "Back of the 5000 Franc Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Rwandan 5,000 Francs",
    "2014",
    "In circulation",
    "155 $\\times$ 85 mm",
    ""
);