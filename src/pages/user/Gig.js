"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { Grid, TextField, Typography, Card, CardContent, CardMedia } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { saveService } from "../../services/petService";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import dayjs from "dayjs";
import InputLabel from '@mui/material/InputLabel';
import { me } from "../../services/authService";
import { IMG_URL } from "../../utils/constant";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { handleUpload } from "../../utils/uploadUtils"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline: 'none',
      height: '50px',
    }
  },
  datePicker: {
    '& .MuiInputBase-root': {
      height: '50px',
      padding: '10px 15px',
      borderRadius: 5,
      outline: 'none',
    },
  },
  media: {
    height: 250,
    width: 250,
    border: '1px solid black',
    position: 'relative',
    '&:hover $overlay': {
      opacity: 1,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    opacity: 0,
    transition: '.3s ease',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

let schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  amount: yup.string().required("Amount is required"),
});

const toolbarOptions = [
  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
  [{ 'size': [] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{'list': 'ordered'}, {'list': 'bullet'}, 
   {'indent': '-1'}, {'indent': '+1'}],
  ['link', 'image'],
  [{ 'align': [] }],
  [{ 'color': [] }, { 'background': [] }], // add color and background options
  ['clean']
];


export default function Gig() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const [dob, setDob] = useState(dayjs());
  const [dobErr, setDobErr] = useState(false);
  const [selectedImage, setSelectedImage] = useState('https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg');
  const [description, setDescription] = useState('');

  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const textProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
  };

  let submitHandler = async (data) => {
    try {
      setLoad(true);
      let resImg = await handleUpload(selectedImage);
      data.image = resImg.data.url;
      data.des = description;
      console.log(data);
      let res = await saveService(data);
      console.log(res);
      if (res) toast.success('Service updated successfully');
    } catch (error) {
      toast.error(error?.response?.data || 'Registration failed');
      setLoad(false);
    } finally {
      setLoad(false);
    }
  }

  const handleDob = (value) => {
    if (value) {
      setDobErr(false);
    }
    setDob(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const getPets = async () => {
    let res = await me();
    let decoded = res?.body?.user ? JSON.parse(res?.body?.user?.other) : null;
    if (decoded) {
      setValue('title', decoded?.title || '');
      setValue('amount', decoded?.amount || '');
      setDescription(decoded?.des || '');
      setSelectedImage(IMG_URL + decoded?.image);
    }
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div className="main-wrapper">
      <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
        <Card className={classes.card}>
          <Typography variant="h5" gutterBottom>
            Update My Service Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'}>
              <div className={classes.media}>
                <CardMedia
                  component="img"
                  alt="Selected Image"
                  height="250"
                  image={selectedImage}
                  title="Selected Image"
                />
                <div className={classes.overlay}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="icon-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      startIcon={<PhotoCamera />}
                    >
                      Change Image
                    </Button>
                  </label>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel>Title <span style={{ color: 'red' }}>*</span></InputLabel>
                    <TextField
                      className={classes.root}
                      {...register("title")}
                      {...textProps}
                      error={errors?.title ? true : false}
                      helperText={errors?.title ? errors.title.message : null}
                      placeholder="Please enter Title"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Amount <span style={{ color: 'red' }}>*</span></InputLabel>
                    <TextField
                      type="number"
                      className={classes.root}
                      {...register("amount")}
                      {...textProps}
                      error={errors?.amount ? true : false}
                      helperText={errors?.amount ? errors.amount.message : null}
                      placeholder="Please enter Amount"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
              <Grid item xs={12}>
                <InputLabel>Description <span style={{ color: 'red' }}>*</span></InputLabel>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  modules={{ toolbar: toolbarOptions }}
                />
                {errors.des && <p style={{ color: 'red' }}>{errors.des.message}</p>}
              </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="flex-end" mt={2}>
            <Grid item>
              <Button onClick={() => navigate(`/`)} variant="outlined" color="primary" className={classes.button}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={load}
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {load ? 'Wait' : 'Continue'}
              </Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  );
}
