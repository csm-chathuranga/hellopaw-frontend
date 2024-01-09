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

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(5)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7,position:'fixed' }} ref={ref}>
      <CssBaseline />
       <Card sx={{ mt:2 }}>
        <Typography sx={{fontSize:'18px',color:'#ffff',p:2}}>Our New Members</Typography>
        <List sx={{opacity:0.8}}>
          {messages.map(({ primary, secondary, person }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          ))}
        </List>

        <Typography sx={{fontSize:'18px',color:'#ffff',p:2}}>Popular Services</Typography>
        <List sx={{opacity:0.8}}>
          {messages.map(({ primary, secondary, person }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          ))}
        </List>

      </Card>

    </Box>
  );

}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: 'https://thepet.community/wp-content/uploads/2020/05/yanchep_vet.png',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: 'https://thepet.community/wp-content/uploads/2020/05/the_blackburn_vet.png',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: 'https://thepet.community/wp-content/uploads/2020/05/homestead_boarding.png',
  },
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: 'https://thepet.community/wp-content/uploads/2020/05/yanchep_vet.png',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: 'https://thepet.community/wp-content/uploads/2020/05/the_blackburn_vet.png',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: 'https://thepet.community/wp-content/uploads/2020/05/homestead_boarding.png',
  },
];