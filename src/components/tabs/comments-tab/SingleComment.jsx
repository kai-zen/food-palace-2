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
        width: '90%',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        overflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <CardContent sx={{ width: '100%' }}>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <Avatar sx={{ width: 56, height: 56, mr: '15px' }}>
            {comment.author[0]}
          </Avatar>
          <Typography variant="h6">{comment.author}</Typography>
        </div>
        <br />
        <Typography>{comment.body}</Typography>
        <br />
        <div
          style={{
            width: '100%',
            padding: '5px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Chip label={comment.chip} />
          <Rating
            name="half-rating-read"
            defaultValue={comment.rate}
            precision={0.5}
            readOnly
          />
        </div>
      </CardContent>
    </Card>
  );
}
