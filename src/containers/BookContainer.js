import React, {Component, } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import DetailedBook from '../components/DetailedBook';
import MainMenu from "../components/MainMenu";
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {APIgetBook, getAnswerFromAPI, getCharacterFromAPI,} from '../actions/APIRequests';
import {getURLbooks} from "../utils/getURL";
import {createAuthor, createComment} from "../actions/creatingActions";
import {getLoggedInFromLocalStorage} from "../utils/localStorage";

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books,
    users: state.userReducer.users,
    characters: state.characterReducer.characters,
    houses: state.houseReducer.houses,
    loading: state.bookReducer.loading,
    comments: state.commentReducer.comments,
    authors: state.authorReducer.authors,

  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getCharacterFromAPI,
    APIgetBook,
    getAnswerFromAPI,
    createComment,
    createAuthor,
  }, dispatch)
});

class BookContainer extends Component {

  componentDidMount() {
    const {actions: { APIgetBook, }, } = this.props;
    const id = this.props.match.params.id;
    APIgetBook(id, id);
  }

  render() {

    const { actions: { getCharacterFromAPI, APIgetBook, createComment, createAuthor },
            users, books, houses, characters, loading, comments, authors} = this.props;

    const loggedIn = getLoggedInFromLocalStorage();
    const loggedUser = users[loggedIn.id];

    const id = this.props.match.params.id;
    const allBooks = Object.values(books);
    const book = allBooks.find(elem => getURLbooks(elem.url) === id);
    localStorage.setItem('lastActiveBook', JSON.stringify(book));

    if (!book) {
      return <div>This page doesn`t exist</div>
    }
    return (
      <div>
        <MainMenu
          users={users}
        />
        <div>
          <DetailedBook
            createAuthor={createAuthor}
            createComment={createComment}
            getCharacterFromAPI={getCharacterFromAPI}
            APIgetBook={APIgetBook}
            book={book}
            id={id}
            houses={houses}
            characters={characters}
            loggedUser={loggedUser}
            comments={comments}
            loading={loading}
            users={users}
            authors={authors}
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
  match: PropTypes.object,
  users: PropTypes.object,
  books: PropTypes.object,
  houses: PropTypes.object,
  characters: PropTypes.object,
  loading: PropTypes.bool,
  authors: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);


