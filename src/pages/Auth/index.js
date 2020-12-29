import React, { Component } from 'react';
import Routes from './routes';


class index extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="login-Container">
                <div className="row no-gutters h-100">
                    <div className="col-md-4 h-100 hide-responsive">
                    <img className="side-banner" src="../assets/media/ic_banner_img.png" alt="ic_banner_img.png" />
                    </div>
                    <div className="col-12 col-md-8 h-100">
                    <div className="row no-gutters h-100 justify-content-center align-items-center">
                        {/* Routing Start */}
                        <Routes />
                    </div> 
                    </div>
                </div>
                </div>
        </React.Fragment>

        )
    }
}
export default index;