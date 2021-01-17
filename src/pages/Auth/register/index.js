import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../store/Actions/authActions';
import { appendScript, removeScript } from '../../../scriptLoader/loadScript';
class Index extends Component {

    constructor(props) {
		super(props);
		this.state = {
            firstName:'',
            lastName:'',
            userName:'',
            emailAddress:'',
            phoneNumber:'',
            address:'',
            currency:1,
            password:'',
            confirmPassword:'',
            
		};
    }

    static getDerivedStateFromProps(props, state) {
		const {page, errors } = props;
		let stateChanged = false;
        let changedState = {};
        
		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
		}
		if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
			changedState.errors = errors;
			stateChanged = true;
		  }

		if (stateChanged) return changedState;
		return null;
    }
    
    componentDidMount(){
        appendScript();
    }

    componentWillUnmount(){
        removeScript();
    }


    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e =>{
        e.preventDefault();
        const { firstName, lastName, emailAddress, 
            phoneNumber, currency, address, userName, 
            password , confirmPassword } = this.state;
        
        const { onRegisterUser } = this.props;
        
        const userData = {
            firstName,
            lastName,
            userName,
            emailAddress,
            phoneNumber,
            address,
            currency,
            password,
            confirmPassword
        };
        console.log('checking userData: ', userData);
        onRegisterUser(userData);
    }
    render() {
        const { firstName, lastName, emailAddress, 
            phoneNumber, currency, address, userName, 
            password , confirmPassword } = this.state;
            
        return (
            <div className="form-container">
            <div className="note text-center">
                <h2 className="noteTitle">Start creating your account</h2>
                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
            </div>
            <form className="main-form customFieldDesign custom-form-row" id="RegisterForm" method="post" onSubmit={this.onSubmit} noValidate="novalidate">
                <div className="col-md-6 col-12">
                <div className="form-group">
                    <label htmlFor="formGroupInput" className="bmd-label-floating">First Name</label>
                    <input type="text" 
                        name="firstName" 
                        className="form-control" 
                        value={firstName} 
                        onChange={this.onChange} 
                        id="formGroupInput" />
                </div>
                </div>
                <div className="col-md-6 col-12">
                <div className="form-group">
                    <label htmlFor="formGroupInput2" className="bmd-label-floating">Last Name</label>
                    <input type="text" 
                        name="lastName" 
                        className="form-control" 
                        value={lastName} 
                        onChange={this.onChange} 
                        id="formGroupInput2" 
                    />
                </div>
                </div>
                <div className="col-md-6 col-12">              
                <div className="form-group">
                    <label htmlFor="formGroupInput3" className="bmd-label-floating">User Name</label>
                    <input 
                        type="text" 
                        name="userName" 
                        value={userName} 
                        onChange={this.onChange} 
                        className="form-control" 
                        id="formGroupInput3" 
                    />
                </div> 
                </div>
                <div className="col-md-6 col-12">             
                <div className="form-group">
                    <label htmlFor="formGroupInput4" className="bmd-label-floating">Email</label>
                    <input 
                        type="email" 
                        name="emailAddress" 
                        value={emailAddress} 
                        onChange={this.onChange} 
                        className="form-control" 
                        id="formGroupInput4" 
                    />
                </div>
                </div>
                <div className="col-md-6 col-12">               
                <div className="form-group customPhone">
                    <label htmlFor="formGroupInput5" className="bmd-label-floating ">Phone</label>
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        value={phoneNumber} 
                        onChange={this.onChange} 
                        className="form-control" 
                        id="formGroupInput5" 
                    />
                </div> 
                </div>
                <div className="col-md-6 col-12">              
                <div className="form-group select-box">
                    <label htmlFor="currencySelect" className="bmd-label-floating">Currency select</label>
                    <select className="form-control customSelect" 
                        value={currency} 
                        onChange={this.onChange} 
                        id="currencySelect" 
                        name="currency"
                    >
                    <option value={1} >Canadian dollar</option>
                    <option value={3}>US dollar</option>
                    <option value={2}> Pakistan rupee</option>
                    </select>
                </div> 
                </div> 
                <div className="col-12"> 
                <div className="form-group">
                    <label htmlFor="formGroupInput6" className="bmd-label-floating">Address</label>
                    <input type="text" name="address" className="form-control" value={address} onChange={this.onChange} id="formGroupInput6" />
                </div> 
                </div>
                <div className="col-md-6 col-12">   
                <div className="form-group passStrengthGroup">
                    <label htmlFor="password" className="bmd-label-floating">Password</label>
                    <input type="password" name="password" className="form-control strengthCheck" value={password} onChange={this.onChange} id="password" />
                    <span className="fieldTypeView">show</span>
                </div>  
                </div>
                <div className="col-md-6 col-12">             
                <div className="form-group">
                    <label htmlFor="confirm_password" className="bmd-label-floating">Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" value={confirmPassword} onChange={this.onChange} id="confirm_password" />
                    <span className="fieldTypeView">show</span>
                </div>
                </div>
                <div className="col-12"> 
                <div className="strenthInfo mb-2">
                    <span className="upperCase">One uppercase character</span>
                    <span className="numberCase">One number</span>
                    <span className="lowerCase">One lowercase character</span>
                    <span className="lengthCase">8 characters min</span>
                </div>
                </div>
                <div className="col-12">
                <button className="btn btn-primary btn-raised w-100" type="submit" >Next</button>
                </div>
            </form>
            <div className="infoBottom text-center">
                <a href="/login" className="redirect">I already have an account</a>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        page: state.page,
        errors: state.errors
	};
};


const mapDispatchToProps = (dispatch) => {
	return {
		onRegisterUser: (userData, history) =>
			dispatch(actions.registerUser(userData, history)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);