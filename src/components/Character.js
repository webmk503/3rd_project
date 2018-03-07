import React, {PureComponent, Component} from 'react';
import {Card} from "semantic-ui-react";

class Book extends PureComponent {

  render() {
    const {book, characters} = this.props;
    const charsOfBook = {...characters[book.isbn]};
    return (
      <div className="characters">
        {Object.values(charsOfBook).map((character) => (
            <Card
              image=''
              header={character.data.name}
              meta={`Played by: ${character.data.playedBy}`}
              description={`TV series: ${character.data.tvSeries.length}`}
              extra={`Born: ${character.data.born}`}
            />
          )
        )}
      </div>
    );
  }
}

export default Book;
