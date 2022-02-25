import { Dialog, DialogContent } from '@mui/material';
import EditFoodFormik from './EditFoodFormik';

const EditFoodDialog = ({ open, setOpen, food }) => {
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogContent>
        <EditFoodFormik food={food} />
      </DialogContent>
    </Dialog>
  );
};

export default EditFoodDialog;
