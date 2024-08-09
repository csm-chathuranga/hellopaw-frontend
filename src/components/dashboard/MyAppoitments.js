import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getMyShedule,getDoctorDashCount } from "../../services/doctor";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const MyAppointment = () => {
  const navigate = useNavigate();
  const [row, setRow] = useState([]);


  const openSession = (params) => {
    navigate('/session/'+params.id)
  };
  const columns = [
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => (
        <React.Fragment>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => openSession(params)}
          >
            Start Session
          </Button>
        </React.Fragment>
      ),
      width: 240,
    },
    { field: 'time_slot', headerName: 'Time Slot', flex: 1, },
    { field: 'has_owner.name', headerName: 'Pet Owner', flex: 1,renderCell: (params) =>params?.row['has_owner']['name'] },
    { field: 'hcontact', headerName: 'Contact Number', flex: 1,renderCell: (params) =>params?.row['has_owner']['phone_number'] || 'N/A' },
    { field: 'petname', headerName: 'Pet Name', flex: 1,renderCell: (params) =>params?.row['has_pet']['name'] || 'N/A' },
  ];

  const getMyAppointment = async () => {
    let res = await getMyShedule();
    setRow(res?.body?.new);
  }

  const getDashcount = async () => {
    let res = await getDoctorDashCount();
    // setRow(res?.body?.new);
  }

  useEffect(() => {
    getMyAppointment();
    getDashcount();
}, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Grid sx={{ p: 1, pr: 2 }}>
        <Typography sx={{ m: 1, fontSize: '22px' }}>Appointment List</Typography>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
          rowSelection={false}
        />
      </Grid>
    </Box>
  );
};

export default MyAppointment;
