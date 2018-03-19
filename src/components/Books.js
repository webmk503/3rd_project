import React, {PureComponent, } from 'react';
import {Card,} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import '../styles/global.css';
import {Link} from "react-router-dom";
import {getURLbooks} from "../utils/getURL";

class Books extends PureComponent {

  render() {
    const {book} = this.props;
    return (
      <div className="book" >
        <Link to={`/books/${getURLbooks(book.url)}`}>
          <Card
            className="book-card"
            image={`../img/books/${book.isbn}.jpg`}
            header={book.name}
            meta={`Количество страниц: ${book.numberOfPages}`}
            description={`Дата издания: ${book.released}`}
            extra={`Количество персонажей: ${book.characters.length}`}
          />
        </Link>
      </div>
    );
  }
}

Books.propTypes = {
  book: PropTypes.object,
};

export default Books;
