/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { generatePin, setCurrentUser } from '../../../store/Actions';
import { appendScript, removeScript } from '../../../scriptLoader/loadScript';
import Spinner from '../../../components/common/Spinner';
import { Link } from 'react-router-dom';
class Index extends Component {

    constructor(props) {
		super(props);
		this.state = {
            loading: false,
            firstName:'',
            lastName:'',
            userName:'',
            emailAddress:'',
            phoneNumber:'',
            address:'',
            currency:1,
            password:'',
            confirmPassword:''
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
    
    componentDidMount(){
        appendScript();
        if(localStorage.getItem("registerUser")){
            const userData = JSON.parse(localStorage.getItem("registerUser"));
            setTimeout(() => {
                this.setState({
                    ...userData
                });
            }, 1000);
        }
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
        
        const { onGeneratePin, onSetCurrentUser, history } = this.props;

        const otpData = {
            msisdn:phoneNumber,
            action:"register",
            channel:"xpwallet",
            requestPlatform:"web"
        };
        
        const user = {
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

        localStorage.setItem("registerUser", JSON.stringify(user));
        onSetCurrentUser(user);
        onGeneratePin(otpData, history);
    }

    render() {
        const { firstName, lastName, emailAddress, 
            phoneNumber, currency, address, userName, 
            password , confirmPassword, loading } = this.state;

            var pageContent = <Spinner /> 
            if( !loading ){
                pageContent = (<div className="form-container">
                <div className="note text-center">
                    <h2 className="noteTitle">Register account</h2>
                    <p className="noteDetails">Xp Wallet</p>
                </div>
                <form className="main-form customFieldDesign custom-form-row" id="RegisterForm" method="post" onSubmit={this.onSubmit} noValidate="novalidate">
                    <div className="col-md-6 col-12">
                    <div className={`form-group bmd-form-group ${firstName.length > 0 ? "is-filled has-success" : ""}`}>
                        <label htmlFor="formGroupInput" className="bmd-label-floating" >First Name</label>
                        <input type="text" 
                            name="firstName"
                            className="form-control" 
                            value={firstName} 
                            onChange={this.onChange} 
                            id="formGroupInput" />
                    </div>
                    </div>
                    <div className="col-md-6 col-12">
                    <div className={`form-group bmd-form-group ${lastName.length > 0 ? "is-filled has-success" : ""} `}>
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
                    <div className={`form-group bmd-form-group ${userName.length > 0 ? "is-filled has-success" : ""} `}>
                        <label htmlFor="formGroupInput3" className="bmd-label-floating">Create username</label>
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
                    <div className={`form-group bmd-form-group ${emailAddress.length > 0 ? "is-filled has-success" : ""} `}>
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
                    <div className={`form-group bmd-form-group customPhone ${phoneNumber.length > 0 ? "is-filled has-success" : ""} `}>
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
                    <div className={`form-group select-box bmd-form-group ${currency.length > 0 ? "is-filled has-success" : ""} `}>
                        <label htmlFor="currencySelect" className="bmd-label-floating">Select Currency</label>
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
                    <div className={`form-group select-box bmd-form-group ${address.length > 0 ? "is-filled has-success" : ""} `} >
                        <label htmlFor="formGroupInput6" className="bmd-label-floating">Address</label>
                        <input 
                        type="text" 
                        name="address" 
                        className={`form-control`} 
                        value={address} 
                        onChange={this.onChange} 
                        id="formGroupInput6" 
                        />
                    </div> 
                    </div>
                    <div className="col-md-6 col-12">   
                    <div className={`form-group passStrengthGroup bmd-form-group ${password.length > 0 ? "is-filled has-success" : ""} `}>
                        <label htmlFor="password" className="bmd-label-floating">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        className={`form-control strengthCheck`} 
                        value={password} 
                        onChange={this.onChange} 
                        id="password" 
                        />
                        <span className="fieldTypeView">show</span>
                    </div>  
                    </div>
                    <div className="col-md-6 col-12">             
                    <div className={`form-group strengthCheck bmd-form-group ${confirmPassword.length > 0 ? "is-filled has-success" : ""} `}>
                        <label htmlFor="confirm_password" className="bmd-label-floating">Confirm Password</label>
                        <input 
                        type="password" 
                        name="confirmPassword" 
                        className="form-control" 
                        value={confirmPassword} 
                        onChange={this.onChange} 
                        id="confirm_password" 
                        />
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
                    <Link to="/login" className="redirect">I already have an account</Link>
                </div>
                </div>
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
		onGeneratePin: (userData, history) =>
            dispatch(generatePin(userData, history)),
        onSetCurrentUser: (user) =>
        dispatch(setCurrentUser(user)),
            
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);