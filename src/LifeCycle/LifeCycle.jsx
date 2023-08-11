import React, {Component} from 'react';
import './LifeCycle.css'

class LifeCycle extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      loading: true,
      comments: []
    }
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data, loading: false}))

    this.timerId = setInterval(()=>{
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => this.setState({comments: data}))
     }, 3000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }
   
  render() {
    console.log('render', this.state.count);
    return (
      <div className='LifeCycle'>
        {
          //preloader
          this.state.loading? <h3>loading</h3>: <h3>{this.state.posts.length} was loaded</h3>
        }
      </div>
    )
  }
}

export default LifeCycle