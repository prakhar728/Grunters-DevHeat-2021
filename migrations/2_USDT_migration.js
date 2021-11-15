const USDTToken = artifacts.require('USDTToken');

module.exports = async function(deployer){
    await deployer.deploy(USDTToken);

    const usdt = await USDTToken.deployed()

    await usdt.mint(
        //REPLACE THIS ADDRESS FROM ANY ADDRESS OF THE TRUFFLE WORKSPACE CREATED,
        //  THE COINS GET MINTED TO THAT ADDRESS
        '0xEB7ADeC0dd96126d1f0C789d67a8aEa5f23843f5',
        '1000000000000000000000'
    )
}