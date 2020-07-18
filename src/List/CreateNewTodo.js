import React, {Component, useState} from "react";

class CreateNewTodo extends Component {
    constructor() {
        super();
        this.state = {
            nameValue: "",
            ageValue: ""
        };
        this.setNameValue = this.setNameValue.bind(this)
        this.setAgeValue = this.setAgeValue.bind(this)
        this.btnHandler = this.btnHandler.bind(this)
    }
    setNameValue(event){
        this.setState({nameValue: event.target.value})
    }
    setAgeValue(event){
        this.setState({ageValue: event.target.value})
    }
     btnHandler(event) {
        event.preventDefault()
        if (this.state.nameValue.trim() && this.state.ageValue.trim()){
            this.props.Add(this.state.nameValue,this.state.ageValue)
        }
        this.props.close()
    }
    render() {
    return(
        <div className="Modal">
            <div className="Modal-body">
                <button className="Quit" onClick={this.props.close}>X</button>
                <h1>Введите данные</h1>
                <form className="f" onSubmit={this.btnHandler}>
                <input placeholder="Имя" name={this.state.nameValue} onChange={this.setNameValue} required/>
                <input placeholder="Возраст" age={this.state.ageValue} onChange={this.setAgeValue} required/>
                    <button type="submit" className="btn">Add todo</button></form>
            </div>
        </div>
    )}
}


export default CreateNewTodo
/*<form className="f" onSubmit={btnHandler}>
           <input value={value} onChange={event => setValue(event.target.value)} className="inp"/>
           <button type="submit" className="btn">Add todo</button>
       </form>*/
