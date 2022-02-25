import { Delete, Person } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

const APSingleUserRow = ({ user }) => {
  return (
    <TableRow
      key={user.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        {user.firstName}
      </TableCell>
      <TableCell align="center">{user.lastName}</TableCell>
      <TableCell align="center">{user.email}</TableCell>
      <TableCell align="center">
        <IconButton>
          <Person color="warning" />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton>
          <Delete color="error" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default APSingleUserRow;
