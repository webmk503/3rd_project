import React, {Component,} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {LogIn} from "../components/LogIn";
import {createUser, logIn, updateLoginCount} from "../actions/main";
import MainMenu from "../components/MainMenu";

const mapStateToProps = state => {
  return {
    users: state.userReducer.users,
    books: state.bookReducer.books,

  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      createUser,
      updateLoginCount,
      logIn,
    },
    dispatch)
});

class App extends Component {
  render() {
    const {actions: {createUser, updateLoginCount, logIn}, users, books} = this.props;

    return (
      <div className="login_page">
        <MainMenu
          users={users}
        />
        <LogIn
          users={users}
          books={books}
          createUser={createUser}
          updateLoginCount={updateLoginCount}
          logIn={logIn}
        />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object,
  users: PropTypes.object,
  books: PropTypes.object,
  createUser: PropTypes.func,
  getBooks: PropTypes.func,
  updateLoginCount: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


