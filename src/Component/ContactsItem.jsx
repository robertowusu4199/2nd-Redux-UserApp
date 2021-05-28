function ContactsItem(props){
    return(
        <div className = "row">
            <div className = "col-md-2">{props.contacts.username}</div>
            <div className = "col-md-4">{props.contacts.email}</div>
            <div className = "col-md-2">{props.contacts.country}</div>
            <div>
                <button className = "btn btn-success">Edit</button>
                <button className = "btn btn-danger">Delete</button>
            </div>

        </div>
    )
}

export default ContactsItem;