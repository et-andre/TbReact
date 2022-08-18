import { useState } from "react";


function TaskForm(props) {
    const defaultTodo = {name: "", description: "", priority: 2, done: false}
    const [todo, setTodo] = useState(defaultTodo)
    const [formErrors, setFormErrors] = useState({})
    
    function newTask() {
        if(validate()) {
            props.onNew(todo)
        }
    }

    function validate() {
        setFormErrors({})
        let errors = false
        if(todo.name.length <= 1) {
            errors = true
            setFormErrors( (v) => {
                v['name'] = "Task's name should be > 1."
            })
        }
        if(!todo.priority) {
            errors = true
            setFormErrors( (v) => {
                v['priority'] = "Task's priority should be set."
            })
        }
        return !errors
    }

    function handleInput(e) {
        const { name, type, checked, value } = e.target
        const newData = {
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        }
        setTodo(newData)
    }

    return (
        <>
            <form id="task-form" className="mx-auto col-md-4 needs-validation was-validated" noValidate>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input className="form-control" name="name" type="text" value={todo.name} onChange={handleInput} required/>
                    {formErrors && formErrors.name ? <small className="invalid-feedback">{formErrors.name}</small> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" name="description" value={todo.description} onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select className="form-control" name="priority" value={todo.priority} onChange={handleInput} required>
                        <option value="1">Urgent</option>
                        <option value="2">Normal</option>
                        <option value="3">Basse</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="button" onClick={newTask} value="Add"/>
                </div>
            </form>
        </>
    )
}
export default TaskForm;