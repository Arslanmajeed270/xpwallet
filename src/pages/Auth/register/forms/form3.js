import React, { Component } from 'react'

class form3 extends Component {
    render() {
        return (
            <div className="form-container scrollContainer">
            <div className="note text-center">
                <h2 className="noteTitle">Bank Account</h2>
                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
            </div>
            <form className="main-form customFieldDesign" id="connectBank">
                <div className="form-group">
                <label htmlFor="formGroupInput" className="bmd-label-floating">Bank Name</label>
                <input type="text" name="bankname" className="form-control" id="formGroupInput" />
                </div>
                <div className="form-group">
                <label htmlFor="formGroupInput2" className="bmd-label-floating">Routing</label>
                <input type="text" name="routing" className="form-control" id="formGroupInput2" />
                </div>              
                <div className="form-group">
                <label htmlFor="formGroupInput3" className="bmd-label-floating">Account Number</label>
                <input type="text" name="accountnumber" className="form-control" id="formGroupInput3" />
                </div>              
                <div className="form-group">
                <label htmlFor="formGroupInput4" className="bmd-label-floating">Email</label>
                <input type="email" name="email" className="form-control" id="formGroupInput4" />
                </div>              
                <div className="form-group">
                <label htmlFor="formGroupInput5" className="bmd-label-floating ">Swift Code</label>
                <input type="text" name="swiftcode" className="form-control" id="formGroupInput5" />
                </div>                
                <button type="submit" onClick={() => this.props.formHandler(5)} className="btn btn-primary btn-raised w-100">Submit</button>
            </form>
            </div>   
        
        )
    }
}
export default form3;