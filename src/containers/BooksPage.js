import React, {Component, } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import MainMenu from '../components/MainMenu';
import Books from '../components/Books';
import {changeSearchValue,  } from "../actions/main";
import {APIgetAllHouses, getAnswerFromAPI, getCharacterFromAPI,} from '../actions/APIRequests'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';

const mapStateToProps = state => {
  let searchValue = state.bookReducer.searchValue;
  const books = Object.values(state.bookReducer.books);
  let filteredBooks = [];
  let stateObject = {
    books: [...books],
    loading: state.bookReducer.loading,
    users: state.userReducer.users,
    houses: state.houseReducer.houses
  };

  if (searchValue.length > 0) {
    filteredBooks = books.filter((book) => {
      return (book.name.toLowerCase().includes(searchValue));
    });
    stateObject.books = filteredBooks;
  }
  return stateObject;
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeSearchValue,
    getAnswerFromAPI,
    getCharacterFromAPI,
    APIgetAllHouses,
  }, dispatch)
});

class Home extends Component {

  componentWillMount() {
    const {actions: {getAnswerFromAPI, APIgetAllHouses},} = this.props;
    getAnswerFromAPI();
    APIgetAllHouses();
  }

  render() {
    const {actions: {changeSearchValue, }, books, users, loading} = this.props;
    if (loading) {
      return (
        <div className="loader">
          <Loader />
        </div>
      )
    }
    return (
      <div className="homePage">
        <MainMenu
          users={users}
        />
        <form role="search" className="search-form">
          <input
            className="search-text"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => changeSearchValue(e.target.value.toLowerCase())}
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
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


