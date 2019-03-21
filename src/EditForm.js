import React, { Component } from 'react';

class EditForm extends Component {

    constructor(props){
        super(props);
        this.state = { updatedText: this.props.text.slice() };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(evt){
        evt.preventDefault();
        this.props.notifyEdit(this.state);

    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="updatedText">Todo</label>
                <input name="updatedText"
                       id="updatedText"
                       value={this.state.updatedText}
                       onChange={this.handleChange} />
                <button>Edit Todo</button>
            </form>
        )
    }
}

export default EditForm;