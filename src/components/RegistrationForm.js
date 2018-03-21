import React, {PureComponent,} from 'react';
import PropTypes from 'prop-types';
import * as Yup from "yup";
import {withRouter} from "react-router-dom";
import {Field, Form, withFormik} from 'formik';
import '../styles/global.css';
import {loggedIn} from "../utils/localStorage";

class RegistrationForm extends PureComponent {

  render() {
    const {values, errors, touched, isSubmitting,} = this.props;
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

const FormikRegForm = withFormik({
  mapPropsToValues({nickname, fName, lName, email, pass1, pass2, phone,}) {
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
  handleSubmit(values, {resetForm, setErrors, setSubmitting, props},) {
    console.log('here');

    const newUser = {
      id: Math.random(),
      nickname: values.nickname,
      fName: values.fName,
      lName: values.lName,
      email: values.email,
      pass1: values.pass1,
      phone: values.phone,
      numberOfLogin: 1,
    };
    if (values.pass1 !== values.pass2) {
      setErrors({
        pass1: 'Password is not concurrence',
        pass2: 'Password is not concurrence',
      })
    } else if (Object.keys(props.users).length > 0) {
      const existedUser = Object.values(props.users).find(user => (
        user.nickname === values.nickname || user.email === values.email
      ));

      console.log(existedUser);
      if (existedUser) {
        if (values.email === existedUser.email) {
          setErrors({
            email: 'That email is already taken',
          })
        } else if (values.nickname === existedUser.nickname) {
          setErrors({
            nickname: 'That nickname is already taken',
          })
        }
      } else {
        console.log('add user in if.else');
        props.createUser(newUser);
        loggedIn(newUser.id);
        resetForm();
        this.props.history.push('/books');
      }
    } else {
      console.log('add user in else');
      props.createUser(newUser);
      loggedIn(newUser.id);
      resetForm();
      this.props.history.push('/books');

    }
    setSubmitting(false);
  },
})(RegistrationForm);

export const SignInForm = withRouter(FormikRegForm);

RegistrationForm.propTypes = {
  users: PropTypes.object,
  history: PropTypes.object,

};



