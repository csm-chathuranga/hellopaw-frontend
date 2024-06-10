import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getPostsMe, deletePosts } from "../../services/post";
import { toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, Typography, Modal, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IMG_URL } from "../../utils/constant";

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

const PostList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

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
            onClick={() => navigate('/post/add/' + params.id)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            style={{ marginLeft: '5px' }}
            onClick={() => handleClickOpen(params.id)}
          >
            Delete
          </Button>
        </React.Fragment>
      ),
      width: 200,
    },
    { field: 'title', headerName: 'Title', width: 200 },
    {
      field: 'image',
      headerName: 'Image',
      renderCell: (params) => (
        <img src={IMG_URL + params.row.image_path} alt="Post" style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
      ),
      width: 130,
    },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'created_at', headerName: 'Created At', width: 200 },
  ];

  const handleClickOpen = (id) => {
    setPostIdToDelete(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setPostIdToDelete(null);
  };

  const handleDelete = async () => {
    try {
      let res = await deletePosts(postIdToDelete);
      if (res) {
        toast.success('Successfully deleted...!');
        fetchPosts();
        handleCloseModal();
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Delete failed');
      handleCloseModal();
    }
  };

  const fetchPosts = async () => {
    let res = await getPostsMe();
    setData(res?.body?.posts?.map(post => ({
      id: post.id, // Assuming each post has a unique ID
      ...post,
    })));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Grid sx={{ p: 1, pr: 2 }}>
        <Typography sx={{ m: 1, fontSize: '22px' }}>Post List</Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-end" mb={2}>
          <Button
            variant="contained"
            onClick={() => navigate('/post/add')}
            style={{ backgroundColor: '#4caf50', color: 'white' }}
          >
            + Add new
          </Button>
        </Box>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
          rowSelection={false}
        />
      </Grid>

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
              Are you sure you want to delete this post? This action cannot be undone.
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
    </Box>
  );
};

export default PostList;
