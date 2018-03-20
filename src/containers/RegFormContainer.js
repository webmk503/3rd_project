import React, {Component, } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { FormikRegForm} from "../components/RegistrationForm";
import MainMenu from "../components/MainMenu";

const mapStateToProps = state => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = dispatch => ({

});

class RegFormContainer extends Component {


  render() {
    const {users, } = this.props;
    return (
      <div>
        <MainMenu users={users}/>
        <FormikRegForm />
      </div>
    );
  }
}

RegFormContainer.propTypes = {
  users: PropTypes.object,
  books: PropTypes.array,
  actions: PropTypes.object,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegFormContainer);


