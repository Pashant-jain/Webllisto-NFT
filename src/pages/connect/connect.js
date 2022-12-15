import React, { useState } from "react";
import "./connect.scss";
import metamask_logo from "../../assets/images/metamask_logo.svg";
import kaikas_logo from "../../assets/images/kaikas_logo.svg";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import Caver from "caver-js";
import { isMobile } from 'react-device-detect';

export const Connect = () => {
  const caver = new Caver(window.klaytn);
  const [accountAddress, setAccountAddress] = useState("");
  const [matamaskaccountBalance, setMetamaskAccountBalance] = useState("");
  const [klatnaccountAddress, setKlatnaccountAddress] = useState("");
  const [klatnaccountBalance, setKlatnaccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  const klayProvider = window["klaytn"];
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const checkMetamaskAvailability = async () => {
    if (ethereum) {
      try {
        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          let balance = await provider.getBalance(accounts[0]);
          let bal = ethers.utils.formatEther(balance);
          setAccountAddress(accounts[0]);
          setMetamaskAccountBalance(bal);
          setIsConnected(true);
         }
          if (isMobile){
          window.location.href =
          process.env.REACT_APP_METAMASK_DEEP_LINK_FOR_MOBILE;
       }
      } catch (error) {
        setIsConnected(false);
      }
    } else {
      toast.error("metamask  Wallet Not Found", {
        theme: "colored",
      });
    }
  };
  const kaikasConnect = async () => {
    try {
      let kaikasWalletaddress = (await window.klaytn.enable())[0];
      const balance = await caver.klay.getBalance(kaikasWalletaddress);
      setKlatnaccountAddress(kaikasWalletaddress);
      setKlatnaccountBalance(balance);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
      toast.error("kaikas Wallet Not Found", {
        theme: "colored",
      });
    }
  };
  { accountAddress &&
      ethereum.on("accountsChanged", function (accounts) {
        checkMetamaskAvailability()
      }) }
  {klatnaccountAddress &&
      klayProvider.on("accountsChanged", function (kaikasWalletaddress) {
        kaikasConnect()
      }) }

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
            <div
              onClick={() => checkMetamaskAvailability()}
              className="wallet_block text-left "
            >
              <figure>
                <img src={metamask_logo} alt="metamask" />
              </figure>
              <h2>Meta Mask</h2>
              {isConnected ? (
                <>
                  <p>
                    {" "}
                    {accountAddress.slice(0, 4)}...
                    {accountAddress.slice(38, 42)}
                  </p>
                  <p>Wallet Ballence {matamaskaccountBalance}</p>
                </>
              ) : (
                <p>Lorem ipsum dolor sit amet consectetur smit.</p>
              )}
            </div>
            <div onClick={kaikasConnect} className="wallet_block">
              <figure>
                <img src={kaikas_logo} alt="kaikas" />
              </figure>
              <h2>Kaikas</h2>

              {isConnected ? (
                <>
                  <p>
                    {klatnaccountAddress.toString().substring(0, 5) +
                      "..." +
                      klatnaccountAddress
                        .toString()
                        .substr(klatnaccountAddress.length - 4)}
                  </p>
                  <p>Wallet Ballence {klatnaccountBalance * 10 ** -18}</p>
                </>
              ) : (
                <p>Lorem ipsum dolor sit amet consectetur smit.</p>
              )}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
