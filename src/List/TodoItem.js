import React, {useContext, useState} from "react";
import CallInput from "./CallInput";
import ShowRows from "./ShowRows";
const style = {
    li:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '/5rem',
        margin: '5px'

    },
    button:{
        align:'right'
    }
}
class TodoItem extends React.Component{
    constructor() {
        super();
        this.state = {
            isClickedName: true,
            isClickedAges: true
        }
        this.TextToInput = this.TextToInput.bind(this);
        this.InputToText = this.InputToText.bind(this);
        this.TextToInputAge = this.TextToInputAge.bind(this);
        this.InputToTextAge = this.InputToTextAge.bind(this);
    }

    TextToInput(){
        this.setState({
            isClickedName: false
        });
    }
    InputToText(){
        this.setState({
            isClickedName: true
        });

    }
    InputToTextAge(){
        this.setState({
            isClickedAges: true
        });

    }
    TextToInputAge(){
        this.setState({
            isClickedAges: false
        });
    }
    render() {
    return(
        <li style={style.li}><div className="rows">
            {this.state.isClickedName ?
                <div onClick={this.TextToInput}>
                    {this.props.todo.name}
                </div>
                : <CallInput  id={this.props.todo.id}
                              Change = {this.props.chName}
                              callText={this.InputToText}/>}
            {this.state.isClickedAges ?
                <div onClick={this.TextToInputAge}>
                    {this.props.todo.age}
                </div>
                : <CallInput  id={this.props.todo.id}
                              Change = {this.props.chAge}
                              callText={this.InputToTextAge}/>}
            <button onClick={()=>this.props.del(this.props.todo.id)}>X</button></div>
        </li>
    )}
}

export default TodoItem
/*onBlur={this.props.ch(this.props.todo.id,this.props.todo.name)}*/