import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="modal-content text-center" style={{borderRadius: '10px'}}>
                    {/*Header*/}
                    <div className="modal-header">
                        <div className="note text-center">
                        <h2 className="heading colorSuccess">Success</h2>
                        <p className="noteDetails">Transaction Successfull</p>
                        </div>
                    </div>
                    {/*Body*/}
                    {/*Footer*/}
                    <div className="modal-footer justify-content-center">
                        <Link to="#" className="btn btn-theme w-100 waves-effect">Ok</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default index;