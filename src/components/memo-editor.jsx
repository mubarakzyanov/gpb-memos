import React from 'react';
import PropTypes from 'prop-types';

function MemoEditorComponent({
  memo, editMemoContent, activeMemoId, saveMemo, deleteMemo,
}) {
  return (
    <form className="memo-editor">
      <textarea
        className="memo-editor__contents"
        value={Object.prototype.hasOwnProperty.call(memo, 'changedContent')
          ? memo.changedContent
          : memo.content}
        onChange={event => editMemoContent(activeMemoId, event.target.value)}
        required
      />
      <div className="memo-editor__toolbar">
        <button
          type="button"
          className="memo-editor__save"
          onClick={() => {
            saveMemo(activeMemoId);
          }}
        >
                    Сохранить
        </button>
        <button
          type="button"
          className="memo-editor__delete"
          onClick={() => {
            deleteMemo(activeMemoId);
          }}
        >
                    Удалить
        </button>
      </div>
    </form>
  );
}

MemoEditorComponent.propTypes = {
  memo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    changedContent: PropTypes.string,
  }).isRequired,
  activeMemoId: PropTypes.number.isRequired,
  editMemoContent: PropTypes.func.isRequired,
  saveMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
};

export default MemoEditorComponent;
