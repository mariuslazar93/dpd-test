import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Post from './Post';
import Spinner from './Spinner';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      posts: []
    }
  }
  componentDidMount(){
    const _this = this;
    const root = 'http://jsonplaceholder.typicode.com';
    const path = `/posts?userId=${this.props.params.userId}`;
    const url = root+path;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        _this.setState({
          isLoading: false,
          posts: data
        })
        console.log(data)
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
          <h1>Posts for user {this.props.params.userId}</h1>
          <div className="list">
            {
              this.state.posts.map((item, i) => <Post key={i} index={i} post={item}/>)
            }
          </div>
          <button onClick={(e) => browserHistory.goBack()}>Go Back to Users</button>
        </div>
      )
    }
  }
}

export default Posts;
