import * as React from 'react';
import { useEffect, useState } from "react";
import Chip from '@mui/material/Chip';
import { Avatar, Box, Grid, Tab, Tabs, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link,Navigate,json,useParams } from 'react-router-dom'
import { getMyPetsById } from "../../services/petService";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
    style={{maxHeight:'550px',overflowY:'auto'}}
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};


let accordionLabel={
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '16px',
  width:'50%'
}

let accordionValue={
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '20px',
  width:'50%'
}

export default function MyPets() {

  const navigate = useNavigate()
  const [selected, setSelected] = useState({});
  const [value, setValue] = useState(0);
  const params = useParams();

  const profileView = () => {
   return(
    <>
        <Grid sx={{mt:2}} display={"flex"} direction={"row"} >
        <Typography sx={accordionLabel}>Type</Typography>
        <Typography sx={{...accordionValue,}}>: {selected?.type || 'N/A'}</Typography>
      </Grid>
      <Grid sx={{mt:2}} display={"flex"} direction={"row"} >
        <Typography sx={accordionLabel}>Birth Date</Typography>
        <Typography sx={{...accordionValue,}}>: {selected?.birth_date || 'N/A'}</Typography>
      </Grid>
      <Grid sx={{mt:2}} display={"flex"} direction={"row"} >
        <Typography sx={accordionLabel}>Color</Typography>
        <Typography sx={{...accordionValue,}}>: {selected?.color || 'N/A'}</Typography>
      </Grid>
      <Grid sx={{mt:2}} display={"flex"} direction={"row"} >
        <Typography sx={accordionLabel}>Gender</Typography>
        <Typography sx={{...accordionValue,}}>: {selected?.gender || 'N/A'}</Typography>
      </Grid>
      <Grid sx={{mt:2}} display={"flex"} direction={"row"} >
        <Typography sx={accordionLabel}>Breed</Typography>
        <Typography sx={{...accordionValue,}}>: {selected?.breed || 'N/A'}</Typography>
      </Grid>
    </>
   )
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getPets = async () => {
    let res= await getMyPetsById(params.id);
    setSelected(res.body)
    // console.log(res);
    // setRows(data);
  }

  useEffect(() => {
    getPets();
}, []);

  return (
    <Grid container direction={"row"}>
        <Grid xs={12} md={12} >
              <Grid xs={12} md={12}  alignItems={"center"} justifyContent={{ xs: 'center', md: 'left' }} display={'flex'} gap={1} 
                        sx={{ m: 1,backgroundColor:'grey',p:2,
                        // backgroundImage:`url(https://www.therange.co.uk/media/7/3/1537794693_5488.jpg)`,
                        // backgroundSize:'cover' 
                      }} 
                        direction={'row'}>
                <Grid>
                <ArrowBackIcon sx={{cursor:'pointer',fontSize:'26px'}} onClick={()=>navigate('/pet')}/>
                  {/* {JSON.stringify(selected)} */}
                  <Avatar alt="Remy Sharp" src={'http://pv1.happybaw.com/api/images/'+selected?.image || 'default.png'} sx={{width:'100px',height:'100px'}}/>
                </Grid>
             
              <Grid xs={12} md={4}  alignItems={"center"} justifyContent={{ xs: 'center', md: 'left' }} display={'flex'} gap={1} sx={{ m: 1 }} direction={'column'}>
                <Grid>
                  <Typography sx={{ fontSize: '10px', fontWeight: 500, lineHeight: '22px',  }}><Chip label={'Passbook - '+selected?.passbookid || 'N/A'} color="info" /></Typography>
                </Grid>
                <Grid>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '22px',  }}>{selected?.type || 'N/A'}</Typography>
                </Grid>
                <Grid>
                <Button variant="contained" color="success" onClick={()=>navigate('/appointment')}>
                 + Make an Appointment
                </Button>
                </Grid>
              </Grid>
         </Grid>

              <Grid xs={12} md={4}  alignItems={"center"} justifyContent={{ xs: 'center', md: 'left' }} display={'flex'} gap={1} sx={{ m: 1 }}>
              {/* {profileView()} */}
              </Grid>

          </Grid>
          <Grid xs={12} md={12} sx={{p:2}}>
          <Tabs value={value} onChange={handleChange}  sx={{width:'100%',mt:4}}>
              <Tab label={"General "} sx={{textTransform:'none',fontSize:'14px',lineHeight:'20px'}}/>
              <Tab label={"Vaccine History"} sx={{textTransform:'none',fontSize:'14px',lineHeight:'20px'}}/>
              <Tab label={"Appointments History"} sx={{textTransform:'none',fontSize:'14px',lineHeight:'20px'}}/>
          </Tabs>
          <TabPanel value={value} index={0}>
            {profileView()}
          </TabPanel>

          <TabPanel value={value} index={1}>
              {
              selected.has_history && selected?.has_history.map((item)=>{
                return (
                  <Accordion sx={{mt:2,boxShadow:'none',border:'1px solid #80808000'}}>
                      <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header" sx={{border:'1px solid #80808000',borderRadius:'5px'}}>
                            <Typography sx={{fontWeight:600}}>{item?.remark || 'N/A'}</Typography>
                            
                          </AccordionSummary>
                          <AccordionDetails sx={{border:'none'}}>
                          <Typography sx={{fontSize:'10px'}}>{item?.createdAt || 'N/A'}</Typography>
                          <Grid direction={"row"} container display="flex"  >
                            {item?.remark || 'N/A'}
                          </Grid> 
                    </AccordionDetails>
                  </Accordion>
                )
              } ) || null
              }

          </TabPanel>

          <TabPanel value={value} index={2}>
              Appointments History
          </TabPanel>
          </Grid>

    </Grid>

  );
}