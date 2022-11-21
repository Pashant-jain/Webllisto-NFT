import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./detail.scss";
import unliked from "../../assets/images/unliked_heart.gif";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { nftDetailAction, nftHistoryAction } from "../../redux";
import { useParams } from "react-router-dom";
import { Spiner } from "../spiner/spiner";
import Slider from "react-slick";

export const Detail = () => {
  const [data, setData] = useState();
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const collectible_id = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await dispatch(nftDetailAction(collectible_id));
        const history = await dispatch(nftHistoryAction(collectible_id));

        if (res || history) {
          setHistory(history)
          setData(res);
          
          setLoading(false);
        }
      } catch (err) {}
    };
    fetchData();
  }, []);
  // console.log(history);
  const settings = {
    infinite: false,
    dots: false,
    speed: 300,
    swipeToSlide: false,
    focusOnSelect: true,
    autoplay: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeightSpeed: 750,
 
  };
  // console.log(data);
  return (
    <div className="details_wrp">
      <div className="container-fluid">
        {data ? (
          <div className=" row details_inner">
            <div className="col-lg-6 col-md-12 dtl_lft_wrp">
              <div className="dtl_lft">
                <img
                  src="https://nft-tailwind.preview.uideck.com/images/item-details/image-01.png"
                  alt="details image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 dtl_right_wrp">
              <div className="dtl_right_inner ">
                <div className="heading_wrp d-flex justify-content-between align-items-center ">
                  <h2>{data?.title}</h2>
                  <button
                    type="button"
                    className="d-flex justify-content-between align-items-center like_btn "
                  >
                    <img src={unliked} alt="" />
                    <span>4.5k</span>
                  </button>
                </div>
                <div className="nft_dtl_wrp d-flex justify-content-start align-items-center">
                  <div className="nft_ownby_wrp  d-flex justify-content-start align-items-center">
                    <figure>
                      <img
                        src={data?.ownerObj.image}
                        alt="creator"
                        className=""
                      />
                    </figure>
                    <div className="">
                      <h3 className="">
                        {data?.ownerObj.name
                          ? data?.ownerObj.name
                          : (data?.ownerObj.wallet_address)
                              .toString()
                              .substring(0, 5) +
                            "..." +
                            (data?.ownerObj.wallet_address)
                              .toString()
                              .substr(data?.ownerObj.wallet_address.length - 4)}
                      </h3>
                      <span className="">Owned by</span>
                    </div>
                  </div>
                  <span className="veretical_line">&#124;</span>
                  <div className="nft_createdby_wrp  d-flex justify-content-start align-items-center">
                    <figure>
                      <img
                        src={data?.userObj.image}
                        alt="creator"
                        className=""
                      />
                    </figure>
                    <div className="">
                      <h3 className="">
                        {data?.userObj.name
                          ? data?.userObj.name
                          : (data?.userObj.wallet_address)
                              .toString()
                              .substring(0, 5) +
                            "..." +
                            (data?.userObj.wallet_address)
                              .toString()
                              .substr(data?.userObj.wallet_address.length - 4)}
                      </h3>
                      <span className="">Create by</span>
                    </div>
                  </div>
                </div>
                <p className="">
                 {data.description}
                </p>
                <div className="details_tab_wrp">
                  <Tabs
                    defaultActiveKey="History"
                    id="uncontrolled-tab-example"
                    className="details_tab"
                  >
                    <Tab eventKey="History" title="History">
                      <>
                        <div className="history_wrp">
                          {history?.map((item) => {
                          return(
                            <div key={item._id} className="history d-flex justify-content-between align-items-center">
                            <div className="history_dtl d-flex justify-content-between align-items-center">
                              <figure>
                                <img
                                  src={item?.image}
                                  alt="creator"
                                  className=""
                                />
                              </figure>
                              <div className="history_dtl_inner">
                                <h4>{item.type}</h4>
                                {/* <span>xbafdha
                               
                                </span> */}
                              </div>
                            </div>
                            <div className="history_time">
                              <span className="">{item.time}</span>
                            </div>
                            <div className="history_price">
                           
                              <span className="">{((item.amount)*10**(-18)).toFixed(2)} ETH</span>
                            </div>
                          </div>
                          )
                          })}
                        </div>
                      </>
                    </Tab>
                    <Tab eventKey="Offers" title="Offers">
                      <p>fcsdgsgbSDFg</p>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                      <p>fcsdgsgbSDFg</p>
                    </Tab>
                  </Tabs>
                </div>

                <button className="bid">Place Bid</button>
              </div>
            </div>
          </div>
        ) : (
          <Spiner />
        )}
      </div>
    </div>
  );
};
