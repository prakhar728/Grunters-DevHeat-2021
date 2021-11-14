import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import tetherURL from "../../assets/coins/tether.svg";
import chainlinkURL from "../../assets/coins/chainlink.svg";
import daiURL from "../../assets/coins/dai.svg";
import binanceURL from "../../assets/coins/binance.svg";

import "./Dashboard.css";
import Header from '../../components/Header/Header';

var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
    greet = 'Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Evening';

const Dashboard = () => {

    const database = [
        {
            id: 1,
            name: "Tether",
            notation: "USDT",
            image: tetherURL,
            balance: "12.45",
            history: []
        },
        {
            id: 2,
            name: "Chainlink",
            notation: "LINK",
            image: chainlinkURL,
            balance: "12.45",
            history: []
        },
        {
            id: 3,
            name: "DAI Coin",
            notation: "DAI",
            image: daiURL,
            balance: "12.45",
            history: []
        },
        {
            id: 4,
            name: "Binance Coin",
            notation: "BNB",
            image: binanceURL,
            balance: "12.45",
            history: []
        }
    ];

    return (
        <Fragment>
            <Header></Header>
            <article className="Dashboard">
                <div className="container">
                    <div>
                        <p className="greeting">Good {greet}. Welcome to your Dashboard.</p>
                    </div>
                    <div className="dashboard_grid">
                        {database.map(data => (
                            <Link to={{
                                pathname: `/wallet:${data.notation}`,
                                state: data
                            }} key={data.id}>
                                <div className="dashboard_grid_coin" key={data.id}>
                                    <figure>
                                        <img src={data.image} alt=""/>
                                    </figure>
                                    <div className="name_of_coin">{data.name}</div>
                                    <div className="balance">{data.balance} {data.notation}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </Fragment>
    );
}

export default Dashboard;