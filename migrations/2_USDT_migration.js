const USDTToken = artifacts.require('USDTToken');

module.exports = async function(deployer){
    await deployer.deploy(USDTToken);

    const usdt = await USDTToken.deployed()

    await usdt.mint(
        '0xf45A9e3BD552578be8Ba1D1a71deEef72e55D90a',
        '1000000000000000000000'
    )
}