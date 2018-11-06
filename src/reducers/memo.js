export function deleteMemo(state, id) {
  const memos = [...state.memos];

  memos.splice(id, 1);

  return {
    ...state,
    memos,
    activeMemoId: null,
  };
}

export function createMemo(state, content) {
  const memos = [...state.memos];

  memos.unshift({
    content,
  });

  return {
    ...state,
    memos,
    activeMemoId: 0,
  };
}

export function saveMemo(state, id) {
  const memos = [...state.memos];

  if (Object.prototype.hasOwnProperty.call(memos[id], 'changedContent')) {
    memos[id] = { ...memos[id], content: memos[id].changedContent };
    delete memos[id].changedContent;
  }

  return {
    ...state,
    memos,
  };
}

export function setActiveMemo(state, id) {
  return {
    ...state,
    activeMemoId: id,
  };
}

export function setActiveDraftMemo(state) {
  return {
    ...state,
    activeMemoId: null,
  };
}

export function editMemoContent(state, id, content) {
  const memos = [...state.memos];
  memos[id] = { ...memos[id], changedContent: content };
  return {
    ...state,
    memos,
  };
}
