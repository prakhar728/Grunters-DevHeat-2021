const USDTToken = artifacts.require('USDTToken');

module.exports = async function(deployer){
    await deployer.deploy(USDTToken);

    const usdt = await USDTToken.deployed()

    await usdt.mint(
        '0xEB7ADeC0dd96126d1f0C789d67a8aEa5f23843f5',
        '1000000000000000000000'
    )
}