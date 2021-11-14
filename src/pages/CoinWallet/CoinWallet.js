import React, { Fragment, useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';

// To Be Removed After Styling 
import tetherURL from "../../assets/coins/tether.svg";

import Header from '../../components/Header/Header';
import "./CoinWallet.css";

const CoinWallet = (data) => {

    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <Fragment>
            <Header/>
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
                                    </div> */}
                                    
                                    
                                    <div className="Wallet_Card">
                                        <p>Balance</p>
                                        <p className="balance_amount">7384.7348 USDT</p>
                                        <p className="circles">
                                            <span style={{backgroundColor: "red"}}></span>
                                            <span style={{backgroundColor: "yellow"}}></span>
                                            <span style={{backgroundColor: "green"}}></span>
                                        </p>
                                        <figure>
                                            <img src={tetherURL} alt="Coin Logo"/>
                                        </figure>
                                    </div>


                                    <div className="send_money">
                                        <form action="">
                                            <div>
                                                <label htmlFor="">Address</label>
                                                <p><input type="text" value={address} onChange={e => setAddress(e.target.value)}/></p>
                                            </div>
                                            <div>
                                                <label htmlFor="">Amount</label>
                                                <p><input type="number" value={amount} onChange={e => setAmount(e.target.value)}/></p>
                                            </div>
                                            <div className="btn_container">
                                                <button className="btn">SEND</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }/>
                            <Route path="history" element={
                                <div className="History">
                                    <div className="history_card">
                                        <p className="debit">Sent</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    <div className="history_card">
                                        <p className="credit">Recieved</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    <div className="history_card">
                                        <p className="debit">Sent</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    <div className="history_card">
                                        <p className="credit">Recieved</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    <div className="history_card">
                                        <p className="debit">Sent</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    <div className="history_card">
                                        <p className="credit">Recieved</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    <div className="history_card">
                                        <p className="debit">Sent</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                    <div className="history_card">
                                        <p className="credit">Recieved</p>
                                        <p>Amount - </p>
                                        <p>Address - </p>
                                    </div>
                                </div>
                            }/>
                        </Routes>
                    </div>
                </div>
            </article>
        </Fragment>
    );
}

export default CoinWallet;
