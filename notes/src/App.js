import React, { Component } from 'react';
import NoteEditor from './noteEdit.js';
import styled from 'styled-components';
import Note from './note.js'


const Main = styled.div`
>h2{
text-align:center;
font-size:20px;
color:grey;
}
`;
let arr= [];
class App extends Component {
    constructor (props){
        super(props);
        this.state = {notes:[{title:'', id:0}]
            };
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }
    handleNoteAdd(data){

        arr.push(data);
        console.log(arr);
        this.setState({notes:arr})

    }
  render() {
        const {notes} = this.state;
        console.log(notes)
    return (
      <Main>
          <h2 className="App_header"> NotesApp</h2>
        <NoteEditor onNoteAdd = {this.handleNoteAdd} />
          {this.state.notes.map(function({title,id, text, color,date}){
              return <div key = {id}>
                  <Note title = {title} text={ text} color = {color} date = {date}/>
              </div>
          })}
      </Main>
    );
  }
}

export default App;
