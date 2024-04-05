import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { myPosts, deletePosts } from "../../services/post";
import { toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IMG_URL } from "../../utils/constant";

const PostList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

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
            onClick={() => handleDelete(params.id)}
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

  const handleDelete = async (id) => {
    try {
      let res = await deletePosts(id);
      if (res) {
        toast.success('Successfully deleted...!');
        fetchPosts();
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Delete failed');
    }
  };

  const fetchPosts = async () => {
    let res = await myPosts();
    setData(res.body.map(post => ({
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
        />
      </Grid>
    </Box>
  );
};

export default PostList;
