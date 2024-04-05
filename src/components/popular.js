import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(messageExamples);


  return (
    <Box sx={{ pb: 7,position:'fixed' }} ref={ref}>
      <CssBaseline />
       <Card sx={{ mt:2,borderRadius:'10px' }}>
        <Typography sx={{fontSize:'18px',color:'#ffff',p:2}}>What's new</Typography>
        <List sx={{opacity:0.8}}>
          {messages.map(({ primary, secondary, person }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} sx={{fontSize:'10px'}}/>
            </ListItem>
            
          ))}
        </List>

      </Card>

    </Box>
  );

}

const messageExamples = [
  {
    primary: 'New features',
    secondary: "You can add missing dog details from now on",
    person: 'https://thepet.community/wp-content/uploads/2020/05/yanchep_vet.png',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion.`,
    person: 'https://thepet.community/wp-content/uploads/2020/05/the_blackburn_vet.png',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new',
    person: 'https://thepet.community/wp-content/uploads/2020/05/homestead_boarding.png',
  },
  {
    primary: 'New features',
    secondary: "You can add missing dog details from now on",
    person: 'https://thepet.community/wp-content/uploads/2020/05/yanchep_vet.png',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion.`,
    person: 'https://thepet.community/wp-content/uploads/2020/05/the_blackburn_vet.png',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new',
    person: 'https://thepet.community/wp-content/uploads/2020/05/homestead_boarding.png',
  },
];