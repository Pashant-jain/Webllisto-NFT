import React, { useState, useEffect } from "react";
import "./connect.scss";
import metamask_logo from "../../assets/images/metamask_logo.svg";
import kaikas_logo from "../../assets/images/kaikas_logo.svg";
import { ethers } from "ethers";
import { Spiner } from "../../components/spiner/spiner";
import { toast } from "react-toastify";
import { id } from "ethers/lib/utils";
// import Caver from 'caver-js'


export const Connect = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [klatnaccountAddress, setKlatnaccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const checkMetamaskAvailability = async () => {
    if (!ethereum) {
      sethaveMetamask(false);
      toast.error("metamask  Wallet Not Found", {
        theme: "colored",
      });
    } else {
      sethaveMetamask(true);
      connectWallet();
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  // const kaikas = async () => {
  //   try {
  //     const caver = new Caver(klaytn)
  //     debugger
  //     let kaikasWalletaddress = (await window.klaytn.enable())[0];
  //     const balance = await caver.klay.getBalance(kaikasWalletaddress)
  //     setKlatnaccountAddress(kaikasWalletaddress);
  //     const klayProvider = window["klaytn"];
  //     // const account = provider.selectedAddress
  //     // const balance = await this.caver.klay.getBalance(account);
  //     console.log(klayProvider, "gha");
  //   } catch (error) {
  //     toast.error("kaikas Wallet Not Found", {
  //       theme: "colored",
  //     });
  //   }
  // };

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
                <p>Wallet Ballence {accountBalance}</p>
              </>
              ) : (
                <p>Lorem ipsum dolor sit amet consectetur smit.</p>
              )}
            </div>
            <div className="wallet_block">
              <figure>
                <img src={kaikas_logo} alt="kaikas" />
              </figure>
              <h2>Kaikas</h2>
              <p>
                {klatnaccountAddress.toString().substring(0, 5) +
                  "..." +
                  klatnaccountAddress
                    .toString()
                    .substr(klatnaccountAddress.length - 4)}
              </p>
              <p>Wallet Ballence </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
