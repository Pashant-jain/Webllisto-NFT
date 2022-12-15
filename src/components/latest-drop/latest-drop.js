import React, { useState, useEffect } from "react";
import { BidCard } from "../bid-card/bid-card";
import "./latest-drop.scss";
import { useDispatch } from "react-redux";
import { galleryNftAction } from "../../redux/actions/gallery-action";
import Slider from "react-slick";
import { Spiner } from "../spiner/spiner";

export const LatestDrop = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
        },
      },
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 649,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await dispatch(galleryNftAction());

        if (res) {
          setData(res);
          setLoading(false);
        }
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(data);
  return (
    <div className="latestdrop_wrp">
      <div className="container-fluid">
        <div className="latestdrop_inner">
          <div className="latest_drop_head_wrp">
            <h2>Latest Drop</h2>
          </div>
          <div className="latestdrop_slider_wrp">
            {loading ? (
              <div className="explore_nfts_spiner">
                <Spiner />
              </div>
            ) : (
              <>
                <Slider {...settings}>
                  {data?.map((data) => {
                    return (
                      <React.Fragment key={data._id}>
                        <BidCard data={data} />
                      </React.Fragment>
                    );
                  })}
                </Slider>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
