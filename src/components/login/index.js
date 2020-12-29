import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/Actions';

class index extends Component {
    constructor(props) {
		super(props);
		this.state = {
            email:'',
            password:''
		};
    }
    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e =>{
		e.preventDefault();
        const userData = {
			emailAddress: this.state.email,
			password: this.state.password,
        };
        this.props.onLogin(userData , this.props.history)
        console.log('request Packet', userData)
    }
    render() {
        const { email , password } = this.state;
        return (
            <div className="form-container">
                            <div className="note text-center">
                                <img className="form-logo" src="./assets/media/xp_wallet_form.png" alt="xp_wallet_form.png" />
                                <h2 className="noteTitle">Welcome Back</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                            </div>
                            <form onSubmit={this.onSubmit} className="main-form customFieldDesign" id="loginForm">
                                <div className="form-group">
                                <label htmlFor="formGroupInput" className="bmd-label-floating">Email</label>
                                <input autoComplete="false" type="email" name="email" value={email} onChange={this.onChange} className="form-control" id="formGroupInput" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="formGroupInput2" className="bmd-label-floating">Password</label>
                                <input autoComplete="false" type="password" name="password" value={password} onChange={this.onChange} className="form-control" id="formGroupInput2" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-raised w-100">Submit</button>
                            </form>
                            <div className="infoBottom text-center">
                                <Link to="/register" className="redirectLink">Create an account</Link>
                            </div>
                            </div>   
                        
        )
    }
}
const mapDispatchToProps = (dispatch) => {
	return {
		onLogin: (userData, history) =>
			dispatch(actions.loginUser(userData, history)),
	};
};

export default connect(null, mapDispatchToProps)(index);