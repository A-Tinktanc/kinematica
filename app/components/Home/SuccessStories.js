"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from "../../../public/assets/home/successStories/img1.png";
import img2 from "../../../public/assets/home/successStories/img2.png";
import img3 from "../../../public/assets/home/successStories/img3.png";
import img4 from "../../../public/assets/home/successStories/img4.png";
import img5 from "../../../public/assets/home/successStories/img5.png";
import img6 from "../../../public/assets/home/successStories/img6.png";
import img7 from "../../../public/assets/home/successStories/img7.png";
import img8 from "../../../public/assets/home/successStories/img8.png";
import img9 from "../../../public/assets/home/successStories/img9.png";

const SuccessStories = () => {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },

    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    
  };

  return (
    <div className=" py-10">
      <div className="uppercase">
        <h1>Success Stories</h1>
      </div>
      <div className="px-[20] h-44">
        <Slider {...settings}>
          {data.map((data) => (
            <div key={data.id} className=" w-48   ">
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  src={data.img}
                  alt=""
                  className=""
                  height={200}
                  width={200}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuccessStories;
