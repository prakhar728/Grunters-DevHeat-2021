import React, { Fragment,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import tetherURL from "../../assets/coins/tether.svg";
import chainlinkURL from "../../assets/coins/chainlink.svg";
import daiURL from "../../assets/coins/dai.svg";
import binanceURL from "../../assets/coins/binance.svg";
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

const Dashboard = () => {
    const [token, settoken] = useState('');
    const [account, setaccount] = useState('')
    const [balance, setbalance] = useState('')
    useEffect( async () => {
        await loadWeb3();
        await loadBlockchainData();      
    }, [])

    async function loadWeb3(){
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
         setaccount(accounts[0]);
        //DAI TOKEN CALLING ------------------------------------------------
    
        // const daiTokenAddress = "0xBbe9c58120a4a37afcf68A0cFC45F4C66C7FC606" // Replace DAI Address Here
        // const tokenValue = new web3.eth.Contract(tokenValue.abi, daiTokenAddress)
        // this.setState({ tokenValue: tokenValue })
        // const balance = await tokenValue.methods.balanceOf(this.state.account).call()
        // console.log(balance.toString());
        // this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') })
        // const transactions = await tokenValue.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: this.state.account } })
        // this.setState({ transactions: transactions })
        // console.log(transactions)
    
        //USDT TOKEN CALLING ------ 
        
        // const usdtTokenAddress = "0x99f79a9B97b3fbf3E58bb71C1e45BDBd488cD41e"
        // const tokenValue  = new web3.eth.Contract(USDTToken.abi,usdtTokenAddress);
        // this.setState({tokenValue:tokenValue});
        // const balance = await tokenValue.methods.balanceOf(this.state.account).call()
        // this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') })
        // const transactions = await tokenValue.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: this.state.account } })
        // this.setState({ transactions: transactions })
        // console.log(transactions)
    
        //ChainLink Token CALLING ---- 
        // const chainLinkAddress = "0x21DF27FA2948C2A0bFFBE3195A1258e771446f12"
        // const tokenValue  = new web3.eth.Contract(ChainLinkToken.abi,chainLinkAddress);
        // settoken(tokenValue);
        // const balance = await tokenValue.methods.balanceOf(this.state.account).call()
        // this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') })
        // const transactions = await tokenValue.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: this.state.account } })
        // this.setState({ transactions: transactions })
        // console.log(transactions)
        const addressEs = {
            'ChainLinkToken':'0x21DF27FA2948C2A0bFFBE3195A1258e771446f12',
            'USDTToken':'0x99f79a9B97b3fbf3E58bb71C1e45BDBd488cD41e',
            'DaiToken':'0xBbe9c58120a4a37afcf68A0cFC45F4C66C7FC606'
        }
        for (const address in addressEs){
            const tokenAddress = addressEs[address];
            var tokenValue = ''
        if(address=='ChainLinkToken')
        {tokenValue  = new web3.eth.Contract(ChainLinkToken.abi,tokenAddress);}
        else if(address=='USDTToken')
        {tokenValue  = new web3.eth.Contract(USDTToken.abi,tokenAddress);}
        else if(address=='DaiToken')
        {tokenValue  = new web3.eth.Contract(DaiToken.abi,tokenAddress);}
        console.log(tokenValue);
        const balance = await tokenValue.methods.balanceOf(this.state.account).call()
        console.log(web3.utils.fromWei(balance.toString(), 'Ether'));
        // this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') })
        const transactions = await tokenValue.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: this.state.account } })
        // this.setState({ transactions: transactions })
        console.log(transactions);
        }
      }
    
      const transfer = (recipient, amount) => {
        this.state.tokenValue.methods.transfer(recipient, amount).send({ from: this.state.account })
      }
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