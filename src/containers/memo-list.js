import { connect } from 'react-redux';
import MemoListComponent from '../components/memo-list';
import { SetActiveDraftMemo, SetActiveMemo } from '../actions/memo';

const MemoList = connect(
  ({ activeMemoId, memos, editions }) => ({ activeMemoId, memos, editions }),
  dispatch => ({
    setActiveMemo: id => dispatch(SetActiveMemo(id)),
    setActiveDraftMemo: () => dispatch(SetActiveDraftMemo()),
  }),
)(MemoListComponent);

export default MemoList;
