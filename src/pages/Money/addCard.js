import React, { Component } from 'react'

import { connect } from 'react-redux';
import { addCreditCard } from '../../store/Actions/index';
import Spinner from '../../components/common/Spinner';

class addCard extends Component {
    constructor(props) {
		super(props);
		this.state = {
            loading: false,
            cvc:'',
            cardExpiryMonthYear:'',
            cardNumber:'',
            cardHolderName:''
		};
    }

    static getDerivedStateFromProps(props, state) {
		const { page } = props;
		let stateChanged = false;
        let changedState = {};
		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
		}

		if (stateChanged) return changedState;
		return null;
    }
 

    onChange = e =>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit = e =>{
        e.preventDefault();
        const { cardHolderName , cardExpiryMonthYear, cardNumber, cvc } = this.state;
        const { history, onAddCreditCard } = this.props;
        const data = {
			customerId: "cus_I3EnBVQ0xAAmR9",
            cardHolderName,
            cardNumber,
            cardExpiryMonthYear,
            cvc
        };
        onAddCreditCard(data, history)
    }
    render() {
        const { loading, cardNumber, cardExpiryMonthYear, cvc, cardHolderName } = this.state;
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
                                    <h2 className="noteTitle">Add Credit Card</h2>
                                    <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                                    </div>
                                    <form className="main-form customFieldDesign innerPageForm" onSubmit={this.onSubmit} id="bankTransfer">
                                    <div className="form-group">
                                        <label htmlFor="formGroupInput" className="bmd-label-floating">Full Name</label>
                                        <input type="text" name="cardHolderName" value={cardHolderName} onChange={this.onChange} className="form-control" id="formGroupInput" />
                                    </div>                         
                                    <div className="form-group">
                                        <label htmlFor="formGroupInput2" className="bmd-label-floating">Card Number</label>
                                        <input type="text" name="cardNumber" value={cardNumber} onChange={this.onChange} className="form-control" id="formGroupInput2" />
                                    </div>
                                    <div className="form-group-row group-col-2">
                                        <div className="form-group customExpiryDate">
                                        <label htmlFor="formGroupInput3" className="bmd-label-floating ">Expiry Date</label>
                                        <input type="text" name="cardExpiryMonthYear" onChange={this.onChange} value={cardExpiryMonthYear} className="form-control ccValidate" maxLength={5} id="formGroupInput3" placeholder="MM/YY" />
                                        </div>                
                                        <div className="form-group">
                                        <label htmlFor="formGroupInput4" className="bmd-label-floating ">Security code</label>
                                        <input type="text" name="cvc" value={cvc} onChange={this.onChange} className="form-control " id="formGroupInput4" />
                                        </div>                
                                    </div>                                     
                                    <button type="submit" className="btn btn-primary btn-raised w-100">Submit</button>          
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
        page: state.page
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddCreditCard: (userData, history) =>
			dispatch(addCreditCard(userData, history)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(addCard);