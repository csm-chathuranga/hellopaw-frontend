// CardComp.js
import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Rating,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import GroomingModal from '../../../components/service/GroomingModal'; // import the new component
import { IMG_URL } from "../../../utils/constant";
import { useNavigate } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline: 'none',
      height: '45px',
    }
  },
  card: {
    mt: 2,
    borderRadius: '10px',
    height: '450px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  cardMedia: {
    height: 200,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
  cardContent: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(2),
    },
  },
}));

export default function CardComp({ item, pet }) {
  const classes = useStyles();
  const def=item;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  
  const handleOpen = () => {
    navigate('/reservation/'+def.id)
    
  };

  item=JSON.parse(item.other)
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const truncateText = (text, maxLength) => {
    if (text?.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      <Card className={classes.card} onClick={handleOpen}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {item?.title?.charAt(0) || 'A'}
            </Avatar>
          }
          title={item?.title || 'N/A'}
        />
        <CardMedia
          component="img"
          className={classes.cardMedia}
          src={item?.image ? IMG_URL + item?.image : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}
          alt="Paella dish"
        />
        <Rating name="read-only" value={2} readOnly sx={{ ml: 2 }} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" color="text.secondary">
            {truncateText(item?.des, 150)}
          </Typography>
        </CardContent>
        <Typography sx={{ bottom: 3, left: 20, position: 'absolute' }}>Rs : {item?.amount}.00 (LKR)</Typography>
      </Card>

      {/* <GroomingModal open={open} handleClose={handleClose} item={item} pet={pet} /> */}
    </>
  );
}
