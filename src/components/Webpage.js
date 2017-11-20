import React from 'react';
import FillerText from './FillerText.js';

class Webpage extends React.Component {
  render() {
    return (
      <p>
        <h1>The world's coolest webpage</h1>
        <p><FillerText/></p>
        <p><FillerText/></p>
      </p>
    );
  }
};

export default Webpage;
