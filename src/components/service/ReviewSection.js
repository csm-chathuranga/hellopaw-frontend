// src/ReviewSection.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, TextField, Avatar, Divider } from '@mui/material';
import { addReview } from "../../services/service";

const ReviewSection = ({ row, updateRecord }) => {
  const [reviews, setReviews] = useState(row?.has_review || []);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState('');
  const [load, setLoad] = useState(false);

  const handleAddReview = async () => {
    try {
      setLoad(true);
      await addReview({
        review: newReview,
        user_id: row.id
      });
      updateRecord();
      setShowForm(false);
      setNewReview('');
    } catch (error) {
      console.error(error);
    }finally{
      setLoad(false);
    }
  };

  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {row?.has_review?.length || 0} Reviews
        </Typography>
        {row?.has_review?.map((review) => (
          <Box key={review.id} mt={2}>
            <Box display="flex" alignItems="center">
              <Avatar alt={review?.name || 'N/A'} sx={{ width: 56, height: 56, mr: 2 }} />
              <Box>
                <Typography variant="body1" component="div">
                  {review?.reviewer?.name || 'N/A'} <Typography variant="caption">{review.created_at}</Typography>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {review.review}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
          </Box>
        ))}
        {showForm ? (
          <Box mt={2}>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              label="Write a review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddReview}>
            {load ? 'Wait' : ' Submit Review'}  
             
            </Button>
          </Box>
        ) : (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)} disabled={load}>
            Write a Review
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewSection;
