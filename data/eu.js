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
    "Circulating Standard Banknote",
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
    "Circulating Standard Banknote",
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
    "Circulating Standard Banknote",
    "120 $\\times$ 62 mm",
    "",
    '2013\'s Top 12 Banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>'
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
    "Circulating Standard Banknote",
    "127 $\\times$ 67 mm",
    ""
);