import React, { Component } from 'react';

class NewTodoForm extends Component {

    constructor(props){
        super(props);
        this.state = { text: "" };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(evt){
        evt.preventDefault();
        this.props.notifySubmit(this.state);
        this.setState({
            text: ""
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="text">Todo</label>
                <input name="text"
                       id="text"
                       value={this.state.text}
                       onChange={this.handleChange} />
                <button>Create Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;