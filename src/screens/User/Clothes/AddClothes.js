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

// const AddClothSchema = Yup.object().shape({
//   clothName: Yup.string().min(2, 'Too Short!').max(255, 'Too Long!').required('Required'),
//   purpose: Yup.string().required('Required'),
// });

const AddClothes = ({ log }) => {
  const isLoggedIn = authService.isLoggedIn();
  if (!isLoggedIn) {
    log.history.push("/login");
  }
  const [file, setFile] = React.useState(null)
  const [tags, setTags] = useState([]);
  const [ClotingTypes, setTypes] = useState([]);
  console.log(tags)
  const fileHandler = (e) => {
    setFile(e.target.files[0])
  }
  React.useEffect(() => {
    UserService.getTags().then(
      (response) => {
        setTags(response.data);
      },
      (error) => {
        // const _content =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();
        // setContent(_content);
      }
    );
    UserService.getTypes().then(
      (response) => {
        setTypes(response.data);
      },
      (error) => {
        // const _content =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();
        // // setContent(_content);
      }
    );
  },
    []);
  const handleSubmit = (values, { setSubmitting }) => {
    var formData1 = new FormData();
    formData1.append("image", file);
    formData1.append("name", values.clothName)
    formData1.append("idClothingType", values.ClotingType)
    formData1.append("tags", values.tags.map(a => a.idTag).toString())
    UserService.postClothes(formData1).then(
      () => {
        // log.history.push("/clothes/list");
        window.location = '/clothes/list';
      },
      (error) => {
        // const resMessage =
        // (error.response &&
        //   error.response.data &&
        //   error.response.data.message) ||
        // error.message ||
        // error.toString();
      }
    );
    console.log();
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <Paper className="paper">
      <h2>DODAWANIE UBRAŃ</h2>
      <Formik
        initialValues={{ file: null, clothName: '', ClotingType: '', tags: [] }}
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
                  label="Nazwa"
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
                  label="Typ ubrania"
                  options={ClotingTypes.map((entry) => ({
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
                  Dodaj ubranie
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
