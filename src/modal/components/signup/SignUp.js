import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter, Link } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { showModal, hideModal } from '../../modalConductorActions';
import './SignUp.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { is_open: 1 };
        this.hideModal = this.hideModal.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
    hideModal() {
        this.props.modalActions.hideModal();
    }
    onLogin(login, e){
        e.stopPropagation();
        this.props.modalActions.showModal('LOGIN_MODAL',login);
    }
    render() {       
        return (
            <Modal isOpen={true}
                toggle={this.hideModal}
                className="modal-dialog-centered">
                <div className="div-modal-signup" id="div-modal">
                    <ModalBody>
                        <div className="modal-header-login text-center">
                            <h1 className="modal-login-txt">SIGNUP</h1>
                            <p className="modal-login-txt-content font-italic">WITH QAPKART</p>
                            <div className="social-account">
                                <div className="row">
                                    <div className="col-4">
                                        <p className="social-txt-sigin font-italic">Using:</p>
                                    </div>
                                    <div className="col-4">
                                        <Link to="#">
                                            <img src={require(`../../../assets/images/image/Google+.png`)}></img>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <Link to="#">
                                            <img src={require(`../../../assets/images/image/FB.png`)}></img>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <p className="classical-txt-sigin text-center font-italic">or Be Classical</p>
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="text" className=" form-input font-italic text-center" placeholder="Full Name"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className=" form-input font-italic text-center" placeholder="Mobile Number"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className=" form-input font-italic text-center" placeholder="Enter OTP"></input>
                            </div>
                            <div className="form-resend text-right">
                                <Link className="resend-link" >RECEND OTP</Link>
                            </div>
                            <div className="form-group">
                                <input type="text" className=" form-input font-italic text-center" placeholder="Set Password"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className=" form-input font-italic text-center" placeholder="Confirm Password"></input>
                            </div>
                            <div className="form-group">
                                <div className="form-link-tag text-center">
                                    <Link className="btn btn-sign" >SIGNUP</Link>
                                </div>
                            </div>
                            <div className="modal-footer-link text-center">
                                <p className="new-account font-italic">Already Member?</p>
                                <button onClick={() => { this.props.modalActions.showModal('LOGIN_MODAL'); }} className="btn-login"> LOGIN </button>
                            </div>
                        </form>

                    </ModalBody>
                </div>
            </Modal>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        modalActions: bindActionCreators({ showModal, hideModal }, dispatch)
    })
)(SignUp);

