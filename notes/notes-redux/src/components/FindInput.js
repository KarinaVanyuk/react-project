import React, { Component } from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import Masonry from 'react-masonry-component'
class findInput extends Component {
    findNote(e){
        this.props.notes.onFindNote(e.target.value)

    }
    render() {
        return (
            <SearchInput placeholder = "Search..." onChange = {this.findNote.bind(this)} ></SearchInput>
    );
    }

}
export default findInput;

let SearchInput = styled.input`

    border: none;
    width:200px;
    max-width: 400px;
    padding: 10px;
    margin-top:10px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 2px;
    `