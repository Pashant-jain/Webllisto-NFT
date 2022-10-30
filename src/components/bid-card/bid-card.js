import React from "react";
import "./bid-card.scss";
import unliked from '../../assets/images/unliked_heart.gif'
import liked from '../../assets/images/liked_heard.png'

export const BidCard = () => {
  return (
    <div className="birdcard_wrp">
      <div className="bidcard_inner">
        <div className="card_wrp">
          <img src="https://nft-tailwind.preview.uideck.com/images/picks/image-01.svg" alt="" />
        </div>
        <div className="card_dtl_wrp">
          <h3>3d abstract illustration</h3>
          <div className="d-flex justify-content-between align-items-center card_dtl_inner">
            <div className="d-flex align-items-center card_dtl_lft_wrp ">
              <figure>
                <img src="https://nft-tailwind.preview.uideck.com/images/picks/image-01.svg" alt="" />
              </figure>
              <div className="creator_dtl">
                <h4>@Devid_Mill...</h4>
                <span>creator</span>
              </div>
            </div>
            <div className="card_dtl_right_wrp">
              <h4>5.49 ETH</h4>
              <span>Current Bit</span>
            </div>
          </div>
        </div>
        <div  className=" d-flex justify-content-between align-items-center card_action_wrp" >
            <button type="button" className="place_bid_btn"  >Place Bid</button>
            <button type="button" className="d-flex justify-content-between align-items-center like_btn " >
                <img src={unliked} alt="" />
                <span>2.2 k</span>
            </button>
        </div>
      </div>
    </div>
  );
};
