import React from 'react';
import '../style.css';
import PropTypes from 'prop-types';
import MemoList from '../containers/memo-list';
import DraftMemoEditor from '../containers/draft-memo-editor';
import MemoEditor from '../containers/memo-editor';

function IndexComponent(props) {
  const { activeMemoId } = props;
  return (
    <main className="app-container">
      <header>
        <h1>Заметки</h1>
      </header>
      <section className="memo-tools-container">
        <section className="memo-list-container">
          <MemoList />
        </section>
        <section className="memo-editor-container">
          {activeMemoId === null
                    && <DraftMemoEditor />}
          {activeMemoId !== null
                    && <MemoEditor />}
        </section>
      </section>
    </main>
  );
}

IndexComponent.propTypes = {
  activeMemoId: PropTypes.number.isRequired,
};

export default IndexComponent;
