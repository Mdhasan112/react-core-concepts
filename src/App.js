import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Person name="shakib khan" nayika="bubly"></Person>
       <Person  name="riyaz" nayika="purnima"></Person>
       <Person  name="bapparaz" nayika="mousumi"></Person>
       
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px"
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Hero of {props.nayika}</p>
    </div>
  )
}

export default App;
