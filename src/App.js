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
          account: '0x0',
          listings: [],
          loading: true,
          // Component variables
          showCreateForm: false
        }

        if (typeof web3 != 'undefined') {
            this.web3provider = web3.currentProvider;
        } else {
            this.web3provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }

        this.web3 = new Web3(this.web3provider);

        this.Marketplace = TruffleContract(Marketplace);
        this.Marketplace.setProvider(this.web3provider);
        
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

  account: '0x0',
  listings: [],
  loading: true,
  // Component variablesexport default App;


if (typeof web3 != 'undefined') {
    this.web3provider = web3.currentProvide else {
        this.web3provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    this.web3 = new Web3(this.web3provider);

    this.Marketplace = TruffleContract(Marketplac;
      this.Marketplace.setProvider(this.web3provider);
      
