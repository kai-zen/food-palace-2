import { ArrowBack } from '@mui/icons-material';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import APSingleCommentRow from './APSingleCommentRow';

const APComments = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const allComments = useSelector((state) => state.comments.comments);
  const reversed = [...allComments].reverse();

  return (
    <Paper
      sx={{
        width: { sm: 'calc(80% - 260px)' },
        ml: { sm: '260px' },
        p: '138px 10% 50px 10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 148px)',
      }}
    >
      {loggedInUser[0] && loggedInUser[0].isAdmin ? (
        <>
          <Typography variant="h3" sx={{ mb: '20px' }}>
            <IconButton
              size="large"
              onClick={() => {
                navigate('/admin-panel');
              }}
            >
              <ArrowBack color="primary" fontSize="inherit" />
            </IconButton>
            Edit comments panel
          </Typography>
          <Table sx={{ maxWidth: '90%', m: 3 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Food</TableCell>
                <TableCell align="center">Body</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reversed.map((comment) => {
                return (
                  <APSingleCommentRow comment={comment} key={comment.id} />
                );
              })}
            </TableBody>
          </Table>
        </>
      ) : (
        <Button
          onClick={() => {
            navigate('/');
          }}
          variant="outlined"
        >
          Acces denied
        </Button>
      )}
    </Paper>
  );
};

export default APComments;
