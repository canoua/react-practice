import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  plus = () => {
    //setState - базовый реакт компонент
    this.setState((state) => {
    // Важно: используем `state` вместо `this.state` при обновлении.
      return {count: state.count + 1}
    });
  }

  minus = () => {
    this.setState((state) => {
      return {count: state.count - 1}
    });
  }
   
  render() {
    return (
      <div className='Counter'>
        <div className="wrapper">
          <button onClick={this.minus} className='btn'>-</button>
          <div className="output">{this.state.count}</div>
          <button onClick={this.plus} className='btn'>+</button>
        </div>
      </div>
    )
  }
}

export default Counter