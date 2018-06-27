pragma solidity ^0.4.17;

contract Marketplace {
    uint public x;
    constructor () public {
        x=0;
    }   
    function increment() public {
        x+=1;
    }
    function decrement() public {
        x-=1;
    }
    function getX() public returns (uint) {
        return x;
    }
}