import React, { Component } from "react";
import Document from "../Document";
import { Document as DocumentModel } from "../../model/Document";
import eventBus from "../../utils/eventBus";
import "./index.css";

export default class EditorArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: DocumentModel.create(this.props.data),
    };
  }
  handleKeydown = (event) => {
    if (event.key === "b" && event.ctrlKey) {
      this.toggleBold();
    }
  };

  toggleBold = () => {
    const { document } = this.state;
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    const startContainer = range.startContainer;
    const startParentEle = startContainer.parentElement;
    const startOffset = range.startOffset;
    const endContainer = range.endContainer;
    const endParentEle = endContainer.parentElement;
    const endOffset = range.endOffset;
    document.addInilieStyle(
      startParentEle.id,
      startOffset,
      endParentEle.id,
      endOffset,
      "fontWeight",
      "bold"
    );
    this.setState({
      document: document,
    });
  };

  componentDidMount() {
    eventBus.addListener("toggleBold", this.toggleBold);
  }
  componentWillUnmount() {
    eventBus.removeAllListeners();
  }
  render() {
    const { document } = this.state;
    return (
      <div
        className="editor-area"
        suppressContentEditableWarning
        contentEditable="true"
        onKeyDown={this.handleKeydown}
      >
        <Document document={document}></Document>
      </div>
    );
  }
}
