import React from 'react'
import { Grid, Button, Paper, TextField, InputLabel, MenuItem, FormControl, IconButton } from '@material-ui/core';
import * as Yup from 'yup';
import {
  Autocomplete,
  ToggleButtonGroup,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { Formik, Form, Field } from "formik";
import { Select } from "material-ui-formik-components/Select";
import MuiTextField from '@material-ui/core/TextField';
import '../../index.css';
const ClotingTypes = [
  {
    idType: 1,
    type_name: "T-Shirt"
  },
  {
    idType: 2,
    type_name: "Shirt"
  },
  {
    idType: 3,
    type_name: "Jacket"
  },
  {
    idType: 4,
    type_name: "Jeans"
  }
];


const tags = [
  { idTag: 1, name: 'Windy day' },
  { idTag: 2, name: 'Rainy day' },
  { idTag: 3, name: 'Sunny' },
  { idTag: 4, name: 'For colder days' },
];

const AddClothSchema = Yup.object().shape({
  clothName: Yup.string().min(2, 'Too Short!').max(255, 'Too Long!').required('Required'),
  purpose: Yup.string().required('Required'),
});

const AddClothes = ({ log }) => {
  const [file, setFile] = React.useState(null)
  const fileHandler = (e) => {
    setFile(e.target.files[0])
  }
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <Paper className="paper">
      <h2>DODAWANIE UBRAŃ</h2>
      <Formik
        initialValues={{ file: null, clothName: '', ClotingType: ClotingTypes[0].idType, tags: [] }}
        onSubmit={handleSubmit}
      // validationSchema={AddClothSchema}
      >
        {({ errors, handleChange, touched }) => (
          <Form>
            <Grid container spacing={3} direction="column" justify="space-between">
              <Grid container justify="center">
                <div>
                  <img src={file ? URL.createObjectURL(file) : null} alt={file ? file.name : null} />
                  <input type="file" onChange={fileHandler} />
                </div>
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
                <Field
                  name="ClotingType"
                  label="Type of clothing"
                  options={ClotingTypes.map((entry) => ({
                    value: entry.idType,
                    label: entry.type_name
                  }))}
                  component={Select}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="tags"
                  multiple
                  component={Autocomplete}
                  options={tags}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      error={touched['tags'] && !!errors['tags']}
                      helperText={touched['tags'] && errors['tags']}
                      label="Tags"
                      variant="outlined"
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
