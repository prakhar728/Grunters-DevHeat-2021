const daitoken = artifacts.require('DaiToken');

module.exports = async function(deployer){
    await deployer.deploy(daitoken);

    const daitokenGet = await daitoken.deployed()

    await daitokenGet.mint(
        //REPLACE THIS ADDRESS FROM ANY ADDRESS OF THE TRUFFLE WORKSPACE CREATED,
        //  THE COINS GET MINTED TO THAT ADDRESS
        '0xEB7ADeC0dd96126d1f0C789d67a8aEa5f23843f5',
        '1000000000000000000000'
    )
}