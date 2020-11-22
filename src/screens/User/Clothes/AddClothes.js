import React from 'react'
import { Grid, Button, Paper, TextField, InputLabel, MenuItem, FormControl, Select, IconButton } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import '../../index.css';

const tags = [
  { title: 'Windy day' },
  { title: 'Rainy day' },
  { title: 'Sunny' },
  { title: 'For colder days' },
];

const AddClothSchema = Yup.object().shape({
  clothName: Yup.string().min(2, 'Too Short!').max(255, 'Too Long!').required('Required'),
  purpose: Yup.string().required('Required'),
});

const AddClothes = ({ log }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('TODO: handle submit');
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <Paper className="paper">
      <h2>DODAWANIE UBRAŃ</h2>
      <Formik
        initialValues={{ clothName: '', purpose: '' }}
        onSubmit={handleSubmit}
        validationSchema={AddClothSchema}
      >
        {({ errors, handleChange, touched }) => (
          <Form>
            <Grid container spacing={3} direction="column" justify="space-between">
              <Grid container justify="center">
                <IconButton><AddAPhotoIcon className="addIcon" /></IconButton>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="clothName"
                  name="clothName"
                  label="Name"
                  onChange={handleChange}
                  fullWidth
                // helperText={
                //   errors.clothName && touched.clothName ? errors.clothName : null
                // }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl className="formControl">
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
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
                  // helperText={
                  //   errors.purpose && touched.purpose ? errors.purpose : null
                  // }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="purpose"
                      variant="outlined"
                      label="Purpose"
                      placeholder="Choose tags for cloth"
                    // helperText={
                    //   errors.purpose && touched.purpose ? errors.purpose : null
                    // }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  className="btn"
                  variant="contained"
                  color="primary"
                >
                  Add Cloth
              </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  )
}

export default AddClothes;
