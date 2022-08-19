import './App.css';
import Welcome from "./demo/demo-01/components/welcome";
import HelloPerson from "./exercice/exercice-01/components/hello-person";
import HelloPersonCond from "./demo/demo-02-condition/hello-person-cond";
import students from './data/students.json'
import StudentCollection from "./demo/demo-03-collections/student-collection";
import ProductList from "./exercice/exercice-02/components/product-list";
import products from "./exercice/exercice-02/data.json";
import SimpleEvents from "./demo/demo-04-dom-event/EventExample";
import BtnDemo from "./demo/demo-05-states/components/btn-demo/btn-demo";
import MultiNumberClass from "./demo/demo-05-states/components/multi-number/multi-number-class";
import MultiNumber from "./demo/demo-05-states/components/multi-number/multi-number";
import Counter from "./exercice/exercice-03/counter";
import BasicForm from "./demo/demo-06-forms/components/basic-form/basic-form";
import ComplexForm from "./demo/demo-06-forms/components/complex-form/complex-form";
import ComplexFormV2 from "./demo/demo-06-forms/components/complex-form/complex-form-v2";
import Calculator from "./exercice/exercice-04/components/calculator/calculator";
import ChildEvents from "./demo/demo-07-child-events/components/child-events";
import {useState} from "react";
import TodoApp from "./exercice/exercice-05/containers/todo-app/todo-app";
import ClickCounter from "./demo/demo-08-life-cycle/components/life-cycle";
import ToggleDisplay from "./exercice/exercice-06/containers/toggle-display/toggle-display";
import DisplayClock from "./exercice/exercice-06/components/display-clock/display-clock";
import DisplayDate from "./exercice/exercice-06/components/display-date/display-date";
import Agify from "./demo/demo-09-ajax/containers/agify/agify";

function App() {
  return (
    <div className="App">
        {/* demo 1*/}
        {/*<Welcome firstname="Zaza" lastname="Duck" />*/}

        {/* exercice 1*/}
        {/*<HelloPerson name='Riri' age={18}/>*/}

        {/* demo 2 condition */}
        {/*<HelloPersonCond name={'Riri'} age={18} />*/}

        {/* demo 3 collections */}
        {/*<StudentCollection students={students}/>*/}

        {/* exercice 02 product list */}
        {/*<ProductList products={products}/>*/}

        {/* demo 4 dom event */}
        {/*<SimpleEvents />*/}

        {/* demo 5 states */}
        {/*<BtnDemo />*/}
        {/*<BtnDemo />*/}
        {/*<MultiNumberClass />*/}
        {/*<MultiNumber />*/}

        {/*exercice 03 counter*/}
        {/*<Counter incr={1} />*/}

         {/* demo 6 forms */}
        {/*<BasicForm />*/}
        {/*<ComplexForm />*/}
        {/*<ComplexFormV2 />*/}

        {/*exercice 04 forms*/}
        {/*<Calculator />*/}

        {/*<ChildEvents />*/}

        {/*exercice 07 todo list*/}
        {/*<TodoApp />*/}

        {/*demo event*/}
        {/*<ClickCounter />*/}

        {/*<ToggleDisplay ComponentA={DisplayClock} ComponentB={DisplayDate} />*/}

        <Agify />
    </div>
  );
}

export default App;
