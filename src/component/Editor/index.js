import React, { Component } from "react";
import ToolBar from "../ToolBar";
import EditorArea from "../EditorArea";

export default class Editor extends Component {
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
