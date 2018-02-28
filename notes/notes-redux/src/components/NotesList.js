import React, { Component } from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import Masonry from 'react-masonry-component'
class NotesList extends Component {
    render() {
        console.log(this.props.state.notes)

        return (

            <WrapNote>
            <Masonry>
            {this.props.state.notes.map(({id,title,text,color,date})=>
            {return < NoteList
        key = {id}
        style = {
        {
            backgroundColor:color
        }
    }>
        <p> {title} < /p>
        < span > {text} < /span>
        < Time > {date} < /Time>

        < /NoteList>
    }
    )}

            </Masonry>
        </WrapNote>

    );
    }

}
export default NotesList;

const NoteList = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 150px;
    margin:5px;
    word-wrap: break-word;
    height: auto;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
    >p{
    margin-top:0;
    text-transform: uppercase;
    font-weight: bold;
    font-size:14px;
    margin-bottom:3px;
    }
    >span{
    display:block;
    }
`
const WrapNote = styled.div`
margin-top:10px;
width:100%;
`

const Time = styled.span`
color:green;
text-align:right;
font-size:10px;
`