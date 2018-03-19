import React, {Component, } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import LoaderView from '../components/Loader';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import MainMenu from '../components/MainMenu';
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
    APIgetAllHouses,
  }, dispatch)
});

class HousesContainer extends Component {

  componentDidMount() {
    const {actions: { APIgetAllHouses, }, } = this.props;
    APIgetAllHouses();
  }

  render() {
    const {actions: { APIgetAllHouses}, houses, users, loading} = this.props;
    if (loading) {
      return (
        <div className="loader">
          <LoaderView />
        </div>
      )
    }
    return (
      <div className="housePage">
        <MainMenu
          users={users}
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


