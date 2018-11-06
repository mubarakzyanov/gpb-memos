import { connect } from 'react-redux';
import MemoEditorComponent from '../components/memo-editor';
import { DeleteMemo, EditMemoContent, SaveMemo } from '../actions/memo';

const MemoEditor = connect(
  ({ activeMemoId, memos }) => {
    let memo = null;
    if (activeMemoId !== null) {
      memo = memos[activeMemoId];
    }
    return { activeMemoId, memo };
  },
  dispatch => ({
    editMemoContent: (id, content) => dispatch(EditMemoContent(id, content)),
    saveMemo: id => dispatch(SaveMemo(id)),
    deleteMemo: id => dispatch(DeleteMemo(id)),
  }),
)(MemoEditorComponent);

export default MemoEditor;
