import React from 'react';

const initialState = {
  last: "+", 
  number: 0,
  prevNum: 0,
  display: false
}

class Calculator extends React.Component {
  constructor() {
    // super(props);
    super();
    this.state = initialState;

    this.handleOperation = this.handleOperation.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.getNumber = this.getNumber.bind(this);
  }
  
  compute(newOp) {
    let {last, number, prevNum} = this.state;
    let result;

    if (last === "+") {
      result = number + prevNum;
    } else if (last === "-") {
      result = prevNum - number;
    } else if (last === "*") {
      result = number * prevNum;
    } 

    newOp = newOp !== "=" ? newOp : "+";

    this.setState({
      last: newOp,
      number: 0,
      prevNum: result,
      display: false
    })
  }

  getNumber(e) {
    // console.dir(e.target);
    let number = this.state.number, n = parseInt(e.target.id);
    number = number * 10 + n;

    this.setState({
      number: number,
      display: true
    })
  }

  handleOperation(e) {
    console.dir(e.target);
    
    this.compute(e.target.innerText);
  }

  handleClear() {
    this.setState(initialState);
  }

  render() {
    console.log("render", this.state);

    // const stack = this.state.stack;

    const renderResult = () => {
      if (!this.state.display) {
        return <span>{this.state.prevNum}</span>
      } else {
        return <span>{this.state.number}</span>
      }
    }

    return (
      <div className="main-calculator">
        <div className="result">{renderResult()}</div> 
        <div className="clear" onClick={this.handleClear}>clear</div>
        <div className="operations">
          <div id="mul" onClick={this.handleOperation}>*</div>
          <div id="add" onClick={this.handleOperation}>+</div>
          <div id="sub" onClick={this.handleOperation}>-</div>
          <div id="equal" onClick={this.handleOperation}>=</div>
        </div>
        {/* <div className="test" onClick={(e) => this.handlePut(e)}>Put</div> */}
        <div className="keys">
          <div id="1" onClick={this.getNumber}>1</div>
          <div id="2" onClick={this.getNumber}>2</div>
          <div id="3" onClick={this.getNumber}>3</div>
          <div id="4" onClick={this.getNumber}>4</div>
          <div id="5" onClick={this.getNumber}>5</div>
          <div id="6" onClick={this.getNumber}>6</div>
          <div id="7" onClick={this.getNumber}>7</div>
          <div id="8" onClick={this.getNumber}>8</div>
          <div id="9" onClick={this.getNumber}>9</div>
          <div id="0" onClick={this.getNumber}>0</div>
        </div>

      </div>
    )
  }
}

export default Calculator;