import React from "react";
import PropTypes from "prop-types";


const WithLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = `WithLogging(${WrappedComponent.name ? WrappedComponent.name : "Component"})`;
    }

    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogging;
}



export default WithLogging;
