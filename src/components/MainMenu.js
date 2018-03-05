import React, {Component} from 'react';
import {Button, Dropdown, Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import '../styles/global.css';

class MainMenu extends Component {
  state = {activeItem: 'home'};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
      <Menu size='huge'>
        <Link to="/home">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        </Link>
        {/*<Menu.Item name='1' active={activeItem === '1'} onClick={this.handleItemClick} />*/}

        <Menu.Menu position='right'>
          <Dropdown item text='UsersNick'>
            <Dropdown.Menu>
              <Dropdown.Item>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MainMenu;
