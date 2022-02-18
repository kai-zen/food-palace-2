import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Button, Chip, IconButton, TextField, Typography } from '@mui/material';

export default function MyShoppingCart() {
  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '68px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Table sx={{ maxWidth: '90%', m: 3 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Food name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Favorites</TableCell>
            <TableCell align="center">Cart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key="1"
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell component="th" scope="row" align="center">
              Hamburger
            </TableCell>
            <TableCell align="center">4.5 $</TableCell>
            <TableCell align="center">
              <TextField
                type="number"
                variant="standard"
                defaultValue={1}
                sx={{ width: '40px' }}
              />
            </TableCell>
            <TableCell align="center">
              <IconButton>
                <Favorite />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <IconButton>
                <ShoppingCart />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ width: '100%', m: 3, ml: 20 }}
      >
        Total price:{' '}
        <Chip color="primary" label="124 $" sx={{ fontSize: '22px' }} />
      </Typography>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{ display: 'block', mb: 3 }}
      >
        Order Now!
      </Button>
    </Paper>
  );
}
