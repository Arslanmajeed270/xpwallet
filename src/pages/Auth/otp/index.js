import React, { Component } from 'react'
import { connect } from 'react-redux';
import { verifyPin, generatePin, setCurrentUser } from '../../../store/Actions';
import Spinner from '../../../components/common/Spinner';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            digit_1: "",
            digit_2: "",
            digit_3: "",
            digit_4: "",
            otp:"",
            user: {}
        };
    }

    componentDidMount(){
        if( localStorage.getItem("registerUser") ){
            const { onSetCurrentUser } = this.props;
            const userData = JSON.parse(localStorage.getItem("registerUser"));
            onSetCurrentUser(userData);
        }
    }

    static getDerivedStateFromProps(props, state) {
		const { page, auth } = props;
		let stateChanged = false;
        let changedState = {};
        
		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
        }
        
        if ( auth && JSON.stringify(state.user) !== JSON.stringify(auth.user) ) {
			changedState.user = auth.user;
			stateChanged = true;
		}

		if (stateChanged) return changedState;
		return null;
    }
    
    otpFormHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        },()=>{
            const { digit_1, digit_2, digit_3 } = this.state;
            if( digit_3.length > 0 ) {
                document.getElementById("digit_4").focus();
            }
            else if( digit_2.length > 0 ) {
                document.getElementById("digit_3").focus();
            }
            else if( digit_1.length > 0 ) {
                document.getElementById("digit_2").focus();
            }
        });
    }

    resendHandler = () => {
        const { user } = this.state;
        const { onGeneratePin, history } = this.props;
        const otpData = {
            msisdn: user.phoneNumber,
            action:"register",
            channel:"xpwallet",
            requestPlatform:"web"
        };
        onGeneratePin(otpData, history);
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const { digit_1, digit_2, digit_3, digit_4, user} = this.state;
        const { onVerifyPin, history, location } = this.props;
        if(location.pathname === "/register-otp"){
            const otpData = 
            {
                msisdn:user.phoneNumber ? user.phoneNumber : "",
                pin: `${digit_1}${digit_2}${digit_3}${digit_4}`,
                channel:"xpwallet",
                requestPlatform:"web"
            };
            onVerifyPin( otpData, user, history );
        }
    }



    render() {
        const { digit_1, digit_2, digit_3, digit_4, loading } = this.state;

        var pageContent = <Spinner />;
        if(!loading){
            pageContent = (
                <div className="form-container">
                <div className="note text-center">
                    <img className="form-logo" src="./assets/media/xp_wallet_form.png" alt="xp_wallet_form.png" />
                    <h2 className="noteTitle">Verification</h2>
                    <p className="noteDetails">Enter the four digit code we sent you via your phone number</p>
                </div>
                <p id="formError" className="colorDanger errorText pt-2 text-center d-none">otp not matched</p>
                <form id="optVerificationForm" onSubmit={this.onSubmitHandler} className="digit-group text-center py-4" data-group-name="digits" data-autosubmit="false" autoComplete="off">
                    <input 
                    type="text" 
                    id="digit_1" 
                    name="digit_1" 
                    data-next="digit_2"  
                    maxlength="1"
                    value={digit_1}
                    onChange={this.otpFormHandler}
                    />
                    <input 
                    type="text" 
                    id="digit_2" 
                    name="digit_2" 
                    data-next="digit_3" 
                    data-previous="digit_1" 
                    maxlength="1" 
                    value={digit_2}
                    onChange={this.otpFormHandler}
                    />
                    <input 
                    type="text" 
                    id="digit_3" 
                    name="digit_3" 
                    data-next="digit_4" 
                    data-previous="digit_2" 
                    maxlength="1" 
                    value={digit_3}
                    onChange={this.otpFormHandler}
                    />
                    <input 
                    type="text" 
                    id="digit_4" 
                    name="digit_4" 
                    data-previous="digit_3" 
                    maxlength="1" 
                    value={digit_4}
                    onChange={this.otpFormHandler}
                    />
                    <p className="expireNote pt-2 pb-4">Code expire in: <span className="counter">00.60</span><span className="resendOtp d-none">Resend</span></p> 
                    <button type="button" onClick={this.resendHandler} style={{marginLeft: "20px", background: "#858d96" }} className="btn btn-primary btn-raised w-25">Resend !</button>
                    <button type="submit" className="btn btn-primary btn-raised w-25" style={{marginLeft: "20px"}} >Verify !</button>
                </form>
                </div>   
            );
        }
        return pageContent;
    }
}


const mapStateToProps = (state) => {
	return {
        page: state.page,
        auth: state.auth
	};
};


const mapDispatchToProps = (dispatch) => {
	return {
		onVerifyPin: (otpData, userData, history) =>
            dispatch(verifyPin(otpData, userData, history)),
        onGeneratePin: (userData, history) =>
            dispatch(generatePin(userData, history)),
        onSetCurrentUser: (user) =>
            dispatch(setCurrentUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);