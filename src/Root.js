import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LogInForm from './containers/LogInForm';
import Home from './containers/BookPage'
import { bindActionCreators } from "redux";
import {
  createLocalStorage, getBooksFromLocalStorage, getLoggedInFromLocalStorage,
  getUsersFromLocalStorage
} from "./utils/localStorage";
import { getLocalStorage } from "./actions/index";
import BookContainer from "./containers/BookContainer";

const mapStateToProps = state => {
  const users = getUsersFromLocalStorage();
  const books = getBooksFromLocalStorage();
  const loggedIn = getLoggedInFromLocalStorage();

  return {
    users: users,
    books: books,
    loggedIn: loggedIn,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getLocalStorage,
    createLocalStorage,
  }, dispatch)
});

class Root extends Component {

  componentWillMount() {
    const {users, books, loggedIn} = this.props;
    if (users === null) {
      this.props.actions.createLocalStorage();
    }
    this.props.actions.getLocalStorage(users, books, loggedIn);
  }

  render() {
    const {history, store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/login" component={LogInForm}/>
            <Route path="/books/:isbn" component={BookContainer}/>
            <Route path="/books/" component={Home}/>
            <Redirect from="/" to="/login"/>z

          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object,
  actions: PropTypes.object,
  createLocalStorage: PropTypes.func,
  getLocalStorage: PropTypes.func,
  users: PropTypes.object,
  books: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);


