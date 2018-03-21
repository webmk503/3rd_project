import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch,  } from "react-router-dom";
import LogInForm from './containers/LogInForm';
import Home from './containers/BooksPage'
import { bindActionCreators } from "redux";
import {
  createLocalStorage, createLocalStorageAuthors, createLocalStorageBooks, createLocalStorageComments,
  createLocalStorageLoggedUser,
  createLocalStorageUsers,
  getAuthorsFromLocaleStorage,
  getBooksFromLocalStorage,
  getCommentsFromLocalStorage,
  getLoggedInFromLocalStorage,
  getUsersFromLocalStorage
} from "./utils/localStorage";
import {getLocalStorage } from "./actions/main";
import BookContainer from "./containers/BookContainer";
import CharContainer from "./containers/CharContainer";
import HouseContainer from "./containers/HouseContainer";
import RegFormContainer from './containers/RegFormContainer';

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
    createLocalStorageUsers,
    createLocalStorageBooks,
    createLocalStorageLoggedUser,
    createLocalStorageComments,
    createLocalStorageAuthors,
  }, dispatch)
});

class Root extends Component {

  componentWillMount() {
    const {users, books, comments, authors, } = this.props;
    if (users === null) {
      this.props.actions.createLocalStorageUsers();
    } else if (books === null) {
      this.props.actions.createLocalStorageBooks();
    } else if (comments === null) {
      this.props.actions.createLocalStorageComments();
    } else if (authors === null) {
      this.props.actions.createLocalStorageAuthors();
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
            <Route path="/sign_in/" component={RegFormContainer}/>
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
  authors: PropTypes.object,
  comments: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);


