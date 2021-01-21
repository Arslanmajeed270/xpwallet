import React, { Component } from 'react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class header extends Component {

    state = {
        user: {}
    }

    static getDerivedStateFromProps(props, state) {
		const { auth } = props;
		let stateChanged = false;
        let changedState = {};
		if ( auth && JSON.stringify(state.user) !== JSON.stringify(auth.user) ) {
			changedState.user = auth.user;
			stateChanged = true;
		}

		if (stateChanged) return changedState;
		return null;
    }

    logoutHandler = () => {
        const { history } = this.props;
        history.replace('/login');
        localStorage.removeItem("jwtToken");
    }

    render() {
        const { user } = this.state;
        return (
            <React.Fragment>
                <div className="header">
                    <div className="content-left">
                        <div className="siteLogo">
                        <img src="./assets/media/ic_logo.png" alt="ic_logo.png" />
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <span />
                            <span />
                            <span />
                            </button>
                        </div>
                        </nav>
                    </div>
                    <div className="content-right">
                        <div className="notificationLogo">
                        <Link to="#" className="notifications">
                            <img src="./assets/media/ic_notification.png" alt="ic_notification.png" />
                            <span className="count">0</span>
                        </Link>
                        </div>
                        <div className="accountInfo">
                        <MDBDropdown>
                            <MDBDropdownToggle color="primary">
                                <img src="./assets/media/ic_profile_placeholder.png" alt="ic_profile_placeholder.png" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                                <MDBDropdownItem onClick={this.logoutHandler}> Logout </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <span className="accountTitle">{ user && user.firstName ? user.firstName : "" } { user && user.lastName ? user.lastName : "" }</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        auth: state.auth
	};
};

export default connect(mapStateToProps, null)(header);