const ChainLinkToken = artifacts.require('ChainLinkToken');

module.exports = async function(deployer){
    await deployer.deploy(ChainLinkToken);

    const chainLink = await ChainLinkToken.deployed()

    await chainLink.mint(
        '0xf45A9e3BD552578be8Ba1D1a71deEef72e55D90a',
        '1000000000000000000000'
    )
}