import React from 'react';

function Users(props) {
  const { users } = props;
  const userList = users.length ? (
    users.map(user => {
      return (
        <div className="pointer modal-trigger col s12 m6 l4" key={user.id} data-target="modal_user_detail" onClick={() => props.handleCardClick(user.login) }>
          <div className="card">
            <div className="card-image">
              <img src={user.avatar_url} alt=""/>
            </div>
            <div className="card-content">
              <label className="card-title">{user.login}</label>
              <p>Score: {user.score}</p>
            </div>
          </div>
        </div>
      );
    })
  ) : null;
  return (
    <div className="user-cont container">
      <div className="row">
        { userList }
      </div>
    </div>
  );
}

export default Users;
