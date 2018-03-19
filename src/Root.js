import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch,  } from "react-router-dom";
import LogInForm from './containers/LogInForm';
import Home from './containers/BooksPage'
import { bindActionCreators } from "redux";
import {
  createLocalStorage, getAuthorsFromLocaleStorage, getBooksFromLocalStorage, getCommentsFromLocalStorage,
  getLoggedInFromLocalStorage,
  getUsersFromLocalStorage
} from "./utils/localStorage";
import { getLocalStorage } from "./actions/index";
import BookContainer from "./containers/BookContainer";
import CharContainer from "./containers/CharContainer";
import HouseContainer from "./containers/HouseContainer";

const mapStateToProps = () => {
  const users = getUsersFromLocalStorage();
  const books = getBooksFromLocalStorage();
  const loggedIn = getLoggedInFromLocalStorage();
  const comments = getCommentsFromLocalStorage();
  const authors = getAuthorsFromLocaleStorage();

  return {
    users: users,
    books: books,
    comments: comments,
    loggedIn: loggedIn,
    authors: authors,
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
    const {users, books, comments, authors} = this.props;
    console.log('a', authors)
    if (users === null) {
      this.props.actions.createLocalStorage();
    }
    this.props.actions.getLocalStorage(users, books, comments, authors);
  }

  render() {
    const {history, store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/login" component={LogInForm}/>
            <Route path="/books/:id" component={BookContainer}/>
            <Route path="/char/:id" component={CharContainer}/>
            <Route path="/books/" component={Home}/>
            <Route path="/houses/" component={HouseContainer}/>
            <Redirect from="/" to="/login"/>

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
  loggedIn: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);


