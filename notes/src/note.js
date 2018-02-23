import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const NoteList = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 250px;
    height: auto;
    float: left;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
    >p{
    text-transform: uppercase;
    font-weight: bold;
    }
    >span{
    display:block;
    }
`

class Note extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {title:this.props.title,
            text:this.props.text,
            color: this.props.color,
            date: this.props.date}
    }
    render() {
        const color = this.state.color;
        console.log(color)
        const title = this. state.title;
        const text = this. state.text;
        const date = this.state.date;
        console.log(date)
        return (
            <NoteList style={{backgroundColor: color}} >
                <p>{title}</p>
                <span>{text}</span>
                <span>{date}</span>
            </NoteList>

        );
    }
}

export default Note;
