import React, { Component } from 'react'
import Modal from './Modal';
import axios from 'axios';
import Users from './Users';

class Main extends Component {

  state = {
    users: [
      {
        "login": "arnab",
        "id": 57342,
        "node_id": "MDQ6VXNlcjU3MzQy",
        "avatar_url": "https://avatars3.githubusercontent.com/u/57342?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/arnab",
        "html_url": "https://github.com/arnab",
        "followers_url": "https://api.github.com/users/arnab/followers",
        "following_url": "https://api.github.com/users/arnab/following{/other_user}",
        "gists_url": "https://api.github.com/users/arnab/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/arnab/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/arnab/subscriptions",
        "organizations_url": "https://api.github.com/users/arnab/orgs",
        "repos_url": "https://api.github.com/users/arnab/repos",
        "events_url": "https://api.github.com/users/arnab/events{/privacy}",
        "received_events_url": "https://api.github.com/users/arnab/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      },
      {
        "login": "arnabc",
        "id": 39234,
        "node_id": "MDQ6VXNlcjM5MjM0",
        "avatar_url": "https://avatars3.githubusercontent.com/u/39234?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/arnabc",
        "html_url": "https://github.com/arnabc",
        "followers_url": "https://api.github.com/users/arnabc/followers",
        "following_url": "https://api.github.com/users/arnabc/following{/other_user}",
        "gists_url": "https://api.github.com/users/arnabc/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/arnabc/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/arnabc/subscriptions",
        "organizations_url": "https://api.github.com/users/arnabc/orgs",
        "repos_url": "https://api.github.com/users/arnabc/repos",
        "events_url": "https://api.github.com/users/arnabc/events{/privacy}",
        "received_events_url": "https://api.github.com/users/arnabc/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      },
      {
        "login": "arnabgho",
        "id": 3237505,
        "node_id": "MDQ6VXNlcjMyMzc1MDU=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/3237505?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/arnabgho",
        "html_url": "https://github.com/arnabgho",
        "followers_url": "https://api.github.com/users/arnabgho/followers",
        "following_url": "https://api.github.com/users/arnabgho/following{/other_user}",
        "gists_url": "https://api.github.com/users/arnabgho/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/arnabgho/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/arnabgho/subscriptions",
        "organizations_url": "https://api.github.com/users/arnabgho/orgs",
        "repos_url": "https://api.github.com/users/arnabgho/repos",
        "events_url": "https://api.github.com/users/arnabgho/events{/privacy}",
        "received_events_url": "https://api.github.com/users/arnabgho/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      },
      {
        "login": "ArnabBir",
        "id": 15036906,
        "node_id": "MDQ6VXNlcjE1MDM2OTA2",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15036906?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ArnabBir",
        "html_url": "https://github.com/ArnabBir",
        "followers_url": "https://api.github.com/users/ArnabBir/followers",
        "following_url": "https://api.github.com/users/ArnabBir/following{/other_user}",
        "gists_url": "https://api.github.com/users/ArnabBir/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ArnabBir/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ArnabBir/subscriptions",
        "organizations_url": "https://api.github.com/users/ArnabBir/orgs",
        "repos_url": "https://api.github.com/users/ArnabBir/repos",
        "events_url": "https://api.github.com/users/ArnabBir/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ArnabBir/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      },
      {
        "login": "arnab39",
        "id": 13663345,
        "node_id": "MDQ6VXNlcjEzNjYzMzQ1",
        "avatar_url": "https://avatars3.githubusercontent.com/u/13663345?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/arnab39",
        "html_url": "https://github.com/arnab39",
        "followers_url": "https://api.github.com/users/arnab39/followers",
        "following_url": "https://api.github.com/users/arnab39/following{/other_user}",
        "gists_url": "https://api.github.com/users/arnab39/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/arnab39/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/arnab39/subscriptions",
        "organizations_url": "https://api.github.com/users/arnab39/orgs",
        "repos_url": "https://api.github.com/users/arnab39/repos",
        "events_url": "https://api.github.com/users/arnab39/events{/privacy}",
        "received_events_url": "https://api.github.com/users/arnab39/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      },
      {
        "login": "arnabdasbwn",
        "id": 13433715,
        "node_id": "MDQ6VXNlcjEzNDMzNzE1",
        "avatar_url": "https://avatars1.githubusercontent.com/u/13433715?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/arnabdasbwn",
        "html_url": "https://github.com/arnabdasbwn",
        "followers_url": "https://api.github.com/users/arnabdasbwn/followers",
        "following_url": "https://api.github.com/users/arnabdasbwn/following{/other_user}",
        "gists_url": "https://api.github.com/users/arnabdasbwn/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/arnabdasbwn/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/arnabdasbwn/subscriptions",
        "organizations_url": "https://api.github.com/users/arnabdasbwn/orgs",
        "repos_url": "https://api.github.com/users/arnabdasbwn/repos",
        "events_url": "https://api.github.com/users/arnabdasbwn/events{/privacy}",
        "received_events_url": "https://api.github.com/users/arnabdasbwn/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      }
    ],
    user: null
  };

  // componentDidMount () {
  //   axios.get('https://api.github.com/search/users?q=arnab&per_page=100')
  //     .then(res => {
  //       console.log('result', res);
  //       this.setState({
  //         users: res.data.items
  //       });
  //     });
  // }

  handleCardClick = (login) => {
    axios.get('https://api.github.com/users/' + login)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      });
  };

  handleModalClose = () => {
    this.setState({
      ...this.state,
      user: null
    });
  };

  render() {
    return (
      <div>
        <Modal user={this.state.user} handleModalClose={ this.handleModalClose }/>
        <Users users={ this.state.users } handleCardClick={ this.handleCardClick }/>
      </div>
    );
  }
}

export default Main;
