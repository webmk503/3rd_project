import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

import '../styles/global.css';
import {getLoggedInFromLocalStorage, logOut} from "../utils/localStorage";

class MainMenu extends Component {
  state = {activeItem: 'home'};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  handleLogOut = () => {
    logOut();
    this.props.history.push('/login');
  };

  render() {
    const { activeItem, } = this.state;
    const { users } = this.props;
    const loggedIn = getLoggedInFromLocalStorage();
    const allUsers = Object.values(users);
    const loggedUser = allUsers.find(elem => elem.id === loggedIn.id);
    // if(!loggedUser){
    //   this.props.history.push('/login');
    // }
    return (
      <Menu size='huge'>
        <Link to="/books">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        </Link>
        <Menu.Menu position='right'>
          <Dropdown item text={loggedUser.nickname}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.handleLogOut}> Log Out </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(MainMenu);
