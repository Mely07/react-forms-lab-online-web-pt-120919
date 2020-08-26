import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: ''
    };
  }

  handleMaxCharsChange = (event) => {
    this.setState({
      chars: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMaxCharsChange(event)} value={this.state.chars} />
        <p>{this.props.maxChars - this.state.chars.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
