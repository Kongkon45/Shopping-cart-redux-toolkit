import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "/images/slider1.webp";
import slider2 from "/images/slider2.webp";
import slider3 from "/images/slider3.webp";
import slider4 from "/images/slider4.webp";
import slider5 from "/images/slider5.webp";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="slider1" />
        </div>
        <div>
          <img src={slider2} alt="slider2" />
        </div>
        <div>
          <img src={slider3} alt="slider3" />
        </div>
        <div>
          <img src={slider4} alt="slider4" />
        </div>
        <div>
          <img src={slider5} alt="slider5" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
