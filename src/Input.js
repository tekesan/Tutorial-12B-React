import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = { userInput: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

  render() {
    return (
      <div>
          <input
              onChange={this.handleChange}
              type="text" />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}