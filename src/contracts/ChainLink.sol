pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract ChainLinkToken is ERC20Mintable {
  string  public name;
  string  public symbol;
  uint256 public decimals;

  constructor() public {
    name = "ChainLink (LINK)";
    symbol = "LINK";
    decimals = 18;
  }
}
