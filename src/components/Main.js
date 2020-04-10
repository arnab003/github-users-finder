import React, { Component } from 'react'
import Modal from './Modal';
import axios from 'axios';
import Users from './Users';
import Navbar from './Navbar';

class Main extends Component {

  state = {
    users: [],
    user: null
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
          user: null
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
          this.setState({
            ...this.state,
            users: res.data.items
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            users: [],
            user: null
          });
        });
    }, 500);
  }

  render() {
    return (
      <div>
        <Navbar handleSearch={this.handleSearch} />
        <Modal user={this.state.user} handleModalClose={this.handleModalClose} />
        <Users users={this.state.users} handleCardClick={this.handleCardClick} />
      </div>
    );
  }
}

export default Main;
