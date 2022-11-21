import React, { useEffect } from "react";
import "./bid-card.scss";
import unliked from "../../assets/images/unliked_heart.gif";
import { Link } from "react-router-dom";
import { routeMap } from "../../rout-map";
// import liked from '../../assets/images/liked_heard.png'

export const BidCard = ({ data }) => {
  return (
    <Link  to={`${routeMap.Gallery}/${data._id}`} className="birdcard_wrp">
      <div className="bidcard_inner">
        <div className="card_wrp">
          <img
            src={data.preview_url}
            alt=""
          />
        </div>
        <div className="card_dtl_wrp">
          <h3>{data.title}</h3>
          <div className="d-flex justify-content-between align-items-center card_dtl_inner">
            <div className="d-flex align-items-center card_dtl_lft_wrp ">
              <figure>
                <img
                  src={data.userObj.image}
                  alt=""
                />
              </figure>
              <div className="creator_dtl">
                <h4>
                  {data?.created_by
                    ? data?.created_by.toString().substring(0, 5) +
                      "....." +
                      data?.created_by
                        .toString()
                        .substr(data?.created_by.length - 4)
                    : ""}
                </h4>
                <span>creator</span>
              </div>
            </div>
            <div className="card_dtl_right_wrp">
              <h4>{((data?.last_price)*10**(-18)).toFixed(2)} ETH</h4>

              {/* {data?.last_price
                    ? data?.last_price.toString().substring(0, 5) +
                      "..." 
                    : ""} */}
              <span>Current Bit</span>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-between align-items-center card_action_wrp">
          <button type="button" className="place_bid_btn">
            Place Bid
          </button>
          <button
            type="button"
            className="d-flex justify-content-between align-items-center like_btn "
          >
            <img src={unliked} alt="" />
            <span>{data.view_count}</span>
          </button>
        </div>
      </div>
    </Link>
   
  );
};
