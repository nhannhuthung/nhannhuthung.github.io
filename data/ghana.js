let index = 1;

const images = {
    [`${index}`]: [
        {
            src: "../images/collection/ghana/2007/1-cedi-f.jpg",
            alt: "Front of the 1 Cedi Bill",
            description: "Obverse"
        },
        {
            src: "../images/collection/ghana/2007/1-cedi-b.jpg",
            alt: "Back of the 1 Cedi Bill",
            description: "Reverse"
        }
    ]
};
createSlideshow("slide" + index, images[index]);
new Slideshow("slideshow" + index);
generateSlideShowInfo(
    "info" + index,
    "Ghanaian 1 Cedi",
    "2019",
    "In circulation",
    "137 $\\times$ 65 mm",
    "Kwame Nkrumah (1909-1972), Emmanuel Odarkwei Obetsebi Lamptey (1902-1963), William Ofori Atta (1910-1988), Ebenezer Ako Adjei (1916-2002), Joseph Boakye Danquah (1895-1965), Edward Akufo-Addo (1906-1979)"
);