import { ArrowBack } from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { amber } from '@mui/material/colors';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../tabs/serach-tab/SearchInput';
import APSingleUserRow from './APSingleUserRow';

const APUsers = () => {
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users.users);
  const [filteredUsers, setFilteredUsers] = useState(allUsers);

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
      <SearchInput
        allFoods={allUsers}
        setFilteredFoods={setFilteredUsers}
        bgColor={amber[400]}
      />
      <Table sx={{ maxWidth: '90%', m: 3 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Firstname</TableCell>
            <TableCell align="center">Lastname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Admin</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => {
            return <APSingleUserRow user={user} key={user.id} />;
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default APUsers;
