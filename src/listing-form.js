import React from 'react';

class ListingForm extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="listingform">
                <form>
                    <br></br>
                    Listing name:
                    <br></br>
                    <input type="text" name="listingname"></input>
                    <br></br>
                    Listing price (cash if non-digital payment, ether if digital):
                    <br></br>
                    <input type="text" name="listingprice"></input>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                    <p><i>Your address, {this.props.address}, will be recorded, and your listing will also be verified by a moderator.</i></p>
                </form>
            </div>
        );
    }
}

export default ListingForm;