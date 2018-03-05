import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import {connect, Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";
import LogInForm from './containers/LogInForm';
import Home from './containers/BookPage'
import {bindActionCreators} from "redux";
import {createLocalStorage, getBooksFromLocalStorage, getUsersFromLocalStorage} from "./utils/localStorage";
import {getLocalStorage} from "./actions/index";

const mapStateToProps = state => {
  const users = getUsersFromLocalStorage();
  const books = getBooksFromLocalStorage();

  return {
    users: users,
    books: books,
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
    const { users, books } = this.props;
    if(users === null){
      this.props.actions.createLocalStorage();
    }
    this.props.actions.getLocalStorage(users, books);
  }

  render() {
    const {history, store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/login" component={LogInForm}/>
            <Route  path="/books" component={Home}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Root);

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object,
};
