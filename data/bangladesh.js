const images1 = [
    {
        src: "../images/collection/bangladesh/2-series/2013-f.jpg",
        alt: "Front of the 2 Taka Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/bangladesh/2-series/2013-b.jpg",
        alt: "Back of the 2 Taka Bill",
        description: "Reverse"
    }
];
createSlideshow("slide1", images1);
new Slideshow("slideshow1");
generateSlideShowInfo(
    "info1",
    "Bangladeshi 2 Taka",
    "2013",
    "In circulation",
    "100 $\\times$ 60 mm",
    "Bangabandhu Sheikh Mujibur Rahman (1920-1975)"
);

const images2 = [
    {
        src: "../images/collection/bangladesh/5-series/2015-f.jpg",
        alt: "Front of the 5 Taka Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/bangladesh/5-series/2015-b.jpg",
        alt: "Back of the 5 Taka Bill",
        description: "Reverse"
    }
];
createSlideshow("slide2", images2);
new Slideshow("slideshow2");
generateSlideShowInfo(
    "info2",
    "Bangladeshi 5 Taka",
    "2015",
    "In circulation",
    "142 $\\times$ 68 mm",
    "Bangabandhu Sheikh Mujibur Rahman (1920-1975)"
);