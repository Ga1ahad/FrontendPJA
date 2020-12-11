import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import { Container, CssBaseline, TextField, Button, Paper, Grid, Typography } from "@material-ui/core";
import AuthService from "../Auth/services/auth.service";
import * as Yup from 'yup';
import Logo from '../../assets/images/clothesy.png';


const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(14),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4),
    },
    form: {
        marginTop: theme.spacing(3)
    },
}));

const Register = (log) => {
    const classes = useStyles();
    const handleSubmit = (values, { setSubmitting }) => {
        AuthService.register(values.email, values.password).then(
            () => {
                log.history.push("/login");
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

    // const handleValidation = (values) => {
    //   const errors = {};
    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address';
    //   }
    //   return errors;
    // };
    return (

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} >
                <img src={Logo} alt="Clothesy" className={classes.logo} />
                <Typography component="" variant="h5" color='secondary'>
                    REGISTER
                </Typography>
                <CssBaseline />
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={RegisterSchema}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange}
                                        autoComplete="email"
                                    // helperText={
                                    //   errors.email && touched.email ? errors.email : null
                                    // }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="password"
                                        name="password"
                                        label="Password"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleChange}
                                    // helperText={
                                    //   errors.password && touched.password ? errors.password : null
                                    // }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Sign up
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <a href="/login">
                                        <Typography align='center' variant='subtitle1'>Already have an account? Sign in!</Typography>
                                    </a>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container >
    );
};

export default Register;
