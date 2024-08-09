import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getStory, deleteNewSection } from "../../services/newSection";
import { toast } from 'react-toastify';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, Typography, Collapse, useMediaQuery, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IMG_URL } from "../../utils/constant";

const NewStory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [expandedRowId, setExpandedRowId] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleToggleExpand = (id) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };

  const columns = [
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          style={{ marginLeft: '5px' }}
          onClick={() => handleDelete(params.id)}
        >
          Delete
        </Button>
      ),
      width: isMobile ? 100 : 200,
    },
    { field: 'title', headerName: 'Title', width: isMobile ? 150 : 200 },
    !isMobile && {
      field: 'image',
      headerName: 'Image',
      renderCell: (params) => (
        <img src={IMG_URL + params.row.image_path} alt="Post" style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
      ),
      width: 130,
    },
    { field: 'created_at', headerName: 'Created At', width: isMobile ? 150 : 200 },
    {
      field: 'expand',
      headerName: '',
      sortable: false,
      renderCell: (params) => (
        isMobile && (
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleToggleExpand(params.id)}
          >
            {expandedRowId === params.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )
      ),
      width: isMobile ? 50 : 0,
    },
  ].filter(Boolean);

  const handleDelete = async (id) => {
    try {
      let res = await deleteNewSection(id);
      if (res) {
        toast.success('Successfully deleted...!');
        fetchPosts();
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Delete failed');
    }
  };

  const fetchPosts = async () => {
    let res = await getStory();
    setData(res.body.map(post => ({
      id: post.id,
      ...post,
    })));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid sx={{ p: 1, pr: 2 }}>
        <Typography sx={{ m: 1, fontSize: '22px' }}>Story List</Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-end" mb={2}>
          <Button
            variant="contained"
            onClick={() => navigate('/story/add')}
            style={{ backgroundColor: '#4caf50', color: 'white' }}
          >
            + Add new
          </Button>
        </Box>
        <Box sx={{ minHeight: '200px' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            rowSelection={false}
            // checkboxSelection={false}
            sx={{
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: isMobile ? '#f5f5f5' : '#fff',
              },
              '& .MuiDataGrid-cell': {
                fontSize: isMobile ? '12px' : '14px',
              },
            }}
          />
          {isMobile && data.map((row) => (
            <Collapse
              in={expandedRowId === row.id}
              timeout="auto"
              unmountOnExit
              key={row.id}
            >
              <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: '1px solid #ddd' }}>
                <Typography variant="subtitle1">Description:</Typography>
                <Typography variant="body2">{row.description}</Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>Image:</Typography>
                <img src={IMG_URL + row.image_path} alt="Post" style={{ width: '100px', height: '100px', borderRadius: '5px' }} />
              </Box>
            </Collapse>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default NewStory;
