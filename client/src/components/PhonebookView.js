import React, {useEffect, useState} from 'react'
import PhonebookList from './PhonebookList';
import { searchName } from './FilterData'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Provides grid for the phonebook
export default function PhonebookView(props) {
    const [data, setData] = useState([]);

    const [queryNames, handleFilter] = useState('');

    useEffect( ()=> {
        if (props.data) {
            setData(props.data);
        } 
    }, [props.data]);

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={7}>
                <Typography 
                variant="h2" 
                component="h1" 
                color="success.main" >
                    Telefonbuch 
                </Typography>
            </Grid>
            <Grid xs={0} sm={1}></Grid>
            <Grid xs={12} sm={4}>
                {/* Input field for searching names */}
                <TextField id="outlined-basic" 
                margin="normal" 
                label="Name suchen" 
                type="search" 
                variant="outlined" 
                color="success" 
                onChange={(e) => handleFilter(e.target.value)} />
            </Grid>
            <PhonebookList data={searchName(data, queryNames)} />
          </Grid>
        </Box>
      );
}
