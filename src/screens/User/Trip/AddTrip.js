import React from 'react'
import { Grid, Button, Paper, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../../index.css'
import * as Yup from 'yup';

const AddTripSchema = Yup.object().shape({
    tripName: Yup.string().min(2, 'Too Short!').max(255, 'Too Long!').required('Required'),
    start: Yup.string().required('Required'),
    end: Yup.string().required('Required'),
    city: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    country: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
const AddTrip = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log('TODO: handle submit');
        setTimeout(() => {
            setSubmitting(false);
        }, 500);
    };
    return (
        <div >
            <Paper className="paper " >
                <Formik
                    initialValues={{ tripName: '', start: '', end: '', city: '', country: '', }}
                    onSubmit={handleSubmit}
                    validationSchema={AddTripSchema}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form>
                            <Grid alignItems="stretch" container spacing={5} >
                                <Grid item xs={12}  >
                                    <TextField
                                        id="tripName"
                                        name="tripName"
                                        label="Nazwa podróży"
                                        onChange={handleChange}
                                        fullWidth
                                        helperText={
                                            errors.tripName && touched.tripName ? errors.tripName : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="date"
                                        name="start"
                                        label="Początek"
                                        onChange={handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        helperText={
                                            errors.start && touched.start ? errors.start : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="date"
                                        name="end"
                                        label="Koniec"
                                        onChange={handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        helperText={
                                            errors.end && touched.end ? errors.end : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="city"
                                        name="city"
                                        label="Miejscowość"
                                        fullWidth
                                        onChange={handleChange}
                                        helperText={
                                            errors.city && touched.city ? errors.city : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        id="country"
                                        name="country"
                                        label="Kraj"
                                        onChange={handleChange}
                                        fullWidth
                                        helperText={
                                            errors.country && touched.country ? errors.country : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        className="btn"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Zatwiedź
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </div>
    )
}

export default AddTrip;
