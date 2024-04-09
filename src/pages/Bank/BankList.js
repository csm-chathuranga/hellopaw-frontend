import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Modal, Box, TextField, Typography, Grid, styled, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    borderRadius: 5,
    padding: '10px 15px',
    outline: 'none',
    height: '50px',
  },
});

const bankDetailsSchema = yup.object({
  bankName: yup.string().required('Bank name is required'),
  branch: yup.string().required('Branch is required'),
  accountNumber: yup.string().required('Account number is required'),
}).required();

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BankList() {
  const [bankDetails, setBankDetails] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { control, handleSubmit, reset, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(bankDetailsSchema),
    defaultValues: {
      bankName: '',
      branch: '',
      accountNumber: '',
    }
  });

  useEffect(() => {
    // Simulate fetching data from API
    setBankDetails([
      { id: 1, bankName: 'Bank A', branch: 'Branch A', accountNumber: '123456' },
      { id: 2, bankName: 'Bank B', branch: 'Branch B', accountNumber: '654321' },
    ]);
  }, []);

  const handleOpen = (record = null) => {
    if (record) {
      setValue('bankName', record.bankName);
      setValue('branch', record.branch);
      setValue('accountNumber', record.accountNumber);
      setEditId(record.id);
    } else {
      reset();
      setEditId(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    if (editId) {
      const updatedDetails = bankDetails.map(detail => detail.id === editId ? { ...data, id: editId } : detail);
      setBankDetails(updatedDetails);
    } else {
      const newId = bankDetails.length > 0 ? Math.max(...bankDetails.map(detail => detail.id)) + 1 : 1;
      setBankDetails([...bankDetails, { ...data, id: newId }]);
    }
    handleClose();
  };

  const handleDeleteConfirmationOpen = (id) => {
    setDeleteId(id);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteConfirmOpen(false);
  };

  const handleDeleteConfirmed = () => {
    setBankDetails(bankDetails.filter(detail => detail.id !== deleteId));
    handleDeleteConfirmationClose();
  };

  const columns = [
    { field: 'bankName', headerName: 'Bank Name', width: 150 },
    { field: 'branch', headerName: 'Branch', width: 150 },
    { field: 'accountNumber', headerName: 'Account Number', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <Button onClick={() => handleOpen(params.row)} color="primary" variant="outlined">Edit</Button>
          <Button onClick={() => handleDeleteConfirmationOpen(params.id)} color="error" variant="outlined" style={{ marginLeft: 8 }}>Delete</Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography sx={{ fontSize: '22px' }}>
          Bank List
        </Typography>
        <Button variant="contained" onClick={() => handleOpen()}>Add Bank Record</Button>
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={bankDetails}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
          disableSelectionOnClick
        />
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
            {editId ? 'Edit Bank Record' : 'Add New Bank Record'}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ p: 1 }}>
              <Controller
                name="bankName"
                control={control}
                defaultValue=""
                render={({ field }) => <CustomTextField {...field} placeholder="Bank Name" variant="outlined" fullWidth />}
              />
              {errors.bankName && <Typography color="error">{errors.bankName.message}</Typography>}
            </Grid>
            <Grid item xs={12} sx={{ p: 1 }}>
              <Controller
                name="branch"
                control={control}
                defaultValue=""
                render={({ field }) => <CustomTextField {...field} placeholder="Branch" variant="outlined" fullWidth />}
              />
              {errors.branch && <Typography color="error">{errors.branch.message}</Typography>}
            </Grid>
            <Grid item xs={12} sx={{ p: 1 }}>
              <Controller
                name="accountNumber"
                control={control}
                defaultValue=""
                render={({ field }) => <CustomTextField {...field} placeholder="Account Number" variant="outlined" fullWidth />}
              />
              {errors.accountNumber && <Typography color="error">{errors.accountNumber.message}</Typography>}
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
            <Button type="submit" color="primary" variant="contained">{editId ? 'Update' : 'Add'}</Button>
            <Button onClick={handleClose} color="secondary" variant="contained">Cancel</Button>
          </Box>
        </Box>
      </Modal>
      <Dialog
        open={deleteConfirmOpen}
        onClose={handleDeleteConfirmationClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this bank record?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirmationClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirmed} color="secondary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default BankList;
