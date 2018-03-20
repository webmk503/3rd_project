import React, {Component,} from 'react';
import PropTypes from 'prop-types';
import * as Yup from "yup";
import {Field, Form, withFormik} from 'formik';
import '../styles/global.css';

class RegistrationForm extends Component {

  render() {
    const {values, errors, touched, isSubmitting} = this.props;
    return (
      <div className="reg-form">
        <h1>Sign In </h1>
        <Form>
          <label>Nickname</label>
          <Field
            type="text"
            placeholder="Nickname"
            name="nickname"
          />
          {touched.nickname && errors.nickname && <p>{errors.nickname}</p>}
          <label>First Name</label>
          <Field
            type="text"
            placeholder="First Name"
            name="fName"
          />
          {touched.fName && errors.fName && <p>{errors.fName}</p>}
          <label>Last Name</label>
          <Field
            type="text"
            placeholder="Last Name"
            name="lName"
          />
          {touched.lName && errors.lName && <p>{errors.lName}</p>}
          <label>E-mail</label>
          <Field
            type="email"
            placeholder="E-mail"
            name="email"
            value={values.email}
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
          <label>Password</label>
          <Field
            type="password"
            name="pass1"
            placeholder="Password"
          />
          {touched.pass1 && errors.pass1 && <p>{errors.pass1}</p>}
          <label>Submit password</label>
          <Field
            type="password"
            name="pass2"
            placeholder="Submit password"
          />
          {touched.pass2 && errors.pass2 && <p>{errors.pass2}</p>}
          <label>Phone Number</label>
          <Field
            type="text" placeholder="Phone"
            name="phone"
          />
          {touched.phone && errors.phone && <p>{errors.phone}</p>}
          <div>
            <br/>
            <button className="ui button" type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </Form>
      </div>
    );
  }
}

export const FormikRegForm = withFormik({
  mapPropsToValues({nickname, fName, lName, email, pass1, pass2, phone}) {
    return {
      nickname: nickname || '',
      fName: fName || '',
      lName: lName || '',
      email: email || '',
      pass1: pass1 || '',
      pass2: pass2 || '',
      phone: phone || '',
    }
  },
  validationSchema: Yup.object().shape({
    nickname: Yup.string().min(4, 'Nickname should be minimum 4 characters').required('Nickname is required'),
    fName: Yup.string().required('First Name is required'),
    lName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('E-mail is not valid').required('E-mail is required'),
    pass1: Yup.string().min(8, 'Password should be minimum 8 characters').required('Password is required'),
    pass2: Yup.string().min(8, 'Password should be minimum 8 characters').required('Password submitting is required'),
    phone: Yup.string().min(10, 'Phone number should be minimum 10 characters').required('Phone is required'),

  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting,}) {
    setTimeout(() => {
      if (values.nickname === 'agrr') {
        setErrors({
          nickname: 'That nickname is already taken',
        })
      } else if (values.email === 'matveev@mail.ru') {
        setErrors({
          email: 'That email is already taken',
        })
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  },
})(RegistrationForm);

RegistrationForm.propTypes = {
  users: PropTypes.object,
};



