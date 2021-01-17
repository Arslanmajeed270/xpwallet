import React, { Component } from 'react'

class form4 extends Component {
    render() {
        return (
            <div className="form-container scrollContainer">
            <div className="note text-center">
                <h2 className="noteTitle">Credit Card</h2>
                <p className="noteDetails">We accept debit with Visa or Mastercard logo and all major credit cards</p>
            </div>
            <form className="main-form customFieldDesign" id="connectBank">
                <div className="form-group">
                <label htmlFor="formGroupInput" className="bmd-label-floating">Bank Name</label>
                <input type="text" name="bankname" className="form-control" id="formGroupInput" />
                </div>              
                <div className="form-group select-box">
                <label htmlFor="currencySelect" className="bmd-label-floating">Card Type</label>
                <select className="form-control customSelect" id="currencySelect" name="cardtype">
                    <option>Master Card</option>
                    <option>Visa Card</option>
                    <option>Debit Card</option>
                </select>
                </div>             
                <div className="form-group">
                <label htmlFor="formGroupInput2" className="bmd-label-floating">Card Number</label>
                <input type="text" name="cardnumber" className="form-control" id="formGroupInput2" />
                </div>
                <div className="form-group-row group-col-2">
                <div className="form-group customExpiryDate">
                    <label htmlFor="formGroupInput3" className="bmd-label-floating ">Expiry Date</label>
                    <input type="text" name="expirydate" className="form-control ccValidate" maxLength={5} id="formGroupInput3" placeholder="MM/YY" />
                </div>                
                <div className="form-group">
                    <label htmlFor="formGroupInput4" className="bmd-label-floating ">Security code</label>
                    <input type="text" name="securitycode" className="form-control " id="formGroupInput4" />
                </div>                
                </div>                                     
                <div className="form-group">
                <label htmlFor="formGroupInput1" className="bmd-label-floating">Billing Address</label>
                <input type="text" name="billingaddress" className="form-control" id="formGroupInput1" />
                </div>
                <button type="submit" onClick={() => this.props.formHandler(5)} className="btn btn-primary btn-raised w-100">Submit</button>
            </form>
            </div>   
        
        )
    }
}
export default form4;