import {
  Button,
  Dialog,
  DialogContent,
  Rating,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../features/commentsSlice';

const AddCommentDialog = ({ open, setOpen, foodId, chip }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const comments = useSelector((state) => state.comments.comments);
  const [rateInForm, setRateInForm] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setOpen(false);
    dispatch(
      addComment({
        id: comments.length,
        foodId,
        author: loggedInUser[0].firstName,
        body: data.get('body'),
        chip,
        rate: rateInForm,
        isDeleted: false,
      })
    );
  };
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            rows={4}
            multiline
            required
            fullWidth
            id="body"
            label="Comment text"
            name="body"
            autoFocus
          />
          <Rating
            name="rate"
            precision={0.5}
            value={rateInForm}
            onChange={(e) => {
              setRateInForm(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add comment
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddCommentDialog;
