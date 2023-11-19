import React from "react";
import Heading from "./Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Destination() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {" "}
      <Heading />
      <div className="pl-[80px] py-[40px] w-full h-auto gap-4 overflow-hidden">
        <Slider {...settings}>
          <div className="relative1 h-[200px] w-[200px] bg-[url('./assets/card1.jpg')] mr-2 gap-3 bg-cover bg-center bg-opacity-50 flex items-center justify-center">
            <h3 className="text-3xl text-white font-semibold">
              Lorem, ipsum dolor.
            </h3>
          </div>

          <div className="relative1 h-[200px] w-[200px] bg-[url('./assets/card2.jpg')] bg-cover bg-center bg-opacity-50 flex items-center justify-center">
            <h3 className="text-3xl text-white font-semibold">
              Lorem, ipsum dolor.
            </h3>
          </div>

          <div className="relative1 h-[200px] w-[200px] bg-[url('./assets/card3.jpg')] bg-cover bg-center bg-opacity-50 flex items-center justify-center">
            <h3 className="text-3xl text-white font-semibold">
              Lorem, ipsum dolor.
            </h3>
          </div>

          <div className="relative1 h-[200px] w-[200px] bg-[url('./assets/card4.jpg')] bg-cover bg-center bg-opacity-50 flex items-center justify-center">
            <h3 className="text-3xl text-white font-semibold">
              Lorem, ipsum dolor.
            </h3>
          </div>

          <div className="relative1 h-[200px] w-[200px] bg-[url('./assets/card2.jpg')] bg-cover bg-center bg-opacity-50 flex items-center justify-center">
            <h3 className="text-3xl text-white font-semibold">
              Lorem, ipsum dolor.
            </h3>
          </div>

          <div className="relative1 h-[200px] w-[200px] bg-[url('./assets/card1.jpg')] bg-cover bg-center bg-opacity-50 flex items-center justify-center">
            <h3 className="text-3xl text-white font-semibold">
              Lorem, ipsum dolor.
            </h3>
          </div>
         
        </Slider>
      </div>
    </>
  );
}

export default Destination;
