import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const styles = {
  container: {
    backgroundColor: 'yellow !important',
  },
};

const Login = ({ classes }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('TODO: handle submit');
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  const handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  console.log(classes);

  return (
    <div className={classes.container}>
      Sign in
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withStyles(styles)(Login);
