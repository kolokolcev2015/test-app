import React, {useState} from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import AddForm from "./addForm";




export default function TodoList() {
    const [todos,setTodos] = React.useState([
        {id: 1, name: "Кирилл", age: '21'},
        {id: 2, name: "Михаил", age: '22'},
        {id: 3, name: "Алексей",age: '23'}
    ])
    function Remove(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function ChangeAge(id, value) {
        setTodos(todos.map(todo => todo.id !== id ? todo : {...todo,age: value}))
    }
    function ChangeName(id, value) {
        setTodos(todos.map(todo => todo.id !== id ? todo : {...todo,name: value}))
    }
    function addTodo(name,age) {
        console.log(name+"   age: "+age)
            setTodos(todos.concat([{
                id: Date.now(),
                name: name,
                age: age
            }]))
    }
    return(
        <ul>
            <AddForm AddTodo={addTodo}/>
            <div className="hlist">
            </div>{
            todos.length ?
            todos.map((todo,index)=>{
            return (<TodoItem todo = {todo}
                              key = {todo.id}
                              index = {index}
                               del = {Remove}
                                chName = {ChangeName}
                                chAge = {ChangeAge}/>
            )
        } ) : <p>Нет записей</p>
        }
        </ul>

    )
}
