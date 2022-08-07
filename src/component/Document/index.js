import React, { Component } from "react";
import Paragraph from "../Paragraph";

export default class Document extends Component {
  render() {
    const { id, nodes } = this.props.document;
    return (
      <div id={id}>
        {nodes.map((item, idx) => {
          return <Paragraph key={idx} paragraph={item}></Paragraph>;
        })}
      </div>
    );
  }
}
