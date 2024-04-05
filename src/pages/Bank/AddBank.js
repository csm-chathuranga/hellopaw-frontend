"use client";
import * as React from "react";
import {useEffect} from "react";
import Button from "@mui/material/Button";
import { Grid, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import { saveBank, updateBank, getbanksById } from "../../services/bank";
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      borderRadius: 5,
      padding: '10px 15px',
      outline:'none',
      height:'50px',
    }
  },
  datePicker: {
    '& .MuiInputBase-root': {
      height: '50px',
      padding: '10px 15px',
      borderRadius: 5,
      outline:'none',
    },
  },
}));


let schema = yup.object().shape({
    bank_name: yup.string().required("Name is required"),
    account_number: yup.string().required("Account number is required"),
    bank_branch: yup.string().required("branch is required"),
  });

export default function AddBank() {
    const [load, setLoad] = React.useState(false);
    const navigate = useNavigate()
    const classes = useStyles();
    const params = useParams();

 

    const {  register, handleSubmit,  formState: { errors },  setValue,getValues  } = useForm({ resolver: yupResolver( schema), });
    const textProps = {
        id: "outlined-basic",
        variant: "outlined",
        fullWidth: true,
      };
      
    let submitHandler = async (data) => {
        try {
            let res;
            setLoad(true);
            if(params?.id){
              data.id=params.id;
              res=await updateBank(data);
            }else{
            res=await saveBank(data);
          }
            if(res) toast.success('Bank account updated successfull')
        } catch (error) {
            toast.error(error?.response?.data || 'Registraion failed')
            setLoad(false);
        } finally{
            setLoad(false);
        }
    }


    const getBankHandler = async () => {
      try {
        let { body }= await getbanksById(params.id);
        setValue('bank_name',body?.bank_name || '')
        setValue('bank_branch',body?.bank_branch || '')
        setValue('account_number',body?.account_number || '')
      } catch (error) {
        
      }
    }
  
    useEffect(() => {
      getBankHandler();
  }, [params]);

  return (
    <div className="main-wrapper">
          <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
         <Grid container direction="row" sx={{p:2}}>
          <Typography sx={{m:1,fontSize:'22px'}}>Add New Bank Account</Typography>
            <Grid container direction="row" display={'flex'} alignItems={'center'} >

            <Grid  xs={12} md={12} sx={{ p: 1 }} >
                    <Grid item xs={12} md={12} sx={{ p: 1 }} >
                        <InputLabel>Bank Name <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("bank_name")}
                        {...textProps}
                        error={errors?.bank_name ? true : false}
                        helperText={errors?.bank_name ? errors.bank_name.message : null}
                        placeholder="Please enter name"
                        />
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ p: 1 }} >
                        <InputLabel>Accout number <span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("account_number")}
                        {...textProps}
                        error={errors?.account_number ? true : false}
                        helperText={errors?.account_number ? errors.account_number.message : null}
                        placeholder="Please enter account"
                        />
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ p: 1 }} >
                        <InputLabel>Branch<span style={{color:'red'}}>*</span></InputLabel>
                        <TextField
                        className={classes.root}
                        {...register("bank_branch")}
                        {...textProps}
                        error={errors?.bank_branch ? true : false}
                        helperText={errors?.bank_branch ? errors.bank_branch.message : null}
                        placeholder="Please enter branch"
                        />
                    </Grid>
                    
            </Grid>

                    <Grid item md={12} display="flex" container direction="row"
                        alignItems="right"
                        justifyContent="right" gap={2} sx={{p:2}}>
                        <Button onClick={()=> navigate(`/`)}
                                variant="outlined"
                                color="primary" sx={{padding:'10px 40px'}}>
                                Cancel
                                </Button>
                            <Button
                                disabled={load ? true : false}
                                type="submit"
                                variant="contained"
                                color="primary" sx={{padding:'10px 40px'}}>
                                    {load ? ('Wait') : ('Continue')}
                                </Button>
                    </Grid>
            </Grid>
        </Grid>
        </form>
    </div>
  );
}
