import React, { Component } from "react";

export default class Segment extends Component {
  render() {
    const { id, style, text } = this.props.segment;
    return (
      <span id={id ? id : "xx"} style={style}>
        {text}
      </span>
    );
  }
}
