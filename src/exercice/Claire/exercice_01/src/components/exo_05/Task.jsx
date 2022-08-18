import { useState } from "react";


function Task(props) {

    const [todo, setTodo] = useState(props.todo)

    function check(e) {
        setTodo((v) => {
            v.done = e.target.checked
            return {...v}
        })
        
    }

    function remove() {
        props.onRemove(todo)
    }

    return (
        <tr>
            <td>
                <input type="checkbox" className="form-check-input" id="done" checked={todo.done} onChange={check}/>
            </td>
            <td>
               <div className={`card ${todo.priority === 1 ? "bg-danger" : ""} ${todo.done ? "bg-secondary" : ""}`}>
                <div className="card-body">
                    <h5 className="card-title">{todo.done ? <s>{todo.name}</s> : todo.name}</h5>
                    <p className="card-text">{todo.description}</p>
                </div>
               </div>
            </td>
            <td>
                <button className="btn btn-danger" onClick={remove}>Delete</button>
            </td>
        </tr>
    )
}

export default Task;