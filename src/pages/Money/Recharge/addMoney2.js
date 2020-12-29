import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../store/Actions/index';

class addMoney2 extends Component {
    constructor(props){
        super(props);
        this.state={
            creditCardList:[]
        }
    }
    componentDidMount(){
        const data =  {
            customerId: "cus_I3EnBVQ0xAAmR9",
            channel: "xpwallet",
            requestPlatform: "web"
          }
          console.log("req packet for card list",data)
          this.props.onGetCreditCardList(data)
        }

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
                                <form className="main-form customFieldDesign innerPageForm" id="addMoney2">
                                <div className="form-group form-group-btn icon-group">
                                    <a href="/recharge-bank" className="btn btn-raised group-btn"><img src="./assets/media/ic_mastercard.png" alt="" />TD bank <span className="redirectDetails">Checking **** 0830 <br />Free <br />Bank transfer may take 3-5 working days depending on your account</span></a>
                                </div>                      
                                <div className="form-group form-group-btn icon-group">
                                    <a href="/recharge-card" className="btn btn-raised group-btn"><img src="./assets/media/ic_mastercard.png" alt="" />Adnan Qureshi <span className="redirectDetails">**** **** **** 0830</span></a>
                                </div>                      
                                <div className="form-group form-group-btn icon-group img-center">
                                    <a href="/add-bank" className="btn btn-raised group-btn"><img src="./assets/media/plus.png" alt="" />Add a bank</a>
                                </div>                      
                                <div className="form-group form-group-btn icon-group img-center">
                                    <a href="/add-card" className="btn btn-raised group-btn"><img src="./assets/media/plus.png" alt=""/>Add credit card</a>
                                </div>
                                <label className="label-free">All transfer are subject to review are could be delayed or stopped if we identify an issue</label>  
                                <button type="submit" className="btn btn-primary btn-raised w-100">Next</button>          
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

const mapStateToProps = (state) => {
	return {
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetCreditCardList: (req_Packet) =>
            dispatch(actions.getCreditCardList(req_Packet)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(addMoney2);