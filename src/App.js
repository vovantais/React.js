import React from "react";
import './Styles.css';
import Screen from "./Screen";
import Button from "./Button";
import Message from "./Message";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         degree: 20,
         flag: false,
         text: '',
      }
   }
   handleClick = (e) => {
      let btn = e.target.textContent;
      let temp = this.state.degree;
      let hot = 26;
      let cold = 16;
      if (btn === "-" && this.state.degree > cold) {
         temp--;
         this.setState({
            degree: temp,
            flag: false,
         })
         if (temp === cold) {
            this.setState({
               flag: true,
               text: 'Too cold!',
            })
         }
      }
      if (btn === "+" && this.state.degree < hot) {
         temp++;
         this.setState({
            degree: temp,
            flag: false,
         })
         if (temp === hot) {
            this.setState({
               flag: true,
               text: 'Too hot!',
            })
         }
      }
   }
   render() {
      return (
         <div className="Container">
            <div className="tempStyle">Current temperature {this.state.degree} &deg;C
                  <Screen temp={this.state.degree} />
               <div className="BtnContainer">
                  <Button simbol={"-"} onClick={this.handleClick} />
                  <Button simbol={"+"} onClick={this.handleClick} />
               </div>
               <Message {...this.state} />
            </div>
         </div>
      );
   }
}

export default App;
