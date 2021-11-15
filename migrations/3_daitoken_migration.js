const daitoken = artifacts.require('DaiToken');

module.exports = async function(deployer){
    await deployer.deploy(daitoken);

    const daitokenGet = await daitoken.deployed()

    await daitokenGet.mint(
        '0xEB7ADeC0dd96126d1f0C789d67a8aEa5f23843f5',
        '1000000000000000000000'
    )
}