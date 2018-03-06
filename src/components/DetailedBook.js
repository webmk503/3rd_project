import React, {Component} from 'react';
import {Container, Form, Header} from "semantic-ui-react";

class Book extends Component {

  render() {
    const { book } = this.props;
    return (
      <Form>
        <Container text>
          <Header as='h2'>Title: {book.name}</Header>
          <h3>Дата издания: {book.released}</h3>
          <h3>Автор: {book.authors}</h3>
          <h3>Количество персонажей: {book.characters.length}</h3>
          <h3>Количество страниц: {book.numberOfPages}</h3>
          <br/>
        </Container>
      </Form>
    );
  }
}

export default Book;
