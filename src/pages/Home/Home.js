import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <Fragment>
            <Header></Header>
            <article className="Home">
                <div className="container">
                    <div className="landing">
                        <div>
                            <h1>Make your Crypto Transactions easier.</h1>
                            <p>Do More with Your Crypto. Jump start your Crypto Portfolio. Send and Recieve cryptocurrencies easily. Also, we are Secure.</p>
                            <div className="btn-container">
                                <Link to="/dashboard"><span className="btn">Get Started</span></Link>
                            </div>
                        </div>
                        <div className="landing_illustration"></div>
                    </div>
                    <div className="about">
                        <h1 className="about-heading">The Most trusted Cryptocurrency Wallet.</h1>
                        <div className="about_grid about_grid_front">
                            <div className="illustration illustration-1"></div>
                            <div className="info">
                                <h1>Manage your portfolio in the most secure fashion.</h1>
                                <p>Send and recieve cryptocurrencies using deLock. All transactions are secured and protected.</p>
                            </div>
                        </div>
                        <div className="about_grid about_grid_reverse">
                            <div className="illustration illustration-2"></div>
                            <div className="info">
                                <h1>Secure Storage</h1>
                                <p>We store vast majority of the digital assets in secure offline storage. We support a variety of cryptocurrencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <footer>
                <div className="container">
                    <div className="info">
                        <h1><i className="fa fa-lock"></i> deLock</h1>
                    </div>
                    <div className="social_media">
                        <div><i className="fa fa-facebook"></i></div>
                        <div><i className="fa fa-instagram"></i></div>
                        <div><i className="fa fa-linkedin"></i></div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Home;