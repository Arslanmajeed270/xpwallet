import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class transactionDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab full-width-content">
                        <div className="row">
                        <div className="col-12 h-100">
                            <div className="row no-gutters h-100">
                            <div className="table-container trasactionDetails w-100">
                                <div className="note table-note">
                                <h2 className="noteTitle float-left">Welcome, Adnan Qureshi</h2>
                                <Link to="#" className="float-right"> <img src="./assets/media/ink.png" alt=""/> </Link>
                                </div> 
                            </div> 
                            </div>
                            <div className="details-content col-12">
                            <div className="row no-gutters h-100 align-items-center justify-content-center">
                                <div className="col-12 col-md-6 col-xxl-4 my-2">
                                <h4 className="payment-status">
                                    Subscription Payment Sent
                                </h4> 
                                <p className="payment-details my-1">
                                    March 20, 2020 at 11:23:16 AM PDT
                                </p>
                                <div className="w-75"> 
                                    <span className="badge badge-success float-right my-1">Completed</span>
                                </div>
                                </div>
                                <div className="col-12 col-md-6 col-xxl-4 my-2 text-center col-text-left">
                                <p className="payment-details border-left px-2">Transaction ID: 47d77f7f7f8f888d8d</p>
                                </div>
                                <div className="col-12 col-md-6 col-xxl-4 text-right col-text-left my-2">
                                <h4 className="payment-status">
                                    Gross amount
                                </h4>
                                <h2 className="payment-value">
                                    $7.18 USD
                                </h2>
                                </div>
                            </div>                
                            <div className="row no-gutters h-100 recipt-container border-dashed-y py-3">
                                <div className="col-12 my-2">
                                <h4 className="payment-status">
                                    Adnan Qureshi
                                </h4> 
                                <p className="payment-details my-1">
                                    House 521, Street 10, G-10/1, Islamabad , Pakistan
                                </p>
                                <div className="table-scorll">
                                    <table className="table layout-fixed recipt-table">
                                    <thead>
                                        <tr>
                                        <th colSpan={3}>
                                            Order Details
                                        </th>                          
                                        <th className="text-right">
                                            Quantity
                                        </th>                          
                                        <th className="text-right">
                                            Price
                                        </th>                          
                                        <th className="text-right">
                                            Subtotal
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={3}>
                                        </td>
                                        <td className="text-right">
                                            1 
                                        </td>                          
                                        <td className="text-right">
                                            $7.00 USD 
                                        </td>                          
                                        <td className="text-right">
                                            $7.00 USD 
                                        </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        <td colSpan={3}>
                                        </td>                         
                                        <td colSpan={2} className="text-right">
                                            Purchase total 
                                        </td>                          
                                        <td className="text-right">
                                            $7.00 USD 
                                        </td>
                                        </tr>
                                    </tfoot>
                                    </table>
                                </div>
                                </div>
                            </div>                
                            <div className="row no-gutters h-100 recipt-container pt-3">
                                <div className="col-12 my-2">
                                <div className="table-scorll">
                                    <table className="table layout-fixed recipt-table payment-details-table m-0">
                                    <thead>
                                        <tr>
                                        <th>
                                            Your Payment
                                        </th>                          
                                        <th>
                                        </th>
                                        <th>
                                        </th>                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>
                                            Purchase total
                                        </td>
                                        <td>
                                            -$7.00 USD 
                                        </td>                         
                                        <td>
                                        </td>                          
                                        </tr>                        
                                        <tr>
                                        <td>
                                            Sales tax
                                        </td>
                                        <td>
                                            $0.00 USD 
                                        </td>                         
                                        <td>
                                        </td>
                                        </tr>
                                        <tr>                           
                                        <td>
                                            Shipping amount
                                        </td>
                                        <td>
                                            $0.00 USD 
                                        </td>                           
                                        <td>
                                        </td> 
                                        </tr>
                                        <tr>                          
                                        <td>
                                            Handling amount
                                        </td>
                                        <td>
                                            $0.00 USD 
                                        </td>                           
                                        <td>
                                        </td>                          
                                        </tr>                        
                                        <tr className="bdr-bottom">                          
                                        <td>
                                            Insurance amount
                                        </td>
                                        <td>
                                            $0.00 USD 
                                        </td>                           
                                        <td>
                                        </td>                          
                                        </tr>                        
                                        <tr>                          
                                        <td>
                                            Gross amount
                                        </td>
                                        <td>
                                            -$7.00 USD 
                                        </td>                           
                                        <td>
                                        </td>                          
                                        </tr>                        
                                        <tr className="bdr-bottom">                          
                                        <td>
                                            XP Wallet transaction fee
                                        </td>
                                        <td>
                                            $0.00 USD 
                                        </td>                           
                                        <td>
                                        </td>                          
                                        </tr>                        
                                        <tr>                          
                                        <td>
                                            Net Amount
                                        </td>
                                        <td>
                                            -$7.00 USD 
                                        </td>                           
                                        <td>
                                        </td>                          
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>                
                            <div className="row no-gutters h-100 recipt-container border-dashed-y">
                                <div className="col-12 my-2">
                                <div className="table-scorll">
                                    <table className="table layout-fixed recipt-table payment-details-table m-0">
                                    <tbody>
                                        <tr>
                                        <td>
                                            Invoice Id
                                        </td>
                                        <td>
                                            P-09147085 
                                        </td>                          
                                        <td>
                                        </td>                                                 
                                        </tr>                                                                                           
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>                
                            <div className="row no-gutters h-100 recipt-container">
                                <div className="col-12 my-2">
                                <div className="table-scorll">
                                    <table className="table layout-fixed recipt-table payment-details-table m-0">
                                    <tbody>
                                        <tr>
                                        <td>
                                            Contact Infotmation
                                        </td>
                                        <td>
                                            <Link to="#" className="color-Theme">GitHub, Inc</Link>
                                            <br />
                                            The recipient of this payment is <span className="bold">Verified</span>
                                            <br />
                                            <Link to="#" className="color-Theme">http://github.com/</Link>                            
                                            <br />                            
                                            support@github.com
                                            <br />
                                            415-448-6673
                                        </td>                          
                                        <td>
                                        </td>                                                 
                                        </tr>                                                                                           
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>                
                            <div className="row no-gutters h-100 recipt-container border-dashed-y">
                                <div className="col-12 my-2">
                                <table className="table layout-fixed recipt-table payment-details-table m-0">
                                    <tbody>
                                    <tr>
                                        <td>
                                        Funding details
                                        </td>
                                        <td>
                                        Payment type: XP Wallet balance
                                        <br />
                                        Payment method: -$7:00 USD - XP Wallet account
                                        </td>                          
                                        <td>
                                        </td>                                                 
                                    </tr>                                                                                           
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>  
                        </div>
                        </div>
                    </div>
                    </div>
                    |
            </React.Fragment>
        )
    }
}
export default transactionDetails;