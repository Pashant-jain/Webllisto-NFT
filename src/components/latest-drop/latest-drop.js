import React from "react";
import { BidCard } from "../bid-card/bid-card";
import "./latest-drop.scss";
import Slider from "react-slick";

export const LatestDrop = () => {
    const settings = {
        infinite: false,
        dots: false,
        speed: 300,
        swipeToSlide: false,
        focusOnSelect: true,
        autoplay: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeightSpeed: 750,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 979,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 649,
            settings: {
                slidesToShow: 1 ,
                slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <div className="latestdrop_wrp">
      <div className="container-fluid">
        <div className="latestdrop_inner">
            <div className="latest_drop_head_wrp" >
                <h2>Latest Drop</h2>
            </div>
            <div className="latestdrop_slider_wrp" >
            <Slider {...settings}>
                <BidCard/>
                <BidCard/>
                <BidCard/>
                <BidCard/>
                <BidCard/>
                <BidCard/>
                <BidCard/>
                <BidCard/>  
                </Slider>
            </div>
        </div>
      </div>
    </div>
  );
};
