import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Page, Document } from 'react-pdf/dist/entry.webpack';

import Pagination from './Pagination';
import { Wrapper } from './PDFPreview.styled';


class PDFPreview extends Component {
  static propTypes = {
    file: PropTypes.shape(),
  };

  static defaultProps = {
    file: undefined,
  };

  pages = 1;

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
        this.setState({ pdfData: data, page: 1 });
      })
      .catch(() => this.setState({ pdfData: [] }));
  }

  onDocumentLoadSuccess = ({ numPages }) => { this.pages = numPages; };

  onIncrement = () => {
    const { page } = this.state;

    if (page === this.pages) { return; }
    this.setState({ page: page + 1 });
  };

  onDecrement = () => {
    const { page } = this.state;

    if (page === 1) { return; }
    this.setState({ page: page - 1 });
  };


  render() {
    const { page, pdfData } = this.state;

    if (pdfData.length === 0) { return null; }

    return (
      <Wrapper>
        <Document
          noData=""
          file={{ data: pdfData }}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={page} />
        </Document>
        <Pagination
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </Wrapper>
    );
  }
}

export default PDFPreview;
