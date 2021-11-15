const ChainLinkToken = artifacts.require('ChainLinkToken');

module.exports = async function(deployer){
    await deployer.deploy(ChainLinkToken);

    const chainLink = await ChainLinkToken.deployed()

    await chainLink.mint(
        '0xEB7ADeC0dd96126d1f0C789d67a8aEa5f23843f5',
        '1000000000000000000000'
    )
}