import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BidCard } from "../../components/bid-card/bid-card";
import { galleryNftAction } from "../../redux/actions/gallery-action";
import "./gallery.scss";

export const Gallery = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(galleryNftAction());

        if (res) {
          setData(res);
          
        }
      } catch (err) {}
    };
    fetchData();
  }, []);
  console.log("test ", data);
  return (
    <div className="gallery_wrp">
      <div className="container-fluid">
        <div className="gallery_inner text-center ">
          <h1>Explore Items</h1>
          <div className="sort_wrp">
            <button type="button">All</button>
            <button type="button">Digital Art</button>
            <button type="button">All</button>
          </div>
          <div className="explore_nfts_wrp">
            {data?.map((data) =>{
           return(
         <React.Fragment key={data._id}>
            <BidCard  data={data}  />
         </React.Fragment>
           )
            })}
      
          </div>
        </div>
      </div>
    </div>
  );
};
