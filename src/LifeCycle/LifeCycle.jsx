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
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data}))
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
   
  render() {
    console.log('render', this.state.count);
    return (
      <div className='LifeCycle'>
        
      </div>
    )
  }
}

export default LifeCycle