import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {} from "../actions/index";
import MainMenu from '../components/MainMenu';
import Books from '../components/Books';
import {changeSearchValue} from "../actions/index";

const mapStateToProps = state => {
  let searchValue = state.bookReducer.searchValue;
  const books = Object.values(state.bookReducer.books);
  let filteredBooks = [];
  let stateObject = {
    books: [...books],
  };

  if (searchValue.length > 0) {
    filteredBooks = books.filter((book) => {
      return (book.title.includes(searchValue) || book.description.includes(searchValue));
    });
    stateObject.books = filteredBooks;
  }

  return stateObject;
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeSearchValue,
  }, dispatch)
});

class Home extends Component {

  render() {
    const {actions: {changeSearchValue}, books} = this.props;
    return (
      <div className="homePage">
        <MainMenu/>
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

            />
          ))
          }
        </div>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


