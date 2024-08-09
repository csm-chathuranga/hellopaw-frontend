import React, { useEffect, useState } from 'react';
import { getUsers } from "../../services/Dashboard";
import {
  DataGrid,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import {
  Box,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Modal,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';

const UserLists = () => {
  const [rows, setRows] = useState([]);
  const { type } = useParams();
  const [userType, setUserType] = useState(type); // Default user type
  const [open, setOpen] = useState(false); // State to manage modal open state
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false); // State for delete confirmation modal
  const [selectedUser, setSelectedUser] = useState(null); // State to store selected user details
  const [deleteId, setDeleteId] = useState(null); // Store the ID to be deleted

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleDelete = () => {
    // Delete the row with the specific id
    setRows((prevRows) => prevRows.filter((row) => row.id !== deleteId));
    setDeleteConfirmOpen(false);
    setDeleteId(null);
  };

  const handleOpenDeleteConfirm = (id) => {
    setDeleteId(id);
    setDeleteConfirmOpen(true);
  };

  const handleCloseDeleteConfirm = () => {
    setDeleteConfirmOpen(false);
    setDeleteId(null);
  };

  const columns = [
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <GridActionsCellItem
            icon={<VisibilityIcon sx={{ fontSize: 24 }} />}
            label="View"
            onClick={() => handleOpen(params.row)}
            showInMenu={false}
          />
          <GridActionsCellItem
            icon={<DeleteIcon sx={{ fontSize: 24, color: 'red' }} />}
            label="Delete"
            onClick={() => handleOpenDeleteConfirm(params.id)}
            showInMenu={false}
          />
        </>
      ),
    },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone_number', headerName: 'Phone Number', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    {
      field: 'address',
      headerName: 'Address',
      flex: 2,
      renderCell: (params) => {
        const { street, city, state, postal_code } = params.row;
        return `${street || ''}, ${city || ''}, ${state || ''} ${postal_code || ''}`.replace(/, ,/g, ',').replace(/^, |,$/, '');
      },
    },
    { field: 'nic', headerName: 'NIC', flex: 1 },
  ];

  const fetchUsers = async () => {
    try {
      let res = await getUsers(userType);
      if (Array.isArray(res.body)) {
        setRows(res.body);
      } else {
        console.error("Data fetched is not an array:", res.body);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  useEffect(() => {
    fetchUsers();
  }, [userType]);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container direction="column" sx={{ p: 1, pr: 2 }}>
        <Typography sx={{ m: 1, fontSize: '22px' }}>User List</Typography>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 300, alignSelf: 'flex-end' }}>
          <InputLabel id="user-type-label">User Type</InputLabel>
          <Select
            labelId="user-type-label"
            value={userType}
            onChange={handleUserTypeChange}
            label="User Type"
            MenuProps={{
              PaperProps: {
                sx: {
                  maxHeight: 300,
                },
              },
            }}
          >
            <MenuItem value="doctor">Doctor</MenuItem>
            <MenuItem value="owner">Owner</MenuItem>
            <MenuItem value="grooming">Grooming</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ height: 400, minHeight: 300 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection={false}
            disableSelectionOnClick
            sx={{
              '& .MuiDataGrid-overlay': {
                justifyContent: 'center',
              },
            }}
            components={{
              NoRowsOverlay: () => (
                <Typography variant="body2" sx={{ mt: 2 }}>
                  No rows available
                </Typography>
              ),
            }}
          />
        </Box>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography variant="subtitle2">Name</Typography>
                <Typography variant="subtitle2">Email</Typography>
                <Typography variant="subtitle2">Phone Number</Typography>
                <Typography variant="subtitle2">Gender</Typography>
                <Typography variant="subtitle2">NIC</Typography>
                <Typography variant="subtitle2">Address</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography>{selectedUser?.name}</Typography>
                <Typography>{selectedUser?.email}</Typography>
                <Typography>{selectedUser?.phone_number}</Typography>
                <Typography>{selectedUser?.gender}</Typography>
                <Typography>{selectedUser?.nic}</Typography>
                <Typography>{`${selectedUser?.street}, ${selectedUser?.city}, ${selectedUser?.state} ${selectedUser?.postal_code}`}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Modal>
      <Modal
        open={deleteConfirmOpen}
        onClose={handleCloseDeleteConfirm}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Are you sure you want to delete this user?
            </Typography>
            <Button onClick={handleDelete} variant="contained" color="error" sx={{ mr: 1 }}>
              Delete
            </Button>
            <Button onClick={handleCloseDeleteConfirm} variant="outlined">
              Cancel
            </Button>
          </CardContent>
        </Card>
      </Modal>
    </Box>
  );
};

export default UserLists;
