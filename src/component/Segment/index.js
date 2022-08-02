import React, { Component } from "react";

export default class Segment extends Component {
  render() {
    const { type, style, text } = this.props.segment;
    return (
      <span id={type} style={style}>
        {text}
      </span>
    );
  }
}
