import React, { Component } from "react";
import Paragraph from "../Paragraph";

export default class Document extends Component {
  render() {
    const { type,nodes } = this.props.document;
    return (
      <div id={type} >
        {nodes.map((item) => {
          return <Paragraph paragraph={item}></Paragraph>;
        })}
      </div>
    );
  }
}
