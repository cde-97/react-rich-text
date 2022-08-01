import React, { Component } from "react";
import Segment from "../Segment";

export default class Paragraph extends Component {
  render() {
    const { id, style, segments } = this.props.paragraph;
    return (
      <div id={id} style={style}>
        {segments.map((item) => {
          return <Segment segment={item}></Segment>;
        })}
      </div>
    );
  }
}
