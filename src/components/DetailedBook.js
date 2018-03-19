import React, {PureComponent,} from 'react';
import {Container, Form, Header} from "semantic-ui-react";
import LoaderView from '../components/Loader';
import PropTypes from 'prop-types';
import Character from "./Character";
import {getURLbooks} from "../utils/getURL";
import '../styles/global.css';
import CommentsBlock from "./CommentsBlock";
import Comment from "./Comment";


class DetailedBook extends PureComponent {

  componentWillMount() {
    const {getCharacterFromAPI, book,} = this.props;
    book.povCharacters.forEach((element) => {
      getCharacterFromAPI(element, getURLbooks(book.url));
    });
  }

  render() {
    const {
      book, characters, loading, houses, authors, comments, id,
      createComment, createAuthor, users, loggedUser
    } = this.props;
    if (loading) {
      return (
        <div className="loader">
          <LoaderView />
        </div>
      )
    }
    const commentsOfThisBook = [];
    Object.values(comments).find((comment) => {
      if (comment.bookId === id) {
        commentsOfThisBook.push(comment);
      }
    });
    return (
      <Form>
        <div className="book-info">
          <div className="book-img">
            <img src={`../img/books/${book.isbn}.jpg`}/>
          </div>
          <div className="container">
            <Container text>
              <Header as='h2'>Title: {book.name}</Header>
              <h3>Released at: {book.released}</h3>
              <h3>Author: {book.authors}</h3>
              <h3>Characters: {book.characters.length}</h3>
              <h3>Pages: {book.numberOfPages}</h3>
              <br/>
            </Container>
          </div>
        </div>
        <div>
          <h1> List of main characters: </h1>
          <Character
            key={Math.random()}
            book={book}
            houses={houses}
            characters={characters}
          />
        </div>
        <Header as='h3' dividing>Comments</Header>
        {commentsOfThisBook.map((comment) => (
            <CommentsBlock
              comment={comment}
              authors={authors}
              key={comment.id}
            />
          ))}
        <Comment
          createComment={createComment}
          createAuthor={createAuthor}
          users={users}
          book={book}
          authors={authors}
          loggedUser={loggedUser}
          id={id}
        />
      </Form>
    );
  }
}

DetailedBook.propTypes = {
  book: PropTypes.object,
  comments: PropTypes.object,
  users: PropTypes.object,
  characters: PropTypes.object,
  houses: PropTypes.object,
  getCharacterFromAPI: PropTypes.func,
  loading: PropTypes.bool,
};

export default DetailedBook;
