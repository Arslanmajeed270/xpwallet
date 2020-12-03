import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import * as actions from '../store/Actions/index';

class sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                        <div className="sidebar-header">
                        <div className="accountInfo">
                            <img src="../media/ic_profile_placeholder@2x.png" alt="ic_profile_placeholder@2x.png" />
                            <span className="accountTitle">Adnan Q</span>
                        </div>
                        </div>
                        <li className="active">
                        <Link to="/dashboard">Home</Link>
                        </li>
                        <li>
                        <Link to="/add-money-1">Recharge</Link>
                        </li>            
                        <li>
                        <Link to="/transfer">Transfer</Link>
                        </li>
                        <li>
                        <Link to="/withdraw">Withdraw</Link>
                        </li>            
                        <li>
                        <Link to="/exchange">Exchange</Link>
                        </li>             
                        <li>
                        <Link to="/recent-transaction">Recent Transaction</Link>
                        </li>            
                        <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                        </li>              
                        <li>
                        <Link to="#">Help &amp; Support</Link>
                        </li>            
                        <li className="showResponsive">
                        <Link to="#">Notification</Link>
                        </li>
                        <li>
                        <Link to="#" 
                            onClick={() =>
                                this.props.onLogout(this.props.history)
                            }
                        >Logout</Link>
                        </li>
                    </ul>
                </nav>

            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: (history) => dispatch(actions.logoutUser(history)),
	};
};

export default connect(null, mapDispatchToProps)(sidebar);