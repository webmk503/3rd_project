import React, {Component} from 'react'
import {Card,} from 'semantic-ui-react'
import '../styles/global.css';
import {Link} from "react-router-dom";

class Books extends Component {

  render() {
    const {book} = this.props;
    return (
      <div className="book" >
        <Link to={`/books/${book.isbn}`}>
          <Card
            image=''
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

export default Books;
