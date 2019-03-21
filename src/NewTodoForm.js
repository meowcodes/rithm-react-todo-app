import React, { Component } from 'react';

class NewTodoForm extends Component {
    // state text input

    // notify submit

    // handle change
    
    render() {
        return (
            <form onSubmit={ this.notifySubmit }></form>
        )
    }
}

export default NewTodoForm;