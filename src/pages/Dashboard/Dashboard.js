import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import tetherURL from "../../assets/coins/tether.svg";
import chainlinkURL from "../../assets/coins/chainlink.svg";
import daiURL from "../../assets/coins/dai.svg";
// import binanceURL from "../../assets/coins/binance.svg";
import ChainLinkToken from '../../abis/ChainLinkToken.json'
import USDTToken from '../../abis/USDTToken.json';
import DaiToken from '../../abis/DaiToken.json'
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

const Dashboard = ({tempDataCarrier,settempDataCarrier}) => {
    const [loading, setloading] = useState(true);
    const [database, setdatabase] = useState([])
    useEffect( () => {
       getBlockChainReady();
    }, [])

    async function getBlockChainReady(){
        await loadWeb3();

        await loadBlockchainData();
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
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()

        //REPLACE WITH ADDRESS GENERATED AFTER RUNNING TRUFFLE MIGRATE
        const addressEs = {
            'USDTToken': '0xF5F456E42f4882AB7efC32E57165ab7Dce53B164',
            'ChainLinkToken': '0x8b95eDFDD161e759764A7fc329EBB42DA73aE777',
            'DaiToken': '0x014A8676F1f9d019E98569d4Bd2220cc8a55dFAb'
        }
        //REPLACE WITH ADDRESS GENERATED AFTER RUNNING TRUFFLE MIGRATE
        const tempDatabase = [
            {
                id: 1,
                addressOf:'0xF5F456E42f4882AB7efC32E57165ab7Dce53B164',
                name: "Tether",
                notation: "USDT",
                image: tetherURL,
                balance: "12.45",
                history: []
            },
            {
                id: 2,
                addressOf:'0x8b95eDFDD161e759764A7fc329EBB42DA73aE777',
                name: "Chainlink",
                notation: "LINK",
                image: chainlinkURL,
                balance: "12.45",
                history: []
            },
            {
                id: 3,
                addressOf:'0x014A8676F1f9d019E98569d4Bd2220cc8a55dFAb',
                name: "DAI Coin",
                notation: "DAI",
                image: daiURL,
                balance: "12.45",
                history: []
            }
           
        ];
        var count = 3;
        for (const address in addressEs) {
            const obj = tempDatabase[3-count];
            const tokenAddress = addressEs[address];
            var tokenValue = ''
            if (address === 'ChainLinkToken') { 
                tokenValue = new web3.eth.Contract(ChainLinkToken.abi, tokenAddress); 
            }
            else if (address === 'USDTToken') { 
                tokenValue = new web3.eth.Contract(USDTToken.abi, tokenAddress); 
            }
            else if (address === 'DaiToken') { 
                tokenValue = new web3.eth.Contract(DaiToken.abi, tokenAddress); 
            }
            const balance = await tokenValue.methods.balanceOf(accounts[0]).call()
            if(balance)
            obj.balance = web3.utils.fromWei(balance.toString(), 'Ether');
            else
            obj.balance=0;
            const transactions = await tokenValue.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: accounts[0] } })
            obj.history = transactions;
            console.log(transactions);
            count--;
        }
        setloading(false)
        setdatabase(tempDatabase)
    }

    return (
        <Fragment>
            <Header></Header>
            <article className="Dashboard">
                <div className="container">
                    <div>
                        <p className="greeting">Good {greet}. Welcome to your Dashboard.</p>
                    </div>
                    <div className="dashboard_grid">
                        {!loading && database.map(data => (
                            <Link to={{
                                pathname: `/wallet:${data.notation}`,
                                state: data
                            }} key={data.id} onClick={()=>{
                                settempDataCarrier(data)
                                // console.log(data);
                            }} >
                                <div className="dashboard_grid_coin" key={data.id}>
                                    <figure>
                                        <img src={data.image} alt="" />
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