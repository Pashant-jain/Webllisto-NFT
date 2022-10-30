import React from "react";
import "./connect.scss";
import metamask_logo from "../../assets/images/metamask_logo.svg";
import kaikas_logo from "../../assets/images/kaikas_logo.svg";

export const Connect = () => {
  return (
    <div className="connect_wrp">
      <div className="container-fluid">
        <div className="connect_inner text-center ">
          <h1>Connect Your Wallet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a{" "}
            <br />
            lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
          </p>
          <div className="wallets_wrp">
            <div className="wallet_block text-left ">
              <figure>
                <img src={metamask_logo} alt='metamask' />
              </figure>
              <h2>Meta Mask</h2>
              <p>Lorem ipsum dolor sit amet consectetur smit.</p>
            </div>
            <div className="wallet_block">
              <figure>
                <img src={kaikas_logo}  alt='kaikas' />
              </figure>
              <h2>Kaikas</h2>
              <p>Lorem ipsum dolor sit amet consectetur smit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
