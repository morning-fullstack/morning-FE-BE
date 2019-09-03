import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddNote extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    body: ''
  }

  handleTitleChange = ({ target }) => {
    this.setState({
      title: target.value
    }); 
  }

  handleBodyChange = ({ target }) => {
    this.setState({
      body: target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.title, this.state.body);
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleTitleChange} type="text" name="title" value={title}></input>
        <input onChange={this.handleBodyChange} type="textarea" name="body" value={body}></input>
        <button>Add Note</button>
      </form>
    );
  }

  
}




