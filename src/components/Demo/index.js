import React, { Component } from 'react';

import FileButton from '../FileButton';
import PDFPreview from '../PDFPreview';

import { FileSelectWrapper } from './Demo.styled';


export default class Demo extends Component {
  state = {
    selectedFile: undefined,
  };

  onChange = (file) => {
    this.setState({ selectedFile: file });
  };

  render() {
    const { selectedFile } = this.state;

    return (
      <div>
        <FileSelectWrapper>
          <FileButton onChange={this.onChange} />
          {selectedFile && <div>Selected: {selectedFile.name}</div>}
        </FileSelectWrapper>
        <PDFPreview file={selectedFile} />
      </div>
    );
  }
}
