import React, {PureComponent, } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import MainMenu from '../components/MainMenu';
import { logOut } from "../actions/index";
import {APIgetAllHouses} from "../actions/APIRequests";
import House from "../components/Houses";

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books,
    loading: state.houseReducer.loading,
    users: state.userReducer.users,
    houses: state.houseReducer.houses,
  };

};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logOut,
    APIgetAllHouses,
  }, dispatch)
});

class HousesContainer extends PureComponent {

  componentDidMount() {
    const {actions: { APIgetAllHouses, }, } = this.props;
    APIgetAllHouses();
  }

  render() {
    const {actions: { logOut, APIgetAllHouses}, houses, users, loading} = this.props;
    if (loading) {
      return (
        <div className="loader">
          <Loader type="Audio" color="#8c0615" height={80} width={80}/>
        </div>
      )
    }
    return (
      <div className="housePage">
        <MainMenu
          users={users}
          logOut={logOut}
        />

        <div>
          {Object.values(houses).map((house) => (
            <House
              house={house}
              key={house.name}
              loading={loading}
              APIgetAllHouses={APIgetAllHouses}
            />
          ))}
        </div>
      </div>
    );
  }
}

HousesContainer.propTypes = {
  users: PropTypes.object,
  actions: PropTypes.object,
  house: PropTypes.object,
  houses: PropTypes.object,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(HousesContainer);


