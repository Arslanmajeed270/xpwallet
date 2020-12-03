import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import * as actions from '../../store/Actions/index';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfTransactionHistory: [],
          user:{}
        };
      }
      static getDerivedStateFromProps(props, state) {
        let authReducer = props.authReducer
        let walletReducer = props.walletReducer
    
        let stateChanged = false;
        let changedState = {};
    
        if (
          authReducer &&
          JSON.stringify(state.user) !== JSON.stringify(authReducer.user)
        ) {
          changedState.user = authReducer.user;
          stateChanged = true;
        }
        if (
            walletReducer &&
            JSON.stringify(state.listOfTransactionHistory) !== JSON.stringify(walletReducer.listOfTransactionHistory)
          ) {
            changedState.listOfTransactionHistory = walletReducer.listOfTransactionHistory;
            stateChanged = true;
          }
    
        if (stateChanged) {
          return changedState;
        }
        return null;
      }
      componentDidMount () {
          const { user } = this.state;

        const data ={
              customerId:user.userId,
              channel:"xpwallet",
              requestPlatform:"web"
            }
          this.props.onGetTransactionHistory(data)
      }

    render() {
        const { user , listOfTransactionHistory } = this.state
        console.log('this.state',this.state)
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab">
                        <div className="row">
                        <div className="col-12 col-xxl-8 order-mobile-2">
                            <div className="row mb-20">
                            <div className="col-12 col-lg-6">
                                <div className="theme-info-box">
                                <h2 className="infoBoxHeader">CURRENT BALANCE</h2>
                                <div className="boxBody">
                                    <div className="balanceRow">
                                    <div className="rowCol w-75">
                                        <div className="balanceData">
                                        <span className="creditIcon">
                                        </span>
                                        <div className="creditInfo">
                                            <p className="descirition">Available Balance</p> 
                                            <p className="credit">$ 3200</p> 
                                        </div>
                                        </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                        <div className="currencyInfo">
                                        <span className="currencyIcon">
                                            CAD
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="creditCardRow">
                                    <span className="creditCardIcon">
                                    </span>
                                    <div className="creditCardInfo">
                                        <p className="descirition">Master Card : 0175</p> 
                                    </div>                          
                                    <div className="creditCardLink w-25">
                                        <Link to="#">Change</Link> 
                                    </div>
                                    </div>
                                </div>
                                <Link to="#" className="infoBoxFooter footer-send">SEND MONEY</Link>
                                </div>
                            </div>                
                            <div className="col-12 col-lg-6 sm-mr-t-15">
                                <div className="theme-info-box">
                                <h2 className="infoBoxHeader">MY CARD</h2>
                                <div className="boxBody">
                                    <Link to="#">
                                        <img src="./assets/media/ic_card.png" alt="ic_card"  />
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>               
                            <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="theme-info-box">
                                <h2 className="infoBoxHeader">INVOICES</h2>
                                <div className="boxBody">
                                    <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                        <div className="balanceData">
                                        <span className="userRowIcon">
                                            <img src="./assets/media/ic_canada.png" alt=""/>
                                        </span>
                                        <div className="creditInfo">
                                            <p className="descirition">Invoice #55</p> 
                                            <p className="credit">$ 3200</p> 
                                        </div>
                                        </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                        <div className="actionCol text-right">
                                        <span className="downloadIco">
                                        </span>                            
                                        <span className="delIco">
                                        </span>
                                        </div>
                                    </div>
                                    </div>                      
                                    <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                        <div className="balanceData">
                                        <span className="userRowIcon">
                                            <img src="./assets/media/ic_us.png" alt=""/>
                                        </span>
                                        <div className="creditInfo">
                                            <p className="descirition">Invoice #55</p> 
                                            <p className="credit">$ 3200</p> 
                                        </div>
                                        </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                        <div className="actionCol text-right">
                                        <span className="downloadIco">
                                        </span>                            
                                        <span className="delIco">
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <Link to="#" className="infoBoxFooter footer-add">+ CREATE INCOICE</Link>
                                </div>
                            </div>                
                            <div className="col-12 col-lg-6 sm-mr-t-15">
                                <div className="theme-info-box">
                                <h2 className="infoBoxHeader">INVOICES</h2>
                                <div className="boxBody userAccounts">
                                    <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-70">
                                        <div className="balanceData">
                                        <span className="userRowIcon">
                                            <img src="./assets/media/ic_canada.png" alt=""/>
                                        </span>
                                        <div className="creditInfo">
                                            <p className="credit">Maria Jose Botin</p> 
                                            <p className="descirition">A/C: 0255555555555555</p> 
                                        </div>
                                        </div>
                                    </div>                        
                                    <div className="rowCol w-30">
                                        <div className="moneyInfo">
                                        <Link to="#" className="btn btn-theme"> Send Money </Link>
                                        </div>
                                    </div>
                                    </div>                      
                                    <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-70">
                                        <div className="balanceData">
                                        <span className="userRowIcon">
                                            <img src="./assets/media/ic_us.png" alt=""/>
                                        </span>
                                        <div className="creditInfo">
                                            <p className="credit">Maria Jose Botin</p> 
                                            <p className="descirition">A/C: 0255555555555555</p> 
                                        </div>
                                        </div>
                                    </div>                        
                                    <div className="rowCol w-30">
                                        <div className="moneyInfo">
                                        <Link to="#" className="btn btn-theme"> Send Money </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <Link to="#" className="infoBoxFooter footer-add">+ ADD</Link>
                                </div>
                            </div>
                            </div>              
                        </div>            
                        <div className="col-12 col-xxl-4 md-mr-t-15">
                            <div className="theme-info-box">
                            <div className="profileBox">
                                <Link to="/user-profile" className="theme-link">View</Link>
                                <div className="profileImg">
                                <img src="./assets/media/ic_profile_placeholder@2x.png" alt=""/>
                                </div>
                                <h2>Adnan Qureeshi</h2>
                                <p>adnan.ahsan21@gmail.com</p> 
                            </div>
                            <div className="boxBody">
                                <div className="creditCardRow">
                                <span className="creditCardIcon">
                                </span>
                                <div className="creditCardInfo">
                                    <p className="descirition">Master Card : 0175</p> 
                                </div>                          
                                <div className="creditCardLink w-25">
                                    <Link to="#">Change</Link> 
                                </div>
                                </div>
                            </div>
                            <div className="transactionDetails">
                                <div className="transactionHead">
                                <h2 className="transHead">
                                    RECENT TRANSACTION
                                </h2>
                                <Link to="#" className="theme-link">View All</Link>
                                </div>
                                <div className="boxBody scrollContainer">
                                <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                    <div className="balanceData">
                                        <span className="creditIcon">
                                        </span>
                                        <div className="creditInfo">
                                        <p className="credit">Grocery Bill</p> 
                                        <p className="descirition">14-May-2020</p> 
                                        </div>
                                    </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                    <div className="currencyInfo">
                                        <span className="currencyIcon colorDanger">
                                        - $24
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                    <div className="balanceData">
                                        <span className="creditIcon">
                                        </span>
                                        <div className="creditInfo">
                                        <p className="credit">Mobile Recharge</p> 
                                        <p className="descirition">14-May-2020</p> 
                                        </div>
                                    </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                    <div className="currencyInfo">
                                        <span className="currencyIcon colorSuccess">
                                        + $204
                                        </span>
                                    </div>
                                    </div>
                                </div>                      
                                <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                    <div className="balanceData">
                                        <span className="creditIcon">
                                        </span>
                                        <div className="creditInfo">
                                        <p className="credit">Mobile Recharge</p> 
                                        <p className="descirition">14-May-2020</p> 
                                        </div>
                                    </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                    <div className="currencyInfo">
                                        <span className="currencyIcon colorSuccess">
                                        + $204
                                        </span>
                                    </div>
                                    </div>
                                </div>                      
                                <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                    <div className="balanceData">
                                        <span className="creditIcon">
                                        </span>
                                        <div className="creditInfo">
                                        <p className="credit">Mobile Recharge</p> 
                                        <p className="descirition">14-May-2020</p> 
                                        </div>
                                    </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                    <div className="currencyInfo">
                                        <span className="currencyIcon colorSuccess">
                                        + $204
                                        </span>
                                    </div>
                                    </div>
                                </div>                      
                                <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                    <div className="balanceData">
                                        <span className="creditIcon">
                                        </span>
                                        <div className="creditInfo">
                                        <p className="credit">Mobile Recharge</p> 
                                        <p className="descirition">14-May-2020</p> 
                                        </div>
                                    </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                    <div className="currencyInfo">
                                        <span className="currencyIcon colorSuccess">
                                        + $204
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="balanceRow invoiceRow">
                                    <div className="rowCol w-75">
                                    <div className="balanceData">
                                        <span className="creditIcon">
                                        </span>
                                        <div className="creditInfo">
                                        <p className="credit">Mobile Recharge</p> 
                                        <p className="descirition">14-May-2020</p> 
                                        </div>
                                    </div>
                                    </div>                        
                                    <div className="rowCol w-25">
                                    <div className="currencyInfo">
                                        <span className="currencyIcon colorDanger">
                                        - $204
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
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
const mapStateToProps = (state) => {
    return {
      authReducer: state.authReducer,
      walletReducer : state.walletReducer
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onGetTransactionHistory: (data) => dispatch(actions.getTransactionHistory(data)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(index);
  