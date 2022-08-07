import React, { Component } from "react";
import Segment from "../Segment";

export default class Paragraph extends Component {
  render() {
    const { id, style, segments } = this.props.paragraph;
    return (
      <div id={id} style={style}>
        {segments.map((item, idx) => {
          return <Segment key={idx} segment={item}></Segment>;
        })}
      </div>
    );
  }
}
