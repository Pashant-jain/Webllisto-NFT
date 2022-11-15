import React,{useState,useEffect} from "react";
import "./connect.scss";
import metamask_logo from "../../assets/images/metamask_logo.svg";
import kaikas_logo from "../../assets/images/kaikas_logo.svg";
import { ethers } from 'ethers';
import { Spiner } from "../../components/spiner/spiner";
const provider = new ethers.providers.Web3Provider(window.ethereum);  

export const Connect = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);


  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
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
            <div   onClick={connectWallet} className="wallet_block text-left ">
              <figure>
                <img src={metamask_logo} alt='metamask' />
              </figure>
              <h2>Meta Mask</h2>
              {isConnected ? (<p> {accountAddress.slice(0, 4)}...
                    {accountAddress.slice(38, 42)}</p>)
                    :
                   (<p>Lorem ipsum dolor sit amet consectetur smit.</p>
              )}
            </div>
            <div className="wallet_block">
              <figure>
                <img src={kaikas_logo}  alt='kaikas' />
              </figure>
              <h2>Kaikas</h2>
              <p>Lorem ipsum dolor sit amet consectetur smit.</p>
            </div>
          </div>
           <p>Wallet Ballence {accountBalance}</p>
        </div>
      </div>
    </div>
  );
};
