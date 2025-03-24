let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/israel/c/20-shekel-f.jpg",
            alt: "Front of the 20 Shekel Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/israel/c/20-shekel-b.jpg",
            alt: "Back of the 20 Shekel Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Israeli 20 Shekels",
    "2017",
    "Circulating Standard Banknote",
    "129 $\\times$ 71 mm",
    "Rachel Bluwstein (1890-1931)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/israel/c/50-shekel-f.jpg",
        alt: "Front of the 50 Shekel Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/israel/c/50-shekel-b.jpg",
        alt: "Back of the 50 Shekel Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Israeli 50 Shekels",
    "2014",
    "Circulating Standard Banknote",
    "136 $\\times$ 71 mm",
    "Shaul Tchernichovsky (1875-1943)",
    '2014\'s Top 12 Banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>'
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/israel/c/200-shekel-f.jpg",
        alt: "Front of the 50000 Rial Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/israel/c/200-shekel-b.jpg",
        alt: "Back of the 50000 Rial Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Israeli 200 Shekels",
    "2015",
    "Circulating Standard Banknote",
    "150 $\\times$ 71 mm",
    "Nathan Alterman (1910-1970)",
    '2015\'s Top 20 Banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>'
);