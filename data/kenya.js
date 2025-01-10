let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/kenya/2019/100-shilling-f.jpg",
            alt: "Front of the 100 Shilling Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/kenya/2019/100-shilling-b.jpg",
            alt: "Back of the 100 Shilling Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Kenyan 100 Shillings",
    "2019",
    "In circulation",
    "128 $\\times$ 64 mm",
    ""
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/kenya/2019/200-shilling-f.jpg",
        alt: "Front of the 200 Shilling Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/kenya/2019/200-shilling-b.jpg",
        alt: "Back of the 200 Shilling Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Kenyan 200 Shillings",
    "2019",
    "In circulation",
    "133 $\\times$ 67 mm",
    ""
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/kenya/2019/500-shilling-f.jpg",
        alt: "Front of the 500 Shilling Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/kenya/2019/500-shilling-b.jpg",
        alt: "Back of the 500 Shilling Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Kenyan 500 Shillings",
    "2019",
    "In circulation",
    "138 $\\times$ 68 mm",
    ""
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/kenya/2019/1000-shilling-f.jpg",
        alt: "Front of the 1000 Shilling Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/kenya/2019/1000-shilling-b.jpg",
        alt: "Back of the 1000 Shilling Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Kenyan 1,000 Shillings",
    "2019",
    "In circulation",
    "143 $\\times$ 70 mm",
    ""
);