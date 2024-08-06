"use client";
import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import { savePost, updatePost, getPostsById } from "../../services/post";
import { useParams } from 'react-router-dom';
import { IMG_URL } from "../../utils/constant";
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
}));

let schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export default function Gig() {
  const [load, setLoad] = React.useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = React.useState('https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg');
  const params = useParams();

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({ resolver: yupResolver(schema) });
  const textProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
  };

  let submitHandler = async (data) => {
    setLoad(true);
    try {
      let resImg = await handleUpload(selectedImage);
      let res;
      data.image_path = resImg.data.url;
      if (params?.id) {
        data.id = params.id;
        res = await updatePost(data);
      } else {
        res = await savePost(data);
      }

      if (res) {
        setLoad(false);
        reset();
        setSelectedImage(null);
        toast.success('Post updated successfully');
        navigate('/posts')
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Registration failed');
      setLoad(false);
    } finally {
      // setLoad(false);
    }
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

  const getPost = async () => {
    try {
      let { body } = await getPostsById(params.id);
      setValue('title', body?.title || '');
      setValue('description', body?.description || '');
      setSelectedImage(IMG_URL + body?.image_path || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg');
    } catch (error) {
    }
  };

  useEffect(() => {
    if (params?.id) {
      getPost();
    }
  }, [params]);

  return (
    <div className="main-wrapper">
      <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
        <Grid container direction="row" sx={{ p: 2 }}>
          <Typography sx={{ m: 1, fontSize: '22px' }}>Add New Post</Typography>
          <Grid container direction="row" display={'flex'} alignItems={'center'} >
            <Grid item xs={12} md={5} sx={{ p: 1 }} >
              <InputLabel>Select the image <span style={{ color: 'red' }}>*</span></InputLabel>
              {selectedImage && (
                <div>
                  <img src={selectedImage} alt="Selected" style={{ Width: '250px', height: '250px', border: '1px solid black' }} />
                </div>
              )}
              <Grid xs={12} md={12} sx={{ p: 1 }} >
                <input type="file" {...register('image')} onChange={handleImageChange} />
              </Grid>
            </Grid>
            <Grid xs={12} md={7} sx={{ p: 1 }} >
              <Grid item xs={12} md={12} sx={{ p: 1 }} >
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

              <Grid item xs={12} md={12} sx={{ p: 1 }} >
                <InputLabel>Description <span style={{ color: 'red' }}>*</span></InputLabel>
                <TextField
                  className={classes.root}
                  {...register("description")}
                  {...textProps}
                  error={errors?.description ? true : false}
                  helperText={errors?.description ? errors.description.message : null}
                  placeholder="Please enter Description"
                  multiline
                  maxRows={2}
                />
              </Grid>
            </Grid>

            <Grid item md={12} display="flex" container direction="row"
              alignItems="right"
              justifyContent="right" gap={2} sx={{ p: 2 }}>
              <Button onClick={() => navigate(`/`)}
                variant="outlined"
                color="primary" sx={{ padding: '10px 40px' }}>
                Cancel
              </Button>
              <Button
                disabled={load ? true : false}
                type="submit"
                variant="contained"
                color="primary" sx={{ padding: '10px 40px' }}>
                {load ? ('Wait') : ('Continue')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
