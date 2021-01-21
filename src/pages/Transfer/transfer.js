import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class transfer extends Component {
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
                                <h2 className="noteTitle">Transfer Balance</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                                </div>
                                <form className="main-form customFieldDesign innerPageForm" id="addMoney">
                                <div className="form-group form-group-btn">
                                    <Link to="add-bank" className="btn btn-raised group-btn">Instant <span className="redirectDetails">Transfer from your bank account in minutes</span></Link>
                                </div>
                                <div className="form-group form-group-btn">
                                    <Link to="/add-card" className="btn btn-raised group-btn">Standard <span className="redirectDetails">Transfer from your credit card in 1 - 5 business days</span></Link>
                                </div>                       
                                <div className="form-group form-group-btn">
                                    <Link to="/add-xp-wallet" className="btn btn-raised group-btn">XP Wallet <span className="redirectDetails">Transfer to friends and family in minutes</span></Link>
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
export default transfer;