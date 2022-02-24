import React from 'react';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';

const CommentsTabPanel = () => {
  const comments = useSelector((state) => state.comments.comments);
  const reversed = [...comments].reverse();
  return (
    <>
      {reversed.map((comment) => {
        return <SingleComment comment={comment} key={comment.id} />;
      })}
    </>
  );
};

export default CommentsTabPanel;
