import React, { Component } from "react";
import Segment from "../Segment";

export default class Paragraph extends Component {
  render() {
    const { type, style, segments } = this.props.paragraph;
    return (
      <div id={type} style={style}>
        {segments.map((item) => {
          return <Segment segment={item}></Segment>;
        })}
      </div>
    );
  }
}
