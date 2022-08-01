import React, { Component } from "react";
import Paragraph from "../Paragraph";

export default class Document extends Component {
  render() {
    const { nodes } = this.props.document;
    return (
      <div>
        {nodes.map((item) => {
          return <Paragraph paragraph={item}></Paragraph>;
        })}
      </div>
    );
  }
}
