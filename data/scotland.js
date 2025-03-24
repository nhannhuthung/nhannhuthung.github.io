let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/scotland/royal-bank/1987-2001/1-pound-f.jpg",
            alt: "Front of the 1 Pound Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/scotland/royal-bank/1987-2001/1-pound-f.jpg",
            alt: "Back of the 1 Pound Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Scottish 1 Pound - Royal Bank",
    "1992",
    "Circulating Standard Banknote",
    "128 $\\times$ 65 mm",
    "Ilay Campbell (1734-1823)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/scotland/clydesdale-bank/2016/5-pound-f.jpg",
        alt: "Front of the 5 Pound Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/scotland/clydesdale-bank/2016/5-pound-b.jpg",
        alt: "Back of the 5 Pound Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Scottish 5 Pounds - Clydesdale Bank",
    "2016",
    "Circulating Standard Banknote",
    "125 $\\times$ 65 mm",
    "William Arol (1839-1913)",
    '2015\'s Top 20 Banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>'
);