import React from "react";
import './Styles.css';

class Button extends React.Component {
   render() {
      return (      
            <div className='borderGreen'>
               <button className="btn" onClick={this.props.onClick}>{this.props.simbol}</button>
            </div>
      );
   }
}

export default Button;
