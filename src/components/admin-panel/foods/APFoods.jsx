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
import { amber } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../tabs/serach-tab/SearchInput';
import AddFoodDialog from './AddFoodDialog';
import APSingleFoodRow from './APSingleFoodRow';
import EditFoodDialog from './EditFoodDialog';

const APFoods = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const allFoods = useSelector((state) => state.foods.allFoods);
  const [filteredFoods, setFilteredFoods] = useState(allFoods);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [editingFood, setEditingFood] = useState(allFoods[0]);

  useEffect(() => {
    setFilteredFoods(allFoods);
  }, [allFoods]);
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
            Edit foods panel
          </Typography>
          <SearchInput
            allFoods={allFoods}
            setFilteredFoods={setFilteredFoods}
            bgColor={amber[400]}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: '20px' }}
            onClick={() => {
              setOpenAdd(true);
            }}
          >
            Add new food
          </Button>
          <Table sx={{ maxWidth: '90%', m: 3 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Food name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Edit / Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFoods.map((food) => {
                return (
                  <APSingleFoodRow
                    food={food}
                    key={food.id}
                    setOpen={setOpen}
                    setEditingFood={setEditingFood}
                  />
                );
              })}
            </TableBody>
          </Table>
          <AddFoodDialog setOpen={setOpenAdd} open={openAdd} />
          <EditFoodDialog setOpen={setOpen} open={open} food={editingFood} />
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

export default APFoods;
