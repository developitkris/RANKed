import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  const PostContents =
    <div>
      <style global jsx>{`
        div {
          background-color: grey;
        }
      `}
      </style>
      <h3>{props.title}, {props.timePosted}</h3>
      <h3>{props.content}</h3>
    </div>
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  timePosted: PropTypes.string,
  content: PropTypes.string.isRequired
}
export default Post;
