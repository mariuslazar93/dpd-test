import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Comment from './Comment';
import Spinner from './Spinner';

class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      comments: []
    }
  }
  componentDidMount(){
    const _this = this;
    const root = 'http://jsonplaceholder.typicode.com';
    const path = `/comments?postId=${this.props.params.postId}`;
    const url = root+path;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        _this.setState({
          isLoading: false,
          comments: data
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
          <h1>Comments for post {this.props.params.postId}</h1>
          <div className="list">
            {
              this.state.comments.map((item, i) => <Comment key={i} index={i} comment={item} />)
            }
          </div>
          <button onClick={(e) => browserHistory.goBack()}>Go Back to Posts</button>
        </div>
      )
    }
  }
}

export default Comments;
