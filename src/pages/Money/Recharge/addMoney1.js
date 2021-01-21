import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class addMoney1 extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab">
                        <div className="row">
                        <div className="col-12 h-100">
                            <div className="row no-gutters h-100 justify-content-center align-items-center">
                            <div className="form-container">
                                <div className="note text-center">
                                <h2 className="noteTitle">Recharge Wallet</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                                </div>
                                <form className="main-form customFieldDesign innerPageForm" id="addMoney">
                                <div className="form-group form-group-btn">
                                    <Link to="/add-money-2" className="btn btn-raised group-btn">Bank Account <span className="redirectDetails">Transfer from your bank account in minutes</span></Link>
                                </div>
                                <div className="form-group form-group-btn">
                                    <Link to="/add-money-2" className="btn btn-raised group-btn">Credit Card <span className="redirectDetails">Transfer from your credit card in 1 - 5 business days</span></Link>
                                </div>              
                                </form>
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
export default addMoney1;