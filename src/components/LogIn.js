import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {Button, Form} from 'semantic-ui-react'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {loggedIn} from "../utils/localStorage";

class LogIn extends Component {

  state = {
    nickname: '',
  };

  handleEnterData = (field) => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  handleSubmit = () => {
    const {users, createUser, getBooks, updateLoginCount, logOut, logIn} = this.props;
    const allUsers = Object.values(users);
    const existedUser = allUsers.find(elem => elem.nickname === this.state.nickname);
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
      logIn(newUser.id);
    } else {
      updateLoginCount(existedUser.id, existedUser.numberOfLogin + 1);
      logOut(existedUser.id);
    }
    loggedIn(existedUser.id);
    logIn(existedUser.id);
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
};

export default withRouter(LogIn);
