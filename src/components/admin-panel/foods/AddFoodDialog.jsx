import { Dialog, DialogContent } from '@mui/material';
import AddFoodFormik from './AddFoodFormik';

const AddFoodDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogContent>
        <AddFoodFormik />
      </DialogContent>
    </Dialog>
  );
};

export default AddFoodDialog;
