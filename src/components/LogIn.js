import React, {PureComponent,} from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import '../styles/loginform.css';
import {updateCountOfLogIn, loggedIn} from "../utils/localStorage";
import {Field, Form, withFormik} from "formik";
import * as Yup from "yup";

class LogInView extends PureComponent {

  render() {
    const {values, errors, touched, isSubmitting,} = this.props;
    return (
      <div className="log-form">
        <h1>LogIn </h1>
        <Form>
          <label>Nickname</label>
          <Field
            type="text"
            placeholder="Nickname"
            name="nickname"
          />
          {touched.nickname && errors.nickname && <p>{errors.nickname}</p>}
          <label>Enter password</label>
          <Field
            type="password"
            name="password"
            placeholder="Submit password"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <div>
            <br/>
            <button className="ui button" type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </Form>
      </div>
    );
  }
}

const FormikLogInForm = withFormik({
  mapPropsToValues({nickname, password,}) {
    return {
      nickname: nickname || '',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    nickname: Yup.string().min(4, 'Nickname should be minimum 4 characters').required('Nickname is required'),
    password: Yup.string().min(8, 'Password should be minimum 8 characters').required('Password is required'),
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting, props},) {

    const existedUser = Object.values(props.users).find(user => (
      user.nickname === values.nickname
    ));
    if (existedUser) {
      if (existedUser.pass1 === values.password) {
        props.updateLoginCount(existedUser.id, existedUser.numberOfLogin + 1);
        loggedIn(existedUser.id);
        updateCountOfLogIn(existedUser.id);
        props.history.push('/books');
        resetForm();
      } else {
        setErrors({
          password: 'Wrong password',
        })
      }
    } else {
      setErrors({
        nickname: 'Wrong nickname',
      })
    }
    setSubmitting(false);
  },
})(LogInView);

export const LogIn = withRouter(FormikLogInForm);


LogIn.propTypes = {
  users: PropTypes.object,
  createUser: PropTypes.func,
  getBooks: PropTypes.func,
  updateLoginCount: PropTypes.func,
  history: PropTypes.object,
  logOut: PropTypes.func,
};
