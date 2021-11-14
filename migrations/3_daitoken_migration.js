const daitoken = artifacts.require('DaiToken');

module.exports = async function(deployer){
    await deployer.deploy(daitoken);

    const daitokenGet = await daitoken.deployed()

    await daitokenGet.mint(
        '0xD219d8ed431d8b4962C4Ede6f44a75a3fB046C7E',
        '1000000000000000000000'
    )
}