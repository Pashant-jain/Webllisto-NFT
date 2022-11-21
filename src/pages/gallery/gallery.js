import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BidCard } from "../../components/bid-card/bid-card";
import { Spiner } from "../../components/spiner/spiner";
import { galleryNftAction } from "../../redux/actions/gallery-action";
import { AllcollectionCategory } from "../../redux/actions/user-create-collection";
import "./gallery.scss";

export const Gallery = () => {
  const [data, setData] = useState();
  const [collection, setCollection] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await dispatch(galleryNftAction());
      const Collaction = await dispatch(AllcollectionCategory());
      if (res || Collaction) {
        setData(res);
        setCollection(Collaction);
        setLoading(false);
      }
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(collection);

  const onCategoryClickHandler = async(category) => {
    console.log("category name : ", category);
    setLoading(true);
    try {
      const res = await dispatch(galleryNftAction(category));
      const Collaction = await dispatch(AllcollectionCategory());
      if (res || Collaction) {
        setData(res);
        setCollection(Collaction);
        setLoading(false);
      }
    } catch (err) {}
  };
  console.log(collection);
  return (
    <div className="gallery_wrp">
      <div className="container-fluid">
        <div className="gallery_inner text-center ">
          <h1>Explore Items</h1>
          <div className="sort_wrp">
          <button
                type="button"
                onClick={(e) => onCategoryClickHandler(' ')}
              >
             All
              </button>
            {collection?.map((item) =>{
              return(
                <button
                type="button"
                onClick={(e) => onCategoryClickHandler((item.name).toLowerCase())}
              >
             {(item.name).toString().substring(0, 5) +
                      "..." }
              </button>
              )
            } )}
          
          </div>
          {loading ? (
            <div className="explore_nfts_spiner">
              <Spiner />
            </div>
          ) : (
            <div className="explore_nfts_wrp">
              {data?.map((data) => {
                return (
                  <React.Fragment key={data._id}>
                    <BidCard data={data} />
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
