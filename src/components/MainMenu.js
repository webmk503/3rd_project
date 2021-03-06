import React, {PureComponent, } from 'react';
import {Dropdown, Menu} from 'semantic-ui-react'
import {Link, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

import '../styles/global.css';
import {createLocalStorageLoggedUser, getLoggedInFromLocalStorage, logOut} from "../utils/localStorage";

class MainMenu extends PureComponent {
  state = {
    activeItem: 'books',
    nickname: '',
  };

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  handleLogOut = () => {
    logOut();
    this.props.history.push('/login');
  };

  render() {
    const {activeItem,} = this.state;
    const {users} = this.props;
    const loggedIn = getLoggedInFromLocalStorage();
    const loggedUser = users[loggedIn.id];
    if(loggedUser){
      this.setState({
        nickname: loggedUser.nickname,
      })
    }
    // if(!loggedUser){
    //   this.props.history.push('/login');
    // }
    return (
      <Menu size='huge'>
        <Link to="/books">
          <Menu.Item name='books' active={activeItem === 'books'} onClick={this.handleItemClick}/>
        </Link>
        <Link to="/houses">
          <Menu.Item name='houses' active={activeItem === 'houses'} onClick={this.handleItemClick}/>
        </Link>
        <Menu.Menu position='right'>
          <Link to="/sign_in">
            <Menu.Item position='right' name='sign in' active={activeItem === 'sign in'} onClick={this.handleItemClick}/>
          </Link>
          <Link to="/login">
            <Menu.Item position='right' name='log in' active={activeItem === 'log in'} onClick={this.handleItemClick}/>
          </Link>
          <Dropdown item text={this.state.nickname}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.handleLogOut}> Log Out </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

MainMenu.propTypes = {
  history: PropTypes.object,
  users: PropTypes.object,
};

export default withRouter(MainMenu);
