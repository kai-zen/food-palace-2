import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Chip, Rating } from '@mui/material';

export default function SingleComment() {
  return (
    <Card
      sx={{
        display: 'flex',
        boxShadow: 5,
        p: 3,
        mb: 3,
        minHeight: '170px',
        overflowY: 'auto',
      }}
    >
      <Avatar sx={{ width: 56, height: 56 }}>N</Avatar>
      <CardContent>
        <Typography variant="h6">AuthorName</Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          voluptatem incidunt odit quod eveniet? Similique expedita repudiandae
          quam ofuam officiis. Placeat inventore impedit nam. Beatae molestias
          tempora architecto explicabo officiis repudiandae.
        </Typography>
        <br />
        <Chip label="Hamburger" />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
          sx={{ float: 'right' }}
        />
      </CardContent>
    </Card>
  );
}
