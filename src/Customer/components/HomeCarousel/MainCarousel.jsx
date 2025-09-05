import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import img1 from './images/mainn2.jpg';
import img2 from './images/mainn3.png';



const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <img className="cursor-pointer" role='presentation' src={img1} alt="Slide 1" data-value="1" />,
    <img className="cursor-pointer" role='presentation' src={img2} alt="Slide 2" data-value="2" />,
     <img className="cursor-pointer" role='presentation' src={img1} alt="Slide 1" data-value="1" />,
    <img className="cursor-pointer" role='presentation' src={img2} alt="Slide 2" data-value="2" />,
     <img className="cursor-pointer" role='presentation' src={img1} alt="Slide 1" data-value="1" />,
    <img className="cursor-pointer" role='presentation' src={img2} alt="Slide 2" data-value="2" />,
    

];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={500}
        infinite
    />
);

export default Carousel;
