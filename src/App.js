import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import React, { useRef, useState, useEffect } from 'react';
// import { AnimatePresence } from "framer-motion"; // cover Routes with the tag

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Error/Error";
import CoinWallet from './pages/CoinWallet/CoinWallet';

function App() {
    const [tempDataCarrier, settempDataCarrier] = useState('')
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/dashboard" element={<Dashboard tempDataCarrier={tempDataCarrier} settempDataCarrier={settempDataCarrier}/>}></Route>
                <Route path="/wallet:notation/*" element={<CoinWallet tempDataCarrier={tempDataCarrier} settempDataCarrier={settempDataCarrier}/>}></Route>
                <Route path="/error" element={<Error/>}></Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    );
}

export default App;
