import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props){
    super(props);
      this.state = {
        hasError: false
      }
  }
  //Test Error Boundary
  componentDidCatch(error, info){
    this.setState({ hasError: true })
}

render() {
  // Test ErrorBoundry
  // if (this.state.hasError) {
  //   return <h1>Ooops. That is not good</h1>
  // }
  return this.props.children
}
}
export default ErrorBoundry;
