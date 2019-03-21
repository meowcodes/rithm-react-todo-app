import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditForm from './EditForm'
import uuid from 'uuid/v4';
import './TodoList.css';


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
    createTodo(todo){
        let newTodo = {...todo, id: uuid()}
        this.setState( state => ({
            todoArr: [...state.todoArr, newTodo]
        }));
    }

    // delete Todo
    deleteTodo(id){
        this.setState(state => ({
            todoArr: state.todoArr.filter(todo => todo.id !== id)
        }));
    }

    render() {
        return (
            <div className="TodoList">
                <div className="TodoList-form">
                    <NewTodoForm notifySubmit={ this.createTodo }/>
                </div>
                <div className="TodoList-list">
                    <ul>
                        {this.state.todoArr.map( todo => (
                            <Todo 
                                text={ todo.text }
                                key={ todo.id }
                                notifyDelete={ () => this.deleteTodo(todo.id) }
                            />
                        ))}
                    </ul>
                </div>
                { this.state.edit && <div className="TodoList-edit"><EditForm /></div> }
            </div>
        )
    }
}

export default TodoList;