import React, { useState,useEffect } from 'react';
import { AppBar, Tabs, Tab, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Grid, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getMyShedule } from "../../services/doctor";
import Chip from '@mui/material/Chip';
import { useNavigate } from "react-router-dom"


let statusMap={
    "1":<Chip label="pending" color="warning" sx={{fontSize:'12px'}}/>,
    "2":<Chip label="Completed" color="success" sx={{fontSize:'12px'}}/>,
    "5":<Chip label="Canceled" color="error" sx={{fontSize:'12px'}}/>
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

export default function DoctorAppointments() {
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

  useEffect(() => {
    getMyAppointment();
}, []);

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="New Appoitments" id="tab-0" />
          <Tab label="Completed Appoitments" id="tab-1" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {row?.new?.map((item)=>{
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
              <Typography sx={{p:0.5}}>Owner:{item?.has_owner?.name || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Contact details(owner):{item?.has_owner?.email || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Contact details(Phone Number):{item?.has_owner?.phone_number || 'N/A'} </Typography>
              {item?.status==1 ? <Button color='success' variant='contained' sx={{m:2}} onClick={()=>navigate('/session/'+item.id)}>Start Session Now</Button> : null}
            </AccordionDetails>
          </Accordion>
        })}
        {row?.new?.length==0 && <Typography>No record found</Typography>}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {row?.old?.map((item)=>{
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
              <Typography sx={{p:0.5}}>Owner:{item?.has_owner?.name || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Contact details(owner):{item?.has_owner?.email || 'N/A'} </Typography>
              <Typography sx={{p:0.5}}>Contact details(Phone Number):{item?.has_owner?.phone_number || 'N/A'} </Typography>
              {item?.status==1 ? <Button color='success' variant='contained' sx={{m:2}} onClick={()=>navigate('/session/'+item.id)}>Start Session Now</Button> : null}
            </AccordionDetails>
          </Accordion>
        })}
         {row?.old?.length==0 && <Typography>No record found</Typography>}
      </TabPanel>
    </div>
  );
}
