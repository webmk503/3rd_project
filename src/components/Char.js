import React, {PureComponent,} from 'react';
import { Header} from "semantic-ui-react";
import PropTypes from 'prop-types';
import '../styles/global.css';


class Char extends PureComponent {

  componentWillMount() {
    const {getHouseFromAPI, character} = this.props;
    getHouseFromAPI(character.data.allegiances[0]);
  }

  render() {
    const {character, houses} = this.props;

    return (
      <div>
        <div className="char-info">
          <Header as='h2'>Name: {character.data.name}</Header>
          <h3>Title: {character.data.titles[0]}</h3>
          <h3>House: {houses.name}</h3>
          <h3>Played by: {character.data.playedBy}</h3>
          <h3>TV series: {character.data.tvSeries.length}</h3>
        </div>
        <div className="char-img-wrapper">
          <div className="char-img">
            <h2>Book version:</h2> <br/>
            <img src={`../img/characters/${character.data.name} book.jpg`}/>
          </div>
          <div className="char-img">
            <h2>TV version:</h2> <br/>
            <img src={`../img/characters/${character.data.name} tv.jpg`}/>
          </div>
        </div>
      </div>
    );
  }
}

Char.propTypes = {
  character: PropTypes.object,
  loading: PropTypes.bool,
  houses: PropTypes.object,
  getHouseFromAPI: PropTypes.func,

};

export default Char;
