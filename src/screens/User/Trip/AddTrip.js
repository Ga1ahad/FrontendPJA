import React from 'react'
import { Grid, Button, Paper, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";

import '../../index.css'

const AddTrip = () => {
    return (
        <div >
            <Paper className="paper " >
                <Grid alignItems="stretch" container spacing={5} >
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
                    <Grid item xs={12}>
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
