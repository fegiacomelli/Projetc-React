import { Component } from "react";
import "./assets/App.css";
import "./assets/index.css"
import { ListGrade } from "./components/gradeList/gradeList";
import { RegistrationForms } from "./components/registrationForms/registrationForms";

class App extends Component{

  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }


  createNote(title, text){
  const newNote = {title, text};
  const newArrayNotes = [...this.state.notes,newNote]
  const newState = {
    notes:newArrayNotes
  }
  this.setState(newState)
}


render() {
  return (
    <div className="content">
      <RegistrationForms createNote={this.createNote.bind(this)} />
      <ListGrade notes={this.state.notes}/>
    </div>
  );
 }
}

export default App;