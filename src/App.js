import React from "react";
// import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CalcDisplay from "./component/CalcDisplay";
import CalcButton from "./component/CalcButton";


const buttonData = [
  "7", "8", "9", "+",
  "4", "5", "6", "-",
  "1", "2", "3", "*",
  "c", "0", "=", "/"
  
]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operator: ''
    }
  }

    handelButtonClick = value => {
      // this.setState({result:value})
      switch(value){
        case "c":
          this.setState({
            firstNumber: 0,
            secondNumber: 0,
            result: 0,
            operator: ''
          })
          break;
        case "=":
          if(this.state.operator === "" || this.state.operator === "="){
            return;
          }
          this.handelOperator();
          break;
        case "+":
          this.setState({
            operator: "+"
          })
          // this.handelOperator();
          break;
        case "-":
          this.setState({
            operator: "-"
          })
          break;
        case "*":
          this.setState({
            operator: "*"
          })
          break;
        case "/":
          this.setState({
            operator: "/"
          })
          break;
        default: 
          if(this.state.operator === ""){
            this.setState({
              firstNumber: this.state.firstNumber * 10 + (+value),
              secondNumber: 0,
              operator: ""
            })
            return;
          }
          else{
            this.setState({
              secondNumber: this.state.secondNumber * 10 + (+value)
            })
          }
      }
    }
    handelOperator = () => {
      let result = this.state.result;
      switch(this.state.operator){
        case "+":
          result = this.state.firstNumber + this.state.secondNumber;
          break;
        case "-":
          result = this.state.firstNumber - this.state.secondNumber;
          break;
        case "*":
          result = this.state.firstNumber * this.state.secondNumber;
          break;
        case "/":
          result = this.state.firstNumber / this.state.secondNumber;
          break;
        default:
          break;
      }
      this.setState({
        firstNumber: result,
        secondNumber: 0,
        result: result,
        operator: "="
      })
    }

    renderButton = () =>{
      return(
        <div className="calc-button-area">{
            buttonData.map((value, index) => 
              <CalcButton
                key={index}
                text={value}
                onClick={() => 
                  this.handelButtonClick(value)
                }
              />
          )
        }</div>
      )
      
    }
    renderDisplay = () =>{
      let displayNumber = this.state.secondNumber;

      if(this.state.operator === "" || this.state.secondNumber === 0){
        displayNumber = this.state.firstNumber
      }
      if(this.state.operator === "="){
        displayNumber = this.state.result
      }
      // if(this.state.operator){
      //   displayNumber = this.state.result
      // }
      return(
        <CalcDisplay text={displayNumber} />
      )

    }

  render() {
    

    return (
      <div className="App-layout">
        {this.renderDisplay()}
        {this.renderButton()}
      </div>
    );
  }
}

export default App;
