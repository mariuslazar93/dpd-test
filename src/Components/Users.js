import React, { Component } from 'react';
import User from './User';
import Spinner from './Spinner';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      users: []
    }
  }
  componentDidMount(){
    const _this = this;
    const root = 'http://jsonplaceholder.typicode.com';
    const path = '/users';
    const url = root+path;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        _this.setState({
          isLoading: false,
          users: data
        })
      });
  }
  render(){
    if(this.state.isLoading){
      return (
        <Spinner />
      )
    }
    else{
      return (
        <div>
          <h1>List of users</h1>
          <div className="list">
            {
              this.state.users.map((item, i) => <User key={i} index={i} user={item}/>)
            }
          </div>
        </div>
      )
    }
  }
}

export default Users;
