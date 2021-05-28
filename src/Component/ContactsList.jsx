import React from 'react';
import { connect } from 'react-redux';
import ContactsItem from './ContactsItem';


class ContactsList extends React.Component{
    render(){
        console.log(this.props.contactsData)
        return(
            <div>
                {this.props.contactsData.map((contacts) => {
                    return <ContactsItem  contacts = {contacts}/>;
                })}
               
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
    contactsData: state.contacts
}
}

export default connect(mapStateToProps)(ContactsList);