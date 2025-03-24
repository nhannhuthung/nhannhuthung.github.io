let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/england/g/10-pound-f.jpg",
            alt: "Front of the 10 Pound Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/england/g/10-pound-b.jpg",
            alt: "Back of the 10 Pound Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "English 10 Pounds",
    "2016",
    "Circulating Standard Banknote",
    "132 $\\times$ 69 mm",
    "Elizabeth II (1952-2022)",
    '2017\'s Top 22 Banknotes by <a href="https://www.theibns.org/joomla/index.php?option=com_content&view=article&id=138&Itemid=51" target="_blank" class="custom-link">IBNS</a>'
);