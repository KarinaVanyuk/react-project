import React, { Component } from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';


class NoteEdit extends Component {
    constructor(){
        super();
        this.state = {color:'white'}
    }
    addNotes(){
        if (this.noteText.value == 0){
            alert('Введите текст заметки')
        }else{
            const color = this.state.color;
            const title = this.noteLabel.value;
            const text = this.noteText.value;
            console.log(this.props)
            this.props.notes.onAddNote(title, text,color);
            console.log(this.props);
            this.noteLabel.value = '';
            this.noteText.value = '';
        }


    }
    clickColor(e){
        console.log(e.target)
        const masLi = e.target.parentNode.childNodes;
        console.log(masLi);
        for (var i = 0;i< masLi.length;i++){
            if(masLi[i].style.border != ''){
                masLi[i].style.border = ''
            }
        }
        e.target.style.border = '2px solid gray';
        this.setState({color:e.target.attributes.color.value})


    }
    render() {
        return (
            <Main>
            <Title placeholder='Enter titile' innerRef={(title)=>{this.noteLabel = title}}></Title>
            <Text placeholder='Enter text' innerRef={(text)=>{this.noteText = text}}></Text>
            <List>
                <li color ='#98FB98' onClick={this.clickColor.bind(this)}></li>
                <li color='#FFDAB9' onClick={this.clickColor.bind(this)}></li>
                <li color='#D3D3D3' onClick={this.clickColor.bind(this)}></li>
                <li color='#AFEEEE' onClick={this.clickColor.bind(this)}></li>
                <li color='#FFF0F5' onClick={this.clickColor.bind(this)}></li>
            </List>
                <input type = 'text'></input>
            <Button onClick = {this.addNotes.bind(this)} > Add </Button>
            </Main>

    );
    }
}
export default NoteEdit;;
const Main = styled.div`
position:relative;
    max-width: 400px;
    padding: 16px;
    margin: 16px auto;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 2px;
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
const Button = styled.button`    
    width:100px;
    position:absolute;
    bottom:40px;
    right:20px;
    
    border: 0 none;
    border-radius: 24px;
    padding: 10px 15px;
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
const Text = styled.textarea`
min-height:100px;
    width: 100%;
    resize: none;
      wrap:hard,
    margin: 5px;
    font-size: 14px;
    border: none;
    font-weight: 300;
      &:focus {
        outline: 0;
    }
`
const List = styled.ul`
 width:300px;
 list-style:none;
 display:inline-block;
  margin-top:0px;
  padding:10px;
 
 >li{
 display:inline-block;
 border-radius:50px;
 margin-right:10px;
 width:35px;
 height:35px;
 }
 >li:first-child{
 background-color:#98FB98;
 }
  >li:nth-child(2){
 background-color:#FFDAB9;
 }
   >li:nth-child(3){
 background-color: #D3D3D3;
 }
   >li:nth-child(4){
 background-color:#AFEEEE;
 }
   >li:nth-child(5){
 background-color:#FFF0F5;
 }
 }
 `