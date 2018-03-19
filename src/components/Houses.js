import React, {PureComponent, } from 'react';
import {Card,} from 'semantic-ui-react'
import '../styles/global.css';
import LoaderView from '../components/Loader';
import PropTypes from 'prop-types';

class House extends PureComponent {



  render() {
    const {house, loading} = this.props;
    if (loading) {
      return (
        <div className="loader">
          <LoaderView />
        </div>
      )
    }
    return (
      <div className="book" >
          <Card
            className="house-card"
            image={`../img/houses/${house.name}.png`}
            header={house.name}
            meta={`Words: ${house.words}`}
            description={`Region: ${house.region}`}
          />
      </div>
    );
  }
}
House.propTypes = {
  house: PropTypes.object,
  loading: PropTypes.bool,
};

export default House;
