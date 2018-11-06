import { connect } from 'react-redux';
import { CreateMemo } from '../actions/memo';
import DraftMemoEditorComponent from '../components/draft-memo-editor';

const DraftMemoEditor = connect(() => ({}),
  dispatch => ({
    createMemo: content => dispatch(CreateMemo(content)),
  }))(DraftMemoEditorComponent);

export default DraftMemoEditor;
