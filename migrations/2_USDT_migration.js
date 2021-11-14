const USDTToken = artifacts.require('USDTToken');

module.exports = async function(deployer){
    await deployer.deploy(USDTToken);

    const usdt = await USDTToken.deployed()

    await usdt.mint(
        '0xD219d8ed431d8b4962C4Ede6f44a75a3fB046C7E',
        '1000000000000000000000'
    )
}