import React from 'react';
import { Grid, Button, Paper, TextField, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom';

import '../../index.css';

const tags = [
  { title: 'Windy day' },
  { title: 'Rainy day' },
  { title: 'Sunny' },
  { title: 'For colder days' },
];

const EditClothes = () => {
  return (
    <Paper className="paper">
      <Grid container spacing={3} direction="column" justify="space-between">
        <Grid container justify="center">
          <img className="pic" src="https://source.unsplash.com/9qd0iQ8otbU/600x799" alt="pic" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="clothName" name="clothName" label="Name" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControl className="formControl">
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={'Shirt'}>T-Shirt</MenuItem>
              <MenuItem value={'Shirt'}>Shirt</MenuItem>
              <MenuItem value={'Pants'}>Pants</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={tags}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Purpose"
                placeholder="Choose tags for cloth"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className="btn"
            variant="contained"
            color="primary"
            component={Link}
            to="/clothes/list"
          >
            Add Cloth
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EditClothes;
