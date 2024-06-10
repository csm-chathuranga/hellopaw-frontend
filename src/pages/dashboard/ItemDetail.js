// File path: src/components/ItemDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import { IMG_URL } from '../../utils/constant';
import { getNewSectionById } from "../../services/newSection";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const getSingleId = async () => {
    try {
      let res = await getNewSectionById(id);
      setItem(res?.body || {});
    } catch (error) {
      // Handle error if needed
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleId(id);
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ borderRadius: '10px', padding: '20px' }}>
        {loading ? (
          <>
            <Skeleton variant="text" width={210} height={40} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Skeleton variant="rectangular" width={240} height={240} />
                <Skeleton variant="text" width={120} height={20} sx={{ mt: 2 }} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h5" >{item.title}</Typography>
            <Typography variant="body2" sx={{ mt: 1,mb:3}}>{new Date(item.created_at).toLocaleString()}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Avatar
                  alt="Profile Picture"
                  src={IMG_URL + item.image_path}
                  sx={{ width: 240, height: 240, borderRadius: '5px', cursor: 'pointer' }}
                  onClick={handleClickOpen}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="body1">{item.description}</Typography>
              </Grid>
            </Grid>
            <Dialog
              open={open}
              onClose={handleClose}
              maxWidth="md"
              fullWidth
            >
              <DialogContent>
                <img
                  src={IMG_URL + item.image_path}
                  alt="Profile Picture"
                  style={{ width: '100%', height: 'auto' }}
                />
              </DialogContent>
            </Dialog>
          </>
        )}
      </Card>
    </Box>
  );
}
