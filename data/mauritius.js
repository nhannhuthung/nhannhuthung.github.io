let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/mauritius/1999/25-rupee-f.jpg",
            alt: "Front of the 25 Rupee Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/mauritius/1999/25-rupee-b.jpg",
            alt: "Back of the 25 Rupee Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mauritian 25 Rupees",
    "2003",
    "In circulation",
    "135 $\\times$ 65 mm",
    "Moilin Jean Ah-Chuen (1911-1991)"
);

index = index + 1; //index = 2
images[`${index}`] = [
    {
        src: "../images/collection/mauritius/1999/50-rupee-f.jpg",
        alt: "Front of the 50 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mauritius/1999/50-rupee-b.jpg",
        alt: "Back of the 50 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mauritian 50 Rupees",
    "2001",
    "In circulation",
    "140 $\\times$ 68 mm",
    "Joseph Maurice Paturau (1916-1996)"
);

index = index + 1; //index = 3
images[`${index}`] = [
    {
        src: "../images/collection/mauritius/1999/100-rupee-f.jpg",
        alt: "Front of the 100 Rupee Bill",
        description: "Obverse"
    },
    {
        src: "../images/collection/mauritius/1999/100-rupee-b.jpg",
        alt: "Back of the 100 Rupee Bill",
        description: "Reverse"
    }
];
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Mauritian 100 Rupees",
    "2004",
    "In circulation",
    "145 $\\times$ 70 mm",
    "Renganaden Seeneevassen (1910-1958)"
);