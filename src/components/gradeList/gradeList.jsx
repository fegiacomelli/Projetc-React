import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";
import "./gradeList.css"

export class ListGrade extends Component {

  render() {
    return (
      <ul className="grade-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="grade-list_item" key={index}>
              <CardNote title={note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
