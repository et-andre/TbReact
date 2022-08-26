import './App.css';
// import WelcomeAge from './components/exo_01/WelcomeAge';
// import ProductList from './components/exo_02/ProductList';
// import products from './data/products.json'
// import Counter from './components/exo_03/Counter';
// import Calc from './components/exo_04/Calc';
// import TodoList from './components/exo_05/TodoList';
// import todos from './data/todos.json'
import Clock from './components/exo_06/Clock';
import Calendar from './components/exo_06/Calendar';
import { useState } from 'react';

function App() {

  const [swap, setSwap] = useState(true)
  let jsx = swap ? <Clock/> : <Calendar/>

  function swapClick() {
    setSwap(!swap)
  }

  return (
    <div className="App container">
      {/* EXO_01*/}
      {/* <WelcomeAge name="Riri"/> */}
      {/* <ProductList products={products}/> */}
      {/* <Counter toIncrement={2}/> */}
      {/* <Calc /> */}
      {/* <TodoList todos={todos}/> */}
      <input type="button" onClick={swapClick} value="Swap"></input>
      {jsx}
    </div>
  );
}

export default App;
