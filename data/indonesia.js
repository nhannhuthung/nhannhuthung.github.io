let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/indonesia/2000-2014/1000-rupiah-f.jpg",
            alt: "Front of the 1000 Rupiah Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/indonesia/2000-2014/1000-rupiah-b.jpg",
            alt: "Back of the 1000 Rupiah Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indonesian 1,000 Rupiah",
    "2009",
    "Circulating Standard Banknote",
    "141 $\\times$ 65 mm",
    "Kapitan Pattimura (1783-1817)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/indonesia/2000-2014/2000-rupiah-f.jpg",
        alt: "Front of the 2000 Rupiah Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/indonesia/2000-2014/2000-rupiah-b.jpg",
        alt: "Back of the 2000 Rupiah Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Indonesian 2,000 Rupiah",
    "2015",
    "Circulating Standard Banknote",
    "141 $\\times$ 65 mm",
    "Pangeran Antasari (1797-1862)"
);