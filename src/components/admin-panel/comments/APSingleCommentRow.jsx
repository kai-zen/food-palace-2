import { Delete } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

const APSingleCommentRow = ({ comment }) => {
  return (
    <TableRow
      key={comment.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        {comment.author}
      </TableCell>
      <TableCell align="center">{comment.chip}</TableCell>
      <TableCell align="center">{comment.body}</TableCell>
      <TableCell align="center">
        <IconButton>
          <Delete color="error" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default APSingleCommentRow;
