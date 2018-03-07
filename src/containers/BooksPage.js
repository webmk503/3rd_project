import React, {PureComponent, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import MainMenu from '../components/MainMenu';
import Books from '../components/Books';
import {changeSearchValue, getAnswerFromAPI, getCharacterFromAPI, logOut} from "../actions/index";

const mapStateToProps = state => {
  let searchValue = state.bookReducer.searchValue;
  const books = Object.values(state.bookReducer.books);
  let filteredBooks = [];
  let stateObject = {
    books: [...books],
    loading: state.bookReducer.loading,
    users: state.userReducer.users,
  };

  if (searchValue.length > 0) {
    filteredBooks = books.filter((book) => {
      return (book.name.includes(searchValue));
    });
    stateObject.books = filteredBooks;
  }
  return stateObject;
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeSearchValue,
    logOut,
    getAnswerFromAPI,
    getCharacterFromAPI,
  }, dispatch)
});

class Home extends PureComponent {

  componentWillMount() {
    const {actions: {getAnswerFromAPI},} = this.props;
    getAnswerFromAPI();
  }

  render() {
    const {actions: {changeSearchValue, logOut,}, books, users, loading} = this.props;
    if (loading) {
      return (
        <div className="loader">
          <Loader type="Audio" color="#8c0615" height={80} width={80}/>
        </div>
      )
    }
    return (
      <div className="homePage">
        <MainMenu
          users={users}
          logOut={logOut}
        />
        <form role="search" className="search-form">
          <input
            className="search-text"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => changeSearchValue(e.target.value)}
          />
        </form>
        <div>
          {books.map((book) => (
            <Books
              book={book}
              key={`${book.isbn}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  users: PropTypes.object,
  books: PropTypes.array,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


