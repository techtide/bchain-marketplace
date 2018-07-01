import React, { Component } from 'react';
import Listing from "./listing.js";
import ListingForm from './listing-form.js';
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
// import Marketplace from '../build/../contracts/Marketplace.json'
import './main.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showCreateForm: false
        }
    }

    onClick(e){
        e.preventDefault();
        this.setState({showCreateForm: !this.state.showCreateForm})
    }

    renderForm() {
        if(this.state.showCreateForm) {
            return(
            <ListingForm address="dummy-address"></ListingForm>
            );
        }
    }

    render() {
        return(
            <div>
                <div id="header">
                    <h1 id="inline-block"> Marketplace</h1>
                    <button type="button" id="header-button" onClick={this.onClick.bind(this)}>Create</button>
                </div>
                {this.renderForm()}
                <div className="grid">
                    <div className="col-1-3">
                        <Listing name="Car" price="1ETH"></Listing>
                    </div>
                    <div className="col-1-3">

                    </div>
                    <div className="col-1-3">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
