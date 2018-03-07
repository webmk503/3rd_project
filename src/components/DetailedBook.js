import React, {PureComponent, Component} from 'react';
import {Card, Container, Form, Header} from "semantic-ui-react";
import Loader from 'react-loader-spinner'
import Character from "./Character";

class Book extends PureComponent {

  componentDidMount() {
    const {getCharacterFromAPI, book, } = this.props;
    book.povCharacters.forEach((element) => {
      getCharacterFromAPI(element, book.isbn);
    });
  }

  render() {
    const {book, characters, loading} = this.props;
    if (loading) {
      return (
        <div className="loader">
          <Loader type="Audio" color="#8c0615" height={80} width={80}/>
        </div>
      )
    }
    return (
      <Form>
        <Container text>
          <Header as='h2'>Title: {book.name}</Header>
          <h3>Released at: {book.released}</h3>
          <h3>Author: {book.authors}</h3>
          <h3>Characters: {book.characters.length}</h3>
          <h3>Pages: {book.numberOfPages}</h3>
          <br/>
        </Container>
        <div>
          <h1> List of main characters: </h1>
          <Character
            book={book}
            characters={characters}
          />
        </div>
      </Form>
    );
  }
}

export default Book;
