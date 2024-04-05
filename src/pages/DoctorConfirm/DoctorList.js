import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getPending,confirm } from "../../services/doctor";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, Typography, Modal, FormControl, FormHelperText, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline:'none',
      height:'50px',
    }
  },
}));

// Yup validation schema
const validationSchema = Yup.object().shape({
  clinic_name: Yup.string().required('Clinic name is required'),
  license_img: Yup.string().required('License number is required'),
});

const DoctorList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [select, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOpenModal = (params) => {
    setSelected(params.id);
    setOpenModal(true);
    reset();
  };

  const handleCloseModal = () => setOpenModal(false);

  const onSubmit =async (data) => {
    try {
      let res;
      data.id = select;
      data.status = 1;
        res=await confirm(data);
      if(res){
        reset();
        toast.success('Doctor Confirmed successfull')
        handleCloseModal();
        fetchPosts();
      } 
  } catch (error) {
      toast.error(error?.response?.data || 'Registraion failed')
      // setLoad(false);
  } finally{
      // setLoad(false);
  }
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
            onClick={() => handleOpenModal(params)}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            style={{ marginLeft: '5px' }}
            // onClick={() => handleDelete(params.id)}
          >
            Reject
          </Button>
        </React.Fragment>
      ),
      width: 240,
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'phone_number', headerName: 'Phone number', width: 200 },
  ];

  const fetchPosts = async () => {
    const res = await getPending();
    setData(res.body.map(post => ({
      id: post.id,
      ...post,
    })));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Grid sx={{ p: 1, pr: 2 }}>
        <Typography sx={{ m: 1, fontSize: '22px' }}>Doctor Confirmation List</Typography>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
        />
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* <Typography sx={{p:1,pl:0}}>
            Approve Doctor
          </Typography> */}
          <Grid item xs={12} md={12} sx={{ p: 1 }} >
              <InputLabel>Clinic Name</InputLabel>
              <TextField
                  className={classes.root}
                  id="clinic_name"
                  name="clinic_name"
                  fullWidth
                  {...register("clinic_name")}
                  aria-describedby="clinic_name-text"
                />
                <FormHelperText id="clinic_name-text" sx={{color:'red'}}>{errors.clinic_name ? errors.clinic_name.message : ""}</FormHelperText>
            </Grid>
          <Grid item xs={12} md={12} sx={{ p: 1 }} >
          <InputLabel>License Number</InputLabel>
            <TextField
                className={classes.root}
                id="license_img"
                name="license_img"
                fullWidth
                {...register("license_img")}
                aria-describedby="license_img-text"
              />
              <FormHelperText id="license_img-text" sx={{color:'red'}}>{errors.license_img ? errors.license_img.message : ""}</FormHelperText>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Confirm
          </Button>
          <Button
            onClick={handleCloseModal}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default DoctorList;
