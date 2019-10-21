import React from 'react';
import { connect } from 'react-redux';
// Import Modals
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';


const ModalConductor = props => {
  // console.log("modal-conductor", props.modal.modalType)
  switch (props.modal.modalType) {
    case 'SIGNUP_MODAL':
      return <SignUp />;
    case 'LOGIN_MODAL':
      return <Login />;
    default:
      return null;
  }
};

export default connect(
  state => ({
    modal: {
      ...state.modal
    }
  }),
  null
)(ModalConductor);
