import React, { useEffect, useState } from 'react'
import { Grid, Button, Paper, TextField } from '@material-ui/core';
import { Formik, Form } from 'formik';
import '../../index.css'
import * as Yup from 'yup';
import UserService from "../../Auth/services/user.service";
import authService from "../../Auth/services/auth.service"

function EditTrip({ history, match }) {
    const isLoggedIn = authService.isLoggedIn();
    const { id } = match.params;
    const [content, setContent] = useState([]);
    if (!isLoggedIn) {
        history.push("/login");
    }
    useEffect(() => {
        UserService.getTrip(id).then(
            (response) => {
                setContent(response.data);
                console.log(response.data)
            }
        );
    },
        []);
    const EditTripSchema = Yup.object().shape({
        tripName: Yup.string().min(2, 'Too Short!').max(255, 'Too Long!').required('Required'),
        startTrip: Yup.string().required('Required'),
        endTrip: Yup.string().required('Required'),
        city: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        zipCode: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
        country: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        UserService.updateTrip(id, values).then(
            () => {
                history.push("/trip/list/" + values);
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        setTimeout(() => {
            setSubmitting(false);
        }, 500);
    };

    return (
        <Paper className="paper" >
            <h2>EDYTOWANIE PODRÓŻY</h2>
            {content.tripName && <Formik
                initialValues={content}
                onSubmit={handleSubmit}
                validationSchema={EditTripSchema}
            >
                {({ errors, handleChange, touched, initialValues }) => {
                    return (
                        <Form>
                            <Grid alignItems="stretch" container spacing={5} >
                                <Grid item xs={12}  >
                                    <TextField
                                        id="tripName"
                                        name="tripName"
                                        label="Nazwa podróży"
                                        onChange={handleChange}
                                        defaultValue={initialValues.tripName}
                                        fullWidth
                                        helperText={
                                            errors.tripName && touched.tripName ? errors.tripName : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="date"
                                        name="startTrip"
                                        label="Początek"
                                        onChange={handleChange}
                                        defaultValue={initialValues.startTrip}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        helperText={
                                            errors.startTrip && touched.startTrip ? errors.startTrip : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="date"
                                        name="endTrip"
                                        label="Koniec"
                                        onChange={handleChange}
                                        defaultValue={initialValues.endTrip}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        helperText={
                                            errors.endTrip && touched.endTrip ? errors.endTrip : null
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
                                        defaultValue={initialValues.city}
                                        helperText={
                                            errors.city && touched.city ? errors.city : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="zipCode"
                                        name="zipCode"
                                        type="number"
                                        label="Kod pocztowy"
                                        fullWidth
                                        onChange={handleChange}
                                        defaultValue={initialValues.zipCode}
                                        helperText={
                                            errors.zipCode && touched.zipCode ? errors.zipCode : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        id="country"
                                        name="country"
                                        label="Kraj"
                                        onChange={handleChange}
                                        defaultValue={initialValues.country}
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
                    )
                }}
            </Formik>}
        </Paper>
    );
}
export default EditTrip;
