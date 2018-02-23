import React, { Component } from 'react';
import './noteGrid.css';
import styled from 'styled-components';
 const List = styled.ul`
 list-style:none;
 
 >li{
 display:inline-block;
 border-radius:50px;
 margin-right:10px;
 width:40px;
 height:40px;
 }
 }
 `


class NoteCrid extends Component {
    constructor (props){
        super(props);
        this.state = {
            color: 'white'};
        this.onClickUl= this.onClickUl.bind(this)
    };

    onClickUl(e){
        this.setState({color: ''})
        const child = e.target.parentNode.childNodes;
       for (var i=0;i<child.length;i++){
            if(child[i].classList.contains('activeLi')){
                child[i].classList.remove('activeLi')
            }
       }
        e.target.className += ' activeLi';
        const colorNote = getComputedStyle(e.target).backgroundColor
        this.setState({color: colorNote})
        console.log(this.state.color);
        this.props.onColorAdd(colorNote)

    }
    render() {
        return (
           <List>
               <li className='WhiteNote activeLi' onClick = {this.onClickUl}></li>
               <li className='GreenNote' onClick = {this.onClickUl}></li>
               <li className='OrangeNote' onClick = {this.onClickUl}></li>
               <li className='BlueNote' onClick = {this.onClickUl}></li>
           </List>
        );
    }
}

export default NoteCrid;