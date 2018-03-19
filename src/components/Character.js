import React, {PureComponent,} from 'react';
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {getURLbooks, getURLchars} from "../utils/getURL";

class Character extends PureComponent {

  render() {
    const {book, characters} = this.props;
    const charsOfBook = {...characters[getURLbooks(book.url)]};
    return (
      <div className="characters">
        {Object.values(charsOfBook).map((character) => {
          return (
            <Link to={`/char/${getURLchars(character.data.url)}`} key={getURLchars(character.data.url)}>
              <div className="character">
                <Card
                  className='char-card'
                  image={`../img/characters/${character.data.name} tv.jpg` || '../img/characters/noname.png'}
                  header={character.data.name}
                  meta={`Played by: ${character.data.playedBy}`}
                  description={`Born: ${character.data.born}`}
                  extra={``}
                />
              </div>
            </Link>
          )
          }
        )}
      </div>
    );
  }
}

Character.propTypes = {
  book: PropTypes.object,
  characters: PropTypes.object,
  loading: PropTypes.bool,
};

export default Character;
