import React from "react";
import './Styles.css';

class Screen extends React.Component {
   render() {
      return (
         <div className='borderPurple'>
            <div className="screenStyle">  {this.props.temp} &deg;C </div>
         </div>
      );
   }
}

export default Screen;
