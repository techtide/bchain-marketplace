pragma solidity ^0.4.17;

contract Sale {
    enum DealType { physical, digital } 
    enum PaymentOption { cash, crypto }
    
    struct Listing {
        // General meta-data of the listing.
        string listingName;
        uint price; 
        address listingMaker;
        // Logistics of the listing: How will it happen? How will the buyer pay?
        //DealType dealType;
        //PaymentOption paymentOption;
    }
    
    uint public currentKey;    
    mapping (uint => Listing) public listings;

    event ListingCreated(string nName, uint nPrice, address nListingMaker);

    // Empty container for new listings [TO-DO: FIGURE OUT BETTER, MORE EFFICENT WAY SOON]
    Listing private newListing; 

    constructor () public {
        currentKey = 0;    
    }

    function payForListing(uint listingId) public payable {
        uint listingPrice = listings[listingId].price;
        address listingPayee = listings[listingsId].listingMaker;
        address personPaying = msg.sender;

        require(personPaying.balance >= listingPrice);
        
        // Listing A: Car, 1 Ether, User A (address); with 100ETH
        
        // User B: Address; with 100ETH => payForListing
        
        // DEDUCT 1ETH FROM USER B => SALE.SOL (ADDRESS) TAKES 0.25(1ETH) => USER A GETS 1ETH-(0.25*1ETH)

    }

    function create(string nName, uint nPrice, address nListingMaker) public {
        newListing = Listing({listingName: nName, price: nPrice, listingMaker: nListingMaker});
        listings[currentKey+1]=newListing;
    }

    function deleteListing(uint id) public {
        delete listings[id];
    }
}