import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

const APSingleFoodRow = ({ food }) => {
  return (
    <TableRow
      key={food.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        {food.name}
      </TableCell>
      <TableCell align="center">{food.price} $</TableCell>
      <TableCell align="center">{food.category}</TableCell>
      <TableCell align="center">
        <IconButton>
          <Edit color="warning" />
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

export default APSingleFoodRow;
