import React from 'react';

class Listing extends React.Component {
    render() {
        return (
            <div className="listing">
                <p> Product Name: {this.props.name} </p>
                <p> Product Price: {this.props.price} </p>
            </div>
        );
    }
}

export default Listing;