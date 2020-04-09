import React, { Component } from "react";
import M from "materialize-css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      // onOpenStart: (modal, source) => {
      //   console.log("Open Start", source);
      // },
      // onOpenEnd: () => {
      //   console.log("Open End");
      // },
      // onCloseStart: () => {
      //   console.log("Close Start");
      // },
      onCloseEnd: () => {
        this.props.handleModalClose();
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    const { user } = this.props;
    const modalContent = user ? (
      <div>
        <h4>{user ? user.login : 'Hi'}</h4>
        <p>A bunch of text</p>
      </div>
    ) : (
        <h4>Loading...</h4>
      );
    return (
      <div ref={Modal => { this.Modal = Modal; }} id="modal_user_detail" className="modal">
        <div className="modal-content">
          { modalContent }
        </div>
        <div className="modal-footer">
          <a className="modal-close waves-effect waves-red btn-flat">Close</a>
        </div>
      </div>
    );
  }
}

export default Modal;