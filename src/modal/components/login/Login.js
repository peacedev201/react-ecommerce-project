import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter, Link } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import {showModal, hideModal } from '../../modalConductorActions';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_open: 1
        };
        this.hideModal = this.hideModal.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }

    hideModal() {
        this.props.modalActions.hideModal();
    }
    onSignUp(siginUp, e) {
        e.stopPropagation();
        this.props.modalActions.showModal('SIGNUP_MODAL', siginUp);
    }

    render() {       
        return (
            <Modal isOpen={true}
                toggle={this.hideModal}
                className="modal-dialog-centered">
                <div class="div-modal" id="div-modal">
                    <ModalBody>
                        <div className="modal-header-login text-center">
                            <h1 className="modal-login-txt">LOGIN</h1>
                            <p className="modal-login-txt-content font-italic">Get access to your Orders,<br />Wishlist and Recommendations</p>
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="text" class=" form-input font-italic text-center" placeholder="Email/Phone Number"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-input font-italic text-center" placeholder="Password"></input>
                            </div>
                            <div className="form-group">
                                <div className="form-link-tag text-center">
                                    <Link className="btn btn-sign" >LOGIN</Link>
                                </div>
                            </div>
                        </form>
                        <div className="modal-footer-link text-center">
                            <p className="new-account font-italic">New to Qapkart?</p>
                            <button class="btn btn-signup"
                               onClick={
                                () => {  this.props.modalActions.showModal('SIGNUP_MODAL'); }} > SIGNUP </button>
                        </div>
                    </ModalBody>
                </div>
            </Modal>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        modalActions: bindActionCreators({showModal, hideModal }, dispatch)
    })
)(Login);