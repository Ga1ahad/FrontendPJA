import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

import '../../index.css'

const AddTrip = () => {
    return (
        <div >
            <Paper className="paper " > 
                <Grid container spacing={3} alignItems="stretch" container spacing={5} >
                    <Grid item xs={12}  > 
                        <TextField 
                            id="tripName"
                            name="tripName"
                            label="Nazwa podróży"
                            fullWidth
                        />
                    </Grid>  
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="date"
                            label="Początek"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="date"
                            label="Koniec"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            id="tripName"
                            name="tripName"
                            label="Miejscowość"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField 
                            id="tripName"
                            name="tripName"
                            label="Kraj"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <Button
                        className="btn"
                        variant="contained"
                        color="primary"
                        component={Link} to="/Wardrobe"
                        >
                            Zatwiedź
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default AddTrip;
