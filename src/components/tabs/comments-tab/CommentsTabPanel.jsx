import React from 'react';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';

const CommentsTabPanel = () => {
  const comments = useSelector((state) => state.comments.comments);
  return (
    <>
      {comments.map((comment) => {
        return <SingleComment comment={comment} />;
      })}
    </>
  );
};

export default CommentsTabPanel;
