import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Chip, Rating } from '@mui/material';

export default function SingleComment({ comment }) {
  return (
    <Card
      sx={{
        display: 'flex',
        boxShadow: 5,
        p: 3,
        mb: 3,
        minHeight: '170px',
        overflowY: 'auto',
        maxWidth: '90%',
      }}
    >
      <Avatar sx={{ width: 56, height: 56 }}>{comment.author[0]}</Avatar>
      <CardContent>
        <Typography variant="h6">{comment.author}</Typography>
        <br />
        <Typography>{comment.body}</Typography>
        <br />
        <Chip label={comment.chip} />
        <Rating
          name="half-rating-read"
          defaultValue={comment.rate}
          precision={0.5}
          readOnly
          sx={{ float: 'right' }}
        />
      </CardContent>
    </Card>
  );
}
