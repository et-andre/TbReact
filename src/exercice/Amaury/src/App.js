import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './components/welcome/welcome';
import List from './components/list/list';
import Counter from './components/counter/counter';
import Calculator from './components/calculator/calculator';
import TaskList from './components/task/taskList';


const products = [
  {id: 1, name: 'camion', price: 45454, discount: true},
  {id: 2, name: 'voiture', price: 56433, discount: false},
  {id: 3, name: 'moto', price: 5537, discount: true}
];

function App() {
  return (
    <div className="App">
      {/*<Welcome name='Amaury' age={18}/>*/}
      {/*<List products={products}/>*/}
      {/*<Counter incrementValue={5}/>*/}
      {/*<Calculator />*/}
      <TaskList />
    </div>
  );
};

export default App;
