## DELOCK THE WALLET FOR YOUR CRYPTOCURRENCIES

![DeLockLogo](https://i.ibb.co/bP00qLg/logo.png)

**DeLock** - The crypto wallet can help in transferring crypto assets from one wallet address to another. Just connect your metamask wallet and start transfering on the blockchain.

Currently it supports the **ERC20** tokens - **USDT**, **ChainLink** and **DAI** that have been deployed over the blockchain.

This Dapp was made using React and Web3 for browser. It utilises Truffle migrate to imitate a blockchain and also deploy it's own Tokens on it. The user has to connect their metamask wallet through the metamask wallet extension in the browser. 

Here's a navigation Guide:

### THE HOME PAGE

<img src="https://i.ibb.co/dftPK5w/Screenshot-from-2021-11-15-01-26-27.png" width="300">

### THE DASHBOARD 


<img src="https://i.ibb.co/30PM9M6/Screenshot-from-2021-11-15-01-26-49.png" width="300">

### DASHBOARD FOR COIN


<img src="https://i.ibb.co/wBzkJVS/Screenshot-from-2021-11-15-01-27-21.png" width="300">

### TRANSACTION HISTORY FOR COIN 



<img src="https://i.ibb.co/wBzkJVS/Screenshot-from-2021-11-15-01-27-21.png" width="300">

### MAKE TRANSACTION


<img src="https://i.ibb.co/FYp01Sx/Screenshot-from-2021-11-15-01-29-28.png" width="300">

### META MASK PROMPTS TO COMPLETE THE TRANSACTION


<img src="https://i.ibb.co/gjKfK0H/Screenshot-from-2021-11-15-01-29-52.png" width="300">


## RUN ON YOUR LOCAL MACHINE

1. You need to have Truffle installed in your local Machine.
Configure the server to run on the `PORT NUMBER` 7545 and `NETWORK ID` 1337.

2. In the Migrations files replace the current address where the tokens will be minted to, by the first address in the truffle workspace created(you can choose any address first is usually easier).

3. Run `truffle compile` - to make sure all the files are compiled.

4. Run `truffle migrate` - to migrate the contracts to the blockchain.

5. Now from the abi files for ChainLinkToken, USDTToken, and DaiToken copy the address assigned and replace them in the file `Dashboard.js`.

6. Install all the web dependencies by running `npm i`.

7. You are all set. Run `npm start` and connect your metamask wallet to get started with the dapp.

### POINT FOR THE MENTORS 

The app might give a few plagiarism checks since me and my teammate use Templates to get started and not write the code from scratch. We usually use a specific part of react files to get started with the dependencies a lot easier and faster. Rest assured none of the code has been copied from somewhere though it might match with some other code online because all that was learned was through tutorial and the best practices are common with some youtubers.


# VIEW THE VIDEO [HERE](https://www.youtube.com/watch?v=QHXZJbxrzPc&feature=youtu.be)