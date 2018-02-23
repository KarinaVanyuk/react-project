import React, { Component } from 'react';
import styled from 'styled-components';
import NoteCrid from './noteGrid.js';
 const Main = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 16px;
    margin: 16px auto;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
 `
const Button = styled.button`
    width:100px;
    border: 0 none;
    border-radius: 24px;
    padding: 10px 15px;
    margin-left: 250px;
    cursor: pointer;
    text-align: center;
    line-height: 1.3;
    font-size: 15px;
    color: #fff;
    text-transform: uppercase;
    background: #3ac569;
    color: white;
        &:hover {
        opacity: .9;
    }
`
const Title = styled.input`
    font-size: 14px;
    width: 100%;
    resize: none;
    margin: 5px;
    border: none;
    font-weight: 500;
     &:focus {
        outline: 0;
    }
`
const Text = styled.textarea`
min-height:100px;
    width: 100%;
    resize: none;
    margin: 5px;
    font-size: 14px;
    border: none;
    font-weight: 300;
      &:focus {
        outline: 0;
    }
`
class NoteEditor extends Component {

    constructor (props){
        super(props);
        this.state = {
            id: 1,
            title: '',
            text: '',
            color: '',
            date:Date()};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.colorAdd = this.colorAdd.bind(this)
    };
colorAdd(data){
    this.setState({color: data})
    console.log(data)
}
handleTitleChange(e){
    this.setState({title: e.target.value});
}
    handleTextChange(e){
        this.setState({text: e.target.value});
    }
    handleNoteAdd(){
    const newNote = {
        id:this.state.id++,
        title: this.state.title,
        text: this.state.text,
        color: this.state.color,
        date: this.state.date
    }
    console.log(newNote)
    this.props.onNoteAdd(newNote)
    this.setState({
        title:'',
        text:'',
        color:'',
        date:Date()
    })

    }
    render() {
        return (
            <Main>
                <Title type="tetx"
                       className='NoteEditorTitle'
                       value = {this.state.title}
                       placeholder='Enter title'
                       onChange ={this.handleTitleChange}
                ></Title>
                <Text className="NoteEditorText"
                          value = {this.state.text}
                          placeholder='Enter Text'
                          onChange={this.handleTextChange}
                >

                </Text>
                    <NoteCrid onColorAdd = {this.colorAdd}/>
                <Button className='NoteEditorButton'
                        onClick={this.handleNoteAdd}>Add</Button>
            </Main>
        );
    }
}

export default NoteEditor;