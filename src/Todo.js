import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
            <div>
                <p>{ this.props.text }</p>
                <button onClick={this.props.notifyDelete}>X</button>
            </div>)
    }
}

export default Todo;