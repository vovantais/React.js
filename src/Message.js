import React from "react";
import './Styles.css';

class Message extends React.Component {
   render() {
      return this.props.flag && <div className='message'>{this.props.text}</div>
   }
}

export default Message;
