import React, {Component, } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import { SignInForm} from "../components/RegistrationForm";
import MainMenu from "../components/MainMenu";
import {createUser} from "../actions/main";

const mapStateToProps = state => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createUser,
  }, dispatch)
});

class RegFormContainer extends Component {


  render() {
    const {users, actions: {createUser}} = this.props;
    return (
      <div>
        <MainMenu users={users}/>
        <SignInForm
          createUser={createUser}
          users={users}
        />
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
