import React, { Component } from "react";
import "./registrationForms.css";

export class RegistrationForms extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event){
     event.preventDefault();
     event.stopPropagation();
     this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="form-registration"
        onSubmit={this._createNote.bind(this)}
      >
        <input
          className="form-registration_input"
          type="text"
          placeholder="Title"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          className="form-registration_input"
          placeholder="enter your note"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-registration_input form-registration_submit">
          Create Note
        </button>
      </form>
    );
  }
}
