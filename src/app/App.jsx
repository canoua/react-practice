import './App.css';

function Book(props) {
  return(
    <div>
      {/* Это не теги, а встроенные реакт-компоненты */}
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <p>{props.children}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Book name="JS" year="2023 год" price="1000р">
        text
      </Book>
      <Book name="JS" year="2023 год" price="1000р"/>
      <Book name="React" year="2023 год" price="500р"/>
    </div>
  );
}

export default App;
