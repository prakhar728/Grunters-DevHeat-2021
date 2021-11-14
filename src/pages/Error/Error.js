import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import Header from "../../components/Header/Header";
import "./Error.css";

const Error = () => {
    return (
        <Fragment>
            <Header></Header>
            <article className="Error flex_regular">
                <div className="container">
                    <div className="illustration"></div>
                    <p>Oops, Something went wrong. Go back to <Link to="/dashboard"><u>dashboard</u></Link>.</p>
                </div>
            </article>
        </Fragment>
    );
}

export default Error;
