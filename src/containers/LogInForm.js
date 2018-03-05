import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {} from "../actions/index";
import LogIn from "../components/LogIn";
import {createUser} from "../actions/index";
import {getBooks} from "../actions/index";
import {updateLoginCount} from "../actions/index";

const mapStateToProps = state => {
  return {
    users: state.userReducer.users,
    books: state.bookReducer.books,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      createUser,
      getBooks,
      updateLoginCount,
    },
    dispatch)
});

class App extends Component {
  render() {
    const {actions: {createUser, getBooks, updateLoginCount}, users, books} = this.props;

    return (
      <div className="logIn">
        <LogIn
          users={users}
          books={books}
          createUser={createUser}
          getBooks={getBooks}
          updateLoginCount={updateLoginCount}
        />
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


