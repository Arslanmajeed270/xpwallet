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
                        <h2 className="heading">Confirm</h2>
                        <p className="noteDetails">Are you sure you want to continue transaction</p>
                        </div>
                    </div>
                    {/*Body*/}
                    {/*Footer*/}
                    <div className="modal-footer d-block">
                        <Link to="#" className="btn btn-theme w-100 waves-effect">Confirm</Link>
                        <Link to="#" className="btn btn-theme w-100 waves-effect" style={{marginTop: '5px', backgroundColor: '#fafafa', color: '#1c1c1c'}}>No</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default index;