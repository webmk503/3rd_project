import React, {Component, } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import MainMenu from "../components/MainMenu";
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import {APIgetChar, getHouseFromAPI,} from '../actions/APIRequests';
import {getURLbooks, getURLchars} from "../utils/getURL";
import Char from "../components/Char";
import LoaderView from "../components/Loader";

const mapStateToProps = state => {
  return {
    books: state.bookReducer.books,
    users: state.userReducer.users,
    characters: state.characterReducer.characters,
    loading: state.characterReducer.loading,
    houses: state.houseReducer.houses,

  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    APIgetChar,
    getHouseFromAPI,
  }, dispatch)
});

class CharContainer extends Component {

  componentWillMount(){
    const {actions: { APIgetChar, }, } = this.props;
    const id = this.props.match.params.id;
    const lastActiveBook = JSON.parse(localStorage.getItem('lastActiveBook'));
    APIgetChar(id, getURLbooks(lastActiveBook.url));
  }

  render() {
    const {actions: { getHouseFromAPI, apiGetQuotes }, users, characters, loading, houses, } = this.props;
    const charId = this.props.match.params.id;
    const lastActiveBook = JSON.parse(localStorage.getItem('lastActiveBook'));
    if(Object.values(characters).length === 0){
        return (
          <div className="loader">
            <LoaderView/>
          </div>
        )
    }
    const allChars = Object.values(characters[getURLbooks(lastActiveBook.url)]);
    const char = Object.values(allChars).find(elem => getURLchars(elem.data.url) === charId);

    return (
      <div>
        <MainMenu
          users={users}
        />
        <div>
          <Char
            character={char}
            houses={houses}
            loading={loading}
            apiGetQuotes={apiGetQuotes}
            getHouseFromAPI={getHouseFromAPI}
          />
        </div>
      </div>
    );
  }
}

CharContainer.propTypes = {
  posts: PropTypes.object,
  actions: PropTypes.object,
  comments: PropTypes.object,
  createComment: PropTypes.func,
  match: PropTypes.object,
  users: PropTypes.object,
  characters: PropTypes.object,
  loading: PropTypes.bool,
  houses: PropTypes.object,

};

export default connect(mapStateToProps, mapDispatchToProps)(CharContainer);


