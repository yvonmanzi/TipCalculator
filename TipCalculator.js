import React, {Component, propType} from 'react';
import Form from './Form.js';

class TipCalculator extends React{
    constructor(props){
        super(props);

        this.state = {
            name: " ",
            amount: null
        };

        //binding 'this' to the methods
        this.calculate = this.calculate.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
    }
    handleNameInput(event){
        this.setState({
            name: event.target.value,
            amount: ''
        });
    }
    handleAmountInput(event){
        this.setState({
             name: this.name,
             amount: event.target.value
        });
    }
    
    calculate(){
        const tip = parseInt(this.state.props.amount)*0.2;// it would be kool to pass this % as a prop
        return tip;
    }
    
render(){

    return(
        <div>
            <h1> Tipping should be fun</h1>

            <p> Your Name: <input value={this.state.name} onChange = {this.handleNameInput} ></input></p>

            <p> Bill: <input value={this.state.amount} onChange = {this.handleAmountInput} ></input></p>
            <hr/>
            <p> Hi {this.state.name}! Your bill is: {this.state.amount}</p>
            <hr/>
            <button type = "button" onClick= {this.calculate}> Calculate </button>
        
            <input type="input">{this.calculate}</input>
        </div>

    );
}
}
TipCalculator.propType = {
    name: propType.string.isRequired,
    amount: propType.number.isRequired
};
export default TipCalculator;
