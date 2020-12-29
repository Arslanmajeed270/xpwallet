import React, { Component } from 'react'
import Form1 from './forms/form1';
import Form2 from './forms/form2';
import Form3 from './forms/form3';
import Form4 from './forms/form4';
import Form5 from './forms/form5';


class index extends Component {
    constructor(props) {
		super(props);
		this.state = {
			formShow: 1,
		};
    }
    formShowHandler = (num) => {
		this.setState({
			formShow: num,
		});
	};
    render() {
        return (
            <React.Fragment>
                {
                    this.state.formShow === 1 && (<Form1 formHandler={(num) =>this.formShowHandler(num)} />)
                }
                {
                    this.state.formShow === 2 && (<Form2 formHandler={(num) =>this.formShowHandler(num)} />)
                }
                {
                    this.state.formShow === 3 && (<Form3 formHandler={(num) =>this.formShowHandler(num)} />)
                }
                {
                    this.state.formShow === 4 && (<Form4 formHandler={(num) =>this.formShowHandler(num)} />)
                }
                {
                    this.state.formShow === 5 && (<Form5 formHandler={(num) =>this.formShowHandler(num)} />)
                }
            </React.Fragment>
        )
    }
}
export default index;