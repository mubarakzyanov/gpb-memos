import initialState from '../initial-state';
import {
  CREATE_MEMO, DELETE_MEMO, EDIT_MEMO_CONTENT, SAVE_MEMO, SET_ACTIVE_DRAFT_MEMO,
  SET_ACTIVE_MEMO,
} from '../actions/memo';
import {
  createMemo, deleteMemo, editMemoContent, saveMemo, setActiveDraftMemo, setActiveMemo,
} from './memo';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MEMO:
      return createMemo(state, action.content);
    case EDIT_MEMO_CONTENT:
      return editMemoContent(state, action.id, action.content);
    case SAVE_MEMO:
      return saveMemo(state, action.id);
    case DELETE_MEMO:
      return deleteMemo(state, action.id);
    case SET_ACTIVE_MEMO:
      return setActiveMemo(state, action.id);
    case SET_ACTIVE_DRAFT_MEMO:
      return setActiveDraftMemo(state);
    default:
      return state;
  }
};
