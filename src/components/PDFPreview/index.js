import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Page, Document } from 'react-pdf/dist/entry.webpack';
//import { Page, Document } from 'react-pdf';


class PDFPreview extends Component {
  static propTypes = {
    file: PropTypes.shape(),
  };

  static defaultProps = {
    file: undefined,
  };

  state = {
    page: 1,
    pdfData: [],
  };

  componentDidUpdate(prevProps) {
    const { file } = this.props;
    if (prevProps.file === file) { return; }

    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('File read error!'));
      reader.readAsArrayBuffer(file);
    })
      .then((pdfData) => {
        const data = new Uint8Array(pdfData);
        this.setState({ pdfData: data });
      })
      .catch(() => this.setState({ pdfData: [] }));
  }

  render() {
    const { page, pdfData } = this.state;

    if (pdfData.length === 0) { return null; }

    return (
      <div>
        <Document
          noData=""
          file={{ data: pdfData }}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default PDFPreview;
