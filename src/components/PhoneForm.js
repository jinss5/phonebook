import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: "",
        number: ""
    }
    handleChange = (e) => {
        this.setState({
            //name: e.target.value
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state); // send props to parent through onCreate
        this.setState({            // reset
            name: "",
            number: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    name="number"
                />
                <button type="submit">add</button>
            </form>
        );
    }
}

export default PhoneForm;