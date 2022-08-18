import './App.css';
// import WelcomeAge from './components/exo_01/WelcomeAge';
// import ProductList from './components/exo_02/ProductList';
// import products from './data/products.json'
// import Counter from './components/exo_03/Counter';
// import Calc from './components/exo_04/Calc';
import TodoList from './components/exo_05/TodoList';
import todos from './data/todos.json'

function App() {
  return (
    <div className="App container">
      {/* EXO_01*/}
      {/* <WelcomeAge name="Riri"/> */}
      {/* <ProductList products={products}/> */}
      {/* <Counter toIncrement={2}/> */}
      {/* <Calc /> */}
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
