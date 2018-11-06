import React from 'react';
import PropTypes from 'prop-types';

function MemoListComponent({
  setActiveDraftMemo, memos, setActiveMemo, activeMemoId,
}) {
  return (
    <div className="memo-list">
      <button
        type="button"
        onClick={() => setActiveDraftMemo()}
        className="memo-list__item"
      >
                Добавить заметку
      </button>
      {memos.map((memo, id) => (
        <button
          key={memo.id}
          type="button"
          onClick={() => setActiveMemo(id)}
          className={`memo-list__item${(activeMemoId === id ? '_active' : '')}`}
        >
          {Object.prototype.hasOwnProperty.call(memo, 'changedContent')
                && <span className="memo-list__unsaved">*</span>}
          {(memo.content === null || memo.content.length === 0) ? 'Не задано' : memo.content}
        </button>
      ))}
    </div>
  );
}

MemoListComponent.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    changedContent: PropTypes.string,
  })).isRequired,
  activeMemoId: PropTypes.number.isRequired,
  setActiveDraftMemo: PropTypes.func.isRequired,
  setActiveMemo: PropTypes.func.isRequired,
};
export default MemoListComponent;
