import React, { Component } from 'react';
import daiLogo from '../images/Dai/dai-logo.png';
import chainLinkLogo from '../images/ChainLink/ChainLink.png'
import './App.css';
import Web3 from 'web3';
import DaiToken from '../abis/DaiToken.json'
import USDTToken from '../abis/USDTToken.json';
import ChainLinkToken from '../abis/ChainLinkToken.json';
class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
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

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    
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
    const chainLinkAddress = "0x21DF27FA2948C2A0bFFBE3195A1258e771446f12"
    const tokenValue  = new web3.eth.Contract(ChainLinkToken.abi,chainLinkAddress);
    this.setState({tokenValue:tokenValue});
    const balance = await tokenValue.methods.balanceOf(this.state.account).call()
    this.setState({ balance: web3.utils.fromWei(balance.toString(), 'Ether') })
    const transactions = await tokenValue.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest', filter: { from: this.state.account } })
    this.setState({ transactions: transactions })
    console.log(transactions)

  }

  transfer(recipient, amount) {
    this.state.tokenValue.methods.transfer(recipient, amount).send({ from: this.state.account })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      tokenValue: null,
      balance: 0,
      transactions: []
    }

    this.transfer = this.transfer.bind(this)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            De Lock
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto" style={{ width: "500px" }}>
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={chainLinkLogo} width="150" />
                </a>
                <h1>{this.state.balance} ChainLink</h1>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const recipient = this.recipient.value
                  const amount = window.web3.utils.toWei(this.amount.value, 'Ether')
                  this.transfer(recipient, amount)
                }}>
                  <div className="form-group mr-sm-2">
                    <input
                      id="recipient"
                      type="text"
                      ref={(input) => { this.recipient = input }}
                      className="form-control"
                      placeholder="Recipient Address"
                      required />
                  </div>
                  <div className="form-group mr-sm-2">
                    <input
                      id="amount"
                      type="text"
                      ref={(input) => { this.amount = input }}
                      className="form-control"
                      placeholder="Amount"
                      required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Send</button>
                </form>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Recipient</th>
                      <th scope="col">value</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.transactions.map((tx, key) => {
                      return (
                        <tr key={key} >
                          <td>{tx.returnValues.to}</td>
                          <td>{window.web3.utils.fromWei(tx.returnValues.value.toString(), 'Ether')}</td>
                        </tr>
                      )
                    }) }
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
