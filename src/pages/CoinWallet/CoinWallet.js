import React, { Fragment, useState,useEffect } from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import USDTToken from '../../abis/USDTToken.json';
import ChainLinkToken from '../../abis/ChainLinkToken.json';
import DaiToken from '../../abis/DaiToken.json';
// To Be Removed After Styling 
import tetherURL from "../../assets/coins/tether.svg";
import Header from '../../components/Header/Header';
import Web3 from 'web3';
import "./CoinWallet.css";
const CoinWallet = ({tempDataCarrier,settempDataCarrier}) =>
{

    const [Balance, setBalance] = useState('');
    const [Transactions, setTransactions] = useState([]);
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('')
    const [tokenType, settokenType] = useState('');
    const [currentAddress, setcurrentAddress] = useState('')
    useEffect( async () => {
        console.log(tempDataCarrier);
        await loadWeb3();
        await loadBlockchainData();
    }, [])
    const handleClick = async (e) =>{
        e.preventDefault();
        console.log(address,amount);
        console.log(); 
        // tokenType.methods.transfer(address, (parseInt(amount)*(10^18))).send({ from: currentAddress });
        // window.web3.utils.toWei(this.amount.value, 'Ether')
        tokenType.methods.transfer(address, window.web3.utils.toWei(amount, 'Ether')).send({ from: currentAddress })
        setBalance(Balance-amount)
    }
    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async function loadBlockchainData() {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        setcurrentAddress(accounts[0]);
        // const tokenAddress = '0x330646231f76B45157cBBaC7cf03Dd0d13378529';
        const tokenAddress = tempDataCarrier.addressOf
        var tokenValue = '';
        if (tempDataCarrier.notation === 'LINK') { 
            tokenValue = new web3.eth.Contract(ChainLinkToken.abi, tokenAddress); 
        }
        else if (tempDataCarrier.notation === 'USDT') { 
            tokenValue = new web3.eth.Contract(USDTToken.abi, tokenAddress); 
        }
        else if (tempDataCarrier.notation === 'DAI') { 
            tokenValue = new web3.eth.Contract(DaiToken.abi, tokenAddress); 
        }
        settokenType(tokenValue)
        const balance = await tokenValue.methods.balanceOf(accounts[0]).call()
        if(balance)
        setBalance(web3.utils.fromWei(balance.toString(), 'Ether'))
            else
        setBalance(0)
        const transactions = await tokenValue.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: accounts[0] } })
        setTransactions(transactions);
    }

    return (
        <Fragment>
            <Header />
            <article className="CoinWallet">
                <div className="container">
                    <div className="navigation_slider">
                        <Link className="navigation_slider_button" to="">Wallet</Link>
                        <Link className="navigation_slider_button" to="history">History</Link>
                    </div>
                    <div>
                        <Routes>
                            <Route path="/" element={
                                <div className="Wallet_Section">
                                    <div className="Wallet_Card">
                                        <p>Balance</p>
                                        <p className="balance_amount">{Balance} {tempDataCarrier.notation}</p>
                                        <p className="circles">
                                            <span style={{ backgroundColor: "red" }}></span>
                                            <span style={{ backgroundColor: "yellow" }}></span>
                                            <span style={{ backgroundColor: "green" }}></span>
                                        </p>
                                        <figure>
                                            <img src={tetherURL} alt="Coin Logo" />
                                        </figure>
                                    </div>


                                    <div className="send_money">
                                        <form action="">
                                            <div>
                                                <label htmlFor="">Address</label>
                                                <p><input type="text" value={address} onChange={e => setAddress(e.target.value)} /></p>
                                            </div>
                                            <div>
                                                <label htmlFor="">Amount</label>
                                                <p><input type="number" value={amount} onChange={e => setAmount(e.target.value)} /></p>
                                            </div>
                                            <div className="btn_container">
                                                <button className="btn" onClick={handleClick}>SEND</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            } />
                            <Route path="history" element={

                                // Dummy Data

                                <div className="History">
                                    {/* <div className="history_card">
                                        <p className="debit">Sent</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div> */}
                                    { Transactions.map(transaction => (
                                            <div className="history_card">
                                                {<p className="debit">Sent</p>}
                                                <p>Address - {transaction.returnValues.to}</p>
                                                <p>Amount - {window.web3.utils.fromWei(transaction.returnValues.value.toString(), 'Ether')}</p>
                                            </div>
                                        ))
                                    }

                                </div>
                            } />
                        </Routes>
                    </div>
                </div>
            </article>
        </Fragment>
    );
}

export default CoinWallet;
