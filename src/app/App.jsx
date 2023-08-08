import React, {Component} from 'react';
import Book from './../book/book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Book  year="2023 год" price="1000р">
          text
        </Book>
        <Book name="JS" year="2023 год" price="1000р"/>
        <Book name="React" year="2023 год" price="500р"/>
      </div>
    );
  }
}

export default App;
