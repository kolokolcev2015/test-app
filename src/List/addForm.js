import React, {Component} from 'react';
import Modal from './Modal.css'
import CreateNewTodo from "./CreateNewTodo";
class AddForm extends Component {
    constructor() {
        super();
        this.state ={
            isOpen: false
        }
        this.ChangeOnOpenStatus = this.ChangeOnOpenStatus.bind(this);
        this.ChangeOnClosedStatus = this.ChangeOnClosedStatus.bind(this);

    }
    ChangeOnOpenStatus(){
    this.setState({
            isOpen: true
    });

}
    ChangeOnClosedStatus(){
        this.setState({
            isOpen: false
        });

    }

    render() {
        return (
            <React.Fragment>
                <button className="opnModal" onClick={this.ChangeOnOpenStatus}>Добавить</button>
                {
                    this.state.isOpen && <CreateNewTodo Add={this.props.AddTodo} close={this.ChangeOnClosedStatus}/>
                }
            </React.Fragment>
        );
    }
}

export default AddForm;