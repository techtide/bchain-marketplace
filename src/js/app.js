import React from 'react';
import Listing from "./listing.js";
import ListingForm from './listing-form.js';
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import marketplace from '../build/../contracts/marketplace.json'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            account: '0x0',
            listings: [],
            loading: true,
            showCreateForm: false
        }
        
        if(typeof web3 != 'undefined') {
            this.web3Provider = web3.currentProvider;
        } else {
            this.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
        }
        
        this.web3 = new Web3(this.web3Provider);
        
        this.marketplace = TruffleContract(marketplace);
        this.marketplace.setProvider(this.web3Provider);
    }

    onClick(e){
        e.preventDefault();
        this.setState({showCreateForm: !this.state.showCreateForm})
    }

    componentDidMount() {
        // TODO: Refactor with promise chain
        this.web3.eth.getCoinbase((err, account) => {
          this.setState({ account })
          this.marketplace.deployed().then((electionInstance) => {
            this.marketplaceInstance = marketplaceInstance
            this.watchEvents()
            this.marketplaceInstance.candidatesCount().then((candidatesCount) => {
              for (var i = 1; i <= candidatesCount; i++) {
                this.electionInstance.candidates(i).then((candidate) => {
                  const candidates = [...this.state.candidates]
                  candidates.push({
                    id: candidate[0],
                    name: candidate[1],
                    voteCount: candidate[2]
                  });
                  this.setState({ candidates: candidates })
                });
              }
            })
            this.electionInstance.voters(this.state.account).then((hasVoted) => {
              this.setState({ hasVoted, loading: false })
            })
          })
        })
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