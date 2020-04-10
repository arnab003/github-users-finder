import React, { Component } from 'react'
import Modal from './Modal';
import axios from 'axios';
import Users from './Users';
import SearchBox from './SearchBox';
import Sort from './Sort';

class Main extends Component {

  state = {
    users: [],
    user: null,
    sortVal: -1,
    query: null
  };

  timer = null;

  handleCardClick = (login) => {
    axios.get('https://api.github.com/users/' + login)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          users: [],
          user: null,
          sortVal: -1,
          query: null
        });
      });
  };

  handleModalClose = () => {
    this.setState({
      ...this.state,
      user: null
    });
  };

  handleSearch = (user) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      axios.get('https://api.github.com/search/users?q=' + user + '&per_page=99')
        .then(res => {
          this.handleSelect(this.state.sortVal, res.data.items);
        })
        .catch(err => {
          console.log(err);
          this.setState({
            users: [],
            user: null,
            sortVal: -1,
            query: null
          });
        });
    }, 300);
  };

  handleSelect = (value, oldUsers = this.state.users) => {
    var newUsersArr = oldUsers.sort((a, b) => {
      return (a.score - b.score) * value;
    });
    this.setState({
      ...this.state,
      users: newUsersArr,
      sortVal: value
    });
  };

  render() {
    return (
      <div>
        <SearchBox handleSearch={this.handleSearch} />
        <Modal user={this.state.user} handleModalClose={this.handleModalClose} />
        <Sort handleSelect={this.handleSelect} users={this.state.users} />
        <Users users={this.state.users} handleCardClick={this.handleCardClick} />
      </div>
    );
  }
}

export default Main;
