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
import APSingleUserRow from './APSingleUserRow';

const APUsers = () => {
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users.users);

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
            Edit users panel
          </Typography>
          <Table sx={{ maxWidth: '90%', m: 3 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Admin / Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((user) => {
                return <APSingleUserRow user={user} key={user.id} />;
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

export default APUsers;
