import React from "react";
import "./detail.scss";
import unliked from "../../assets/images/unliked_heart.gif";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const Detail = () => {
  return (
    <div className="details_wrp">
      <div className="container-fluid">
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
                <h2>3d locker illustration</h2>
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
                      src="https://nft-tailwind.preview.uideck.com/images/picks/creator-01.png"
                      alt="creator"
                      className=""
                    />
                  </figure>
                  <div className="">
                    <h3 className="">@Devid_Mill...</h3>
                    <span className="">Owned by</span>
                  </div>
                </div>
                <span className="veretical_line">&#124;</span>
                <div className="nft_createdby_wrp  d-flex justify-content-start align-items-center">
                  <figure>
                    <img
                      src="https://nft-tailwind.preview.uideck.com/images/picks/creator-01.png"
                      alt="creator"
                      className=""
                    />
                  </figure>
                  <div className="">
                    <h3 className="">@Devid_Mill...</h3>
                    <span className="">Create by</span>
                  </div>
                </div>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sodales mi felis, pretium tincidunt lorem varius ac. Curabitur
                mauris lacus, pretium vel neque nec, blandit pharetra nulla.
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
                        <div className="history d-flex justify-content-between align-items-center">
                          <div className="history_dtl d-flex justify-content-between align-items-center">
                            <figure>
                              <img
                                src="https://nft-tailwind.preview.uideck.com/images/picks/creator-01.png"
                                alt="creator"
                                className=""
                              />
                            </figure>
                            <div className="history_dtl_inner">
                              <h4>@Devid_Mill...</h4>
                              <span>5 Hours ago</span>
                            </div>
                          </div>
                          <div className="history_time">
                            <span className="">
                            11/02/2022, 07:13 PM
                              
                            </span>
                          </div>
                          <div className="history_price">
                            <span className="">
                              4.75 ETH
                              
                            </span>
                          </div>
                        </div>
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
      </div>
    </div>
  );
};
