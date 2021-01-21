import React, { Component } from 'react';
import Header from '../components/header';
import SideBar from '../components/sidebar';

import Routes from './routes';

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
        appendScript();
    }

    componentWillUnmount(){
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
        const { history } = this.props;
        return (
            <React.Fragment>
                <Header history={history}  />
                <SideBar />
                <Routes 
                   modelHandler = {this.modelHandler}
                   closeCodeHandler = {this.closeCodeHandler}
                   history={history}
                />
            </React.Fragment>
        )
    }
}

export default index;