export const SET_ACTIVE_MEMO = 'SET_ACTIVE_MEMO';

export function SetActiveMemo(id) {
  return {
    type: SET_ACTIVE_MEMO,
    id,
  };
}

export const EDIT_MEMO_CONTENT = 'EDIT_MEMO_CONTENT';

export function EditMemoContent(id, content) {
  return {
    type: EDIT_MEMO_CONTENT,
    id,
    content,
  };
}

export const SET_ACTIVE_DRAFT_MEMO = 'SET_ACTIVE_DRAFT_MEMO';

export function SetActiveDraftMemo() {
  return {
    type: SET_ACTIVE_DRAFT_MEMO,
  };
}

export const CREATE_MEMO = 'CREATE_MEMO';

export function CreateMemo(content) {
  const date = new Date();
  return {
    type: CREATE_MEMO,
    id: date.getTime(),
    content,
  };
}

export const DELETE_MEMO = 'DELETE_MEMO';

export function DeleteMemo(id) {
  return {
    type: DELETE_MEMO,
    id,
  };
}

export const SAVE_MEMO = 'SAVE_MEMO';

export function SaveMemo(id, content) {
  return {
    type: SAVE_MEMO,
    id,
    content,
  };
}
