import React, {PureComponent, } from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {Button, Form} from 'semantic-ui-react'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {updateCountOfLogIn, loggedIn} from "../utils/localStorage";

class LogIn extends PureComponent {

  state = {
    nickname: '',
  };

  handleEnterData = (field) => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  handleSubmit = () => {
    const {users, createUser, updateLoginCount, } = this.props;
    const allUsers = Object.values(users);
    const existedUser = allUsers.find(elem => elem.nickname === this.state.nickname);
    console.log('user',existedUser);
    if (!existedUser) {
      const newUser = {
        id: Math.random(),
        nickname: this.state.nickname,
        createdAt: '',
        numberOfLogin: 1,
      };
      createUser(newUser);
      this.setState({
        nickname: '',
      });
      loggedIn(newUser.id);
    } else {
      updateLoginCount(existedUser.id, existedUser.numberOfLogin + 1);
      loggedIn(existedUser.id);
      updateCountOfLogIn(existedUser.id);
    }


    this.props.history.push('/books');

  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Nickname</label>
          <input
            placeholder='Nickname'
            value={this.state.nickname}
            onChange={this.handleEnterData('nickname')}/>
        </Form.Field>
        <Button
          type='submit'
          onClick={this.handleSubmit}>
          Enter
        </Button>
      </Form>
    );
  }
}

LogIn.propTypes = {
  users: PropTypes.object,
  createUser: PropTypes.func,
  getBooks: PropTypes.func,
  updateLoginCount: PropTypes.func,
  history: PropTypes.object,
  logOut: PropTypes.func,
};

export default withRouter(LogIn);
