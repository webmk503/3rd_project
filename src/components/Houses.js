import React, {PureComponent, } from 'react';
import {Card,} from 'semantic-ui-react'
import '../styles/global.css';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';

class House extends PureComponent {



  render() {
    const {house, loading} = this.props;
    if (loading) {
      return (
        <div className="loader">
          <Loader type="Audio" color="#8c0615" height={80} width={80}/>
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
