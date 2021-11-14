import React, { Fragment, useState } from 'react';
import { Routes, Link, Route, useLocation } from 'react-router-dom';
import USDTToken from '../../abis/USDTToken.json';
// To Be Removed After Styling 
import tetherURL from "../../assets/coins/tether.svg";
import Header from '../../components/Header/Header';
import Web3 from 'web3';
import "./CoinWallet.css";

const CoinWallet = () =>
{
    const [Balance, setBalance] = useState('');
    const [Transactions, setTransactions] = useState('');

    useEffect(() => {
        await loadWeb3();
        await loadBlockchainData();
    }, [])
    
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
        const tokenAddress = '0x330646231f76B45157cBBaC7cf03Dd0d13378529';
        const tokenValue = new web3.eth.Contract(USDTToken.abi, tokenAddress); 
        const balance = await tokenValue.methods.balanceOf(accounts[0]).call()
        setBalance(web3.utils.fromWei(balance.toString(), 'Ether'))
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
                                    {/* <div className="Wallet_Card">
                                        <p>Balance</p>
                                        <p className="balance_amount">{data.balance} {data.notation}</p>
                                        <p className="circles">
                                            <span style={{backgroundColor: "red"}}></span>
                                            <span style={{backgroundColor: "yellow"}}></span>
                                            <span style={{backgroundColor: "green"}}></span>
                                        </p>
                                        <figure>
                                            <img src={data.image} alt="Coin Logo"/>
                                            <label>{data.name}</label>
                                        </figure>
                                    </div>
                                     */}

                                    <div className="Wallet_Card">
                                        <p>Balance</p>
                                        <p className="balance_amount">{balance} USDT</p>
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
                                                <button className="btn">SEND</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            } />
                            <Route path="history" element={

                                // Dummy Data

                                <div className="History">
                                    <div className="history_card">
                                        <p className="debit">Sent</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    {/* <div className="history_card">
                                        <p className="credit">Recieved</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div> */}

                                    { Transactions.map(transaction => (
                                            <div className="history_card">
                                                {transaction.sent ? <p className="credit">Recieved</p> : <p className="debit">Sent</p>}
                                                <p>Amount - {transaction.amount}</p>
                                                <p>Address - {transaction.address}</p>
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
