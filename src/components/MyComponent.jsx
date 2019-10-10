import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <span>My Component</span>
      </div>
    );
  }
}

const containerElement = document.getElementById("MyComponent");
ReactDOM.render(<MyComponent />, containerElement);
