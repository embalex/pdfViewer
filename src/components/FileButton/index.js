import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from './FileButton.styled';


export default class FileButton extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  fileInputRef = React.createRef();

  onButtonClick = () => {
    this.fileInputRef.current.click();
  };

  onChange = (event) => {
    const { onChange } = this.props;
    const fileList = event.target.files[0];

    onChange(fileList);
  };

  render() {
    return (
      <div>
        <Button onClick={this.onButtonClick}>Select PDF file</Button>
        <input
          style={{ display: 'none' }}
          type="file"
          accept=".pdf"
          ref={this.fileInputRef}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
