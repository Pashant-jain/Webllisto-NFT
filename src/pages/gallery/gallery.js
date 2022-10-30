import React from "react";
import { BidCard } from "../../components/bid-card/bid-card";
import "./gallery.scss";

export const Gallery = () => {
  return (
    <div className="gallery_wrp">
      <div className="container-fluid">
        <div className="gallery_inner text-center ">
          <h1>Explore Items</h1>
          <div className="sort_wrp">
              <button type="button" >All</button>
              <button type="button" >Digital Art</button>
              <button type="button" >All</button>
            
          </div>
          <div className="explore_nfts_wrp" >
          <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
            <BidCard />
          </div>
        
        </div>
      </div>
    </div>
  );
};
