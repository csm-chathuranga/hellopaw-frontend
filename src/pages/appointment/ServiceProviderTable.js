import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getServiceByServiceProvider,updateAmount } from "../../services/service";

export default function ServiceProviderTable() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [amount, setAmount] = useState('');
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState([]);
  const [load, setLoad] = useState(false);


  const handleOpen = (appointment) => {
    setSelectedAppointment(appointment);
    setAmount(appointment.amount);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAppointment(null);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      let conArr={
        id:selectedAppointment.id,
        amount:amount
      }
      let res = await updateAmount(conArr);
      getdata();
      handleClose();
    } catch (error) {
      
    }finally{
      setLoad(false);
    }


  };

  const columns = [
    {
      field: 'breed',
      headerName: 'Breed',
      flex: 1,
      renderCell: (params) => params.row.has_pets ? params.row.has_pets?.breed : '',
    },
    {
      field: 'Contact',
      headerName: 'Contact Number',
      flex: 1,
      renderCell: (params) => params.row.has_user ? params.row.has_user?.phone_number : 'N/A',
    },
    { field: 'weight', headerName: 'Weight', flex: 1 },
    {
      field: 'checkin',
      headerName: 'Check-In',
      flex: 1,
    },
    {
      field: 'checkout',
      headerName: 'Check-Out',
      flex: 1,
    },
    { 
      field: 'pickup', 
      headerName: 'Pickup Needed', 
      flex: 1, 
      valueGetter: (params) => params.row?.pickup ? 'Yes' : 'No' 
    },
    { 
      field: 'pickup_location', 
      headerName: 'Pickup Location', 
      flex: 1, 
      valueGetter: (params) => params.row?.pickup_location || 'N/A' 
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen(params.row)}
        >
          Add Amount
        </Button>
      ),
    },
  ];

  const getdata = async () => {
    let res = await getServiceByServiceProvider();
    setRow(res.body);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Typography sx={{ m: 1, fontSize: '22px' }}>My Requests</Typography>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />

      {/* Modal for Updating Amount */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Amount
          </Typography>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            // label="Amount"
            variant="outlined"
            value={amount}
            onChange={handleAmountChange}
            InputLabelProps={{ shrink: false }} // This line prevents label from shrinking
          />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit} disabled={load}>
              {load ? 'Updating ' : 'Update'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
