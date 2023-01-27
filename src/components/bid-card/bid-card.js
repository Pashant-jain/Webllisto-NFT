import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./bid-card.scss";
import unliked from "../../assets/images/unliked_heart.gif";
import { Link, useNavigate } from "react-router-dom";
import { routeMap } from "../../rout-map";
import liked from '../../assets/images/liked_heard.png'
import { reactOnPostAction } from "../../redux";

export const BidCard = ({ data}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [likeCount, setLikeCount] = useState(data?.total_like);

  const goToDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.target.nodeName === 'IMG' &&
      e.target.id == 'like_btn'
    ){
      return;
    }
    navigate(`${routeMap.Gallery}/${data._id}`)
  };
  const handleLike = async (e) =>{
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await dispatch(reactOnPostAction({collectible_id: data?._id }));
      if (res) { 
          setLikeCount(res.data.data.isLike ? 1 : 0)
      }
    } catch (err) {}
  }
  return (
    <div  onClick={(e) => goToDetails(e)} className="birdcard_wrp">
      <div className="bidcard_inner">
        <div className="card_wrp">
        {data.file_content_type === 'video/mp4' ? 
              <video controls width='100%' height='100%'>
              <source src={data.preview_url} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
                :
                <img
                src={data.preview_url}
                alt="collection_img"
              />
              }
          
        </div>
        <div className="card_dtl_wrp">
          <h3>{data.title}</h3>
          <div className="d-flex justify-content-between align-items-center card_dtl_inner">
            <div className="d-flex align-items-center card_dtl_lft_wrp ">
              <figure>
                <img
                  src={data.userObj.image}
                  alt="creater-image"
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
              {data?.last_price &&   <h4>{((data?.last_price)*10**(-18)).toFixed(2)} ETH</h4>}
             

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
          id="like_btn"
          onClick={(e) => handleLike(e)}
          className="d-flex justify-content-between align-items-center like_btn "
        >
          <img src={unliked} alt="like_img" />
          <span>{likeCount}</span>
        </button>
          
        </div>
      </div>
    </div>
   
  );
};
