import React, { useState,useEffect } from 'react';
import { AppBar, Tabs, Tab, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getMyShedule } from "../../services/doctor";
import { payNowService } from "../../services/service";
import { toast } from 'react-toastify';


import Chip from '@mui/material/Chip';
import { useNavigate } from "react-router-dom"


let statusMap={
    "1":<Chip label="pending" color="warning" sx={{fontSize:'12px'}}/>,
    "2":<Chip label="Pay Now" color="info" sx={{fontSize:'12px'}}/>,
    "3":<Chip label="Completed" color="success" sx={{fontSize:'12px'}}/>,
    "4":<Chip label="Canceled" color="error" sx={{fontSize:'12px'}}/>,
    "5":<Chip label="payment completed " color="success" sx={{fontSize:'12px'}}/>
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function MyAppointment() {
  const [value, setValue] = useState(0);
  const [row, setRow] = useState([]);
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const getMyAppointment = async () => {
    let res = await getMyShedule();
    setRow(res.body);
  }



  const payNow = async (data) => {
    // console.log(data);
    
    try {
      // setLoad(true);
      let paymentData = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        tele: "+94771234567",
        stuid: "123456",
        pay: data.amount,  
        user_id: 26,
        service_provider_id: data?.has_service?.id,
        // other: data, 
        id: data.id,  
      };
  
      let res = await payNowService(paymentData);
      
      if (res && res.status === 200 && res.body) {
        window.location.href = res.body;
      } else {
        toast.error('Payment failed, please try again.');
      }
    } catch (error) {
      toast.error(error?.response?.data || 'Registration failed');
    } finally {
      // setLoad(false);
    }
  };


  useEffect(() => {
    getMyAppointment();
}, []);

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Vet Appoitments" id="tab-0" />
          <Tab label="Service Appoitments" id="tab-1" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {row?.vet?.map((item)=>{
            return <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"  >
                <Grid display={"flex"} gap={2} direction={{xs: "column", md: "row"}}>
                    {statusMap[item?.status]}
                    <Typography>{item?.created_At || 'N/A'}</Typography>
                    <Typography> ( {item?.has_pet?.type || 'N/A'}  ) </Typography>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{p:0.5}}>Time Slot:{item?.time_slot || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Note:{item?.note || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Doctor:{item?.has_doc?.name || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Contact details(Doctor):{item?.has_doc?.email || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Contact details(Phone Number):{item?.has_doc?.phone_number || 'N/A'} </Typography>
              {item?.status==1 ? <Button color='success' variant='contained' sx={{m:2}} onClick={()=>navigate('/session/'+item.id)}>Start Session Now</Button> : null}
            </AccordionDetails>
          </Accordion>
        })}
         {row?.vet?.length==0 && <Typography>No record found</Typography>}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {row?.other?.map((item)=>{
            return <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"  >
                <Grid display={"flex"} gap={2}>
                    <Typography>{item?.created_at || 'N/A'}</Typography>
                    <Typography> ( {item?.has_pets?.name || 'N/A'}  ) </Typography>
                    <Typography> ( LKR {item?.amount || 'N/A'}  ) </Typography>
                    <Typography onClick={()=>payNow(item)}>{statusMap[item?.status]}</Typography>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{p:0.5}}>Check In: {item?.checkin || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Check Out: {item?.checkout || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Service Type: {item?.has_service?.type || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Service Provider :{item?.has_service?.name || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Service Provider Email:{item?.has_service?.email || 'N/A'} </Typography>
            </AccordionDetails>
          </Accordion>
        })}
         {row?.other?.length==0 && <Typography>No record found</Typography>}

      </TabPanel>
    </div>
  );
}
