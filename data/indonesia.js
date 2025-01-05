const images1 = [
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
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Indonesian 1,000 Rupiah",
    "2009",
    "In circulation",
    "141 $\\times$ 65 mm",
    "Kapitan Pattimura (1783-1817)"
);

const images2 = [
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
createSlideshow("slide2", images2);
new Slideshow("slideshow2");
generateSlideShowInfo(
    "info2",
    "Indonesian 2,000 Rupiah",
    "2015",
    "In circulation",
    "141 $\\times$ 65 mm",
    "Pangeran Antasari (1797-1862)"
);