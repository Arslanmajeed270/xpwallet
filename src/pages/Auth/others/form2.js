import React, { Component } from 'react';

class form2 extends Component {
    render() {
        return (
            <div className="form-container scrollContainer">
            <div className="note text-center">
                <h2 className="noteTitle">Connect your bank, credit and debit cards</h2>
                <p className="noteDetails">Merci de renseigner les informations ci-dessous</p>
            </div>
            <form className="main-form customFieldDesign" id="connectAccount">
                <div className="form-group form-group-btn">
                <button onClick={() => this.props.formHandler(3)} className="btn btn-raised group-btn">Bank Account</button>
                </div>
                <div className="form-group form-group-btn">
                <button onClick={() => this.props.formHandler(4)} className="btn btn-raised group-btn">Credit Card</button>
                </div>              
            </form>
            <div className="infoBottom text-center">
                <to href="../index.html" className="redirectLink">I already have an account</to>
            </div>
            </div>   
        )
    }
}
export default form2;