import React, {useEffect, useState} from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';

// Visualises filtered data as a list of names and phones
export default function PhonebookList(props) {
    const [data_filtered, setFilteredData] = useState([]);

    useEffect( ()=> {
        if (props.data) {
            setFilteredData(props.data);
        } 
    }, [props.data]);

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}> 
            <Divider color="success" />

            {/* list of names and phones */}
             <List>
             <ListItem key={'list_header'} >
                <ListItemButton>
                    <ListItemText  primary={'Name'} />
                    <div>
                        <ListItemText primary={'Telefonnummer'} />
                    </div>
                </ListItemButton>
            </ListItem>
            {data_filtered.map(person => (
                <ListItem  key={person.phone} >
                    <ListItemButton>
                        <ListItemIcon >
                            <PersonIcon fontSize="large" color="action" />
                        </ListItemIcon>
                        <ListItemText  primary={person.name} />
                        <div>
                            <ListItemText primary={person.phone} />
                        </div>
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
            </Grid>
          </Grid>
        </Box>
      );
}
