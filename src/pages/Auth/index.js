import React, { Component } from 'react';
import Routes from './routes';
import { connect } from 'react-redux';
import Spinner from '../../components/common/Spinner';

class Index extends Component {

    constructor(props) {
		super(props);
		this.state = {
			loading: false,
		};
    }
    
    static getDerivedStateFromProps(props, state) {
		const {page } = props;
		let stateChanged = false;
        let changedState = {};
        
		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
        }
        
		if (stateChanged) return changedState;
		return null;
	}

    render() {
        const { loading } = this.state;
        const { history, location } = this.props;
        let pageContent = <Spinner />;
        if(!loading){
            pageContent = (
            <React.Fragment>
                <div className="login-Container">
                    <div className="row no-gutters h-100">
                        <div className="col-md-4 h-100 hide-responsive">
                        <img className="side-banner" src="../assets/media/ic_banner_img.png" alt="ic_banner_img.png" />
                        </div>
                        <div className="col-12 col-md-8 h-100">
                        <div className="row no-gutters h-100 justify-content-center align-items-center">
                            {/* Routing Start */}
                            <Routes history={history} location={location} />
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

export default connect(mapStateToProps, null)(Index);