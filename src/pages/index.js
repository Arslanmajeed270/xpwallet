import React, { Component } from 'react';
import Header from '../components/header';
import SideBar from '../components/sidebar';

import Routes from './routes';

import LoginPopup from '../components/Popups/Login'

import { appendScript, removeScript } from '../scriptLoader/loadScript'



class index extends Component {
    constructor(props) {
		super(props);
		this.state = {
            loginPopup: false,
            confirmationPopup:false,
            successPopup:false,
            failedPopup:false,
            otpPopup:false
        }
    }

    componentDidMount(){
        console.log('checking i am here componentDidMount');
        appendScript();
    }

    componentWillUnmount(){
        console.log('checking i am here componentWillUnmount');
        removeScript();
    }

    closeCodeHandler = (model) => {
        this.setState({
            [model]: false,
        });
    };
    modelHandler = (model) => {
        if (model === 'loginPopup') {
            this.setState({ [model]: !this.state[model] });
        }
        else if (model === 'confirmationPopup') {
            this.setState({ [model]: !this.state[model] });
        }
        else if (model === 'successPopup') {
            this.setState({ [model]: !this.state[model] });
        }
        else if (model === 'failedPopup') {
            this.setState({ [model]: !this.state[model] });
        }
        else if (model === 'otpPopup') {
            this.setState({ [model]: !this.state[model] });
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.loginPopup && (
					<LoginPopup
						show={this.state.loginPopup}
						closeCodelHanlder={this.closeCodelHanlder}
						emailSigninHandler={this.modelHanlder}
					/>
				)}
                <Header />
                <SideBar />
                <Routes 
                   modelHandler = {this.modelHandler}
                   closeCodeHandler = {this.closeCodeHandler}
                />
            </React.Fragment>
        )
    }
}
export default index;