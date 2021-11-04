import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//IMAGES
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

const Carrousel = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <Slider {...settings} className="container-carousel">
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
            </Slider>
        </>
    )
}

export default Carrousel;