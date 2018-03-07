import React, {PureComponent, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Book from '../components/DetailedBook';
import MainMenu from "../components/MainMenu";
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {getCharacterFromAPI, logOut} from "../actions/index";

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books,
    users: state.userReducer.users,
    characters: state.characterReducer.characters,
    loading: state.bookReducer.loading,

  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logOut,
    getCharacterFromAPI
  }, dispatch)
});

class BookContainer extends PureComponent {

  render() {
    const {actions: { logOut, getCharacterFromAPI }, users, books, characters, loading} = this.props;
    const isbn = this.props.match.params.isbn;
    const allBooks = Object.values(books);
    const book = allBooks.find(elem => elem.isbn === isbn);
    if (!book) {
      return <div>This page doesn`t exist</div>
    }
    return (
      <div>
        <MainMenu
          users={users}
          logOut={logOut}/>
        <div>
          <Book
            book={book}
            characters={characters}
            getCharacterFromAPI={getCharacterFromAPI}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

BookContainer.propTypes = {
  posts: PropTypes.object,
  actions: PropTypes.object,
  comments: PropTypes.object,
  createComment: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);


