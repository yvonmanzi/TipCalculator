import React, {propType, Component} from 'react';
//import Form from './Form.js';

class TipCalculator extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: " ",
            amount: null
        };

        //binding 'this'
        this.calculate = this.calculate.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }
    handleNameInput(event){
        this.setState({
            name: event.target.value,
        });
    }
    handleAmountInput(event){
        this.setState({
            amount: event.target.value
        });
    }
    
    calculate(){
        var tip = parseInt(this.state.amount)*0.2;// it would be kool to pass this % as a prop
        return tip;
    }
render(){

    return(
        <div>
            <h1> Tipping should be fun</h1>

            <p> Your Name: <input value={this.state.name} onChange = {this.handleNameInput} /> </p>

            <p> Bill: <input value={this.state.amount} onChange = {this.handleAmountInput} /> </p>
            <hr/>
            <p> Hi {this.state.name}! Your bill is: {this.state.amount}</p>
            <hr/>
            <button type = "button" onClick= {this.calculate}> Calculate </button>

            <p> Here is your tip: <input type="input" value= {this.calculate} /> </p>
        </div>

    );
}
}

//TipCalculator.propType = {
    //name: propType.String.isRequired,
   // amount: propType.number.isRequired
//};
export default TipCalculator;
