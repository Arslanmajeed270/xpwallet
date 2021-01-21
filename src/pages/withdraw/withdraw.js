import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class withdraw extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <div className="content-tab">
                        <div className="row">
                        <div className="col-12 h-100">
                            <div className="row no-gutters h-100 justify-content-center align-items-center">
                            <div className="form-container">
                                <div className="note text-center">
                                <h2 className="noteTitle">Withdraw Amount</h2>
                                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
                                </div>
                                <form className="main-form customFieldDesign innerPageForm" id="widthDraw">
                                <div className="form-group form-group-btn group-no-border">
                                    <Link to="#" className="btn btn-raised group-btn">TD bank <span className="redirectDetails">Checking **** 0830 <br />Free <br />Bank transfer may take 3-5 working days depending on your account</span></Link>
                                </div>
                                <div className="form-group select-box">
                                    <label htmlFor="bankSelect" className="bmd-label-floating">Select Currency</label>
                                    <select className="form-control customSelect" id="bankSelect" name="currency">
                                    <option>CAD</option>
                                    <option>USD</option>
                                    <option>PKR</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupInput3" className="bmd-label-floating ">Swift Code</label>
                                    <input type="text" name="swiftcode" className="form-control" id="formGroupInput3" />
                                </div> 
                                <div className="form-group">
                                    <label htmlFor="formGroupInput6" className="bmd-label-floating ">Amount</label>
                                    <input type="text" name="amount" className="form-control" id="formGroupInput6" />
                                </div> 
                                <div className="form-group">
                                    <label htmlFor="formGroupInput7" className="bmd-label-floating ">Purpose</label>
                                    <input type="text" name="purpose" className="form-control" id="formGroupInput7" />
                                </div>                            
                                <button type="submit" className="btn btn-primary btn-raised w-100">Submit</button>          
                                </form>
                            </div>   
                            </div> 
                        </div>
                        </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default withdraw;