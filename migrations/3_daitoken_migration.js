const daitoken = artifacts.require('DaiToken');

module.exports = async function(deployer){
    await deployer.deploy(daitoken);

    const daitokenGet = await daitoken.deployed()

    await daitokenGet.mint(
        '0xf45A9e3BD552578be8Ba1D1a71deEef72e55D90a',
        '1000000000000000000000'
    )
}