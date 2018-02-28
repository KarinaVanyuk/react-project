import React, { Component } from 'react';
import {connect} from 'react-redux'//функция-декоратор
import NoteEdit from './components/NoteEdit.js'
import NotesList from './components/NotesList.js'
import FindInput from './components/FindInput.js';
import styled from 'styled-components';
class App extends Component {
  render() {
      console.log(this.props)
    return (
      <Container>
          <h2> NotesApp</h2>
        <NoteEdit notes = {this.props}/>
          <FindInput notes = {this.props}/>
          <NotesList state = {this.props}/>
      </Container>
    );
  }
}
export default  connect(
    state =>({
    notes:state.notes.filter(note => note.title.includes(state.findNote))
    }),
dispatch => ({
    onAddNote:(noteTitle, noteText, noteColor)=>{
    const today = new Date();
const date = today.getHours()+':'+ today.getMinutes()+' '+today.getDate()+'-'+(today.getMonth() + 1)+'-'+today.getFullYear();

const payload= {
    id:Date.now().toString(),
    title:noteTitle,
    text: noteText,
    color:noteColor,
    date:date
}
dispatch({type:'Add_Note', payload})
},
onFindNote: (name)=>{
    dispatch({type : "FIND_NOTE", payload:name})
}
}),


)(App)

const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;

`
