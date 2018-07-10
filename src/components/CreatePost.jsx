import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function CreatePost(props){
  let _title = null;
  let _content = null;

  function handleCreatePostSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: _title.value,
      content: _content.value,
      timeCreated: new Moment()
    };
    dispatch(action);
    _title.value = '';
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleCreatePostSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title your content'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='content'
          placeholder='Share your content'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Post it!</button>
      </form>
    </div>
  );
}

export default connect()(CreatePost);
