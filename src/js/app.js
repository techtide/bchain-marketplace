import React from 'react';
import Listing from "./listing.js";
import ListingForm from './listing-form.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          showForm: false
        }
    }

    render() {
        return( 
            <div>
                <div id="header">
                    <h1 id="inline-block"> Marketplace </h1>
                    <button type="button" id="header-button" onClick="{showCreateListingForm}">Create</button>
                </div>
                <div class="grid">
                    <div class="col-1-3">
                        
                    </div>
                    <div class="col-1-3">
                        
                    </div>
                    <div class="col-1-3">
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default App;