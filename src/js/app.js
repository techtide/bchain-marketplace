import React from 'react';
import Listing from "./listing.js";

class App extends React.Component {
    render() {
        return( 
            <div>
                <h1> Marketplace </h1>
                <Listing name="Calculus Textbook" price="£30"></Listing>
            </div>
        );
    }
}

export default App;