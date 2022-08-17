import React from "react";
import Odometer from "react-odometerjs";

import "odometer/themes/odometer-theme-default.css";

class OdometerShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      odometerValue: this.props.odometerInitialValue
    };
  }

  componentDidMount() {
    this.setState({ odometerValue: this.props.odometerShowValue });
  }
  render() {
    const { odometerValue } = this.state;
    const OdometerStyle = {
      color: '#1a59b2',
      marginBottom: '2px',
      fontSize: "35px",
      fontWeight: '600'
    };
    return (
      <div style={OdometerStyle}>
        <Odometer format={this.props.odometerFormat} duration={1000} value={odometerValue} />{this.props.odometerExtraValue}
      </div>
    );
  }
}


export default OdometerShow;