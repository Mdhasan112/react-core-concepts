import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['razzak', 'sakib', 'sium', 'arifin', 'salman']
  const Products =[
    { name: 'photoshop', price: '90$'},
    { name: 'illustrator', price: '60$'}
    ]

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li> )}
          {Products.map(product => <li>{product.name}</li> )}
        </ul>
        {Products.map(product => <Product product={product}></Product>)}
        {/* <Product product= {Products[0]}></Product>
        <Product product= {Products[1]}></Product> */}
        
       <Person name="shakib khan" nayika="bubly"></Person>
       <Person  name="riyaz" nayika="purnima"></Person>
       <Person  name="bapparaz" nayika="mousumi"></Person>
       
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle ={
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    height: "300px",
    with: "300px",
    backgroundColor: "lightgray"

  }
  console.log(props)
  return (
  <div style= {productStyle}>
    <h1>{props.product.name}</h1>
    <h2>{props.product.price}</h2>
    <button>Buy Now</button>
  </div>
  )
}

function Person(props) {
  const personStyles = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px"
  }
  return (
    <div style={personStyles}>
      <h1>Name: {props.name}</h1>
      <p>Hero of {props.nayika}</p>
    </div>
  )
}

export default App;
