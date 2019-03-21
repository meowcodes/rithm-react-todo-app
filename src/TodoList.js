import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


class TodoList extends Component {
    // todoArr
    constructor(props) {
        super(props);
        this.state = {
            todoArr: []
        }

        this.createTodo = this.createTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    // create Todo
    

    // delete Todo

    render() {
        return (
            <div>
                <NewTodoForm notifySubmit={ this.createTodo }/>
                <ul>
                    {this.state.todoArr.map( todo => (
                        <Todo 
                            text={ todo.text }
                            key={ todo.id }
                            notifyDelete={ this.deleteTodo.bind(todo.id) }
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;