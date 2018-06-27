var Sale = artifacts.require("./contracts/Sale.sol");

module.exports = function(deployer) {
  deployer.deploy(Sale);
};

