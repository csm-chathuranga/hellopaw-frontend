import React ,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import { setShedule } from "../../services/doctor";
import {  Divider, Grid, TextField, Typography,Avatar, IconButton} from "@mui/material";
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AccordionWithButton from "./AccordionWithButton";
import { getShedule } from "../../services/doctor";


const ViewDoctorTimeSlots = ({setBooking,setSelect}) => {
  const [rows, setRows] = useState([]);

  const getSheduleHandle = async () => {
    let res = await getShedule();
    setRows(res.body);
  }
  useEffect(() => {
    getSheduleHandle();
}, []);
  return (
    <>
            <Grid display={{ xs: 'block', md: 'flex' }} direction={'row'} >
            <Grid xs={12} md={4}  alignItems={"center"} justifyContent={{ xs: 'center', md: 'center' }} 
                    display={'flex'} gap={1} sx={{ m: 1 ,mt:5,border:'1px solid #8080801c',borderRadius:'10px',p:3}} direction={'row'}>

                    <Grid  alignItems={"center"} justifyContent={{ xs: 'center', md: 'center' }} display={'flex'} direction={'column'} gap={1}>
                      <Grid>
                        <Avatar alt="Remy Sharp"  sx={{width:'100px',height:'100px',borderRadius:'5px'}} src="https://www.petvet.lk/wp-content/uploads/2019/05/Nalinika.jpg"/>
                      </Grid>
                      <Grid display={'flex'} alignItems={'center'} >
                        <Rating name="read-only" value={2} readOnly />
                      </Grid>
                      <Grid>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',  }}>{rows?.doctor?.name || 'N/A'}</Typography>
                      </Grid>

                      <Grid display={'flex'} alignItems={'left'} justifyContent={'left'} sx={{width:'100%',mt:2}}>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',fontWeight:800  }}>{'Clinic'}:</Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px'  }}>{rows?.doctor?.clinic_name || 'N/A'}</Typography>
                        </Grid>
                      </Grid>


                      <Grid display={'flex'} alignItems={'left'} justifyContent={'left'} sx={{width:'100%',mt:2}}>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',fontWeight:800  }}>{'Location'}:</Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px'  }}>{rows?.doctor?.clinic_location || 'N/A'}</Typography>
                        </Grid>
                      </Grid>

                      <Grid display={'flex'} alignItems={'left'} justifyContent={'left'} sx={{width:'100%',mt:2}}>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',fontWeight:800  }}>{'Email'}:</Typography>
                        </Grid>
                        <Grid xs={6}>
                          <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px'  }}>{rows?.doctor?.email || 'N/A'}</Typography>
                        </Grid>
                      </Grid>

                      {/* <Button variant="contained" color="success" sx={{mt:2}}>  + View Profile </Button> */}
                    </Grid>
            </Grid>

          <Grid xs={12} md={7}  alignItems={"center"} justifyContent={{ xs: 'center', md: 'center' }} sx={{pt:2}}>

            <Typography sx={{mt:3,mb:1,fontSize:'18px',ml:2}}>Check available time slot,</Typography>

              <List sx={{ width: '100%',minWidth:'300px', bgcolor: 'background.paper',p:1}}>
                {rows?.time?.map((item)=>{
                    return  <ListItem alignItems="flex-start" sx={{borderRadius:'5px',border:'1px solid #8080801c',mt:0.5}}>
                      <AccordionWithButton setBooking={setBooking} rows={item} setSelect={setSelect}/>
                </ListItem>
                })}
 
              </List>
              {/* <Alert severity="warning" sx={{mt:2,width:'96%',ml:'2%'}}> Shedule not updated</Alert> */}
          </Grid>
        </Grid>
    </>
  );
};

export default ViewDoctorTimeSlots;
