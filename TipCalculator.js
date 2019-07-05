import React from 'react';
//import Form from './Form.js';

class TipCalculator extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: " ",
            amount: null,
            tip: null
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
        this.setState ({
            tip: parseInt(this.state.amount)* this.props.percentage // it would be kool to pass this % as a prop
        });
    }
render(){

    return(
        <div>
            <h1 style ={{color: "blue"}} > Tipping should be fun!</h1>

            <p> Your Name: <input value={this.state.name} onChange = {this.handleNameInput} /> </p>

            <p> Your Bill: <input value={this.state.amount} onChange = {this.handleAmountInput} /> </p>
            
            <p> Hi {this.state.name}! Your bill is: {this.state.amount}</p>
            <hr/>
            <button type = "button" style = {{color: "red"}} onClick= {this.calculate}> Calculate My Tip </button>

            <p> Here is your tip: <input type="input" value= {this.state.tip} /> </p>
        </div>

    );
}
}

//TipCalculator.propType = {
    //name: propType.String.isRequired,
   // amount: propType.number.isRequired
//};
export default TipCalculator;
