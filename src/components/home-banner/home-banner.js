import React from "react";
import "./home-banner.scss";
import bannerImg from "../../assets/images/banner_img.svg";
import { useNavigate } from "react-router-dom";
import { routeMap } from "../../rout-map";

export const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner_wrp">
      <div className="banner">
        <div className="container-fluid">
          <div className="row banner_inner">
            <div className="col-lg-6 col-md-12 my-auto">
              <h1>Webllisto NFT Marketplace and Web3 Platforms</h1>
              <p>
                Webllisto NFT Marketplace and Web3 Platform Webllisto NFT
                Marketplace and Web3 Platform Webllisto NFT Marketplace and Web3
                Platform Webllisto NFT Marketplace and Web3 Platform Webllisto
                NFT Marketplace and Web3 Platforms
              </p>
              <div className="d-flex banner_btn_wrp">
                <button
                  type="button"
                  onClick={() => navigate(routeMap.Gallery)}
                  className="color_btn"
                >
                  Explore now
                </button>
                <button type="button"   onClick={() => navigate(routeMap.Create)}>Upload Your Art</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12  my-auto  text-center">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
