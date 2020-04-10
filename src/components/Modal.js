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
    const date = user && new Date(user.created_at).toDateString();
    const adminIcon = (user && user.site_admin) ? (
      <img src="https://img.icons8.com/material/48/000000/admin-settings-male.png" alt="" title="Admin"/>
    ) : (
      <img src="" alt="" id="blankImg"/>
    );
    const modalContent = user ? (
      <div>
        <div className="modal-title">
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <svg className="icon" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            <h4 className="black-text">{user.login}</h4>
            { adminIcon }
          </a>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card deep-orange lighten-4">
              <div className="card-content black-text">
                <span className="card-title">{user.name}</span>
                <p>{'Member Since ' + date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4 l4">
            <div className="card lime lighten-4">
              <div className="card-content black-text">
                <span className="card-title">{user.public_repos}</span>
                <p>Public Repos</p>
              </div>
            </div>
          </div>
          <div className="col s12 m4 l4">
            <div className="card green lighten-4">
              <div className="card-content black-text">
                <span className="card-title">{user.followers}</span>
                <p>Followers</p>
              </div>
            </div>
          </div>
          <div className="col s12 m4 l4">
            <div className="card deep-purple lighten-5">
              <div className="card-content black-text">
                <span className="card-title">{user.following}</span>
                <p>Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
        <h4>Loading...</h4>
      );
    return (
      <div ref={Modal => { this.Modal = Modal; }} id="modal_user_detail" className="modal">
        <div className="modal-header">
          <a className="modal-close"><i className="material-icons modal-close-icon">close</i></a>
        </div>
        <div className="modal-content">
          {modalContent}
        </div>
      </div>
    );
  }
}

export default Modal;