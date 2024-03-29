import React from 'react';
import {useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { myPosts, deletePosts } from "../../services/post";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import { IMG_URL } from "../../utils/constant";

const PostList = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);


  const handleDelete = async (id) => {
    try {
        let res = await deletePosts(id);
        if(res){
            toast.success( 'Successfully deleted...!')
            getPets();
        }
    } catch (error) {
        toast.error(error?.response?.data || 'Delete failed')
        // setLoad(false);
    } finally{
        // setLoad(false);
    }
  }

  const getPets = async () => {
    let res = await myPosts();
    setData(res.body);
  }

  useEffect(() => {
    getPets();
}, []);

  return (
    <Grid sx={{p:1,pr:2}}>
        <Typography sx={{m:1,fontSize:'22px'}}>Post List</Typography>
    <Box display="flex" flexDirection="column" alignItems="flex-end">
 
      <Button variant="contained" onClick={()=>navigate('/post/add')} style={{ marginBottom: '10px', backgroundColor: '#4caf50', color: 'white',width:'100x' }}>+ Add new</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography >Image</Typography>
              </TableCell>
              <TableCell>
                <Typography >Title</Typography>
              </TableCell>
              <TableCell>
                <Typography >Description</Typography>
              </TableCell>
              <TableCell>
                <Typography >Created At</Typography>
              </TableCell>
              <TableCell>
                <Typography >Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={IMG_URL+item?.image_path } alt={item.title} style={{ width: '50px', borderRadius: '5px' }} />
                </TableCell>
                <TableCell style={{ padding: '2px', fontSize: '14px' }}>{item.title}</TableCell>
                <TableCell style={{ padding: '2px', fontSize: '14px' }}>{item.description}</TableCell>
                <TableCell style={{ padding: '2px', fontSize: '14px' }}>{item.created_at}</TableCell>
                <TableCell style={{ padding: '5px' }}>
                  <Button variant="outlined"  startIcon={<EditIcon />} onClick={()=>navigate('/post/add/'+ item.id)}>Edit</Button>
                  <Button variant="outlined" color='error' startIcon={<DeleteIcon />} style={{ marginLeft: '5px' }} onClick={()=>handleDelete(item.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>

  );
};

export default PostList;
