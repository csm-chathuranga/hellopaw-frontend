import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { IMG_URL } from "../utils/constant";
import { user } from "../../src/store";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { deletePosts,addLike} from "../services/post";
import { toast } from 'react-toastify';

export default function RecipeReviewCard({ img, item, getPost,updateLikes }) {
  let imgAvatar = item?.user?.other ? JSON.parse(item?.user?.other) : null;
  const [localUser, setLocalUser] = useAtom(user);
  const navigate = useNavigate();
  console.log(localUser, item?.likes);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [likes, setLikes] = React.useState(item?.likes ? JSON.parse(item?.likes) : 0);
  const [liked, setLiked] = React.useState(false);
  // const [liked, setLiked] = React.useState(item?.likes ? JSON.parse(item?.likes).includes(localUser.id) : false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleMenuClose();
    navigate(`/post/add/${item.id}`);
  };

  const handleDelete = () => {
    handleMenuClose();
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const confirmDelete = async () => {
    try {
      setDialogOpen(false);
      let res = await deletePosts(item.id);
      if (res) {
        toast.success('Successfully deleted...!');
        getPost();
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Delete failed');
    }
  };

  const handleLike = async () => {
    try {
      // alert();
      const res= await addLike({post_id:item.id});
      setLikes(res.body.likes);
      setLiked(res.body.likes.includes(localUser.id));
      // if(res.body.likes.include(item.id)){
        // console.log('this',res.body.likes.includes(localUser.id));
        // console.log('this',res.body.likes);
      // }
      // }
    } catch (error) {
      toast.error(error?.response?.data || 'Failed to update reaction');
    }
  };

  return (
    <Card sx={{ mt: 2, overflow: 'hidden' }}>
      <CardHeader
        avatar={
          <Avatar alt="Profile Picture" src={IMG_URL + imgAvatar?.image || null} />
        }
        action={
          localUser?.id === item?.user_id && (
            <>
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleEdit}>
                  <EditIcon sx={{ mr: 1 }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                  <DeleteIcon sx={{ mr: 1 }} />
                  Delete
                </MenuItem>
              </Menu>
            </>
          )
        }
        title={item?.user?.name || ''}
        subheader={item?.created_at || ''}
      />
      <CardMedia component="img" height="500" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.description || ''}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike} >
          <FavoriteIcon sx={{ fontSize: '20px', color: liked ? 'red' : 'grey' }} />
          {/* dd{likes} */}
          <Typography sx={{ ml: 2 }}>{likes?.length || 0}</Typography>
        </IconButton>
      </CardActions>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
