import React from 'react';
import ReactDOM from 'react-dom';

export class GuineaPigs extends React.Component {

  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}