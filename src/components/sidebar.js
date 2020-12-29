import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                        <a href="/dashboard">Home</a>
                        </li>
                        <li>
                        <a href="/add-money-1">Recharge</a>
                        </li>            
                        <li>
                        <a href="/transfer">Transfer</a>
                        </li>
                        <li>
                        <a href="/withdraw">Withdraw</a>
                        </li>            
                        <li>
                        <a href="/exchange">Exchange</a>
                        </li>             
                        <li>
                        <a href="/recent-transaction">Recent Transaction</a>
                        </li>            
                        <li>
                        <a href="#">Terms &amp; Conditions</a>
                        </li>              
                        <li>
                        <a href="#">Help &amp; Support</a>
                        </li>            
                        <li className="showResponsive">
                        <a href="#">Notification</a>
                        </li>
                        <li>
                        <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>

            </React.Fragment>
        )
    }
}
export default sidebar;