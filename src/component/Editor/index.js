import React, { Component } from "react";
import ToolBar from "../ToolBar";
import EditorArea from "../EditorArea";
import "./index.css";

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div className="editor-wrap">
        <ToolBar></ToolBar>
        <EditorArea data={data}></EditorArea>
      </div>
    );
  }
}
