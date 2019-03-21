import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
            <li>
                <p>{ this.props.text }</p>
                <button onClick={this.props.notifyDelete}>X</button>
            </li>)
    }
}

export default Todo;