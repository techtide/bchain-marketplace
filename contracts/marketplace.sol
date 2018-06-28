pragma solidity ^0.4.17;

contract Marketplace {
    
    struct Listing {
        string name;
        uint price;
        address creator;
        /* mapping (uint=>address) listingOffers;  // All offers by users on a listing. */
    }

    uint private numberOfListings;
    mapping (uint=>Listing) public allListings;

    constructor () public {
        numberOfListings = 0;       
    }

    function createListing(string name, uint price) public {
        allListings[numberOfListings+1] = Listing(name, price, msg.sender);
        numberOfListings += 1;
    }

    function deleteListing(uint id) public {
        // It'd take more lines to write a modifier, because there's a mapping id.
        // require(msg.sender != allListings[id].creator);
        delete allListings[id];
        numberOfListings -= 1;
    }
}