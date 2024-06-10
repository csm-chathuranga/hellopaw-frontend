import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

const SkeletonLoader = () => {
  return (
    <Card sx={{ mt: 2, overflow: 'hidden' }}>
      <CardHeader
        avatar={
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        }
        action={
          <Skeleton variant="rectangular" width={24} height={24}>
            <IconButton />
          </Skeleton>
        }
        title={<Skeleton width="80%" />}
        subheader={<Skeleton width="40%" />}
      />
      <Skeleton variant="rectangular" width="100%" height={500} />
      <CardContent>
        <Skeleton width="100%" />
        <Skeleton width="60%" />
      </CardContent>
      <CardActions disableSpacing>
        <Skeleton variant="rectangular" width={24} height={24} />
        <Skeleton width="10%" />
      </CardActions>
    </Card>
  );
};

export default SkeletonLoader;
