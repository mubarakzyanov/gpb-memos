import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DraftMemoEditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  render() {
    const { content } = this.state;
    const { createMemo } = this.props;

    return (
      <form className="memo-editor">
        <textarea
          className="memo-editor__contents"
          value={content}
          onChange={event => this.setState({
            content: event.target.value,
          })}
          required
        />
        <div className="memo-editor__toolbar">
          <button
            type="button"
            className="memo-editor__save"
            onClick={() => {
              createMemo(content);
            }}
          >
Сохранить
          </button>
        </div>
      </form>
    );
  }
}

DraftMemoEditorComponent.propTypes = {
  createMemo: PropTypes.func.isRequired,
};

export default DraftMemoEditorComponent;
