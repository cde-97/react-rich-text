import React, { Component } from 'react'
import Document from '../Document'

export default class EditorArea extends Component {
  render() {
    return (
      <div className='editor-area'>
        <Document document={this.props.data}></Document>
      </div>
    )
  }
}
