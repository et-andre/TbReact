 import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';


function TodoList(props) {
    const [todos, setTodos] = useState(props.todos) 
    const [filter, setFilter] = useState({value: 'all', list: props.todos})
    
    function newTask(todo) {
        setTodos( (v) => {
            todo.id = nextId()
            return [todo, ...v]
        })
    }

    function removeTask(todo) {
        setTodos( (v) => {
            for(let index in v) {
                if(v[index].id === todo.id) {
                    v.splice(index, 1)
                    break;
                }
            }
            return [...v]
        })
    }

    function filterHandle(e) {
        setFilter( (v) => {
            v.value = e.target.value
            switch (v.value) {
                case 'urgent':
                    v.list = todos.filter( todo => todo.priority === 1)
                    break;
                case 'done':
                    v.list = todos.filter( todo => todo.done)
                    break;
                case 'on':
                    v.list = todos.filter( todo => !todo.done)
                    break;
                default:
                    v.list = todos;
            }
            return {...v}
        })
    }

    function nextId() {
        return todos.reduce( (acc, v) => {
            return Math.max(acc, v.id);
        }, 0) + 1
    }

    return (
        <>
            <h1>New task</h1>
            <TaskForm onNew={newTask}/>
            <hr></hr>
            <h1>Todo's</h1>
            <select value={filter.value} onChange={filterHandle}>
                <option value="all">All</option>
                <option value="urgent">Urgent</option>
                <option value="on">Ongoing</option>
                <option value="done">Finished</option>
            </select>
            <table className='table'>
                <tbody>
                    {
                        filter.list.map( (todo) => <Task key={`${todo.id}`} todo={todo} onRemove={removeTask}/> )
                    }
                </tbody>
            </table>
        </>
    )
}

export default TodoList;