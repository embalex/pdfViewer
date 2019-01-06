import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Page } from 'react-pdf/dist/entry.webpack';

import Pagination from './Pagination';
import Zoom from './Zoom';
import { zoomParameters } from './constants';
import { Wrapper, StyledDocument } from './PDFPreview.styled';


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
    zoomRatio: 1,
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

  onPageIncrement = () => {
    const { page } = this.state;

    if (page === this.pages) { return; }
    this.setState({ page: page + 1, zoomRatio: 1 });
  };

  onPageDecrement = () => {
    const { page } = this.state;

    if (page === 1) { return; }
    this.setState({ page: page - 1, zoomRatio: 1 });
  };

  onZoomIn = () => {
    const { zoomRatio } = this.state;
    if (zoomRatio >= zoomParameters.maxRatio) { return; }

    let updatedZoomValue = zoomRatio * zoomParameters.changeRatio;
    if (updatedZoomValue > zoomParameters.maxRatio) { updatedZoomValue = zoomParameters.maxRatio; }
    this.setState({ zoomRatio: updatedZoomValue });
  };

  onZoomOut = () => {
    const { zoomRatio } = this.state;
    if (zoomRatio <= zoomParameters.minRatio) { return; }

    let updatedZoomValue = zoomRatio / zoomParameters.changeRatio;
    if (updatedZoomValue < zoomParameters.minRatio) { updatedZoomValue = zoomParameters.minRatio; }
    this.setState({ zoomRatio: updatedZoomValue });
  };

  render() {
    const { page, pdfData, zoomRatio } = this.state;
    if (pdfData.length === 0) { return null; }

    return (
      <Wrapper>
        <StyledDocument
          noData=""
          file={{ data: pdfData }}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page
            pageNumber={page}
            scale={zoomRatio}
            renderAnnotationLayer={false}
          />
        </StyledDocument>
        <Zoom
          onZoomIn={this.onZoomIn}
          onZoomOut={this.onZoomOut}
        />
        <Pagination
          onIncrement={this.onPageIncrement}
          onDecrement={this.onPageDecrement}
        />
      </Wrapper>
    );
  }
}

export default PDFPreview;
