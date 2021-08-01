import React, { useState } from "react";
import { Grid, Button, Paper, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import {
  Autocomplete,
} from 'formik-material-ui-lab';
import { Formik, Form, Field } from "formik";
import { Select } from "material-ui-formik-components/Select";
import MuiTextField from '@material-ui/core/TextField';
import '../../index.css';
import UserService from "../../Auth/services/user.service"
import authService from "../../Auth/services/auth.service"

const EditClothesSchema = Yup.object().shape({
  clothName: Yup.string().min(2, 'Too Short!').max(255, 'Too Long!').required('Required'),
});

const EditClothes = ({ history, match }) => {
  const isLoggedIn = authService.isLoggedIn();
  const { id } = match.params;
  if (!isLoggedIn) {
    history.push("/login");
  }
  const [tags, setTags] = useState([]);
  const [clotingTypes, setTypes] = useState([]);
  const [content, setContent] = useState([]);
  React.useEffect(() => {
    UserService.getTypes().then(
      (response) => {
        setTypes(response.data);
      }
    );
    UserService.getClothing(id).then(
      (response) => {
        setContent(response.data[0]);
      }
    );
    UserService.getTags().then(
      (response) => {
        setTags(response.data);
      },
    );

  },
    []);
  var currentTags = ''
  var currentTagsArray = []
  if (typeof content.tags !== "undefined") {
    currentTags = content.tags
  }

  for (const n in tags) {
    if (typeof tags[n].tagName !== "undefined") {
      if (currentTags.includes(tags[n].tagName)) {
        currentTagsArray.push(tags[n])
      }
    }
  }
  const handleSubmit = (values, { setSubmitting }) => {
    var formData1 = new FormData();
    formData1.append("name", values.clothName)
    formData1.append("idClothingType", values.ClotingType)
    formData1.append("tags", values.tags.map(a => a.idTag).toString())
    UserService.updateClothing(id, formData1).then(
      () => {
        window.location = '/clothes/list';
      },
      (error) => {
      }
    );
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <Paper className="paper">
      <h2>EDYTOWANIE UBRAŃ</h2>
      {content.name && <Formik
        initialValues={{
          clothName: content.name,
          ClotingType: 1,
          tags: currentTagsArray,
        }}
        onSubmit={handleSubmit}
      // validationSchema={EditClothesSchema}
      >
        {({ errors, handleChange, touched, initialValues }) => (
          <Form>
            <Grid container spacing={3} direction="column" justify="space-between">
              <Grid container justify="center">
                <img className='clothPhoto' src={content.url} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="clothName"
                  name="clothName"
                  label="Nazwa"
                  onChange={handleChange}
                  defaultValue={initialValues.clothName}
                  fullWidth
                // helperText={
                //   errors.clothName && touched.clothName ? errors.clothName : null
                // }
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="ClotingType"
                  label="Typ ubrania"
                  options={clotingTypes.map((entry) => ({
                    value: entry.idClothingType,
                    label: entry.name
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
                  getOptionLabel={(option) => option.tagName}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      error={touched['tags'] && !!errors['tags']}
                      helperText={touched['tags'] && errors['tags']}
                      label="Tagi"
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
                  Zapisz
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>}
    </Paper>
  )
}

export default EditClothes;
