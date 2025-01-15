let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/india/1996/5-rupee-f.jpg",
            alt: "Front of the 5 Rupee Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/india/1996/5-rupee-b.jpg",
            alt: "Back of the 5 Rupee Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indian 5 Rupees",
    "",
    "Non-circulating Standard Banknote",
    "117 $\\times$ 63 mm",
    "Mahatma Gandhi (1869-1948)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/india/1996/10-rupee-f.jpg",
        alt: "Front of the 10 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/india/1996/10-rupee-b.jpg",
        alt: "Back of the 10 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indian 10 Rupees",
    "",
    "Non-circulating Standard Banknote",
    "117 $\\times$ 63 mm",
    "Mahatma Gandhi (1869-1948)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/india/1996/100-rupee-f.jpg",
        alt: "Front of the 100 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/india/1996/100-rupee-b.jpg",
        alt: "Back of the 100 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indian 100 Rupees",
    "",
    "Non-circulating Standard Banknote",
    "157 $\\times$ 73 mm",
    "Mahatma Gandhi (1869-1948)"
);

index = index + 1; //index = 4
images[`${index}`] = [
    {
        src: "../images/collection/india/2016/10-rupee-f.jpg",
        alt: "Front of the 10 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/india/2016/10-rupee-b.jpg",
        alt: "Back of the 10 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indian 10 Rupees",
    "2018",
    "Circulating Standard Banknote",
    "123 $\\times$ 63 mm",
    "Mahatma Gandhi (1869-1948)"
);

index = index + 1; //index = 5
images[`${index}`] = [
    {
        src: "../images/collection/india/2016/100-rupee-f.jpg",
        alt: "Front of the 100 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/india/2016/100-rupee-b.jpg",
        alt: "Back of the 100 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indian 100 Rupees",
    "2019",
    "Circulating Standard Banknote",
    "142 $\\times$ 66 mm",
    "Mahatma Gandhi (1869-1948)"
);

index = index + 1; //index = 6
images[`${index}`] = [
    {
        src: "../images/collection/india/1-series/2015-f.jpg",
        alt: "Front of the 1 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/india/1-series/2015-b.jpg",
        alt: "Back of the 1 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indian 1 Rupee",
    "2015",
    "Circulating Standard Banknote",
    "97 $\\times$ 63 mm",
    ""
);
