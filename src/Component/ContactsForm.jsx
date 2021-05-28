import React from 'react';
import {connect} from 'react-redux';
import {addContact} from '../Action/ContactActions'


class ContactsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            country: "",
            password: ""
        };
    }
    
    handleOnChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        }
        )
    } ////handleOnChange takes the value of every change made on the input form
   

    handleSubmit = () =>{
        this.props.addNewContact(this.state)
    }



    render(){
        return(
            <div>
                <form>
                    <label>Username</label> <br></br>
                    <input type ="text" name ="username" onChange = {this.handleOnChange} value = {this.state.username}></input>  <br></br>

                    <label>Email</label> <br></br>
                    <input type ="text" name ="email" onChange = {this.handleOnChange} value = {this.state.email}></input> <br></br>

                    <label>Country</label> <br></br>
                    <input type ="text" name ="country" onChange = {this.handleOnChange} value = {this.state.country}></input><br></br>

                    <label>Password</label> <br></br>
                    <input type ="password" name ="password" onChange = {this.handleOnChange} value = {this.state.password}></input>
                    
                    <br></br> <br></br>

                    <button type="button" onClick = {this.handleSubmit}>Create User</button>
                </form>
            </div>
        )
    }
}

//conncects the store to ContactsForm, we are creating a prop called addNew user 
//which takes the addUser function
const mapDispatchToProps = {
    addNewContact : addContact
}


export default connect(null, mapDispatchToProps) (ContactsForm);