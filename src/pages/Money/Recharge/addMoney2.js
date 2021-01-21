import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCreditCardList } from '../../../store/Actions';
import Spinner from '../../../components/common/Spinner';

class addMoney2 extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: false,
            creditCardList:[]
        }
    }

    static getDerivedStateFromProps(props, state) {
		const { page, card } = props;
		let stateChanged = false;
        let changedState = {};
		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
        }
        
        if ( card && JSON.stringify(state.creditCardList) !== JSON.stringify(card.creditCardList) ) {
			changedState.creditCardList = card.creditCardList;
			stateChanged = true;
		}

		if (stateChanged) return changedState;
		return null;
    }

    componentDidMount(){
        const { onGetCreditCardList } = this.props;
        const requestData =  {
            customerId: "cus_I3EnBVQ0xAAmR9",
            channel: "xpwallet",
            requestPlatform: "web"
          }
          onGetCreditCardList(requestData)
        }

    render() {
        const { loading, creditCardList } = this.state;
        console.log('checking this.state: ', this.state);
        var pageContent = <Spinner /> 
        if( !loading ){
            pageContent = (
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
                                    {/* <div className="form-group form-group-btn icon-group">
                                        <Link to="/recharge-bank" className="btn btn-raised group-btn"><img src="./assets/media/ic_mastercard.png" alt="" />TD bank <span className="redirectDetails">Checking **** 0830 <br />Free <br />Bank transfer may take 3-5 working days depending on your account</span></Link>
                                    </div>                       */}
                                    {creditCardList && creditCardList.length ? creditCardList.map( (cardData, index) => (
                                        index < 5 && 
                                    <div key={index} className="form-group form-group-btn icon-group">
                                        <Link 
                                            to="/recharge-card" 
                                            className="btn btn-raised group-btn">
                                            <img src="./assets/media/ic_mastercard.png" alt="" />
                                            Adnan Qureshi 
                                            <span className="redirectDetails">{cardData && cardData.last4 ? `**** **** **** ${cardData.last4}` : ""} </span>
                                        </Link>
                                    </div>    
                                    ) ): ""}
                                                          
                                    {/* <div className="form-group form-group-btn icon-group img-center">
                                        <Link to="/add-bank" className="btn btn-raised group-btn"><img src="./assets/media/plus.png" alt="" />Add a bank</Link>
                                    </div>                       */}
                                    <div className="form-group form-group-btn icon-group img-center">
                                        <Link to="/add-card" className="btn btn-raised group-btn"><img src="./assets/media/plus.png" alt=""/>Add credit card</Link>
                                    </div>
                                    <label className="label-free">All transfer are subject to review are could be delayed or stopped if we identify an issue</label>  
                                    {/* <button type="submit" className="btn btn-primary btn-raised w-100">Next</button>           */}
                                    </form>
                                </div>   
                                </div> 
                            </div>
                            </div>
                        </div>
                        </div>
                </React.Fragment>
            );
        }
        return pageContent; 
    }
}

const mapStateToProps = (state) => {
	return {
        page: state.page,
        card: state.card
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetCreditCardList: (requestData) =>
            dispatch(getCreditCardList(requestData)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(addMoney2);