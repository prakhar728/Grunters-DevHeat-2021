const ChainLinkToken = artifacts.require('ChainLinkToken');

module.exports = async function(deployer){
    await deployer.deploy(ChainLinkToken);

    const chainLink = await ChainLinkToken.deployed()

    await chainLink.mint(
        '0xD219d8ed431d8b4962C4Ede6f44a75a3fB046C7E',
        '1000000000000000000000'
    )
}