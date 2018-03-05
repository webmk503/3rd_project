import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import '../styles/global.css';
import {Link, withRouter } from "react-router-dom";
import {updateLoginCount} from "../actions/index";

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
    const {users, createUser, getBooks} = this.props;
    const allUsers = Object.values(users);
    const existedUser = allUsers.find(elem => elem.nickname === this.state.nickname);
    if (!existedUser) {
      const newUser = {
        id: Math.random(),
        nickname: this.state.nickname,
        createdAt: '',
      };
      createUser(newUser);
      this.setState({
        nickname: '',
      });
    } else {
      updateLoginCount(existedUser.id);
    }
    // const books = {
    //   id: Math.random(),
    //   title,
    //   writtenAt,
    //   numberOfPages,
    //   numberOfCharacters,
    // };
    // getBooks(books);
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
            onClick={this.handleSubmit}
          >
            Enter
          </Button>
      </Form>
    );
  }
}

export default withRouter(LogIn);
