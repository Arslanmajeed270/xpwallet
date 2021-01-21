import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loginUser } from '../../../store/Actions';
import { appendScript, removeScript } from '../../../scriptLoader/loadScript';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/common/Spinner';

class index extends Component {
    constructor(props) {
		super(props);
		this.state = {
            loading: false,
            email:'',
            password:''
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
    }

    componentWillUnmount(){
        removeScript();
    }

    onChange = e =>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit = e =>{
        e.preventDefault();
        const { email, password } = this.state;
        const { history, onLogin } = this.props;
        const userData = {
			emailAddress: email,
			password: password,
        };
        console.log('request Packet', userData);
        onLogin(userData , history);
    }

    render() {
        const { email , password, loading } = this.state;
        var pageContent = <Spinner /> 
        if( !loading ){
            pageContent = (
                <div className="form-container">
            <div className="note text-center">
                <img className="form-logo" src="./assets/media/xp_wallet_form.png" alt="xp_wallet_form.png" />
                <h2 className="noteTitle">Login</h2>
                <p className="noteDetails">Pay and send money easily!</p>
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
                <Link to="/register" className="redirectLink">Create new account</Link>
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
		onLogin: (userData, history) =>
			dispatch(loginUser(userData, history)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);