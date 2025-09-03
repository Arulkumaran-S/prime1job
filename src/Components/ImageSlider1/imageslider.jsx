//import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageslider.css";

const slides = [
  {
    title: "Syngrid Technologies Pte Ltd",
    description:
      "At Syngrid Technologies, one of the top tech companies in Singapore, we specialize in cutting-edge Zoho consulting, web development, cybersecurity, digital marketing, and e-commerce solutions to help businesses scale and succeed. With expertise in the latest technologies, we deliver future-ready digital solutions tailored to your needs.",
    buttonText: "Explore Now",
    image: require("../Assests/slider1.jpg"),
  },
  {
    title: "Automate and Grow Smarter",
    description:
      "Save time and improve your workflows with our built-in automation tools and CRM integration.",
    buttonText: "Get Started",
    image: require("../Assests/slider2.jpg"),
  },
  {
    title: "Automate and Grow Smarter",
    description:
      "Save time and improve your workflows with our built-in automation tools and CRM integration.",
    buttonText: "Get Started",
    image: require("../Assests/slider2.jpg"),
  },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide.image}
              alt={slide.title}
              className="slide-image"
            />
            <div className="overlay">
              <div className="text-content">
                <p className="subtitle">DIGITAL TRANSFORMATION</p>
                <h2>{slide.title}</h2>
                <p className="description">{slide.description}</p>
                <button className="cta-button">{slide.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
