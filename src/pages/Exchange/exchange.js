import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class exchange extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab full-width-content">
                        <div className="row">
                        <div className="col-12 h-100">
                            <div className="border-box mb-3">
                            <div className="row">
                                <div className="col-12 mb-2 col-lg-8">
                                <h2 className="noteTitle pl-2">$75.18 CAD*</h2> 
                                <p className="noteDetails pb-3 pl-2">Available Balance</p>
                                <p className="noteDetailsInfo pl-2">* This amount is an estimate based on the most recent currency conversion rate.</p> 
                                </div>
                                <div className="col-12 col-lg-4 d-flex">
                                <button className="btn btn-theme-blue transfer mr-1">Transfer</button>
                                <button className="btn btn-theme-grey recharge">Recharge</button>
                                </div>
                            </div>
                            </div>                
                            <div className="border-box mb-3">
                            <div className="transferOption d-flex flex-md-row flex-column transactionSelect bdr-bottom">
                                <div className="d-flex flex-row align-items-center mb-2">
                                <img src="./assets/media/ic_canada.png" alt=""/>
                                <div className="details pl-3">
                                    <h2 className="transactionTitle">Canadian Dollar</h2>
                                    <a href="#" className="btn btn-theme badge">Primary</a>
                                </div>
                                </div>
                                <div className="ml-auto">
                                <div className="form-group">
                                    <select className="customSelect">
                                    <option>$0.00 CAD</option>
                                    <option>$1.00 CAD</option>
                                    <option>$10.00 CAD</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="transactionLinks p-lg-3 p-0">
                                <a href="#" className="theme-link">Automatic transfers</a>
                                <a href="#" className="theme-link pl-3">Convert currency</a>
                            </div>
                            </div>                 
                            <div className="border-box mb-3">
                            <div className="transferOption d-flex flex-md-row flex-column transactionSelect bdr-bottom">
                                <div className="d-flex flex-row align-items-center mb-2">
                                <img src="../assets/media/ic_canada.png" alt="" />
                                <div className="details pl-3">
                                    <h2 className="transactionTitle">Canadian Dollar</h2>
                                    <a href="#" className="btn btn-theme badge">Primary</a>
                                </div>
                                </div>
                                <div className="ml-auto">
                                <div className="form-group">
                                    <select className="customSelect">
                                    <option>$0.00 CAD</option>
                                    <option>$1.00 CAD</option>
                                    <option>$10.00 CAD</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="transactionLinks p-lg-3 p-0">
                                <a href="#" className="theme-link">Automatic transfers</a>
                                <a href="#" className="theme-link pl-3">Convert currency</a>
                            </div>
                            </div>
                            <div className="transactionAddOptions mb-3 px-lg-4 px-1">
                            <a href="#" className="theme-link pl-2">Add Currency</a>
                            <a href="#" className="theme-link icon-calculator pl-lg-4 pl-2">Currency Calculator</a>
                            </div>                
                            <div className="transactionAccounts pt-3">
                            <h2>
                                Bank accounts
                            </h2>
                            <div className="transaction-banks px-3 py-4 d-flex flex-lg-row flex-column align-items-center">
                                <img src="./assets/media/ic_bank.jpg" alt=""/>
                                <a className="pl-lg-4 mt-lg-0 mt-2" href="#">
                                <div className="link-account d-flex flex-column align-items-center justify-content-center">
                                    <img src="./assets/media/ic_link.png" alt=""/>
                                    <span className="theme-link pt-3">Link a new bank account</span> 
                                </div>
                                </a>
                            </div>
                            </div>                
                            <div className="transactionAccounts pt-3">
                            <h2>
                                Cards
                            </h2>
                            <div className="transaction-banks px-3 py-4 d-flex flex-lg-row flex-column align-items-center">
                                <div className="card-disabled d-flex align-items-center px-2">
                                <span className>****235</span>
                                <span className="colorDanger ml-auto">Expired</span>
                                </div>                      
                                <div className="card-disabled d-flex align-items-center ml-lg-3 ml-0 mt-lg-0 mt-2 px-2">
                                <span className>****235</span>
                                <span className="colorDanger ml-auto">Expired</span>
                                </div>
                                <a className="theme-link ml-lg-3 ml-0 mt-lg-0 mt-2 px-2" href="#">
                                + Add a credit card
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default exchange;