import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class recentTransaction extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab full-width-content table-content-tab">
                        <div className="row">
                            <div className="col-12 h-100">
                            <div className="row no-gutters h-100">
                                <div className="table-container">
                                <div className="note table-note">
                                    <h2 className="noteTitle">Welcome, Adnan Qureshi</h2>
                                    <p className="noteDetails">Status: <span>Verified</span></p>
                                    <p className="noteDetails">Account Type: <span className="color-Theme">Bussiness</span></p>
                                </div> 
                                </div> 
                            </div>
                            </div>
                        </div>
                        <div className="table-tabs">
                            <ul className="nav nav-tabs" id="trasactionTabs" role="tablist">
                            <div id="reportrange" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc', width: '100%'}}><span /></div>
                            <li className="nav-item">
                                <Link className="nav-link active" id="activity-tab" data-toggle="tab" to="#activity" role="tab" aria-controls="activity" aria-selected="true">Activity</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="recieved-tab" data-toggle="tab" to="#recieved" role="tab" aria-controls="recieved" aria-selected="false">Payment Recieved</Link>
                            </li>                        
                            <li className="nav-item">
                                <Link className="nav-link" id="sent-tab" data-toggle="tab" to="#sent" role="tab" aria-controls="sent" aria-selected="false">Payment Sent</Link>
                            </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="activity" role="tabpanel" aria-labelledby="activity-tab"><table id="myTable1" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Name/Email</th>
                                    <th>Payment status</th>
                                    <th>Order status</th>
                                    <th>Gross</th>
                                    </tr>
                                </thead>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="recieved" role="tabpanel" aria-labelledby="recieved-tab">
                                <table id="myTable2" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Name/Email</th>
                                    <th>Payment status</th>
                                    <th>Order status</th>
                                    <th>Gross</th>
                                    </tr>
                                </thead>
                                </table>
                            </div>                      
                            <div className="tab-pane fade" id="sent" role="tabpanel" aria-labelledby="sent-tab">
                                <table id="myTable3" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Name/Email</th>
                                    <th>Payment status</th>
                                    <th>Order status</th>
                                    <th>Gross</th>
                                    </tr>
                                </thead>
                                </table>
                            </div>
                            </div>
                        </div>  
                        <input type="hidden" id="max" name />
                        <input type="hidden" id="min" name />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default recentTransaction;