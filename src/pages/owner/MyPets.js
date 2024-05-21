import * as React from 'react';
import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { IconButton, Grid, Typography, Modal, Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Skeleton, Chip } from "@mui/material";
import { getMyPets } from "../../services/petService";
import { deletePet } from "../../services//PetOwner";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { IMG_URL } from "../../utils/constant";
import { toast } from 'react-toastify';

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
      outline: 'none',
      height: '50px',
    }
  },
}));

export default function MyPets() {
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [petIdToDelete, setPetIdToDelete] = useState(null);
  const navigate = useNavigate();
  const classes = useStyles();

  const getPets = async () => {
    let res = await getMyPets();
    setRows(res.body);
  };

  useEffect(() => {
    getPets();
  }, []);

  const handleClickOpen = (id) => {
    setPetIdToDelete(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setPetIdToDelete(null);
  };

  const handleDelete = async () => {
    try {
      let res = await deletePet(petIdToDelete);
      if (res) {
        toast.success('Successfully deleted...!');
        getPets();
        handleCloseModal();
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Delete failed');
      handleCloseModal();
    }
  };

  return (
    <Grid container direction="column">
      <Grid container direction="column" sx={{ position: 'relative' }}>
        <Typography sx={{ m: 1, fontSize: '18px' }}>Your pets</Typography>
        <Button variant="outlined" startIcon={<AddIcon />} sx={{ maxWidth: '200px', position: 'absolute', right: 20, top: 5 }}
          onClick={() => navigate(`/petRegister`)}> Add New  </Button>
      </Grid>

      {rows.length > 0 ? 
        <List sx={{ width: '100%', minWidth: '300px', bgcolor: 'background.paper', mt: 2, p: 1 }}>
          {rows.map((item, i) => (
            <div key={'pet-' + i}>
              <ListItem alignItems="flex-start" sx={{ borderRadius: '5px', border: '1px solid #8080801c', mt: 0.5 }}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={IMG_URL + item?.image || 'default.png'} />
                </ListItemAvatar>
                <ListItemText
                  primary={item?.breed || 'N/A'}
                  secondary={
                    <Grid display={'flex'} direction={'column'} gap={1} sx={{ mt: 1 }}>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"  >
                        Birth date : -{item?.birth_date || 'N/A'}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"  >
                        <Chip label={item?.gender || 'N/A'} color={item?.gender === 'male' || item?.gender === 'Male' ? 'success' : 'primary'} sx={{ minWidth: '50px', height: '20px' }} /> 
                      </Typography>
                    </Grid>
                  }
                />
                <Link to={`/petRegister/${item?.id}`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <Link to={`/ViewPet/${item?.id}`}>
                  <IconButton>
                    <VisibilityIcon sx={{ color: 'light-blue' }} />
                  </IconButton>
                </Link>
                <IconButton onClick={() => handleClickOpen(item?.id)}>
                  <DeleteForeverOutlinedIcon sx={{ color: 'red' }} />
                </IconButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
        : <>
          <Box sx={{ width: '100%', mt: 1 }}>
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
          </Box>
          <Box sx={{ width: '100%', mt: 2 }}>
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
          </Box>
          <Box sx={{ width: '100%', mt: 2 }}>
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
          </Box>
          <Box sx={{ width: '100%', mt: 2 }}>
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
            <Skeleton animation="wave" sx={{ height: '40px' }} />
          </Box>
        </>
      }

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={modalStyle}>
          <DialogTitle id="delete-modal-title">Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="delete-modal-description">
              Are you sure you want to delete this pet? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={6}>
                <Button
                  onClick={handleCloseModal}
                  fullWidth
                  variant="outlined"
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={handleDelete}
                  fullWidth
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Box>
      </Modal>
    </Grid>
  );
}
